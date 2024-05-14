import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import examModuleStyle from "../style/examModule";
import ssStyle from "../style/ssstyle";
import ProgressBar from "../components/ProgressBar";
import MCRadioButton from "../components/McqQuestion";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import ExamStyle from "../style/ExamStyle";
import ProgressSet from "../components/ProgressSet";
import MCQCom from "../components/AdminMCQCom";
import { styles } from "react-native-3d-card/src/styles";
import Colors from "../colors/Color";

const Admin = () => {
  const Navigator = useNavigation();
  return (
    <View style={examModuleStyle.mainConatiner}>
      <ScrollView>
        <View style={examModuleStyle.subContainer}>
          <View style={ssStyle.actionBar}>
            <TouchableOpacity style={ssStyle.backButton} onPress={()=>{Navigator.goBack()}}>
              <Image source={require("../img/back.png")} />
            </TouchableOpacity>
            <View style={ssStyle.heading}>
              <Text style={[ssStyle.textColor, { fontSize: 18 }]}>
                MCQ Admin Panel
              </Text>
            </View>
          </View>
          <View style={examModuleStyle.contentContainer}>
          <MCQCom></MCQCom>
          <View>
           <TouchableOpacity style = {McqStyles.savebtn}>
            <Text style = {McqStyles.saveBtnStyle}>Save MCQ</Text>
           </TouchableOpacity>
          </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const McqStyles = StyleSheet.create({
  savebtn:{
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    marginTop:20,
    marginBottom:20,
  },
  saveBtnStyle:{
    backgroundColor:Colors.primary,
    color:Colors.white, 
    padding:15,
    fontSize:18,
    borderRadius:30,
    
  }
});
export default Admin;
