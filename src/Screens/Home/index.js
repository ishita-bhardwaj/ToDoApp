import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DATA} from './data';
import WP from '../Home/WorkProj';
import Add from './add';
import Hello from '../Home/hello';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  clickAction = index => {
    const {navigation} = this.props;
    navigation.navigate('TodoList', {
      index: index,
    });
  };

  render() {
    const {dataData} = this.props;
    return (
      <SafeAreaView style={styles.safeview}>
        <View style={styles.iconview}>
          <Image
            style={styles.icon}
            resizeMode={'contain'}
            source={require('/Users/ishitabhardwaj/Desktop/ToDoApp/src/Utils/Assets/4394562.png')}
          />
        </View>
        <View style={styles.helloview}>
          <Text style={styles.hello}>Hello</Text>
          <Text style={styles.jasson}>Ishita</Text>
        </View>
        <View style={styles.daydate}>
          <Text style={styles.day}>Monday</Text>
          <Text style={styles.date}>7th November</Text>
        </View>
        <FlatList
          data={DATA}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <View
                key={index}
                style={{
                  margin: 5,
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={styles.categ}
                  onPress={() => this.clickAction(index)}>
                  <View>
                    <Image source={{uri: item.imageUrl}} style={styles.img} />
                  </View>
                  <View>
                    <Text style={styles.txtstyle}>{item.txt}</Text>
                    <Text style={styles.taskstyle}>{item.task}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        {/* <TouchableOpacity
          style={styles.add}
          onPress={() => this.props.navigation.navigate('Add')}>
          <Text style={styles.addicon}>+</Text>
        </TouchableOpacity> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeview: {
    flex: 1,
    //margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headview: {},
  helloview: {
    paddingRight: 150,
  },
  hello: {
    fontSize: 60,
    color: 'purple',
  },
  jasson: {
    fontSize: 60,
    color: 'purple',
    fontWeight: 'bold',
  },
  day: {
    fontWeight: 'bold',
    color: 'darkgrey',
    paddingRight: 10,
    fontSize: 16,
  },
  date: {
    color: 'darkgrey',
    fontSize: 16,
  },
  daydate: {
    flexDirection: 'row',
    paddingRight: 150,
    padding: 4,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconview: {
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 10,
  },
  num: {
    fontWeight: 'bold',
    color: 'darkgrey',
    fontSize: 40,
  },
  txt: {
    color: 'darkgrey',
    fontSize: 25,
  },
  img: {
    width: 25,
    height: 25,
    margin: 10,
  },
  txtstyle: {
    fontSize: 30,
    padding: 10,
    color: 'grey',
  },
  taskstyle: {
    color: 'darkgrey',
    fontSize: 20,
    padding: 5,
  },
  categ: {
    width: 175,
    height: 170,
    flexDirection: 'row',
    //borderWidth:2,
    //borderColor:'white',
    borderRadius: 20,
    backgroundColor: 'rgb(203,195,227)',
  },
  add: {
    height: 75,
    width: 75,
    borderTopLeftRadius: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  addview: {
    //justifyContent:'flex-end',
    alignItems: 'flex-end',
  },
  addicon: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
});

export default HomeScreen;
