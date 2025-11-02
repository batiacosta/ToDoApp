import React, { useState } from 'react';
import { Modal, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';
import { Colors } from '@/constants/theme';

export function NewTodoModal({
  visible,
  onClose,
  onAdd,
}: {
  visible: boolean;
  onClose: () => void;
  onAdd: (text: string) => void;
}) {
  const [text, setText] = useState('');

  function handleAdd() {
    if (text.trim().length === 0) return;
    onAdd(text.trim());
    setText('');
    onClose();
  }

  return (
    <Modal animationType="slide" visible={visible} transparent onRequestClose={onClose}>
      <ThemedView style={styles.center}>
        <ThemedView style={styles.container}>
          <ThemedText type="title">New To-do</ThemedText>
          <TextInput
            placeholder="Enter a task"
            value={text}
            onChangeText={setText}
            style={styles.input}
            placeholderTextColor={Colors.light.icon}
          />

          <View style={styles.actions}>
            <TouchableOpacity onPress={onClose} style={[styles.button, styles.cancel]}>
              <ThemedText>Cancel</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAdd} style={[styles.button, styles.add]}>
              <ThemedText type="defaultSemiBold" style={{ color: Colors.light.textOnPrimary }}>
                Add
              </ThemedText>
            </TouchableOpacity>
          </View>
        </ThemedView>
      </ThemedView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  container: {
    width: '100%',
    maxWidth: 520,
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  cancel: {},
  add: {
    backgroundColor: Colors.light.primary,
  },
});
