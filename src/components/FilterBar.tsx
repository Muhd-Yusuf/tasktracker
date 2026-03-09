import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Filter } from "../types/task";

interface Props {
  current: Filter;
  onChange: (filter: Filter) => void;
}

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "completed", label: "Done" },
];

export function FilterBar({ current, onChange }: Props) {
  return (
    <View style={styles.container}>
      {filters.map(({ key, label }) => (
        <TouchableOpacity
          key={key}
          style={[styles.tab, current === key && styles.tabActive]}
          onPress={() => onChange(key)}
          activeOpacity={0.75}
        >
          <Text style={[styles.tabText, current === key && styles.tabTextActive]}>
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "#EEF2FF",
    borderRadius: 14,
    padding: 4,
    gap: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 11,
  },
  tabActive: {
    backgroundColor: "#6366F1",
    shadowColor: "#6366F1",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 3,
  },
  tabText: {
    fontSize: 13,
    color: "#6366F1",
    fontWeight: "600",
  },
  tabTextActive: {
    color: "#FFFFFF",
  },
});
