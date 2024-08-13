import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import useCustomFonts from "../styles/Fonts";

const TextInputCustom = ({ name, color, secureTextEntry, onChangeText, value }) => (
  <TextInput
    placeholder={` ${name}`}
    secureTextEntry={secureTextEntry}
    style={{
      borderColor: 'gray',
      width: '90%',
      borderWidth: 1, 
      borderRadius: 10,
      height: 64,
      marginBottom: 10,
      paddingHorizontal: 10,
      color: color,
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowRadius: 1,
      shadowOpacity: 0.2,
      fontFamily: 'MetroLight',
      fontSize: 15,
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

const LoginScreen = ({ navigation }) => {
  const [fontLoaded] = useCustomFonts('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
      navigation.navigate('Main')
  };

  if (!fontLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    )
  } 

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

        <TextInputCustom name='Masukkan email Anda' color='#666666' onChangeText={setEmail} value={email} />
        <TextInputCustom name='Masukkan kata sandi Anda' color='#666666' secureTextEntry={true} onChangeText={setPassword} value={password} />

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={{alignSelf:'flex-end', right:20}}>
          <Text style={{ color: '#444444', fontSize: 16, fontFamily: 'MetroMedium', marginBottom: 30 }}>Lupa kata sandi?</Text>
        </TouchableOpacity>

        <ButtonCustom color='#444444' text='Login' onPress={handleLogin} />

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{ marginTop: 20 }}>
          <Text style={{ color: '#444444', fontSize: 16, fontFamily: 'MetroMedium' }}>Belum punya akun?</Text>
          <ButtonCustom color='#F5F5F5' text='Daftar' onPress={() => navigation.navigate('SignUp')} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default LoginScreen;
