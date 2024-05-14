import { View, Text, Image, SafeAreaView, ImageBackground } from "react-native";
import RegisStyle from "../style/RegisStyle";
import { StatusBar } from "expo-status-bar";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import InputField from "../components/Input";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Colors from "../colors/Color";
import ModalComponent from "../components/ConfirmModal";
const ForgotPass = () => {
  const Navigator = useNavigation();
  const [email, setEmail] = useState("");
  const [isEmailNull, setEmailNull] = useState(false);
  const [isModalOPen, setIsModalOpen] = useState(false);
  //
  const validateEmail = (email) => {
    // Regular expression to check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  //
  const emailCallBack = (value) => {
    if (validateEmail(value)) {
     setEmail(value)
     setEmailNull(false)
    } else {
      setEmail(value)
      setEmailNull(true)
    }
  };

const closeModal = ()=>{
     setIsModalOpen(false);
}

const onRedirect = ()=>{
  setIsModalOpen(false)
  Navigator.navigate('login')
}
  const continueTo = ()=>{
     if(email == ""){
      setEmailNull(true);
     }else{
      setEmailNull(false);
      setIsModalOpen(true)
     }
   
  }
  return (<>
  <ImageBackground source={require('../img/bg_t.png')} style = {{flex:1}}>
    <View style={RegisStyle.mainContainer}>
      <ScrollView style={RegisStyle.mainContainer}>
        <TouchableOpacity onPress={()=>{Navigator.goBack()}}>
          <View style={RegisStyle.backButtonContainer}>
            <Image source={require("../img/back.png")} />
          </View>
        </TouchableOpacity>
        <View style={RegisStyle.mainUIContainer}>
          <Text style={RegisStyle.heading}>Forgot Your</Text>
          <Text style={RegisStyle.heading}>Password ?</Text>
          <View style={RegisStyle.inputContainer}>
            <Text style={RegisStyle.TextColor}>YOUR EMAIL</Text>
            <View style={RegisStyle.InputContainer}>
              <InputField
                hint={"jhonedoe@example.com"}
                type={false}
                isnull={isEmailNull}
                multilieflag={false}
                onVlaueChnaged={emailCallBack}
                fontSizePx={16}
              ></InputField>
            </View>
           
            
          </View>
        </View>
      </ScrollView>
      
      <TouchableOpacity onPress={continueTo}>
        <View style={RegisStyle.bottomButton}>
          <Text style={RegisStyle.buttonText}>Send an Email</Text>
        </View>
      </TouchableOpacity>
    </View>
    </ImageBackground>
    <ModalComponent isOpen={isModalOPen} onClose={closeModal} onRedirect={onRedirect} message={"An email sent to your email adress please follow to recover your account"}></ModalComponent>
    </>
  );
};

export default ForgotPass;
