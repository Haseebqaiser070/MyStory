import { View, Text, Image } from "react-native";
import ssStyle from "../style/ssstyle";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';
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
  const [profilePicture, setProfilePicture] = useState("../img/avatar.png");

  const openGallery = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.cancelled) {
      setProfilePicture(result.uri);
    }
    console.log(result);
  };
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
          <TouchableOpacity style={profileStyle.profileContainer} onPress={() => openGallery()}>
            {profilePicture?
            <Image source={require("../img/avatar.png")}></Image>
            :
            <Image
              source={{ 
                uri: profilePicture,
              }}
              style={[
                {
                  marginVertical: 8,
                  height: 170,
                  width: 170,
                  alignSelf: "center",
                  borderRadius: 200,
                  borderColor: "rgba(159, 157, 158, 1)",
                  borderWidth: 1,
                },
              ]}
            />
          }
          </TouchableOpacity>
          <View style = {EditStyle.editPane}>
            <Text style = {EditStyle.textHeading}>YOUR NAME</Text>
            <EditField hint={"Jhon Dow"} fontSizePx={20} onVlaueChnaged={NameCallBack} isNull={nameNull}></EditField>


            <Text style = {EditStyle.textHeading}>YOUR EMAIL</Text>
            <EditField hint={"jhon@gmail.com"}  fontSizePx={20} onVlaueChnaged={emailCallBack} isNull={isEmailNull}></EditField>

            <Text style = {EditStyle.textHeading}>YOUR PASSWORD</Text>
            <EditField hint={"******"} type={'password'} fontSizePx={20} onVlaueChnaged={passCallBack} isNull={passNull}></EditField>
          </View>
        </View>
      
      </ScrollView>
    </View>
  );
};

export default EditProfile;
