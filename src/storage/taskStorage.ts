import AsyncStorage from "@react-native-async-storage/async-storage";
import { Task } from "../types/task";

const STORAGE_KEY = "tasktracker_tasks";

export async function loadTasks(): Promise<Task[]> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  return JSON.parse(raw);
}

export async function saveTasks(tasks: Task[]): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
