import { Button, KeyboardAvoidingView, Text, TextInput, View } from 'react-native';
import { Freeze } from 'react-freeze';
import { useRef, useState } from 'react';

export default function App() {
  const inputRef = useRef<TextInput>(null);
  const [isFrozen, setIsFrozen] = useState(false);

  return (
    <>
      <TextInput style={{ height: 100 }} ref={inputRef} />
      <Button title="Show Keyboard" onPress={() => inputRef.current?.focus()} />
      <Button title="Freeze" onPress={() => setIsFrozen(true)} />
      <Button title="Hide Keyboard" onPress={() => inputRef.current?.blur()} />
      <Button title="Unfreeze" onPress={() => setIsFrozen(false)} />

      <Freeze freeze={isFrozen}>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <View style={{ backgroundColor: '#909090', flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
            <Text>Test</Text>
            <Text></Text>
          </View>
        </KeyboardAvoidingView>
      </Freeze>
    </>
  );
}
