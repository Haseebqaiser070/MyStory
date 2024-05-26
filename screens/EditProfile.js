import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import profileStyle from '../style/profileStyle';
import EditStyle from '../style/EditProfile';
import ssStyle from '../style/ssstyle';
import Colors from "../colors/Color";

const EditProfile = () => {
  const Navigator = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const openGallery = async (setFieldValue) => {
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
      setFieldValue('profilePicture', result.uri);
    }
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const saveProfile = (values) => {
    // Function to save profile
    Navigator.navigate('profile');
  };

  return (
      <View style={ssStyle.mainContainer}>
        <ScrollView>
          <View style={profileStyle.mainActoinBar}>
            <View style={profileStyle.Container}>
              <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                  onPress={() => {
                    Navigator.goBack();
                  }}
              >
                <Image source={require('../img/back.png')} />
              </TouchableOpacity>
              <Text style={profileStyle.textColor}>Edit Profile</Text>
              <View>
                <TouchableOpacity onPress={saveProfile}>
                  <Text style={EditStyle.doneButton}>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Formik
              initialValues={{ name: '', email: '', password: '', profilePicture: null }}
              validationSchema={validationSchema}
              onSubmit={(values) => saveProfile(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
                <View style={profileStyle.contentContainer}>
                  <TouchableOpacity
                      style={profileStyle.profileContainer}
                      onPress={() => openGallery(setFieldValue)}
                  >
                    {values.profilePicture ? (
                        <Image
                            source={{ uri: values.profilePicture }}
                            style={{
                              marginVertical: 8,
                              height: 170,
                              width: 170,
                              alignSelf: 'center',
                              borderRadius: 200,
                              borderColor: 'rgba(159, 157, 158, 1)',
                              borderWidth: 1,
                            }}
                        />
                    ) : (
                        <Image source={require('../img/avatar.png')} />
                    )}
                  </TouchableOpacity>
                  <View style={EditStyle.editPane}>
                    <Text style={EditStyle.textHeading}>YOUR NAME</Text>
                    <TextInput
                        style={[
                          EditStyle.inputField,
                          touched.name && errors.name && { borderColor: 'red' },
                        ]}
                        placeholder="Jhon Dow"
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        placeholderTextColor={Colors.white}
                    />
                    {touched.name && errors.name && (
                        <Text style={EditStyle.errorText}>{errors.name}</Text>
                    )}

                    <Text style={EditStyle.textHeading}>YOUR EMAIL</Text>
                    <TextInput
                        style={[
                          EditStyle.inputField,
                          touched.email && errors.email && { borderColor: 'red' },
                        ]}
                        placeholder="jhon@gmail.com"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholderTextColor={Colors.white}
                    />
                    {touched.email && errors.email && (
                        <Text style={EditStyle.errorText}>{errors.email}</Text>
                    )}

                    <Text style={EditStyle.textHeading}>YOUR PASSWORD</Text>
                    <View style={[EditStyle.inputField, { flexDirection: 'row', alignItems: 'center' }]}>
                      <TextInput
                          style={{ flex: 1, color: 'white' }}
                          placeholder="******"
                          onChangeText={handleChange('password')}
                          onBlur={handleBlur('password')}
                          value={values.password}
                          secureTextEntry={!showPassword}
                          placeholderTextColor={Colors.white}
                      />
                      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Feather name={showPassword ? 'eye' : 'eye-off'} size={24} color="white" />
                      </TouchableOpacity>
                    </View>
                    {touched.password && errors.password && (
                        <Text style={EditStyle.errorText}>{errors.password}</Text>
                    )}
                  </View>
                </View>
            )}
          </Formik>
        </ScrollView>
      </View>
  );
};

export default EditProfile;
