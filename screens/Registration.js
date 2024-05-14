import { View, Text, Image, SafeAreaView, ImageBackground } from "react-native";
import RegisStyle from "../style/RegisStyle";
import { StatusBar } from "expo-status-bar";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import InputField from "../components/Input";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const Register = () => {
  const Navigator = useNavigation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
 
  const [isEmailNull, setEmailNull] = useState(false)
  const [isNameNull, setNameNull] = useState(false)
  const [isPassNull, setPassNull] = useState(false)
  const [isConfirmNull, setConfirmNull] = useState(false)
  const [passConfirmed, setPassCon] = useState(false)
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
  const nameCallBack = (value) => {
    if(value != ''){
      setName(value);
      setNameNull(false)
    }else{
      
      setNameNull(true)
    }
   
  };

  const passCallback = (value) =>{
    setPass(value);
    if(password == confirmPass){
      setPassNull(false)
      setConfirmNull(false)
    }
  } 
const confirmCallback = (value) =>{
  setConfirmPass(value);
  if(password == confirmPass){
    setPassNull(false)
    setConfirmNull(false)
  }
}

  const continueTo = ()=>{
     if(email == '' || !validateEmail(email)){
       setEmailNull(true)
     }else{
      setEmailNull(false)
     }

    if(name  == ''){
      setNameNull(true)
    }else{
      setNameNull(false)
    }

    if(password == ""){
      setPassNull(true)
    }else{
      setPassNull(false)
    }

    if(confirmPass == ""){
      setConfirmNull(true)
    }else{
      setConfirmNull(false)
    }
     
    if(password == confirmPass){
      setPassCon(true)
    }else{
      setPassNull(true)
      setConfirmNull(true)
    }

    if(email != "" && password != "" && name != "" && confirmPass != "" && passConfirmed == true){
      Navigator.navigate('studyspace');
    }
     
  }

  return (
    <View style={RegisStyle.mainContainer}>
      <ImageBackground source={require('../img/bg_t.png')} style = {{flex:1}}>
      <ScrollView style={RegisStyle.mainContainer}>
        
        <TouchableOpacity onPress={()=>{Navigator.goBack()}}>
          <View style={RegisStyle.backButtonContainer}>
            <Image source={require("../img/back.png")} />
          </View>
        </TouchableOpacity>
        <View style={RegisStyle.mainUIContainer}>
          <Text style={RegisStyle.heading}>Register</Text>
          <View style={RegisStyle.inputContainer}>
            <Text style={RegisStyle.TextColor}>YOUR EMAIL</Text>
            <View style={RegisStyle.InputContainer}>
              <InputField
                hint={"jhonedoe@example.com"}
                type={false}
                multilieflag={false}
                onVlaueChnaged={emailCallBack}
                isnull={isEmailNull}
                fontSizePx={16}
              ></InputField>
            </View>
            <View style={RegisStyle.InputContainer}>
              <Text style={RegisStyle.TextColor}>YOUR NAME</Text>
              <View style={RegisStyle.InputContainer}>
                <InputField
                  hint={"Jhone Doe"}
                  type={false}
                  multilieflag={false}
                  onVlaueChnaged={nameCallBack}
                  isnull={isNameNull}
                  fontSizePx={20}
                ></InputField>
              </View>
            </View>
            <View style={RegisStyle.InputContainer}>
              <Text style={RegisStyle.TextColor}>SET PASSWORD</Text>
              <View style={RegisStyle.InputContainer}>
                <InputField
                  hint={"*****"}
                  type={true}
                  multilieflag={false}
                  onVlaueChnaged={passCallback}
                  isnull={isPassNull}
                  fontSizePx={16}
                ></InputField>
              </View>
            </View>

            <View style={RegisStyle.InputContainer}>
              <Text style={RegisStyle.TextColor}>CONFIRM PASSWORD</Text>
              <View style={RegisStyle.InputContainer}>
                <InputField
                  hint={"*****"}
                  type={true}
                  multilieflag={false}
                  onVlaueChnaged={confirmCallback}
                  isnull={isConfirmNull}
                  fontSizePx={16}
                ></InputField>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={continueTo}>
        <View style={RegisStyle.bottomButton}>
          <Text style={RegisStyle.buttonText}>Continue</Text>
        </View>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Register;
