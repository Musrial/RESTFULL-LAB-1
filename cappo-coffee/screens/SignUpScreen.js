import React, { useState } from "react";
import { Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import api from "../api";

const TextInputCustom = ({ name, color, secureTextEntry, onChangeText, value }) => (
  <TextInput
    placeholder={name}
    secureTextEntry={secureTextEntry}
    style={{
      borderColor: 'gray',
      borderWidth: 1, 
      borderRadius: 10,
      height: 50,
      marginBottom: 10,
      paddingHorizontal: 15,
      color: color,
      backgroundColor: 'white',
      width: '90%',
      fontSize: 16,
      fontFamily: 'MetroLight',
      minHeight:60
    }}
    onChangeText={onChangeText}
    value={value}
  />
);

const ButtonCustom = ({ color, text, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ width: '90%', alignItems: 'center', marginBottom: 15 }}>
    <View style={{
      backgroundColor: color,
      width: '100%',
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'black',
      shadowRadius: 1,
      shadowOpacity: 0.2,
      elevation: 3,
      marginTop:20
    }}>
      <Text style={{
        textAlign: 'center',
        fontFamily: 'MetroBold',
        letterSpacing: 1,
        fontSize: 15,
        color: 'white',
      }}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await api.post('/auth/register', { name, email, password });
      console.log(response.data);
      navigation.navigate('Login')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <View style={{
            width: 80,
            height: 80,
            backgroundColor: '#444444',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{ color: 'white', fontSize: 40 }}>☕</Text>
          </View>
          <Text style={{ fontSize: 24, color: '#444444', fontFamily: 'MetroBold', marginTop: 10 }}>Cappo Coffee</Text>
        </View>

        <TextInputCustom name='Masukkan nama Anda' color='#666666' onChangeText={setName} value={name} />
        <TextInputCustom name='Masukkan email Anda' color='#666666' onChangeText={setEmail} value={email} />
        <TextInputCustom name='Masukkan kata sandi Anda' color='#666666' secureTextEntry={true} onChangeText={setPassword} value={password} />

        <ButtonCustom color='#444444' text='Sign Up' onPress={handleSignUp}/>

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginTop: 20 }}>
          <Text style={{ color: '#444444', fontSize: 16, fontFamily: 'MetroMedium' }}>Sudah punya akun?</Text>
          <ButtonCustom color='#F5F5F5' text='Login' onPress={() => navigation.navigate('Login')} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default SignUpScreen;
