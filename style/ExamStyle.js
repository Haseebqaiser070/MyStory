import Colors from "../colors/Color";
import { StyleSheet } from "react-native";

const ExamStyle = StyleSheet.create(
{
    CardContainer:{
        display:'flex',
        flexDirection:'row',
         justifyContent:'center',
        alignItems:'center',

    }
,
    card:{
        margin:5,
        backgroundColor:Colors.cardBf,
        borderRadius:20,
        padding:20,
       
    },

    cardHeading:{
        fontSize:18,
        marginTop:15
    },

    cardDetail:{
        marginTop:15,
        marginBottom:10,
    },

   proContainer:{
     display:'flex',
    flexDirection:'row',
    marginTop:10,
    marginBottom:10,
    justifyContent:'center',
    alignItems:'center'
   }
    , 
   proTextContainer:{
    marginStart:20
   },

   cardTextDetail:{
    color:Colors.gray
   }

}
);

export default ExamStyle