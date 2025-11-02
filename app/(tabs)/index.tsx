import React, { useCallback, useMemo, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Image } from 'expo-image';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { TodoItem, type Todo } from '@/components/TodoItem';
import { NewTodoModal } from '@/components/NewTodoModal';
import { Logos, Colors } from '@/constants/theme';

export default function HomeScreen() {
  const [todos, setTodos] = useState<Todo[]>(() => [
    { id: '1', text: 'Buy textbooks' },
    { id: '2', text: 'Finish week 2 assignment' },
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  const addTodo = useCallback((text: string) => {
    const newItem: Todo = { id: Date.now().toString(), text };
    setTodos((t) => [newItem, ...t]);
  }, []);

  const deleteTodo = useCallback((id: string) => {
    Alert.alert('Delete', 'Delete this item?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => setTodos((t) => t.filter((x) => x.id !== id)),
      },
    ]);
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: Todo }) => <TodoItem item={item} onDelete={deleteTodo} />,
    [deleteTodo]
  );

  const keyExtractor = useCallback((item: Todo) => item.id, []);

  const emptyComponent = useMemo(
    () => (
      <ThemedView style={styles.emptyContainer}>
        <ThemedText>No tasks yet — add your first to-do.</ThemedText>
      </ThemedView>
    ),
    []
  );

  return (
    <ThemedView style={styles.page}>
      <ThemedView style={styles.header}>
        <Image source={Logos.InterlockingOU} style={styles.logo} />
        <ThemedText type="title">My To‑Do List</ThemedText>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addButton}>
          <ThemedText type="defaultSemiBold" style={{ color: Colors.light.textOnPrimary }}>
            + Add
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.list}
        ListEmptyComponent={emptyComponent}
      />

      <NewTodoModal visible={modalVisible} onClose={() => setModalVisible(false)} onAdd={addTodo} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  addButton: {
    marginLeft: 'auto',
    backgroundColor: Colors.light.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  list: {
    paddingBottom: 48,
  },
  emptyContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
});
