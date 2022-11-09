import {connect} from 'react-redux';
import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {deleteTask} from '../../Redux/Actions/act1';
import {Categories} from '../../Utils/constant';

class WP extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {taskdata} = this.props;
    console.log('taskdata');
    return (
      <SafeAreaView style={styles.safeview}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              style={styles.back}
              resizeMode={'contain'}
              source={require('/Users/ishitabhardwaj/Desktop/ToDoApp/src/Utils/Assets/507257.png')}
            />
          </TouchableOpacity>
          <Text style={styles.wp}>Tasks</Text>
          <Image
            style={styles.back}
            resizeMode={'contain'}
            source={require('/Users/ishitabhardwaj/Desktop/ToDoApp/src/Utils/Assets/4394562.png')}
          />
        </View>

        {taskdata.task[this.props.route.params.index] && (
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item, index}) => (
              <View
                style={{
                  padding: 10,
                  marginBottom: 10,
                  borderRadius: 10,
                  backgroundColor: 'rgb(203,195,227)',
                }}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 10,
                  }}>
                  <Text style={{color: 'blue'}}>{Categories[item?.cat]}</Text>
                  <Text>{item?.input}</Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    style={{
                      borderRadius: 10,

                      backgroundColor: 'pink',
                      padding: 10,
                      paddingHorizontal: 20,
                    }}
                    onPress={() => {
                      this.props.navigation.navigate('Add', {
                        index: this.props.route.params.index,
                        editMode: true,
                        data: {...item, index},
                      });
                    }}>
                    <Text>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderRadius: 10,
                      backgroundColor: 'pink',
                      padding: 10,
                      paddingHorizontal: 20,
                    }}
                    onPress={() => {
                      const oldData = JSON.parse(JSON.stringify(taskdata.task));
                      const newCurrentData = oldData[
                        this.props.route.params.index
                      ].filter((_, _index) => index !== _index);

                      oldData[this.props.route.params.index] = newCurrentData;
                      this.props.deleteTask(oldData);
                    }}>
                    <Text>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            data={taskdata.task[this.props.route.params.index]}
          />
        )}

        <TouchableOpacity
          style={styles.add}
          onPress={() => {
            this.props.navigation.navigate('Add', {
              index: this.props.route.params.index,
            });
          }}>
          <Text style={styles.addicon}>+</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  taskdata: state.taskdata,
});

const mapDispatchToProps = {
  deleteTask: deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(WP);

const styles = StyleSheet.create({
  safeview: {
    flex: 1,
    //margin: 30,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    //marginHorizontal: 5
  },
  back: {
    width: 30,
    height: 30,
  },
  wp: {
    fontSize: 25,
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
