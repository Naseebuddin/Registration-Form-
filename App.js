import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Forms from "./src/Screens/Form/Forms";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
        <Forms/>
      
        </ScrollView>
    </SafeAreaView>
  )


}
