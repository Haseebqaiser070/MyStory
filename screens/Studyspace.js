import { View, Text, Image } from "react-native";
import ssStyle from "../style/ssstyle";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import RadioButtons from "../components/Level";

const Studyspace = () => {
    const Navigator  = useNavigation();

      const loadNext = ()=>{
      Navigator.navigate('onboard')
    }
  return (
    <View style={ssStyle.mainContainer}>
      <View style={ssStyle.subContainer}>
        <View style={ssStyle.actionBar}>
          <TouchableOpacity style={ssStyle.backButton} onPress={()=>{Navigator.goBack()}}>
            <Image source={require("../img/back.png")} />
          </TouchableOpacity>
          <View style={ssStyle.heading}>
            <Text style={[ssStyle.textColor, { fontSize: 18 }]}>
              New Studyspace
            </Text>
          </View>
        </View>
        <ScrollView>
        <View style={ssStyle.cot}>
          <View style={ssStyle.circleContainer}>
            <View style={ssStyle.circularBox}>
              <Image
                style={{ marginStart: 20 }}
                source={require("../img/plant.png")}
              />
            </View>
          </View>
          <View style={ssStyle.userName}>
            <Text style={[ssStyle.textColor, ssStyle.textDat]}>
              Aryan's Studyspace
            </Text>
          </View>
          <View style={ssStyle.basicInfoContainer}>
            <View>
              <Text style={[ssStyle.textFont]}>NAME</Text>
              <Text style={[ssStyle.bInfoName]}>Aryan</Text>
            </View>

            <View style={{ marginTop: 30 }}>
              <Text style={[ssStyle.textFont]}>EMAIL</Text>
              <Text style={[ssStyle.bInfoName]}>aryan@gmail.com</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={ssStyle.textFont}>CHOOSE YOUR LEVEL</Text>
              <View>
                <RadioButtons></RadioButtons>
              </View>
              <View style={ssStyle.btnContainer}>
                <TouchableOpacity onPress={loadNext}>
                  <View style={ssStyle.bottomButton}>
                    <Text style={ssStyle.textColor}>Continue</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Studyspace;
