/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

this.state = {
  numberOne: 0,
  numberTwo: 0,
  numberThree: 0,

};

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{backgroundColor: '#F8F8F8', flex: 1}}>
    <ScrollView showsVerticalScrollIndicator={false}>
     <View style={{ flex: 1, flexDirection: 'row'}}>
     <View style={{ flexDirection: 'collumn'}}>
     <TextInput 
   keyboardType='numeric'
   onChangeText={(text)=> this.onChanged1(text)}
   value={this.state.numberOne}
   maxLength={10} 
/> <CheckBox
      value={this.state.numberOne}
      onValueChange={() => this.setState({ numberOne: !this.state.numberOne })}
    />
     </View>
     <View style={{ flexDirection: 'collumn'}}>
     <TextInput 
   keyboardType='numeric'
   onChangeText={(text)=> this.onChanged2(text)}
   value={this.state.numberTwo}
   maxLength={10} 
/><CheckBox
      value={this.state.numberTwo}
      onValueChange={() => this.setState({ numberTwo: !this.state.numberTwo })}
    />

     </View>
     <View style={{ flexDirection: 'collumn'}}>
     <TextInput 
   keyboardType='numeric'
   onChangeText={(text)=> this.onChanged3(text)}
   value={this.state.numberThree}
   maxLength={10} 
/><CheckBox
      value={this.state.numberThree}
      onValueChange={() => this.setState({ numberThree: !this.state.numberThree })}
    />
<TouchableOpacity
                activeOpacity={0.7}
                onPress={() => this._jumlah()}
                style={{marginRight: 25, alignSelf: 'flex-start'}}>
                <View
                  style={{
                    width: 100,
                    height: 100,
                  }}
                >
                <Text>+</Text>
                </View>
</TouchableOpacity>
<TouchableOpacity
                activeOpacity={0.7}
                onPress={() => this._kurang()}
                style={{marginRight: 25, alignSelf: 'flex-start'}}>
                <View
                  style={{
                    width: 100,
                    height: 100,
                  }}
                >
                <Text>-</Text>
                </View>
</TouchableOpacity>
<TouchableOpacity
                activeOpacity={0.7}
                onPress={() => this._kali()}
                style={{marginRight: 25, alignSelf: 'flex-start'}}>
                <View
                  style={{
                    width: 100,
                    height: 100,
                  }}
                >
                <Text>x</Text>
                </View>
</TouchableOpacity>
<TouchableOpacity
                activeOpacity={0.7}
                onPress={() => this._bagi()}
                style={{marginRight: 25, alignSelf: 'flex-start'}}>
                <View
                  style={{
                    width: 100,
                    height: 100,
                  }}
                >
                <Text>/</Text>
                </View>
</TouchableOpacity>
     </View>
     </View>
    </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
_jumlah = () => {
  var jumlah;
  if(this.state.numberOne == 0 && this.state.numberTwo != 0 && this.state.numberThree != 0){
    jumlah = this.state.numberTwo + this.state.numberThree,
    alert(jumlah);
  }else if(this.state.numberOne != 0 && this.state.numberTwo == 0 && this.state.numberThree != 0){
    jumlah = this.state.numberOne + this.state.numberThree,
    alert(jumlah);
  }else if(this.state.numberOne != 0 && this.state.numberTwo != 0 && this.state.numberThree == 0){
    jumlah = this.state.numberOne + this.state.numberTwo,
    alert(jumlah);
  }else if(this.state.numberOne != 0 && this.state.numberTwo != 0 && this.state.numberThree != 0){
    jumlah = this.state.numberOne + this.state.numberThree + this.state.numberTwo,
    alert(jumlah);
  }else if(this.state.numberOne != 0 && this.state.numberTwo == 0 && this.state.numberThree == 0){
    alert("error");
  }else if(this.state.numberOne == 0 && this.state.numberTwo != 0 && this.state.numberThree == 0){
    alert("error");
  }else if(this.state.numberOne == 0 && this.state.numberTwo == 0 && this.state.numberThree != 0){
    alert("error");
  }
};
_kurang = () => {
  var jumlah;
  if(this.state.numberOne == 0 && this.state.numberTwo != 0 && this.state.numberThree != 0){
    jumlah = this.state.numberTwo - this.state.numberThree,
    alert(jumlah);
  }else if(this.state.numberOne != 0 && this.state.numberTwo == 0 && this.state.numberThree != 0){
    jumlah = this.state.numberOne - this.state.numberThree,
    alert(jumlah);
  }else if(this.state.numberOne != 0 && this.state.numberTwo != 0 && this.state.numberThree == 0){
    jumlah = this.state.numberOne - this.state.numberTwo,
    alert(jumlah);
  }else if(this.state.numberOne != 0 && this.state.numberTwo != 0 && this.state.numberThree != 0){
    jumlah = this.state.numberOne - this.state.numberThree - this.state.numberTwo,
    alert(jumlah);
  }else if(this.state.numberOne != 0 && this.state.numberTwo == 0 && this.state.numberThree == 0){
    alert("error");
  }else if(this.state.numberOne == 0 && this.state.numberTwo != 0 && this.state.numberThree == 0){
    alert("error");
  }else if(this.state.numberOne == 0 && this.state.numberTwo == 0 && this.state.numberThree != 0){
    alert("error");
  }
};
_kali = () => {
  var jumlah;
  if(this.state.numberOne == 0 && this.state.numberTwo != 0 && this.state.numberThree != 0){
    jumlah = this.state.numberTwo * this.state.numberThree,
    alert(jumlah);
  }else if(this.state.numberOne != 0 && this.state.numberTwo == 0 && this.state.numberThree != 0){
    jumlah = this.state.numberOne * this.state.numberThree,
    alert(jumlah);
  }else if(this.state.numberOne != 0 && this.state.numberTwo != 0 && this.state.numberThree == 0){
    jumlah = this.state.numberOne * this.state.numberTwo,
    alert(jumlah);
  }else if(this.state.numberOne != 0 && this.state.numberTwo != 0 && this.state.numberThree != 0){
    jumlah = this.state.numberOne * this.state.numberThree * this.state.numberTwo,
    alert(jumlah);
  }else if(this.state.numberOne != 0 && this.state.numberTwo == 0 && this.state.numberThree == 0){
    alert("error");
  }else if(this.state.numberOne == 0 && this.state.numberTwo != 0 && this.state.numberThree == 0){
    alert("error");
  }else if(this.state.numberOne == 0 && this.state.numberTwo == 0 && this.state.numberThree != 0){
    alert("error");
  }
};
_bagi = () => {
  var jumlah;
  if(this.state.numberOne == 0 && this.state.numberTwo != 0 && this.state.numberThree != 0){
    jumlah = this.state.numberTwo / this.state.numberThree,
    alert(jumlah);
  }else if(this.state.numberOne != 0 && this.state.numberTwo == 0 && this.state.numberThree != 0){
    jumlah = this.state.numberOne / this.state.numberThree,
    alert(jumlah);
  }else if(this.state.numberOne != 0 && this.state.numberTwo != 0 && this.state.numberThree == 0){
    jumlah = this.state.numberOne / this.state.numberTwo,
    alert(jumlah);
  }else if(this.state.numberOne != 0 && this.state.numberTwo != 0 && this.state.numberThree != 0){
    jumlah = this.state.numberOne / this.state.numberThree / this.state.numberTwo,
    alert(jumlah);
  }else if(this.state.numberOne != 0 && this.state.numberTwo == 0 && this.state.numberThree == 0){
    alert("error");
  }else if(this.state.numberOne == 0 && this.state.numberTwo != 0 && this.state.numberThree == 0){
    alert("error");
  }else if(this.state.numberOne == 0 && this.state.numberTwo == 0 && this.state.numberThree != 0){
    alert("error");
  }
};

onChanged1(text){
  let newText = '';
  let numbers = '0123456789';

  for (var i=0; i < text.length; i++) {
      if(numbers.indexOf(text[i]) > -1 ) {
          newText = newText + text[i];
      }
      else {
          alert("masukan angka");
      }
  }
  this.setState({ numberOne: newText });
};

onChanged2(text){
  let newText = '';
  let numbers = '0123456789';

  for (var i=0; i < text.length; i++) {
      if(numbers.indexOf(text[i]) > -1 ) {
          newText = newText + text[i];
      }
      else {
          alert("masukan angka");
      }
  }
  this.setState({ numberTwo: newText });
};
onChanged3(text){
  let newText = '';
  let numbers = '0123456789';

  for (var i=0; i < text.length; i++) {
      if(numbers.indexOf(text[i]) > -1 ) {
          newText = newText + text[i];
      }
      else {
          alert("masukan angka");
      }
  }
  this.setState({ numberThree: newText });
};

export default App;
 