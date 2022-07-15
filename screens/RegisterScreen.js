import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Input } from "react-native-elements";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const register = () => {
    Alert.alert("Hello");
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text h3 style={{ marginBottom: 50, color: "green" }}>
        Create a RobMess account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Image url (optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
  },
});
