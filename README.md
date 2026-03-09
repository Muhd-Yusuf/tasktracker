# Task Tracker

A simple task management app built with React Native, Expo, and TypeScript.

## Features

- Create, view, and manage tasks
- Mark tasks as complete or incomplete
- Filter by All / Active / Completed
- Local persistence using AsyncStorage
- Empty task validation

## Setup

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go (Android) or the Camera app (iOS), or press `i` / `a` to open in a simulator.

## Project Structure

```
src/
  components/    UI components (TaskInput, TaskItem, FilterBar)
  hooks/         Custom hook for task state management
  storage/       AsyncStorage persistence layer
  types/         TypeScript interfaces
```

## Libraries

- **@react-native-async-storage/async-storage** — Lightweight key-value storage for persisting tasks across app restarts. It's the standard recommended solution for simple local persistence in React Native.

## Improvements with More Time

- Delete and edit tasks
- Swipe-to-complete gesture
- Task categories or priority levels
- Search functionality
- Unit and integration tests
- Animations for adding/removing tasks
