import { View, Text } from 'react-native'
import React from 'react'
import About from '../components/restaurantDetail/About'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import MenuItems from '../components/restaurantDetail/MenuItems'

const RestaurantDetail = () => {
    return (
        <View style={{ flex: 1 }}>
            <About />
            <Divider width={1.8} style={{ marginVertical: 20 }} />
            <MenuItems />
        </View>
    )
}

export default RestaurantDetail