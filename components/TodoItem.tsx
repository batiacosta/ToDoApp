import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';

export type Todo = {
  id: string;
  text: string;
};

export function TodoItem({ item, onDelete }: { item: Todo; onDelete: (id: string) => void }) {
  const accent = useThemeColor({}, 'primary');

  return (
    <ThemedView style={[styles.row, { borderLeftColor: accent }]}>
      <View style={styles.textContainer}>
        <ThemedText>{item.text}</ThemedText>
      </View>
      <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.deleteButton}>
        <ThemedText style={styles.deleteText}>Delete</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    borderLeftWidth: 6,
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    paddingRight: 8,
  },
  deleteButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  deleteText: {
    color: '#b00020',
    fontWeight: '600',
  },
});
