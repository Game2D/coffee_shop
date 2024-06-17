import React, { useState } from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { icons, images } from '../../constants';
import { categories, cities, coffees } from '../../constants/text';
import CoffeeCard from '../../components/CoffeeCard';

const Home = ({ navigation }) => {
  const [selected, setSelected] = useState(categories[0].title);
  const [search, setSearch] = useState('');

  const match = (coffee: any, type: any) => {
    if (type === selected.toLowerCase() && type === 'all coffee') return true
    else if (type === search.toLowerCase() && type === '') return true;

    return coffee.match(type);
  }

  const hasCategory = () => {
    if (selected === 'All Coffee' && search === '') return true;

    for (let i = 0; i < coffees.length; i++) {
        if (match(coffees[i].title.toLowerCase(), selected.toLowerCase()) && match(coffees[i].title.toLowerCase(), search.toLowerCase())) {
            return true;
        }
    }

    return false;
  }

  return (
    <SafeAreaView>
        <ScrollView className="h-full bg-[#F9F9F9]">
        <View className="h-full bg-[#F9F9F9]">
            <View className="h-full max-h-[300px] w-full absolute bg-black" />

            <View className="w-full h-full p-8">
                <Text className="font-sregular text-[14px] text-gray">Location</Text>

                <Dropdown
                    data={cities}
                    labelField="label"
                    valueField="value"
                    activeColor='#ccc'
                    onChange={item => {}}
                    containerStyle={{
                        borderRadius: 10,
                    }}
                    itemContainerStyle={{
                        borderRadius: 10,
                    }}
                    itemTextStyle={{
                        color: '#000',
                        fontFamily: 'Sora-SemiBold',
                        fontSize: 16
                    }}
                    placeholderStyle={{
                        color: '#fff',
                        fontFamily: 'Sora-SemiBold',
                        fontSize: 16
                    }}
                    selectedTextStyle={{
                        color: '#fff',
                        fontFamily: 'Sora-SemiBold',
                        fontSize: 16
                    }}
                    style={{
                        width: 170,
                    }}
                    placeholder={cities[0].label}
                    renderRightIcon={() => (
                        <Image 
                            source={icons.down}
                            tintColor='#fff'
                            className="w-3 h-3"
                        />
                    )}
                />

                <View className="flex flex-row gap-4 mt-8">
                    <View className="flex-1 flex flex-row items-center bg-[#3A3A3A] rounded-xl">
                        <Image 
                            source={icons.search}
                            tintColor='#fff'
                            className="w-6 h-6 m-5"
                        />

                        <TextInput 
                            onChangeText={query => setSearch(query)}
                            placeholder='Search coffee'
                            className="flex-1 text-white placeholder:text-gray text-[17px] font-sregular h-[60px]"
                        />
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        className="bg-brown-300 rounded-xl p-6"
                    >
                        <Image 
                            source={icons.filter}
                            tintColor='#fff'
                            className="w-7 h-7"
                        />
                    </TouchableOpacity>
                </View>

                <View className="rounded-xl overflow-hidden w-full h-auto mt-12">
                    <Image 
                        source={images.banner}
                        className="absolute w-full h-full"
                        resizeMode='cover'
                    />

                    <View className="px-8 py-6">
                        <Text className="text-white text-[17px] bg-[#ED5151] w-[70px] text-center p-1 font-ssemibold rounded-xl">Promo</Text>

                        <View className="mt-4 relative">
                            <Text className="font-ssemibold text-[32px] text-white z-20">Buy one get</Text>
                            <View className="absolute w-[200px] h-[25px] bg-black bottom-0" />
                        </View>

                        <View className="relative">
                            <Text className=" font-ssemibold text-[32px] text-white z-20">one FREE</Text>
                            <View className="absolute w-[150px] h-[25px] bg-black bottom-0" />
                        </View>
                    </View>
                </View>
                
                <FlatList 
                    className="mt-10 min-h-[50px]"
                    data={categories}
                    keyExtractor={item => item.id}
                    renderItem={(category: any) => (
                        <TouchableOpacity
                            key={category.id}
                            activeOpacity={0.8}
                            onPress={() => setSelected(category.item.title)}
                            className={`${selected === category.item.title ? 'bg-brown-300' : 'bg-[#EDEDED]'} p-3 rounded-lg ${category.index === categories.length - 1 ? '' : 'mr-4'}`}
                        >
                            <Text className={`${selected === category.item.title ? 'text-white' : 'text-[#000]'} font-sregular text-[16px]`}>{category.item.title}</Text>
                        </TouchableOpacity>
                    )}
                    horizontal
                />

                <View className="flex flex-row justify-between mt-10" style={{ flexWrap: 'wrap', rowGap: 20 }}>
                    {!hasCategory() && (
                        <Text className="text-[#000] text-[16px] font-ssemibold">No coffees with this filter found!</Text>
                    )}

                    {coffees.map((coffee, index) => {
                        if (!coffee.title.toLowerCase().match(search.toLowerCase())) return null;

                        if (selected !== 'All Coffee' && !coffee.title.toLowerCase().match(selected.toLowerCase())) return null;

                        return (
                            <CoffeeCard 
                                key={index}
                                description={coffee.desc}
                                {...coffee}
                                onPress={() => navigation.navigate("Detail", { id: index + 1 })}
                            />
                        )
                    })}          
                </View>
            </View>
        </View>
        </ScrollView>

        <StatusBar backgroundColor='#313131' />
    </SafeAreaView>
  )
}

export default Home