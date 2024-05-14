import { Text, View, TouchableOpacity, Image } from "react-native";
import examModuleStyle from "../style/examModule";
import ssStyle from "../style/ssstyle";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import resultStyle from "../style/resultStyle";
import ModalComponent from "../components/ConfirmModal";
import { useState } from "react";
import Colors from "../colors/Color";

const WrittenExpResult = () => {
  const Navigator = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  
  const ConfirMExit = () =>{
    setIsOpen(true);
    
  }
  const onClose= () =>{
    setIsOpen(false);
  }
  const onRedirect = () =>{
     setIsOpen(false);
     Navigator.navigate('dashboard');
  }
  return (
    <>
    <View style={examModuleStyle.mainConatiner}>
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        <View style={examModuleStyle.subContainer}>
          <View style={ssStyle.actionBar}>
          
            <View style={ssStyle.heading}>
              <Text style={[ssStyle.textColor, { fontSize: 18 }]}>Written Exp Result</Text>
            </View>
          </View>
          <View style={examModuleStyle.contentContainer}>
            <View>
              <View style={resultStyle.resultBox}>
                <View style={resultStyle.topContent}>
                  <View style={resultStyle.textBox}>
                    <Text style={resultStyle.textColorWhite}>
                      You have completed your exam! here is correct answer you could have write
                    </Text>
                  </View>
                 
                </View>
                <View style={resultStyle.horizontalDivider} />
                <View style={{ marginBottom: 20 }}>
                  <View style={resultStyle.bottomHeading}>
                    <Text style={resultStyle.tiltHeadingColor}>TYPE</Text>
                    <Text style={resultStyle.tiltHeadingColor}>EST. TIME</Text>
                  </View>
                  <View style={resultStyle.bottomHeading}>
                    <Text style={resultStyle.textColorWhite}>
                      Written Expression
                    </Text>
                    <Text style={resultStyle.textColorWhite}>14 mins</Text>
                  </View>
                </View>
              </View>
              <View>
                <Text style = {{fontSize:20, color:Colors.white, marginTop:10, marginBottom:10}}>
                L'impact des réseaux sociaux sur la société
                </Text>
              </View> 
              <View style = {resultStyle.blueBox}>
               <Text style = {{color:Colors.textColorRegister}}>ANSWER YOU HAVE WRITTEN</Text> 
              <Text style = {{fontSize:15, color:Colors.white, marginTop:10, marginBottom:10}}>
              La technologie transforme notre quotidien. Les réseaux sociaux facilitent la communication, mais soulèvent aussi des préoccupations. Trouver l'équilibre entre la connectivité et la préservation de la vie privée devient crucial dans cette ère numérique en constante évolution.
                </Text>
              </View>
              <View style = {resultStyle.blueBox}>
               <Text style = {{color:Colors.textColorRegister}}>ANSWER YOU COULD HAVE WRITTEN</Text> 
              <Text style = {{fontSize:15, color:Colors.white, marginTop:10, marginBottom:10}}>
              La technologie transforme notre quotidien. Les réseaux sociaux facilitent la communication, mais soulèvent aussi des préoccupations. Trouver l'équilibre entre la connectivité et la préservation de la vie privée devient crucial dans cette ère numérique en constante évolution.
                </Text>
              </View>
            </View>
          </View>
        </View>
     
      <TouchableOpacity>
        <View style={resultStyle.leaveExamBtn}>
          <Text style={resultStyle.textColorGray}>Restart Exam</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={ConfirMExit}>
        <View style={resultStyle.bottomButton}>
          <Text style={resultStyle.textColorWhite}>Leave Exam</Text>
        </View>
      </TouchableOpacity>
      </ScrollView>
    </View>
    <ModalComponent isOpen={isOpen} onClose={onClose} onRedirect={onRedirect} message={"Are you sure to leave the exam "}></ModalComponent>
    </>
  );
};

export default WrittenExpResult;
