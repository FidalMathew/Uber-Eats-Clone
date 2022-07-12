import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'

const home = () => {
    return (
        <SafeAreaView style={{ paddingTop: 40 }}>
            <HeaderTabs />
        </SafeAreaView>
    )
}

export default home