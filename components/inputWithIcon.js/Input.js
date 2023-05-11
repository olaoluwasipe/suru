import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { Lock, Visibilty } from "../../assets/icons/Icons";
import styles from "./styles";

const Input = ({ placeholder, onChangeText, value }) => {
  const [hidePassword, setHidePassword] = useState(true)

  const handleHide = () => {
    setHidePassword((current) => !current)
  }
  return (
    <View style={styles.inputWrapper}>
      <View style={styles.lockWrapper}>
        <Lock />
      </View>
      <TextInput
        style={styles.input}
        cursorColor={'#000'}
        secureTextEntry={hidePassword}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        // maxLength={30}
      />
      <View onStartShouldSetResponder={handleHide} style={styles.visibilityWrapper}>
          <Visibilty onClick={handleHide}/>
      </View>
    </View>
  );
};

export default Input;
