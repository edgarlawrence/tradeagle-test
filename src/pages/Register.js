import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, Modal, Pressable, ActivityIndicator } from 'react-native';
import React from 'react';
import { PostAPI } from '../helper/Api';
import { LinearGradient } from 'expo-linear-gradient';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Show from '../../assets/view.png'
import Hide from '../../assets/hide.png'

export default function Register({ navigation }) {
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [waNumber, setWaNumber] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [city, setCity] = React.useState('')
  const [state, setState] = React.useState('')
  const [postalCode, setPostalCode] = React.useState('')
  const [pan, setPan] = React.useState('')
  const [gst, setGst] = React.useState('')
  const [password, setPassword] = React.useState('');

  const [isSelected, setSelection] = React.useState(false);

  const [modalVisible, setModalVisible] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(true);

  const [loading, setLoading] = React.useState(false);

  const [resFinish, setResFinish] = React.useState(false)

  const [resultContent, setResultContent] = React.useState('')

  const data = {
    name,
    email,
    number,
    waNumber,
    address,
    city,
    state,
    postalCode,
    pan,
    gst,
    password
  }

  const NameChangeHandler = (value) => {
    setName(value)
  }

  const NumberChangeHandler = (value) => {
    setNumber(value)
  }

  const EmailChangeHandler = (value) => {
    setEmail(value)
  }

  const WaNumberChangeHandler = (value) => {
    setWaNumber(value)
  }

  const AddressChangeHandler = (value) => {
    setAddress(value)
  }

  const CityChangeHandler = (value) => {
    setCity(value)
  }

  const StateChangeHandler = (value) => {
    setState(value)
  }

  const PostalCodeChangeHandler = (value) => {
    setPostalCode(value)
  }

  const PANChangeHandler = (value) => {
    setPan(value)
  }

  const GSTChangeHandler = (value) => {
    setGst(value)
  }

  const PasswordChangeHandler = (value) => {
    setPassword(value)
  }

  const IsSelectedChangeHandler = (value) => {
    setSelection(value)
  }

  const PasswordShowChangeHandler = () => {
    setShowPassword(prevPassword => !prevPassword)
  }

  const CloseModalHandler = () => {
    setModalVisible(false)

    if(resFinish === true) {
      navigation.navigate('Home');
    }
  }

  const SubmitHandler = () => {
    setLoading(true)
    if (isSelected === true) {
      PostAPI(data)
        .then(res => {
          setLoading(false)
          setModalVisible(true);
          setResultContent('Data Has Been Register Successfully'); 
          setResFinish(true);
        })
        .catch(err => {
          setLoading(false)
          setModalVisible(true);
          console.log(err);
          setResultContent(err.message);
          setResFinish(false)
        });
    } else {
      setModalVisible(true);
      setLoading(false)
      setResultContent("Please accept the Terms and Conditions.");
      setResFinish(false)
    }
  };



  return (
    <LinearGradient
      colors={['#000314', '#001329', '#0F2F4F']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.5 }}
      style={style.container}
    >

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <View style={{
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 2,
              marginBottom: 10,
            }}>
              <Text style={style.modalTextInformation}> Status </Text>
            </View>
            {
              isSelected === false ? <Text style={style.modalTextContent}> {resultContent} </Text>
                : <Text style={style.modalTextContent}> {resultContent} </Text>
            }
            <Pressable
              style={[style.button, style.buttonClose]}
              onPress={CloseModalHandler}>
              <Text style={style.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <ScrollView
        contentContainerStyle={style.scrollViewContent}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text style={style.titleOne}>Nice to </Text>
          <Text style={style.titleTwo}>meet you!</Text>
        </View>
        <Text style={style.subtitle}>Register (Only Business)</Text>

        <View style={style.inputContainer}>
          <TextInput
            style={style.input}
            onChangeText={NameChangeHandler}
            value={name}
            placeholder="Business Name*"
            placeholderTextColor="#ccc"
          />
          <TextInput
            style={style.input}
            onChangeText={NumberChangeHandler}
            value={number}
            placeholder="Contact Number*"
            placeholderTextColor="#ccc"
            keyboardType="phone-pad"
          />
          <TextInput
            style={style.input}
            onChangeText={EmailChangeHandler}
            value={email}
            placeholder="Email*"
            placeholderTextColor="#ccc"
          />
          <TextInput
            style={style.input}
            onChangeText={WaNumberChangeHandler}
            value={waNumber}
            placeholder="Whatsapp Number"
            placeholderTextColor="#ccc"
            keyboardType="phone-pad"
          />
          <TextInput
            style={style.input}
            onChangeText={AddressChangeHandler}
            value={address}
            placeholder="Address*"
            placeholderTextColor="#ccc"
          />
          <TextInput
            style={style.input}
            onChangeText={CityChangeHandler}
            value={city}
            placeholder="City*"
            placeholderTextColor="#ccc"
          />
          <TextInput
            style={style.input}
            onChangeText={StateChangeHandler}
            value={state}
            placeholder="State*"
            placeholderTextColor="#ccc"
          />
          <TextInput
            style={style.input}
            onChangeText={PostalCodeChangeHandler}
            value={postalCode}
            placeholder="Postal Code*"
            placeholderTextColor="#ccc"
            keyboardType="phone-pad"
          />
          <TextInput
            style={style.input}
            onChangeText={PANChangeHandler}
            value={pan}
            placeholder="PAN Number*"
            placeholderTextColor="#ccc"
          />
          <TextInput
            style={style.input}
            onChangeText={GSTChangeHandler}
            value={gst}
            placeholder="GST No*"
            placeholderTextColor="#ccc"
          />
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={style.passwordInput}
              onChangeText={PasswordChangeHandler}
              value={password}
              placeholder="Password*"
              placeholderTextColor="#ccc"
              secureTextEntry={showPassword}
            />
            <TouchableOpacity style={style.showButton} onPress={PasswordShowChangeHandler}>
              {
                showPassword === false ?
                  <Image source={Show} style={{ width: 20, height: 20 }} />
                  : <Image source={Hide} style={{ width: 20, height: 20, color: 'white' }} />
              }
            </TouchableOpacity>
          </View>

          <View style={style.checkboxContainer}>
            <BouncyCheckbox
              isChecked={isSelected}
              onPress={IsSelectedChangeHandler}
              style={{ flex: 1 }}
              fillColor="#A8C6FF"
              iconStyle={{ borderRadius: 0 }}
              innerIconStyle={{ borderRadius: 0 }}
            />
            <View style={style.checkboxLabel}>
              <Text style={{ color: 'white' }}>I agree with </Text>
              <Text style={{ color: '#A8C6FF' }}> Terms & Conditions </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={style.registerButton}>
          <Text style={style.registerButtonText} onPress={SubmitHandler}>
            {loading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={style.registerButtonText}>Register</Text>
            )}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 80,
    paddingBottom: 20,
    alignItems: 'center'
  },
  titleOne: {
    color: 'white',
    fontWeight: '700',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 40,
  },
  titleTwo: {
    color: '#A8C6FF',
    fontWeight: '700',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 40,
  },
  subtitle: {
    color: 'white',
    fontWeight: '200',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'white',
    color: 'white',
    marginVertical: 10,
    paddingHorizontal: 10,
    textAlign: 'center'
  },
  passwordInput: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'white',
    color: 'white',
    marginVertical: 10,
    paddingHorizontal: 10,
    width: 290,
    textAlign: 'center'
  },
  checkboxContainer: {
    flexDirection: 'row',
    paddingVertical: 10
  },
  checkboxLabel: {
    color: 'white',
    flexDirection: "row",
    flex: 10,
    paddingTop: 2,
    paddingLeft: 10
  },
  showButton: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    padding: 5,
    borderRadius: 20,
    marginTop: 15,
    marginLeft: 10
  },
  registerButton: {
    backgroundColor: '#3366FF',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  registerButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 150
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTextInformation: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#000314'
  },
  modalTextContent: {
    paddingTop: 10,
    paddingBottom: 20,
    textAlign: 'center',
    letterSpacing: 1,
  },
});
