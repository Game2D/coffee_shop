import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { images } from '../constants';

const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaView>
        <View className="flex items-center h-full bg-[#000]">
          <Image 
            source={images.onboarding}
            className="z-10 w-full"
            resizeMode='cover'
          />

          <Image 
            source={images.shadowcontainer}
            className="z-20 w-full -mt-20"
            resizeMode='cover'
          /> 

          <View className="z-40 absolute bottom-20 flex items-center w-full px-8">
            <Text className="font-ssemibold text-white text-[32px] text-center">Fall in Love with Coffee in Blissful Delight!</Text>

            <Text className="text-gray font-sregular text-[14px] text-center mt-2">Welcome to our cozy coffee corner, where every cup is a delightful for you.</Text>

            <TouchableOpacity 
                activeOpacity={0.8}
                className="flex items-center bg-brown-300 p-6 w-full rounded-2xl mt-8"
                onPress={() => navigation.navigate("Tabs")}
            >
              <Text className="text-[18px] font-ssemibold text-white">Get Started</Text>
            </TouchableOpacity>
          </View>

          <StatusBar barStyle='light-content' backgroundColor='#000' />
        </View>
    </SafeAreaView>
  )
}

export default Onboarding