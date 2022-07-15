import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const foods = [
    {
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2017/02/white-sauce-pasta-recipe-9-500x375.jpg",
        title: "White Sause Pasta",
        description: "Italian Pasta with white sause and cheese.",
        price: " $ 13.50"
    }, {

        image: "https://b.zmtcdn.com/data/pictures/chains/6/18273566/393c42c7e71a853a7b27c164e6682e09_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        title: "Crusty Veg Burger",
        description: " Veg Burger with Potato fillings.",
        price: " $ 15.00"

    },
    {

        image: "https://c.ndtvimg.com/2020-12/gsb6apq_biryani_625x300_23_December_20.jpg",
        title: "Chicken Dum Biriyani",
        description: "Indian | Specials .",
        price: " $ 10.90"

    },
    {

        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/1/10/0/DV2802_Nepali-Momo_s4x3.jpg.rend.hgtvcom.616.462.suffix/1515644556794.jpeg",
        title: "Nepali Momo",
        description: "Nepali | Steam/Fried momos dipped in mayonesse.",
        price: " $ 8.33"

    }
]


const styles = StyleSheet.create({
    MenuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: '600'
    }

})

const MenuItems = () => {
    return (
        <ScrollView >
            {
                foods.map((food, index) => (
                    <View key={index}>
                        <View style={styles.MenuItemStyle}>
                            <FoodInfo food={food} />
                            <FoodImage food={food} />
                        </View>
                        <Divider width={0.5} orientation="vertical" />
                    </View>))
            }
        </ScrollView>
    )
}

export default MenuItems


const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props) => (
    <View>
        <Image source={{ uri: props.food.image }}
            style={{
                width: 100,
                height: 100,
                borderRadius: 8
            }}
        />
    </View>
)