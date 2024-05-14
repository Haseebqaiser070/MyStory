import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Colors from "../colors/Color";
import AdminMCQ from "../components/AdminMCQ"
import { useState } from "react";

const MCQCom = ()=>{
  const [view, setView] = useState([]);
  const addView = () => {
    // Adding a new view to the state array
    setView(prevViews => [...prevViews, 
        
    <View style = {{marginTop:20}}>
        <TextInput
         style={styles.input}
         placeholder="Please add question Here"
         placeholderTextColor="#ffffff"
         selectionColor={Colors.primary}
       />
       <View style={styles.mcqContainer}>
         <View>
           <Text style={{ color: Colors.extraColor }}>
             Checkmark the correct answer
           </Text>
         </View>
         <AdminMCQ></AdminMCQ>
         <TouchableOpacity style = {styles.addQuestionBtn} onPress={addView}>
            <Text style ={styles.textColor}>{"+ Add a Question"}</Text>
         </TouchableOpacity>
         <View style = {styles.bottomBorder} />
       </View>
    </View>

]);
  };
   return (
     <View>
       <TextInput
         style={styles.input}
         placeholder="Please add question Here"
         placeholderTextColor="#ffffff"
         selectionColor={Colors.primary}
       />
       <View style={styles.mcqContainer}>
         <View>
           <Text style={{ color: Colors.extraColor }}>
             Checkmark the correct answer
           </Text>
         </View>
         <AdminMCQ></AdminMCQ>
         <TouchableOpacity style = {styles.addQuestionBtn} onPress={addView} >
            <Text style ={styles.textColor}>{"+ Add a Question"}</Text>
         </TouchableOpacity>
        
       </View>
       <View>
       {view.map((view, index) => (
        <View>
            {
                view
            }
        </View>
      ))}
       </View>
     </View>
   );
}

const styles = StyleSheet.create({
    input: {
      backgroundColor: Colors.cardBf, // Gray background
      borderRadius: 3, // Rounded corners
      padding: 5, // Padding of 5px
      color: Colors.white, // White text color
      
    },
    mcqContainer:{
        marginTop:20,
    },
    addQuestionBtn:{
     width:150,   
     marginTop:10, 
     justifyContent:'center',
     alignItems:'center',
     padding:10,
     borderRadius:20,
     backgroundColor:Colors.primary
    }, 
    textColor:{
        color:Colors.white
    }, 

    bottomBorder:{
        height:3,
        backgroundColor:Colors.gray,
        marginTop:20,
        
    }
  });
export default MCQCom