import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    axios.post('http://localhost:3000/auth/login', data)
      .then(response => {
        // Handle success (e.g., navigate to home screen)
        console.log(response.data);
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
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
            placeholder="Password"
            secureTextEntry
          />
        )}
        name="password"
        rules={{ required: true }}
      />
      {errors.password && <Text>This is required.</Text>}
      
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
      <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
      <Button title="Forgot Password?" onPress={() => navigation.navigate('ForgotPassword')} />
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

export default LoginScreen;
