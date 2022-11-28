import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Login1 from './pages/Login1';
import Login2 from './pages/Login2';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [isEditing, setEditing] = useState(false);
  const [editText, setEditText] = useState('');

  return (
    <>
      {/* TODO APP */}
      <ImageBackground
        style={styles.background}
        source={{
          uri: 'https://i.pinimg.com/originals/fd/b2/1c/fdb21c0e4f3dbb6ccd9a63c68fce8645.gif',
        }}
        resizeMode="cover">
        <View style={styles.container}>
          <Text style={styles.heading}>TODO'Z</Text>
        </View>
        <View style={styles.containerInput}>
          <TextInput
            onChangeText={e => {
              setTodo(e);
            }}
            style={styles.input}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              if (todo.length > 0) {
                setTodoList([...todoList, todo]);
              } else {
                alert('EMPTY TODO');
              }
            }}>
            <Text style={styles.button}>Add</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {todoList && todoList.length > 0
            ? todoList.map((todo, i) =>
                !isEditing ? (
                  <View style={styles.todoContainer} key={i}>
                    <Text style={styles.todo}>{todo}</Text>
                    <View style={styles.todoContainer}>
                      <TouchableOpacity
                        onPress={() => {
                          setEditing(true);
                        }}
                        activeOpacity={0.7}>
                        <Text style={styles.editBtn}>Edit</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          todoList.splice(i, 1);
                          setTodoList([...todoList]);
                        }}
                        activeOpacity={0.7}>
                        <Text style={styles.deleteBtn}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ) : (
                  <View key={i} style={styles.todoContainer}>
                    <TextInput
                      defaultValue={todo}
                      onChangeText={e => {
                        setEditText(e);
                      }}
                      style={styles.editInput}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        todoList[i] = editText;
                        setTodoList([...todoList]);
                        setEditing(false);
                      }}
                      activeOpacity={0.7}>
                      <Text style={styles.saveBtn}>Save</Text>
                    </TouchableOpacity>
                  </View>
                ),
              )
            : null}
          {todoList.length > 0 ? (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  setTodoList([]);
                }}
                activeOpacity={0.7}>
                <Text style={styles.deleteAllBtn}>Delete All</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </ScrollView>
      </ImageBackground>
      {/* <Login1 /> */}
      {/* <Login2 /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  containerInput: {
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  background: {
    height: '100%',
  },

  button: {
    flex: 1,
    padding: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#E47C00',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  heading: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFA500',
  },

  input: {
    padding: 20,
    flexWrap: 'wrap',
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: '#525252',
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1,
    flex: 2,
  },

  todo: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: 'white',
    color: '#222',
    fontSize: 26,
    borderRadius: 30,
    flexWrap: 'wrap',
    flex: 2,
  },

  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  editBtn: {
    padding: 20,
    backgroundColor: '#0096E0',
    margin: 3,
    borderRadius: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  saveBtn: {
    padding: 20,
    backgroundColor: '#00E794',
    margin: 3,
    borderRadius: 20,
    color: 'black',
  },
  deleteBtn: {
    padding: 20,
    backgroundColor: '#DD0000',
    margin: 3,
    borderRadius: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  deleteAllBtn: {
    textAlign: 'center',
    paddingVertical: 20,
    paddingHorizontal: 60,
    backgroundColor: '#BB0000',
    margin: 3,
    borderRadius: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  editInput: {
    opacity: 0.9,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: 'white',
    color: '#222',
    fontSize: 26,
    borderRadius: 30,
    flexWrap: 'wrap',
    flex: 2,
    fontWeight: 'bold',
    borderWidth: 3,
    borderColor: '#51CEA1',
  },
});
