import { View, Text, Image } from "react-native";
import ssStyle from "../style/ssstyle";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import profileStyle from "../style/profileStyle";
import EditStyle from "../style/EditProfile";
import EditField from "../components/EditProfileField";
import { useState } from "react";
const EditProfile = () => {
  const Navigator = useNavigation();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const [isEmailNull, setEmailNull] = useState(false);
  const [nameNull, setNameNull] = useState(false);
  const [passNull, setPassNull] = useState(false);
 //
 const validateEmail = (email) => {
  // Regular expression to check email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
 //
  const emailCallBack =(value)=>{
    if (validateEmail(value)) {
      setEmailNull(false)
      setEmail(value)
    } else {
      setEmailNull(true)
      setEmail(value)
    }
  }

  const NameCallBack =(value)=>{
    setName(value);
 }

 const passCallBack =(value)=>{
  setPass(value);
}

const saveProfile =()=>{
if(email == ""){
  setEmailNull(true)
}else{
  setEmailNull(false)
}

if(name == ""){
  // chn
  setNameNull(true)
}else{
  setNameNull(false)
}

if(pass == ""){
  setPassNull(true)
}else{
  setPassNull(false)
}

if(email != "" && pass != "" && name != ""){
  Navigator.navigate('profile')
}
}
  return (
    <View style={ssStyle.mainContainer}>
      <ScrollView>
        <View style={profileStyle.mainActoinBar}>
          <View style={profileStyle.Container}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}

              onPress={()=>{Navigator.goBack()}}
            >
              <Image source={require("../img/back.png")} />
            </TouchableOpacity>
            <Text style={profileStyle.textColor}>Edit Profile</Text>
            <View>
              <TouchableOpacity
                onPress={saveProfile}
              >
                <Text style={EditStyle.doneButton}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={profileStyle.contentContainer}>
          <TouchableOpacity style={profileStyle.profileContainer}>
            <Image source={require("../img/avatar.png")}></Image>
          </TouchableOpacity>
          <View style = {EditStyle.editPane}>
            <Text style = {EditStyle.textHeading}>YOUR NAME</Text>
            <EditField hint={"Jhon Dow"} fontSizePx={20} onVlaueChnaged={NameCallBack} isNull={nameNull}></EditField>

            <Text style = {EditStyle.textHeading}>YOUR EMAIL</Text>
            <EditField hint={"jhon@gmail.com"} type={'text'} fontSizePx={20} onVlaueChnaged={emailCallBack} isNull={isEmailNull}></EditField>

            <Text style = {EditStyle.textHeading}>YOUR PASSWORD</Text>
            <EditField hint={"******"} type={'password'} fontSizePx={20} onVlaueChnaged={passCallBack} isNull={passNull}></EditField>
          </View>
        </View>
      
      </ScrollView>
    </View>
  );
};

export default EditProfile;
