import { View, Text, Image } from 'react-native'
import React from 'react'


const About = (props) => {

    const { image, name, rating } = props.route.params;

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={name} />
            <RestaurantDescription rating={rating} />
        </View>
    )
}

export default About

const RestaurantImage = (props) => (
    <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
)

const RestaurantTitle = (props) => (
    <Text
        style={{
            fontSize: 29,
            fontWeight: "600",
            marginTop: 10,
            marginHorizontal: 15
        }}
    >{props.title}</Text>
)

const RestaurantDescription = (props) => (

    <View style={{
        flexDirection: "row"
    }}>
        <Text
            style={{
                fontSize: 15.5,
                fontWeight: "400",
                marginTop: 10,
                marginHorizontal: 15,
                flexDirection: "column",
            }}
        > Count the memories, not the calories</Text>
        <RestaurantRating rating={props.rating} />
    </View>);


const RestaurantRating = (props) => (
    <View style={{
        backgroundColor: "#ffb405",
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 15,

    }}>
        <Text style={{
            color: "white"
        }}>{props.rating}</Text>
    </View>
)