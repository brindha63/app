import { View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import  Constants  from 'expo-constants'

const BmiCalculator = () => {
    const [weight, setweight] = useState('')
    const [height, setheight] = useState('')
    const [bmi ,setBmi] = useState('')
    const [descripion, setDescription] = useState('')

    const calculateBmi =() =>{
        const bmi = weight / ((height/100)*(height/100))
        setBmi(bmi.toFixed(1))

        if(bmi < 18.5){
            setDescription('Underweiht, eatmore!!')
        }
        else if(bmi >=18.5 && bmi <= 24.9){
            setDescription('Normal,keep it up')
        }
        else if(bmi >=25 && bmi <= 29.9){
            setDescription('Overweight,start workout')
        }
        else if(bmi >=30){
            setDescription('Obese,hit the gym')
        }


    }  

    return (
        <View styles={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titletext}>BMI Calculator</Text>
            </View>
            <TextInput
            style={styles.input}
            value={weight}
            onChangeText={(text) =>setweight(text)}
            placeholder='weight in Kg'
            keyboardType='numeric'
              
            />
            <TextInput
            style={styles.input}
            value={height}
            onChangeText={(text) =>setheight(text)}
            placeholder='height in Cm'
            keyboardType='numeric'
               />
            <TouchableOpacity
            style={styles.button}
            onPress={calculateBmi}
            >
                <Text styles={styles.buttonText}>
                  Calculate
                </Text>
                </TouchableOpacity> 
                <View style={styles.resultview}>
                    <Text styles={styles.result}> {bmi}</Text>
                    <Text style={styles.result}> {descripion}</Text>
                    </View>  
        </View>

    )     
}
export default BmiCalculator

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:Constants.statusBarHeight,
      backgroundColor:'#e0ecdc'
      
    },
    title:{
        backgroundColor:'#2c6975',
        height:80,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
    },
    titletext:{
        fontSize:30,
        color:'#fff',
        fontWeight:'bold'

    },
    input:{
        height:55,
        margin:15,
        borderWidth:1/2,
        padding:10,
        borderRadius:5,
        backgroundColor:'#cde0c9',
        fontSize:18
    },
    button:{
        height:55,
        margin:15,
        borderWidth:1/2,
        borderRadius:5,
        backgroundColor:'#68b2a0',
        justifyContent:'center',
        alignItems:'center'

    },
    buttonText:{
        fontSize:20,
        color:'#ffff',
        fontWeight:'bold'
    },
    resultview:{
        margin:15,
    },
    result:{
        fontSize: 30,
        color:'#2c6975',
        fontWeight:'bold'
    }

  });