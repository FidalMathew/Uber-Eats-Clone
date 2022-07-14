import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
const SearchBar = ({ setCity }) => {

    const [search, setSearch] = useState("")

    return (
        <View style={{
            marginTop: 10,
            flexDirection: "row",
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            alignItems: "center",
            padding: 8
        }}>
            <View style={{ marginLeft: 10 }}>
                <Ionicons name='location-sharp' size={24} />
            </View>
            <View style={{ flex: 1 }}>
                <TextInput placeholder='Search' onChangeText={(text) => setSearch(text)} />
            </View>
            <TouchableOpacity onPress={() => setCity(search)}  >
                <View
                    style={{
                        flexDirection: "row",
                        marginRight: 8,
                        backgroundColor: "white",
                        padding: 9,
                        borderRadius: 30,
                        alignItems: "center"
                    }}>
                    <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
                    <Text>Search</Text>
                </View>
            </TouchableOpacity>
        </View >
    )
}

export default SearchBar