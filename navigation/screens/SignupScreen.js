import * as React from 'react';
import { View, Text , SafeAreaView,StyleSheet, ScrollView ,TouchableHighlight,TouchableOpacity, Button ,TextInput ,Image} from 'react-native';
import { Card } from 'react-native-shadow-cards';
import { NavigationContainer } from '@react-navigation/native';
import Doctorsanswer from './Doctorsanswer';




export default function SignupScreen ({ navigation }) {
  const [text, onChangeText] = React.useState("");
      
    return (
      
      <ScrollView>
      <View style={styles.view0}>

        <View  style={styles.view1}> 
            <Text style={styles.text1} > Questions & Answers </Text>

            <TouchableHighlight onPress={() => alert('Go to the user page..')} >
            <Image style={styles.pic2}
            source = 
            {{
                width : 40,
                height : 40,
            uri : "https://img.icons8.com/windows/32/ffffff/user.png",}}
            onPress={() => alert('Go to the user page..')}
            />   

          </TouchableHighlight>
          </View>


              {/* <View  style={styles.vieww}>  */}
                <Card style={styles.card1}>
                <View style={StyleSheet.view2}>
                <Image
                    style={styles.pic3}
                    source = 
                    {{
                      uri : "https://cdni.iconscout.com/illustration/premium/thumb/girl-taking-online-medical-consultation-4427232-3697302.png " , }}
                    /> 
                <TouchableHighlight onPress={() => alert('Enter Your Questions ..')} style={styles.button1} >
                      <Text style= {styles.Text19}>  Enter Your Questions </Text>
                      </TouchableHighlight >  
                      </View>
                    </Card>
                 {/* </View> */}

                 <Card style={styles.view2}>
                 <View style={StyleSheet.view2}>
                 <Image style={styles.pic10}
                    source = 
                    {{
                        width : 30,
                          height : 30,
                    uri : "https://img.icons8.com/material-outlined/24/26e07f/search--v1.png",}}
                
                    />
                 <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Search in question and answers"
                    
                  />
                </View>
                </Card>


                <Card style={styles.card2}>

                <TouchableOpacity onPress={() =>
                navigation.navigate("Doctor's Answer")} 
                style={styles.creat}>
              
                <View style={StyleSheet.container2}>
                <Text style= {styles.Text10}>From:</Text>

                </View> 

                <View style={StyleSheet.container3}>
                <Text style= {styles.Text11}>  Answered the Question ..</Text>
                <Text style= {styles.Text12}>  Doctor's Answer</Text>
                <Image
                    style={styles.pic4}
                    source = 
                    {{
                      uri : "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/26e07f/external-right-arrow-arrow-flatart-icons-outline-flatarticons-4.png" , }}
                    /> 

                </View> 

                </TouchableOpacity> 
                
                    </Card>






      </View>
      </ScrollView>
 
                );
            }

            const styles = StyleSheet.create({

              
              view0:{
                backgroundColor :`#f0ffff`,
    
            },
    
            view1 : {
                height : 250 ,
                backgroundColor :`#48d1cc`,
                
              //  borderWidth:2,
                //color : " cyan ",
                //flexDirection:"row",
               },
             
               text1 :{
                color: `#fff`,
                left : 8 ,
                top: 20,
                fontSize : 25,
                fontWeight: 'bold',
              },

              pic2 :{
                left : 315 ,
                top : -15,
               },


          card1: {
            top: -140,
            height:220,
            width:300,
            alignContent:"center",
            left: 30,
            shadowColor: 'black',
            borderRadius: 20,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,
          },

           
    
               pic3 :{
                height : 200,
                width: 240,
                left:50,
              },

              button1 :{
                alignContent:"center",
                color:`#3cb371`,
                top:50,
                backgroundColor:`#3cb371`,
                width:150,
                height:40,
                top :-40,
                left:140,
                //borderRadius: 50,
                borderRadius: 10,
                //backgroundColor:'#68a0cf',
               // alignItems:"center"
            
              },
          

              Text19:{
               // left : 40,
                top : 10 ,
                fontSize:15,
                color:'#fff',
                fontWeight: 'bold',
                alignItems:"center",
                alignContent:"center",
                alignSelf:"center",
               
              },

              view2 : {
                height:130,
                width:'100%',
                //backgroundColor:"#f#ffe4c4",
                top:-120,
              },

              input: {
              //  top:-150,
                left:20,
                height: 40,
                width:270,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                shadowRadius: 6,
                borderRadius: 10,
                color:`#a9a9a9`,
                //borderTopColor:`#a9a9a9`,
                borderColor:`#a9a9a9`,
                
              },

              pic10 :{
                left : 260 ,
                top : 45,
               },

               card2: {
                top: -80,
                height:350,
                width:'90%',
                alignContent:"center",
                //alignItems:"center",
                alignSelf:"center",
               // left: 30,
                shadowColor: 'black',
                borderRadius: 20,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 6,
                shadowOpacity: 0.26,
                elevation: 8,
                flexDirection:"column",
              },

              container2:{
               


              },

              container3:{
                top:50,
              //  borderTopWidth:2,
              //  borderColor:"black",
                

              },

              Text10:{
                left:8,
                borderBottomEndRadius:1,
                top:-130,
              },

              Text11:{
               left:8,
                top:80,

              },

              Text12:{
                left:160,
                top:110,
                color:`#3cb371`,
                fontSize:15,
                fontWeight: 'bold',

              },

                  
              pic4:{
                height : 30,
                width: 30,
                left:280,
                top:85,
              },

              creat:{
               top:140,
               borderBottomWidth:1,
               borderColor:`#a9a9a9`,
             // alignItems:"center",
              margin:15,
              },

});