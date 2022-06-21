import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Button, Container, Email, Form, H1, Input, P } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'

export default function index() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
            <ScrollView scrollEnabled={false}>
                <View style={{ position: 'absolute', left: "30%", top: "10%", width: "100%" }}>
                    <View style={{ width: 100, height: 100, borderRadius: 100, borderBottomStartRadius: 0, backgroundColor: "purple", position: 'absolute', top: 50 }}><View style={{ backgroundColor: "blue" }} /></View>
                    <View style={{ width: 100, height: 100, borderRadius: 100, borderBottomEndRadius: 0, backgroundColor: "blue", position: 'absolute', left: 50, top: 50 }}><View style={{ backgroundColor: "blue" }} /></View>
                    <View style={{ width: 100, height: 100, borderRadius: 100, borderTopLeftRadius: 184, borderTopRightRadius: 260, borderBottomRightRadius: 182, backgroundColor: "darkblue", position: 'absolute', left: 25, top: 5 }}><View style={{ backgroundColor: "blue" }} /></View>
                    <View style={{ width: 100, height: 100, borderRadius: 100, borderTopLeftRadius: 184, borderTopRightRadius: 260, borderBottomRightRadius: 182, backgroundColor: "darkblue", position: 'absolute', right: 20, top: 10 }}><View style={{ backgroundColor: "blue" }} /></View>
                </View>
                <Container style={{ marginTop: '60%', height: "100%" }}>
                    <Form>
                        <H1>Login</H1>
                        <P>Please sign in to continue</P>
                        <Email email={true}>
                            <Icon name="email-outline" color="#000" size={30} />
                            <Input placeholder="Email" />
                        </Email>
                        <Email>
                            <Icon name="lock" color="#000" size={28} />
                            <Input placeholder="Password" secureTextEntry={true} width={70} />
                            <Text style={{ fontWeight: 'bold', color: "darkblue", fontSize: 15 }}>Forgot?</Text>
                        </Email>
                    </Form>
                    <Button>
                        <LinearGradient
                            colors={['blue', 'darkblue']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{ width: 150, padding: 18, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: "#FFF", fontWeight: "900", fontSize: 22 }}>Login</Text>
                        </LinearGradient>
                    </Button>
                </Container>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '40%' }}>
                    <Text style={{ fontSize: 18 }}>Don't have an account?  <Text style={{ fontWeight: 'bold', color: "darkblue" }}>Sign Up</Text></Text>
                </View>

            </ScrollView>
        </SafeAreaView >
    )
}