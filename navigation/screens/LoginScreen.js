import * as React from 'react';
import { View , TextInput , Text ,SafeAreaView,StyleSheet,Image,ScrollView, Button ,TouchableHighlight } from 'react-native';
import { Card } from 'react-native-shadow-cards';

function HomeScreen ({ navigation }){
    
    return (

        <ScrollView>
        <View style={styles.view0}>

        <View  style={styles.view1}> 


        <Text style={styles.text1} > Medical Content </Text>

  
             
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



                <Card style={styles.card1}>

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





                     <View style={styles.view6}>
                     <Card style={styles.card2}>
                        <View style={StyleSheet.container2}>
                        <Image style={styles.pic10}
                            source = 
                            {{
                                width : 30,
                                 height : 30,
                            uri : "https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/26e07f/external-paper-art-and-design-studio-xnimrodx-lineal-xnimrodx.png",}}
                        
                            />

                            <Text style={styles.texta} > News and Articles </Text>

                            <Text style={styles.textb} > Top Articles and latest news </Text>
                    </View>
                    </Card>

                    <Card style={styles.card3}>
                    <View style={StyleSheet.container2}>
                        <Image style={styles.pic10}
                            source = 
                            {{
                                width : 30,
                                height : 30,
                            uri : "https://img.icons8.com/external-out-line-pongsakorn-tan/64/26e07f/external-drugs-health-insurance-out-line-pongsakorn-tan.png",}}
                        
                            />

                            <Text style={styles.texta1} > Drugs </Text>
                            <Text style={styles.textb} > More than 15,000 drugs </Text>
                    </View>
                    </Card>
                    </View>


                    <View style={styles.view7}>
                    <Card style={styles.card4}>
                                             <View style={StyleSheet.container2}>
                        <Image style={styles.pic10}
                            source = 
                            {{
                                width : 30,
                                 height : 30,
                            uri : "https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/26e07f/external-bacteria-virus-transmission-flatart-icons-solid-flatarticons.png",}}
                        
                            />

                            <Text style={styles.texta1} > Diseases </Text>

                            <Text style={styles.textb} > More than 100,000 diseases </Text>
                    </View>
                    </Card>

                    <Card style={styles.card5}>
                    <View style={StyleSheet.container2}>
                        <Image style={styles.pic10}
                            source = 
                            {{
                                width : 30,
                                 height : 30,
                            uri : "https://img.icons8.com/ios/50/26e07f/calendar--v1.png",}}
                        
                            />

                            <Text style={styles.texta2} > Book Now </Text>
                            <Text style={styles.textb} > Best of certificated doctors </Text>
                    </View> 
                    </Card>

                    </View>

                    <View style={styles.view8}>
                    <Card style={styles.card6}>
                    <View style={StyleSheet.container2}>
                        <Image style={styles.pic10}
                            source = 
                            {{
                                width : 30,
                                 height : 30,
                            uri : "https://img.icons8.com/wired/64/26e07f/treatment-plan.png",}}
                        
                            />

                            <Text style={styles.texta} > Medical Calculators </Text>

                            <Text style={styles.textb} > More than 60 Calculators </Text>
                    
                    </View> 
                    </Card>

                    <Card style={styles.card7}>
                    <View style={StyleSheet.container2}>
                        <Image style={styles.pic10}
                            source = 
                            {{
                                width : 30,
                                 height : 30,
                            uri : "https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/78/26e07f/external-allergen-allergy-glyph-silhouette-glyph-silhouettes-icons-papa-vector.png",}}
                        
                            />

                            <Text style={styles.texta1} > Allergies </Text>
                            <Text style={styles.textb} > More than 1000 allergies </Text>
                            <Text style={styles.textc} > types </Text>
                    </View>
                    </Card>
                    </View>


                    <View style={styles.view9}>
                    <Card style={styles.card8}>
                    <View style={StyleSheet.container2}>
                        <Image style={styles.pic10}
                            source = 
                            {{
                                width : 30,
                                 height : 30,
                            uri : "https://img.icons8.com/external-outline-02-chattapat-/64/26e07f/external-diagnosis-medical-outline-02-chattapat-.png",}}
                        
                            />

                            <Text style={styles.texta1} > Diangnosis </Text>

                            <Text style={styles.textb} > More than 20,000 diangnosis </Text>
                    </View>
                    </Card>

                    <Card style={styles.card9}>
                    <View style={StyleSheet.container2}>
                        <Image style={styles.pic10}
                            source = 
                            {{
                                width : 30,
                                 height : 30,
                            uri : "https://img.icons8.com/carbon-copy/100/26e07f/treatment-plan.png",}}
                        
                            />

                            <Text style={styles.texta3} > Medical Guide </Text>

                            <Text style={styles.textb} > Best of certificated doctors </Text>
                    </View> 
                    </Card>

                    </View>

                    <View style={styles.view10}>
                    <Card style={styles.card10}>
                    <View style={StyleSheet.container2}>
                        <Image style={styles.pic10}
                            source = 
                            {{
                                width : 30,
                                 height : 30,
                            uri : "https://img.icons8.com/external-konkapp-detailed-outline-konkapp/64/26e07f/external-medical-bed-medical-konkapp-detailed-outline-konkapp.png",}}
                        
                            />

                            <Text style={styles.texta3} > Surgeries </Text>
                            <Text style={styles.textb} > More than 2000 surgery </Text>
                            <Text style={styles.textc} > types </Text>

                    </View>  
                    </Card>

                    <Card style={styles.card11}>
                    <View style={StyleSheet.container2}>
                        <Image style={styles.pic10}
                            source = 
                            {{
                                width : 30,
                                 height : 30,
                            uri : "https://img.icons8.com/external-wanicon-lineal-wanicon/64/26e07f/external-blogs-digital-content-wanicon-lineal-wanicon.png",}}
                        
                            />

                            <Text style={styles.texta3} > Blogs </Text>

                            <Text style={styles.textb} > More than 864 blogs </Text>
                    </View>  
                    </Card>

                    </View>




                </View> 
                 </ScrollView>
    
    
    
    );}




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
         
           text1 :{
            color: `#fff`,
            left : 8 ,
            top: 20,
            fontSize : 25,
            fontWeight: 'bold',
          },


           pic2 :{
            // justifyContent : "flex-start" ,
            left : 315 ,
            top : -15,
           },


           view2:{
            top:-95,
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

          card1: {
            top: -140,
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
        


          view6:{
            top:-100,
            margin:20,
           flexDirection:"row"
            

          },

          card2:{
              margin:5,
              alignItems:"center",
              width:150,
              height:120,
              textAlign:"center",
              shadowColor: 'black',
              borderRadius: 10,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 6,
              shadowOpacity: 0.26,
              elevation: 8,


          },

          card3:{
            margin:5,
            alignItems:"center",
            width:150,
            height:120,
            textAlign:"center",
            //left:165,
            //top:-125,
            shadowColor: 'black',
            borderRadius: 10,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,
          },

          pic10:{
            top:10,
            left:50,
           
          },

          texta:{
              
              top:22,
              margin:2,
            color:"balck",
            fontSize:15,
            fontWeight: 'bold',
            left:3,
          },

     

          textb:{
            top:26,
           // margin:2,
            color: `#a9a9a9`,
            fontSize:11,
           // fontWeight: 'bold',
         //  left:1,
        },
        
        texta1:{
              
            top:22,
            margin:2,
          color:"balck",
          fontSize:15,
          fontWeight: 'bold',
          left:35,
        },

        view7:{
            top:-130,
            margin:20,
           flexDirection:"row"
            

          },
  
          card4:{
            margin:5,
            alignItems:"center",
            width:150,
            height:120,
            textAlign:"center",
            shadowColor: 'black',
            borderRadius: 10,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,


        },

        card5:{
          margin:5,
          alignItems:"center",
          width:150,
          height:120,
          textAlign:"center",
          //left:165,
          //top:-125,
          shadowColor: 'black',
          borderRadius: 10,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 6,
          shadowOpacity: 0.26,
          elevation: 8,
        },

        texta2:{
              
            top:22,
            margin:2,
          color:"balck",
          fontSize:15,
          fontWeight: 'bold',
          left:30,
        },

        card6:{
            margin:5,
            alignItems:"center",
            width:150,
            height:120,
            textAlign:"center",
            //left:165,
            //top:-125,
            shadowColor: 'black',
            borderRadius: 10,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,
          },

          card7:{
            margin:5,
            alignItems:"center",
            width:150,
            height:120,
            textAlign:"center",
            //left:165,
            //top:-125,
            shadowColor: 'black',
            borderRadius: 10,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,
          },
  
          view8:{
            top:-160,
            margin:20,
           flexDirection:"row"
            

          },

          textc:{
            top:30,
           // margin:2,
            color: `#a9a9a9`,
            fontSize:11,
           // fontWeight: 'bold',
          left:45,
        },

        card8:{
            margin:5,
            alignItems:"center",
            width:150,
            height:120,
            textAlign:"center",
            //left:165,
            //top:-125,
            shadowColor: 'black',
            borderRadius: 10,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,
          },

          card9:{
            margin:5,
            alignItems:"center",
            width:150,
            height:120,
            textAlign:"center",
            //left:165,
            //top:-125,
            shadowColor: 'black',
            borderRadius: 10,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,
          },

          view9:{
            top:-180,
            margin:20,
           flexDirection:"row"
            

          },

          texta3:{
              
        
                top:22,
            margin:2,
          color:"balck",
          fontSize:15,
          fontWeight: 'bold',
          left:20,
        },

        card10:{
            margin:5,
            alignItems:"center",
            width:150,
            height:120,
            textAlign:"center",
            //left:165,
            //top:-125,
            shadowColor: 'black',
            borderRadius: 10,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,
          },

          card11:{
            margin:5,
            alignItems:"center",
            width:150,
            height:120,
            textAlign:"center",
            //left:165,
            //top:-125,
            shadowColor: 'black',
            borderRadius: 10,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,
          },

          view10:{
            top:-200,
            margin:20,
           flexDirection:"row"
            

          },
    });

  

  export default HomeScreen;


