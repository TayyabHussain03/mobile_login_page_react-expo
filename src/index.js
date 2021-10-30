import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';


function SignUp() {
    return (
        <>
            <View>
                <ImageBackground style={styles.image} source="data:image/jpeg;base64,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" resizeMode="cover">
                    <View style={styles.containerDiv}>
                        <View style={styles.container}>
                            <Text style={styles.text}>SignUp Page</Text>
                            <Text style={styles.para}>Add Your Details to SignUp</Text>
                            <StatusBar style="auto" />
                        </View>
                        <View style={styles.mainContainer}>
                            <TextInput style={styles.username} placeholder="Please Enter Your Username"></TextInput>
                            <TextInput style={styles.email} placeholder="Please Enter Your Email"></TextInput>
                            <TextInput style={styles.password} placeholder="Please Enter Your Password"></TextInput>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    containerDiv: {
        width: "70%",
        backgroundColor:"white",
        marginTop: "50px",
        marginHorizontal:"auto",
        paddingVertical: "100px",
    },

    container: {
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 42,
    },
    text: {
        fontSize: 24,
    },
    para: {
        marginTop: 12,
        fontSize: 14,
    },

    username: {
        width: "70%",
        marginHorizontal: "auto",
        paddingHorizontal: "14px",
        paddingVertical: "14px",
        backgroundColor: "#f2f2f2",
        borderRadius: "30px",
        marginTop: "20px",
    },
    email: {
        width: "70%",
        marginHorizontal: "auto",
        paddingHorizontal: "14px",
        paddingVertical: "14px",
        backgroundColor: "#f2f2f2",
        borderRadius: "30px",
        marginTop: "20px",
    },
    password: {
        width: "70%",
        marginHorizontal: "auto",
        paddingHorizontal: "14px",
        paddingVertical: "14px",
        backgroundColor: "#f2f2f2",
        borderRadius: "30px",
        marginTop: "20px",
    },

    image: {
        height: "100vh",
    }


}

);

export default SignUp;