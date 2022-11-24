// imports
import React from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

// local imports
// import DismissKeyboardHoc from './DismissKeyboard.hoc';

// styles
import AppStyles from './App.styles';

const App = () => (
  <SafeAreaView style={AppStyles.appContainer}>
    <View style={AppStyles.appTextContainer}>
      <TextInput placeholder="Enter First Name" keyboardType="default" />
    </View>
    <View style={AppStyles.appTextContainer}>
      <TextInput placeholder="Enter Last Name" keyboardType="default" />
    </View>
    <View style={AppStyles.appTextContainer}>
      <TextInput placeholder="Enter Age" keyboardType="numeric" />
    </View>
  </SafeAreaView>
);

// 1. Using ScrollView
// const App = () => (
//   <SafeAreaView style={AppStyles.appContainer}>
//     <ScrollView keyboardShouldPersistTaps="handled">
//       <View style={AppStyles.appTextContainer}>
//         <TextInput placeholder="Enter First Name" keyboardType="default" />
//       </View>
//       <View style={AppStyles.appTextContainer}>
//         <TextInput placeholder="Enter Last Name" keyboardType="default" />
//       </View>
//       <View style={AppStyles.appTextContainer}>
//         <TextInput placeholder="Enter Age" keyboardType="numeric" />
//       </View>
//     </ScrollView>
//   </SafeAreaView>
// );

// 2. Using TouchWithoutFeedback
// const App = () => (
//   <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
//     <SafeAreaView style={AppStyles.appContainer}>
//       <View style={AppStyles.appTextContainer}>
//         <TextInput placeholder="Enter First Name" keyboardType="default" />
//       </View>
//       <View style={AppStyles.appTextContainer}>
//         <TextInput placeholder="Enter Last Name" keyboardType="default" />
//       </View>
//       <View style={AppStyles.appTextContainer}>
//         <TextInput placeholder="Enter Age" keyboardType="numeric" />
//       </View>
//     </SafeAreaView>
//   </TouchableWithoutFeedback>
// );

// 3. DismissKeyboard HOC
// const App = () => (
//   <DismissKeyboardHoc>
//     <SafeAreaView style={AppStyles.appContainer}>
//       <View style={AppStyles.appTextContainer}>
//         <TextInput placeholder="Enter First Name" keyboardType="default" />
//       </View>
//       <View style={AppStyles.appTextContainer}>
//         <TextInput placeholder="Enter Last Name" keyboardType="default" />
//       </View>
//       <View style={AppStyles.appTextContainer}>
//         <TextInput placeholder="Enter Age" keyboardType="numeric" />
//       </View>
//     </SafeAreaView>
//   </DismissKeyboardHoc>
// );

export default App;
