import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Task } from "../types/task";

interface Props {
  task: Task;
  onToggle: (id: string) => void;
}

export function TaskItem({ task, onToggle }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onToggle(task.id)}
      activeOpacity={0.75}
    >
      <View style={[styles.checkbox, task.completed && styles.checkboxDone]}>
        {task.completed && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={[styles.title, task.completed && styles.titleDone]}>
        {task.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginBottom: 10,
    shadowColor: "#64748B",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 2,
  },
  checkbox: {
    width: 26,
    height: 26,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#CBD5E1",
    marginRight: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxDone: {
    backgroundColor: "#10B981",
    borderColor: "#10B981",
  },
  checkmark: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
  title: {
    fontSize: 15,
    color: "#1E293B",
    flex: 1,
    lineHeight: 22,
  },
  titleDone: {
    textDecorationLine: "line-through",
    color: "#94A3B8",
  },
});
