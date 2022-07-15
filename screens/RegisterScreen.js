import { StyleSheet, View, KeyboardAvoidingView, Alert } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Text, Input, Image, Button } from "react-native-elements";

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
      <Image
        source={{
          uri: "https://www.freeiconspng.com/uploads/message-icon-png-20.png",
        }}
        style={{ width: 150, height: 150, marginBottom: 20 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.inputContainer}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.inputContainer}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.inputContainer}
        />
        <Input
          placeholder="Image url (optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
          style={styles.inputContainer}
        />
      </View>
      <Button
        onPress={register}
        title="Register"
        containerStyle={styles.button}
      />
      <View style={{ marginBottom: 10 }} />
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
