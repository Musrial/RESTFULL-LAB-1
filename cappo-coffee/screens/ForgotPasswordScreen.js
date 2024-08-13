import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import api from "../api";

const TextInputCustom = ({ name, color, secureTextEntry, onChangeText, value }) => (
  <TextInput
    placeholder={` ${name}`}
    secureTextEntry={secureTextEntry}
    style={{
      borderColor: 'gray',
      borderWidth: 1, 
      borderRadius: 10,
      width: '90%',
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

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await api.post('/auth/reset-password', { email, newPassword });
      console.log(response.data);
      navigation.replace('Login')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <View style={{ flex: 1, justifyContent: 'flex-start', width: '100%', top: 35 }}>
        <Text style={{ alignItems: 'flex-start', paddingLeft: 14, fontSize: 34, color: '#222222', fontFamily: 'MetroBold' }}>Lupa Kata Sandi</Text>
        <Text style={{ top: 20, paddingHorizontal: 20, fontSize: 16, width: '100%', fontFamily: 'MetroLight' }}>Masukkan alamat email, dan kata sandi baru Anda.</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', minHeight: 200, width: '100%', bottom:100}}>
        <TextInputCustom name='Email' color='#666666' onChangeText={setEmail} value={email} />
        <TextInputCustom name='Kata Sandi Baru' color='#666666' secureTextEntry={true} onChangeText={setNewPassword} value={newPassword} />
      </View>

      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', width: '100%', bottom: 230 }}>
        <ButtonCustom color='#444444' text='Kirim' onPress={handleResetPassword} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ bottom:200, alignSelf:'center' }}>
          <Text style={{ color: '#444444', fontSize: 16, fontFamily: 'MetroMedium' }}>Bukan akun anda?</Text>
        </TouchableOpacity>
    </View>
  );
}

export default ForgotPasswordScreen;
