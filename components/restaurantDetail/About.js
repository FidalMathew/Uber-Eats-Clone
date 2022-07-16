import { View, Text, Image } from 'react-native'
import React from 'react'


const image = "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80";
const title = "Farmhouse Kitchen Thai Cuisine";
const description = "Thai | Comfort Food . $$ 🍲  4.5 ⭐ (290+)";


const About = () => {
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle title={title} />
            <RestaurantDescription description={description} />
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
    <Text
        style={{
            fontSize: 15.5,
            fontWeight: "400",
            marginTop: 10,
            marginHorizontal: 15
        }}
    >{props.description}</Text>
)
