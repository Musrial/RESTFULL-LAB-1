import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import api from '../src/api';

const ForgotPasswordScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await api.post('/auth/forgot-password', data);
      Alert.alert('Success', 'Password reset successfully');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Failed to reset password');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Forgot Password</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Email"
          />
        )}
        name="email"
        rules={{ required: true }}
      />
      {errors.email && <Text>This is required.</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="New Password"
            secureTextEntry
          />
        )}
        name="newPassword"
        rules={{ required: true }}
      />
      {errors.newPassword && <Text>This is required.</Text>}

      <Button title="Reset Password" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default ForgotPasswordScreen;
