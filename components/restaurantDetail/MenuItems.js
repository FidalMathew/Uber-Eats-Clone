import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { foods } from './MenuArr'
import BouncyCheckbox from 'react-native-bouncy-checkbox'



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
                            <BouncyCheckbox
                                iconStyle={{
                                    borderRadius: 0,
                                    borderColor: "lightgreen"
                                }}
                                fillColor="green"
                            />
                            <FoodInfo food={food} />
                            <FoodImage food={food} />
                        </View>
                        <Divider width={0.5} orientation="vertical"
                            style={{ marginHorizontal: 20 }} />
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