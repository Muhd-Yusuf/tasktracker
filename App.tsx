import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TaskInput } from "./src/components/TaskInput";
import { TaskItem } from "./src/components/TaskItem";
import { FilterBar } from "./src/components/FilterBar";
import { useTasks } from "./src/hooks/useTasks";

export default function App() {
  const { tasks, filter, setFilter, addTask, toggleTask, loading, activeCount } = useTasks();

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#6366F1" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Task Tracker</Text>
          <Text style={styles.subheading}>
            {activeCount === 0 ? "All caught up!" : `${activeCount} remaining`}
          </Text>
        </View>
        <TaskInput onAdd={addTask} />
        <FilterBar current={filter} onChange={setFilter} />
        {tasks.length === 0 ? (
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>
              {filter === "completed" ? "✓" : "◯"}
            </Text>
            <Text style={styles.emptyTitle}>
              {filter === "all"
                ? "No tasks yet"
                : filter === "active"
                ? "Nothing active"
                : "Nothing completed"}
            </Text>
            <Text style={styles.emptySubtext}>
              {filter === "all" ? "Add your first task above." : ""}
            </Text>
          </View>
        ) : (
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TaskItem task={item} onToggle={toggleTask} />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.list}
          />
        )}
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  header: {
    marginBottom: 24,
  },
  heading: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1E293B",
    letterSpacing: -0.5,
  },
  subheading: {
    fontSize: 14,
    color: "#94A3B8",
    marginTop: 4,
    fontWeight: "500",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F7FA",
  },
  list: {
    paddingBottom: 24,
  },
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 60,
  },
  emptyIcon: {
    fontSize: 44,
    color: "#CBD5E1",
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#94A3B8",
  },
  emptySubtext: {
    fontSize: 14,
    color: "#CBD5E1",
    marginTop: 4,
  },
});
