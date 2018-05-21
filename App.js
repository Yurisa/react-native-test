import React, { Component } from 'react';
import { Text, StyleSheet, Button, Alert, View, Image, TextInput, Modal, TouchableHighlight } from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

// 定义一些全局的变量
var cols = 3;
var boxW = 100;
var vMargin = (width - cols * boxW) / (cols + 1);
var hMargin = 25;
const BadgeData = require('./BadgeData.json')
const onButtonPress = () =>{
  Alert.alert('Button has been pressed!');
}
exports.displayName = 'ButtonExample';
exports.framework = 'React';
exports.title = '<Button>';
exports.description = 'Simple React Native button component.';
export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      times:0
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    return (   
         <View style={{flexDirection: 'column', justifyContent: 'center', alignItems:'center', height:500}}>
           <MyModal modalVisible={this.state.modalVisible} setModalVisible={this.setModalVisible.bind(this)}></MyModal>
           <View style={{flexDirection: 'column', alignItems:'center'}}>
           <Text>Hello World! {this.state.times}</Text>
            <Button 
            color="#841584"
            title="请点击此处"            
            onPress={() => {
              let times = this.state.times
              times++
              this.setState({times:times})
              }}>请点击此处</Button>
            <Text>输入你的姓名</Text>
           <TextInput
           style={{width:100}}
           ></TextInput>
           </View>
           <Image
           source={require('./images/famale.png')}
           style={{width:30, height:30}}
           ></Image>
          <Button
            onPress={onButtonPress}
            title="This looks great!"
            accessibilityLabel="This sounds great!"
            style={{width:10}}
          />
          <Button
            onPress={() => {
              this.setModalVisible(true)
            }}
            title="Ok!"
            color="#841584"
            style={{width:90}}
            accessibilityLabel="Ok, Great!"
          />
          <Text>当前屏幕的宽度:{width}</Text>
          <Text>当前屏幕的宽度:{height}</Text>
          <AImageDemo></AImageDemo>
        </View>
    );
  }
}
class MyModal extends Component {
  constructor(props){
    super(props)
  }
  render() { 
    return ( 
    <Modal
      animationType={"slide"}
      transparent={true}
      visible={this.props.modalVisible}
      onRequestClose={() => {alert("Modal has been closed.")}}
      >
     <View style={{ flex:1,backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
      <View style={{flex:1}}>
       
        <TouchableHighlight onPress={() => {
          console.log(this.props.modalVisible)
          this.props.setModalVisible(this.props.modalVisible)
        }}>
          <Text>Hide Modal</Text>
        </TouchableHighlight>

      </View>
     </View>
    </Modal> )
  }
}

class AImageDemo extends Component {
  render() { 
    return ( 
      <View style={styles.container}>
        {BadgeData.data.map(v => (
         <View key={v} style={styles.outViewStyle}>
          <Image source={{uri:v.icon}} style={styles.imageStyle}/>
          <Text style={styles.mainTitleStyle}>
            {v.title}
          </Text>
          </View>
        ))}
      </View>
     )
  }
}

const styles = StyleSheet.create({
  container: {

    // 确定主轴的方向
    flexDirection:'row',

    // 换行显示
    flexWrap:'wrap'

  },

  outViewStyle:{
     backgroundColor:'red',
     // 设置侧轴的对齐方式
     alignItems:'center',
     width:boxW,
     height:boxW,
     marginLeft:vMargin,
     marginTop:hMargin
  },

  imageStyle:{
     width:80,
     height:80
  },

  mainTitleStyle:{
    
  }
});
