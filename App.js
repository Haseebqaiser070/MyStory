import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Register from './screens/Registration';
import Dashboard from './screens/Dashboard';
import Studyspace from './screens/Studyspace';
import StudyspaceTwo from './screens/StudyspaceTwo';
import WrittenCompExam from './screens/WrittenCompExam';
import AnswerSheet from './screens/AnswerSheet';
import WrittenCompResults from './screens/WrittenCompResults';
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
import LsiteningModule from './screens/Listening'
import Admin from './screens/Admin';
import {ProgressBarProvider} from './context/ProgressBarContext';
import {AudioPlayerProvider} from './context/AudioPlayerContext';
import {AdminProvider, AdminContext} from './context/AdminContext';
import {useContext} from "react";
import ListCompExam from "./screens/ListCompExam";
import ListCompResults from "./screens/ListCompResults";

let firebaseConfig;

if (Platform.OS === !'web') {
    firebaseConfig = require('./firebaseConfig');
}


const Stack = createStackNavigator();
const screenOptions = {
    headerShown: false,
};

function AppNavigator() {
    const {isAdmin} = useContext(AdminContext);

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name='onboard' component={Home}/>
            <Stack.Screen name='register' component={Register}/>
            <Stack.Screen name='dashboard' component={Dashboard}/>
            <Stack.Screen name='studyspace' component={Studyspace}/>
            <Stack.Screen name='studyspacetwo' component={StudyspaceTwo}/>
            <Stack.Screen name='WrittenCompExam' component={WrittenCompExam}/>
            <Stack.Screen name='answer' component={AnswerSheet}/>
            <Stack.Screen name='WrittenCompResults' component={WrittenCompResults}/>
            <Stack.Screen name='written' component={WrittenComp}/>
            <Stack.Screen name='wasses' component={WrittenCompAss}/>
            <Stack.Screen name='login' component={Login}/>
            <Stack.Screen name='profile' component={Profile}/>
            <Stack.Screen name='forgot' component={ForgotPass}/>
            <Stack.Screen name='examset' component={ExamSet}/>
            <Stack.Screen name='writtenExp' component={WrittenExpTest}/>
            <Stack.Screen name='writtenExam' component={WrittenExam}/>
            <Stack.Screen name='editProfile' component={EditProfile}/>
            <Stack.Screen name='oralSet' component={OralExamSet}/>
            <Stack.Screen name='writtenExpResult' component={WrittenExpResult}/>
            <Stack.Screen name='WrittenCom' component={WrittenCompre}/>
            <Stack.Screen name='ListCompExam' component={ListCompExam}/>
            <Stack.Screen name='ListCompResults' component={ListCompResults}/>
            {isAdmin && <Stack.Screen name='admin' component={Admin}/>}
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <AdminProvider>
            <AudioPlayerProvider>
                <ProgressBarProvider>
                    <NavigationContainer>
                        <AppNavigator/>
                    </NavigationContainer>
                </ProgressBarProvider>
            </AudioPlayerProvider>
        </AdminProvider>
    );
}
