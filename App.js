import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Register from './screens/Registration';
import Dashboard from './screens/Dashboard';
import Studyspace from './screens/Studyspace';
import StudyspaceTwo from './screens/StudyspaceTwo';
import ExamModule from './screens/ExamModule';
import AnswerSheet from './screens/AnswerSheet';
import Results from './screens/Results';
import WrittenComp from './screens/WritteNComp';
import WrittenCompAss from './screens/WrittenCompAss';
import Login from './screens/Login';
import Profile from './screens/Profile';
import ForgotPass from './screens/ForgotPass';
import ExamSet from './screens/ExamSet';
import WrittenExpTest from './screens/WrittenTests';
import WrittenExam from './screens/WrittenExam';
import EditProfile from './screens/EditProfile';
import OralExamSet from './screens/OralExamSet';
import WrittenExpResult from './screens/WrittenExpResult';
import WrittenCompre from './screens/WrittenCompre';
import LsiteningModule from './screens/Listening';
import Admin from './screens/Admin';



//

const Stack = createStackNavigator();
//
const screenOptions = {
  headerShown: false,
};
export default function App() {
  return (
    <>
     <StatusBar style="auto" />
     <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen  name='onboard' component={Home}/>
        <Stack.Screen  name='register' component={Register}/>
        <Stack.Screen name='dashboard' component={Dashboard}/>
        <Stack.Screen name='studyspace' component={Studyspace}/>
        <Stack.Screen name='studyspacetwo' component={StudyspaceTwo}/>
        <Stack.Screen name='exammodule' component={ExamModule}/>
        <Stack.Screen name='answer' component={AnswerSheet}/>
        <Stack.Screen  name='result' component={Results}/>
        <Stack.Screen  name='written' component={WrittenComp}/>
        <Stack.Screen  name='wasses' component={WrittenCompAss}/>
        <Stack.Screen  name='login' component={Login}/>
        <Stack.Screen  name='profile' component={Profile}/>
        <Stack.Screen name='forgot' component={ForgotPass}/>
        <Stack.Screen name='examset' component={ExamSet}/>
        <Stack.Screen name='writtenExp' component={WrittenExpTest}/>
        <Stack.Screen name='writtenExam' component={WrittenExam}/>
        <Stack.Screen name='editProfile' component={EditProfile}/>
        <Stack.Screen name='oralSet' component={OralExamSet}/>
        <Stack.Screen name='writtenExpResult' component={WrittenExpResult}/>
        <Stack.Screen name='WrittenCom' component={WrittenCompre}/>
        <Stack.Screen name='listen' component={LsiteningModule}/>
        <Stack.Screen name='admin' component={Admin}/>
      </Stack.Navigator>
     </NavigationContainer>
     
    </>
  );
}


