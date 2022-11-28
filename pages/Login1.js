import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TextInput,
} from 'react-native';

export default function Login1() {
  return (
    <>
      <ImageBackground
        style={styles.background}
        source={{
          uri: 'https://i.redd.it/3jfjc53fsyb61.jpg',
        }}>
        <View>
          <View>
            <Text style={styles.heading}>Login</Text>
          </View>
          <View>
            <TextInput placeholder="Email" style={styles.input} />
          </View>
          <View>
            <TextInput placeholder="Password" style={styles.input} />
          </View>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.link}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    height: '100%',
  },
  input: {
    backgroundColor: 'white',
    marginHorizontal: 25,
    marginVertical: 5,
    color: 'black',
    fontSize: 28,
    padding: 10,
    borderRadius: 10,
    opacity: 0.9,
  },
  heading: {
    marginTop: 100,
    fontSize: 60,
    textAlign: 'center',
    padding: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    backgroundColor: '#0089D1',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 10,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  link: {
    // color: '#006EBE',
    color: '#23ADD9',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  forgotPassword: {
    color: '#01C372',
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 25,
  },
});
