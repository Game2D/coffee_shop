import React from 'react'
import Home from './Home'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, ImageSourcePropType, StatusBar, View } from 'react-native';
import { icons } from '../../constants';
import Like from './Like';
import Shop from './Shop';
import Notify from './Notify';

const Tab = createBottomTabNavigator();

type TabIconProps = {
    focused: boolean,
    icon: ImageSourcePropType,
    color: string,
}

const TabIcon = ({ focused, icon, color }: TabIconProps) => (
    <View className="items-center justify-center gap-2">
        <Image 
            source={icon}
            resizeMode='contain'
            tintColor={color}
            className="w-6 h-6"
        />

        <View className={`absolute top-8 w-[10px] h-[5px] ${focused === true ? 'bg-brown-300' : ''} rounded-full`} />
    </View>
)

const Layout = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#C67C4E',
            tabBarInactiveTintColor: '#A2A2A2',
            tabBarStyle: {
                shadowOpacity: 0,
                shadowColor: '#ffffff',
                shadowRadius: 0,
                height: 80,
                borderTopWidth: 0,
                position: 'static',
            }
        }}
    >
        <Tab.Screen 
            name="Home" 
            options={{
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <TabIcon 
                        focused={focused} 
                        icon={icons.home}
                        color={color}
                    />
                )
            }}
            component={Home}
        />
        <Tab.Screen 
            name="Like" 
            options={{
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <TabIcon 
                        focused={focused} 
                        icon={icons.like}
                        color={color}
                    />
                )
            }}
            component={Like}
        />
        <Tab.Screen 
            name="Shop" 
            options={{
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <TabIcon 
                        focused={focused} 
                        icon={icons.shop}
                        color={color}
                    />
                )
            }}
            component={Shop}
        />
        <Tab.Screen 
            name="Notify" 
            options={{
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => (
                    <TabIcon 
                        focused={focused} 
                        icon={icons.bell}
                        color={color}
                    />
                )
            }}
            component={Notify}
        />
    </Tab.Navigator>
  )
}

export default Layout