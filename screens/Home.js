import { View, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems from '../components/home/RestaurantItems'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/home/BottomTabs'

const home = () => {

    const [restaurantData, setRestaurantData] = useState([])
    const [city, setCity] = useState("")

    const getRestaurants = () => {
        setRestaurantData(
            [
                {
                    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
                    name: "Farmhouse Kitchen Thai Cuisine",
                    rating: "4.5"
                },
                {
                    image: "https://www.fabhotels.com/blog/wp-content/uploads/2018/10/1000x650-29.jpg",
                    name: "Great India Palace",
                    rating: "4.7"
                },
                {
                    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
                    name: "Khana Khazana",
                    rating: "4.3"
                }
            ]
        )
    }

    useEffect(() => {
        getRestaurants();
    }, [city])


    return (
        <View style={{ marginTop: 20, backgroundColor: "#eee", flex: 1 }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs />
                <SearchBar setCity={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />
            </ScrollView>

            <Divider width={1} />
            <BottomTabs />
        </View>
    )
}

export default home