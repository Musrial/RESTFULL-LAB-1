import { useFonts } from "expo-font";

const useCustomFonts = () => {
    return useFonts({
        'MetroBold' : require('../assets/fonts/Metropolis-Bold.otf'),
        'MetroBlack' : require('../assets/fonts/Metropolis-Black.otf'),
        'MetroLight' : require('../assets/fonts/Metropolis-Light.otf'),
        'MetroMedium' : require('../assets/fonts/Metropolis-Medium.otf'),
        'MetroSemiBold' : require('../assets/fonts/Metropolis-SemiBold.otf'),
    });
}

export default useCustomFonts;