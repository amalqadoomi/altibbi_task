//import * as React from 'react';
import React, {useState} from 'react';
import { SafeAreaView , View,Image, Text, StyleSheet,TextInput  , ScrollView ,TouchableOpacity,Button , FlatList ,TouchableHighlight} from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import { ApplePayButton, PaymentRequest } from 'react-native-payments';
import { Card } from 'react-native-shadow-cards';






    export default function LoginScreen  ({navigation }) {
    return (


      <ScrollView>

      <SafeAreaView>
      <View style={styles.view0}>

      <View  style={styles.view1}> 
      <Image style={styles.pic1}
         source = 
         {{
             width : 100, 
              height : 40,
             
             uri : "https://play-lh.googleusercontent.com/-FBu8jwGzJnbAvLszj3LoxL6HqcRzx60NdUTnjv8l6Ly7LHd1vCM8hrQjMsuJfzVEg" , }}
           />     

           
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


         <Text style={styles.text1} > Good Morning </Text>
         <Text style={styles.text2} > Doctors available to help you <Text style={styles.text3} > 24/7 </Text> </Text>
         </View>
{/* 
      <View style={styles.view2}>
      <Image
          style={styles.pic3}
          source = 
          {{
              uri : "https://cdni.iconscout.com/illustration/premium/thumb/girl-taking-online-medical-consultation-4427232-3697302.png " , }}
          />    


                      <View style={styles.view3}>
                    <TouchableHighlight onPress={() => alert('Call With A Doctor..')} >
                      <Image style={styles.pic4}
                      source = 
                      {{
                          width : 20,
                          height : 20,
                      uri : "https://img.icons8.com/ios/50/ffffff/apple-phone.png",}} 


                      //source={require('/home/amal/Downloads/phone-call.png')}
                      onPress={() => alert('Call With A Doctor..')}
                      />   
                    </TouchableHighlight>
                    <Text style={styles.text4} > Call With A Doctor </Text>
                    </View>

                    <View style={styles.view4}>
                    <TouchableHighlight onPress={() => alert('Chat With A Doctor..')} >
                      <Image style={styles.pic5}
                      source = 
                      {{
                          width : 20,
                          height : 20,
                      uri : "https://img.icons8.com/ios/50/ffffff/chat--v1.png",}}
                      onPress={() => alert('Chat With A Doctor..')}
                      />   
                    </TouchableHighlight>
                    <Text style={styles.text5} > Chat With A Doctor </Text>
                    </View>
                       </View> */}


                          <Card style={styles.card0}>

                          <View style={StyleSheet.view2}>
                          <Image
                              style={styles.pic3}
                              source = 
                              {{
                                  uri : "https://cdni.iconscout.com/illustration/premium/thumb/girl-taking-online-medical-consultation-4427232-3697302.png " , }}
                              /> 


                                <View style={styles.view3}>
                              <TouchableHighlight onPress={() => alert('Call With A Doctor..')} >
                                <Image style={styles.pic4}
                                source = 
                                {{
                                    width : 20,
                                    height : 20,
                                uri : "https://img.icons8.com/ios/50/ffffff/apple-phone.png",}} 


                                //source={require('/home/amal/Downloads/phone-call.png')}
                                onPress={() => alert('Call With A Doctor..')}
                                />   
                              </TouchableHighlight>
                              <Text style={styles.text4} > Call With A Doctor </Text>
                              </View>

                              <View style={styles.view4}>
                              <TouchableHighlight onPress={() => alert('Chat With A Doctor..')} >
                                <Image style={styles.pic5}
                                source = 
                                {{
                                    width : 20,
                                    height : 20,
                                uri : "https://img.icons8.com/ios/50/ffffff/chat--v1.png",}}
                                onPress={() => alert('Chat With A Doctor..')}
                                />   
                              </TouchableHighlight>
                              <Text style={styles.text5} > Chat With A Doctor </Text>
                              </View>
                                </View>



                          </Card>
                              

                    <View style={styles.view5}>
                    <Text style={styles.text6} >Thousands of certifid doctors are available to help you </Text>
                    <Text style={styles.text7} >Get a trusted medical consultation from the best doctors in the middle east. </Text>
                    <Text style={styles.text8} >Complete privacy and a satisfactory answer within minutes </Text>
                    </View>



                    <View style={styles.container}>
    <Card style={styles.card1}>

    <View style={StyleSheet.container2}>
    <Image style={styles.pic11}
    source = 
    {{
        width : 30,
        height : 30,
    uri : "https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/26e07f/external-heart-rate-health-vitaliy-gorbachev-fill-vitaly-gorbachev-1.png",}}

    />
   <Text style= {styles.Text11}> My Last Consultations  </Text>
   <Text style= {styles.Text12}> You have no consultation history  </Text>

   <Image style={styles.pic12}
    source = 
    {{
        width : 20,
        height : 20,
    uri : "https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/26e07f/external-right-arrow-arrows-vitaliy-gorbachev-fill-vitaly-gorbachev.png",}}

    />

    </View> 


    <View style={StyleSheet.container3}>

    <Image style={styles.pic13}
    source = 
    {{
        width : 30,
        height : 30,
    uri : "https://img.icons8.com/glyph-neue/64/26e07f/multicultural-people.png",}}

    />
   <Text style= {styles.Text13}> My Family Members  </Text>
   <Text style= {styles.Text14}> Add your family members and truck   </Text>
   <Text style= {styles.Text14}>  their medical records.  </Text>


   <Image style={styles.pic14}
    source = 
    {{
        width : 20,
        height : 20,
    uri : "https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/26e07f/external-right-arrow-arrows-vitaliy-gorbachev-fill-vitaly-gorbachev.png",}}

    />

    </View> 

    <View style={StyleSheet.container4 }>

    <Image style={styles.pic15}
    source = 
    {{
        width : 30,
        height : 30,
    uri : "https://img.icons8.com/glyph-neue/64/26e07f/bell.png",}}

    />
   <Text style= {styles.Text15}> Medicine alarm  </Text>
   <Text style= {styles.Text16}> Add your medication and we'll remind   </Text>
   <Text style= {styles.Text16}>  you on time  </Text>


   <Image style={styles.pic16}
    source = 
    {{
        width : 20,
        height : 20,
    uri : "https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/26e07f/external-right-arrow-arrows-vitaliy-gorbachev-fill-vitaly-gorbachev.png",}}

    />
    
    </View> 

    </Card>




    <Card style={styles.card2}>
      <View style={StyleSheet.container5}>


      <Image style={styles.pic17}
              source = 
              {{
                  width : 30,
                  height : 30,
              uri : "https://img.icons8.com/external-flat-lima-studio/64/000000/external-bacteria-coronavirus-flat-lima-studio.png",}}
          
              />
      
      <Text style= {styles.Text17}> Having Corona Symptoms ? </Text>
      <Text style= {styles.Text18}> Contact us for immediate medical   </Text>
      <Text style= {styles.Text18}>  consultation  </Text>


      {/*<View style={styles.button1}>*/}   

      <TouchableHighlight onPress={() => alert('Get a consultation now ..')} style={styles.button1} >
      {/* color= "#3cb371"
      title="Get a consultation now" */}
      <Text style= {styles.Text19}>  Get a consultation now </Text>
      </TouchableHighlight >

          {/*</View>*/} 
          </View> 
          </Card>

        </View>

        <View style={styles.view6}>
        <Text style= {styles.Text19}> {} </Text>

        </View>

      </View>
     </SafeAreaView>
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
              
  
             },
           
             pic1 : {
               left : 8 ,
               top: 15,
             
  
             },
  
  
             pic2 :{
              // justifyContent : "flex-start" ,
              left : 315 ,
              top : -25,
             },
  
  
  
  
             text1 :{
               color: `#fff`,
               top : -5 ,
               left: 4 ,
               fontSize : 15,
               fontWeight: 'bold',
             },
  
             text2 : {
             color: `#fff`,
             left : 193,
             top : - 25 ,
             fontSize : 10 ,
             fontWeight: 'bold',
  
             },
  
            pic3 :{
              height : 200,
              width: 270,
              left:50,
            },
  
            view3 :{
              //alignContent : "center",
              top: 30,
              height : 70,
              width :160 ,
              //left : 1 ,
             backgroundColor : `#3cb371`,
             borderRadius: 10,
            },
  
            pic4 : {
              alignItems : "center" ,
              left:50 ,
              top: 5,
  
  
            },
  
            text4 :{
              color: `#fff`,
              fontSize :11,
              textAlign:"center",
              top: 15,
            },
  
  
            view4 :{
              //alignContent : "center",
              top: -40,
              height : 70,
              width :160 ,
              left : 161 ,
             backgroundColor : `#3cb371`,
             borderRadius: 10,
            },
  
  
            pic5 : {
              alignItems : "center" ,
              left:50 ,
              top: 5,
            },
  
  
            text5 :{
              color: `#fff`,
              fontSize :11,
              textAlign:"center",
              top: 15,
            },
  
            pic5 : {
              alignItems : "center" ,
              left:50 ,
              top: 5,
            },
  
  
            text5 :{
              color: `#fff`,
              fontSize :11,
              textAlign:"center",
              top: 15,
            },
  
  
            view5 :{
              padding:8,
              top:-90,
              margin:10,
  
            },
  
          text6 :{
            color: `#000000`,
            fontSize :15,
            left:10,
            top: 25,
            fontWeight: 'bold',
            
          },
  
  
          text7 :{
            color: `#000000`,
            fontSize :13,
            left:10,
            top: 30,
            
          },
  
          text8 :{
            color: `#000000`,
            fontSize :11,
            left:10,
            top: 40,
            fontWeight: 'bold',
            
          }, 
  
          card1: {
              top: -40,
              alignContent:"center",
              left: 25,
              shadowColor: 'black',
              borderRadius: 20,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 6,
              shadowOpacity: 0.26,
              elevation: 8,
            },
  
            pic11 :{
             
              top :37,
              left:5,
              alignItems:"flex-start",
  
            },
            
            Text11:{
              left : 50 ,
              top : 5 ,
              fontSize:15,
              fontWeight: 'bold',
  
            },
  
            Text12:{
              left : 50 ,
              top : 10 ,
              fontSize:12,
  
            },
  
            pic12 :{
              top :-30,
              left:278,
              //alignItems:"flex-end",
  
            },
  
  
  
  
            pic13 :{
              top :37,
              left:5,
              alignItems:"flex-start",
  
            },
            
            Text13:{
              left : 50 ,
              top : 5 ,
              fontSize:15,
              fontWeight: 'bold',
            },
  
            Text14:{
              left : 50 ,
              top : 5 ,
              fontSize:12,
            },
  
            pic14 :{
              top :-30,
              left:278,
              //alignItems:"flex-end",
  
            },
  
  
  
  
  
            pic15 :{
              top :37,
              left:5,
              alignItems:"flex-start",
  
            },
            
            Text15:{
              left : 50 ,
              top : 5 ,
              fontSize:15,
              fontWeight: 'bold',
            },
  
            Text16:{
              left : 50 ,
              top : 5 ,
              fontSize:12,
            },
  
            pic16 :{
              top :-30,
              left:278,
              //alignItems:"flex-end",
  
            },
            card2: {
              top: 20,
              alignContent:"center",
              left: 25,
              shadowColor: 'black',
              borderRadius: 20,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 6,
              shadowOpacity: 0.26,
              elevation: 8,
              height:160,
            },
  
  
  
            Text17:{
              color:`#696969`,
              left : 15 ,
              top : -17 ,
              fontSize:15,
              fontWeight: 'bold',
            },
  
            Text18:{
              left : 15 ,
              top : -10 ,
              fontSize:12,
              //color :"black",
            },
  
            button1 :{
              alignContent:"center",
              color:`#3cb371`,
              top:50,
              backgroundColor:`#3cb371`,
              width:250,
              height:40,
              top :20,
              left:35,
              //borderRadius: 50,
              borderRadius: 10,
              //backgroundColor:'#68a0cf',
          
            },
  
            Text19:{
              left : 40,
              top : 10 ,
              fontSize:15,
              color:'#fff',
              fontWeight: 'bold',
              alignItems:"center",
              alignContent:"center",
             
            },
  
            pic17:{
              top:3,
              left:280,
            },
  
            container:{
              marginTop: 25,
  
            },
  
            view6:{
              height:100,
            },

            card0: {
              top: -90,
              height:300,
              alignContent:"center",
              left: 25,
              shadowColor: 'black',
              borderRadius: 20,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 6,
              shadowOpacity: 0.26,
              elevation: 8,
            },

        });


