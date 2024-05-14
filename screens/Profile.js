import { View, Text, Image } from "react-native";
import ssStyle from "../style/ssstyle";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import RadioButtons from "../components/Level";
import profileStyle from "../style/profileStyle";
import ProgressCard from "../components/ProgressCard";
import Colors from "../colors/Color";
import Panel from "../components/Panel";
import ModalComponent from "../components/ConfirmModal";
import { useState } from "react";
const Profile = () => {
  const Navigator = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const onClose= () =>{
    setIsOpen(false);
  }
  const onRedirect = () =>{
     setIsOpen(false);
     Navigator.reset({
      index: 0, // Reset the stack to the first screen
      routes: [{ name: 'login' }], // Navigate to the NewScreen
    });
  }
  return (
    <>
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
            <Text style={profileStyle.textColor}>Profile</Text>
            <View>
              <TouchableOpacity onPress={()=>{Navigator.navigate('editProfile')}}>
                <Text style={profileStyle.editProfile}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={profileStyle.contentContainer}>
          
          <View style={profileStyle.profileContainer}>
            <Image source={require("../img/profile_pic.png")}></Image>
            <Text style={profileStyle.profileName}>Blake Gordon</Text>
            <Text style={profileStyle.profileEmail}>blake@gmail.com</Text>
          </View>
          <View style={profileStyle.progressCardConatiner}>
            <Text style={{ marginBottom: 15, color: Colors.gray }}>
              Your Progress
            </Text>
            <ProgressCard></ProgressCard>
          </View>
          <View style={{ marginTop: 20 }}>
            <Panel></Panel>
          </View>

          <View style={profileStyle.notificationConatiner}>
            <View style={profileStyle.notificationSubContainer}>
              <Image source={require("../img/notification.png")} />
              <View style={profileStyle.notifyTextContainer}>
                <Text style={profileStyle.notifyHeding}>Do not disturb</Text>
                <Text style={profileStyle.notifySubHeding}> off</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={profileStyle.logoutContainer} onPress={()=>{ setIsOpen(true) }} >
            <Text style={profileStyle.logoutHeading}>Log out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
    <ModalComponent isOpen={isOpen} onClose={onClose} onRedirect={onRedirect} message={"Are you sure to logout "}></ModalComponent>

    </>
  );
};

export default Profile;
