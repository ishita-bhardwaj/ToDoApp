import React, {Component, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {addtask, editTask} from '../../Redux/Actions/act1';
import {DATA} from './data';
import Hello from '../Home/hello';

const Add = props => {
  const {data, index, editMode} = props.route.params;

  const dispatch = useDispatch();
  const [value, setvalue] = useState(index ? DATA[index].txt : null);
  const {task} = useSelector(state => state.taskdata);
  const [note, setNote] = useState(data?.input || '');
  const [isfocus, setisfocus] = useState(false);

  const addBtnHandler = () => {
    const newData = JSON.parse(JSON.stringify(task));
    const finalObject = {
      input: note,
      cat: index,
    };
    newData[index].push(finalObject);
    dispatch(addtask(newData));
  };

  const editBtnHandler = () => {
    const oldData = JSON.parse(JSON.stringify(task));
    const newCurrentData = oldData[index].map((element, _index) => {
      if (data.index === _index) {
        return {
          ...element,
          cat: index,
          input: note,
        };
      } else {
        return element;
      }
    });
    oldData[index] = newCurrentData;
    dispatch(editTask(oldData));
  };

  return (
    <View style={styles.view}>
      <View style={{zIndex: 999, width: '100%'}}>
        <Dropdown
          placeholder={'Select Category'}
          onFocus={() => setisfocus(true)}
          onBlur={() => setisfocus(false)}
          labelField="txt"
          valueField="value"
          //placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          // placeholder="SELECT"
          placeholderStyle={{fontSize: 22}}
          data={DATA}
          style={styles.drop}
          onChange={item => {
            // console.log(item.);
            setvalue(item.txt);
            setisfocus(true);
          }}
        />
      </View>
      <TextInput
        value={note}
        style={styles.addnote}
        placeholder="Add Note"
        onChangeText={input => setNote(input)}
      />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => (
            editMode ? editBtnHandler() : addBtnHandler(),
            props.navigation.goBack()
          )}>
          <Text style={styles.buttontxtstyle}>ADD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  addnote: {
    height: 50,
    width: 350,
    borderWidth: 2,
    marginBottom: 10,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  drop: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 2,
    width: '81%',
    alignSelf: 'center',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 40,
  },
  button: {
    height: 50,
    width: 250,
    backgroundColor: 'pink',
    margin: 30,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontxtstyle: {
    fontWeight: 'bold',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
