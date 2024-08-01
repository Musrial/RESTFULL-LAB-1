# RESTFULL-EXPO-NESTJS-PRISMA

## Dibuat oleh:
### Musrial Arif Abadi || 105841107221 || Informatika 2021-C


# Membuat Aplikasi Sederhana Dengan Expo dan NestJS Prisma

## Tahap 1: Persiapan Lingkungan Pengembangan

### 1. Install Node.js: Pastikan Node.js sudah terinstall di komputer Anda. Jika belum, unduh dan install dari https://nodejs.org/id

### 2. Install Expo CLI:
    npm install -g expo-cli

### 3. Install NestJS CLI:
    npm install -g @nestjs/cli

### 4. Install Prisma CLIL
    npm install -g prisma

## Tahap 2: Membuat Aplikasi Front-End dengan Expo

### 1. Buat Proyek Expo
    expo init cappo-coffee
    cd cappo-coffee

    Install Dependensi
    npm install @react-navigation/native
    npm install @react-navigation/stack
    npm install react-native-screens react-native-safe-area-context
    npm install @expo/vector-icons

### 2. Mulai Aplikasi Expo:
    expo start

### 3. Struktur Proyek
- App.js akan menjadi titik masuk aplikasi Anda. Anda dapat membuat folder `screens` untuk layar yang berbeda seperti Home, Menu, Order, dll.

Contoh `App.js`

    import React from 'react'
    import { NavigationContainer } from @react-navigation/native
    import { createStackNavigator } from @react-navigation/stack
    import HomeScreen from './screens/HomeScreens.js';
    import MenuScreen from './screens/MenuScreens.js';

    const Stack = createStackNavigator() {
        return (
            <NavigationContainer>
                    <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreens}>
                    <Stack.Screen name="Menu" component={MenuScreens}>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }


## Tahap 3: Membuat Back-End dengan NestJS dan Prisma

### 1. Buat Proyek NestJS:
    nest new cappo-coffee-backend
    cd cappo-coffee-backend

### 2. 