import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons' ;
import Icon from 'react-native-vector-icons/FontAwesome';
//import Icon from 'antd/dist/antd.css';
//import Icon from 'react-native-vector-icons/AntDesign';
import { createStackNavigator} from '@react-navigation/stack';
import { View , TextInput , Text ,SafeAreaView,StyleSheet,Image,ScrollView, Button ,TouchableHighlight } from 'react-native';




// Screens
import HomeScreen from './screens/HomeScreen'; 
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import Doctorsanswer from './screens/Doctorsanswer';

//Screen names
const homeName = "Consult A Doctor Now";
const loginName = "Medical Content";
const signupName = "Questions & Answers";
//const Doctorsanswer="Doctor's Answer";

 


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Drstack () {
return (

               <Stack.Navigator>
                <Stack.Screen name="Questions & Answers" component={SignupScreen} />
                <Stack.Screen name="Doctor's Answer" component={Doctorsanswer} />
                </Stack.Navigator>

);

}

function MainContainer() {
  return (

      
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          headerShown: false
        }} >
        

              <Tab.Screen
                 screenOptions={{ headerShown: false }}
                 name="Consult A Doctor Now"
                 component={HomeScreen}
                 options={{
                  // tabBarIcon: ({size, color}) => (<Icon name={"stepforward"} color={color} size={size} />)
                  tabBarIcon: () => (    <Image style={{ width: 60, height: 60 ,top:-20}} source={{
                    uri: "https://img.icons8.com/ios-filled/100/26e07f/call-male.png",
               }} />)
              }}
          />


                <Tab.Screen
                //screenOptions={{ headerShown: false }}
                
                name="Medical Content"
                component={LoginScreen}
                options={{
                  tabBarIcon: () => (    <Image style={{ width: 30, height: 30 }} source={{
                        uri: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/26e07f/external-medical-health-medicine-flatart-icons-outline-flatarticons.png",
                   }} />)

            
                  
              }}
          /> 



                  <Tab.Screen
                  screenOptions={{ headerShown: false }}
                  name="Questions & Answers "
                  component={Drstack}
                  options={{
                //    tabBarIcon: ({size, color}) => (<Icon name={"User"} color={color} size={size} />)
                tabBarIcon: () => (    <Image style={{ width: 30, height: 30 }} source={{
                  uri: "https://img.icons8.com/external-outline-satawat-anukul/64/26e07f/external-medical-madical-outline-outline-satawat-anukul-27.png",
             }} />)


                }}
            />

             {/* <Tab.Screen name={"Doctor's Answer"} component={Doctorsanswer} /> */}


          {/* <Stack.Navigator>
                <Stack.Screen name="Doctor's Answer" component={Doctorsanswer} />
               
              </Stack.Navigator> */}


                </Tab.Navigator>
            </NavigationContainer>
          );
        }


export default MainContainer;













