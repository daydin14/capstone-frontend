import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";

function DevSkills(props) {
  const [add, added] = useState(true);
  const [text, setText] = useState("");

  return (
    <View style={styles.background}>
      <Text style={styles.message}>
        Welcome to my Capstone Project with General Asssembly. My Name is David
        Aydin and I am a software engineer. This is my small React Native
        application that mimics our dev skills lab that we did in vanilla
        JavaScript and regular React. The basis for the dev skills lab is an
        application where a user can input a skill and add it a skills list.
        This list would be displayed on the main page of the app and update the
        new skill. Finally, along with each skill being created, a delete button
        would coexist, to allow a user to remove said skill from the list.
      </Text>
      <View style={styles.devbox}>
        <Text style={styles.skill}>{text}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Here!"
          onChangeText={(newSkill) => setText(newSkill)}
          defaultValue={text}
        />
        <Button
          onPress={() => {
            skills.push({ text });
            added(false);
          }}
          disabled={!add}
          title={add ? "Add Skill" : "Skill Added"}
        />
        <ScrollView>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
          <Text>Hello World</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  message: {
    position: "absolute",
    top: 50,
    textAlign: "center",
    fontSize: 12,
    color: "olive",
    borderWidth: 3,
    borderColor: "skyblue",
    borderRadius: 25,
    padding: 15,
    left: 20,
    right: 20,
  },

  input: {
    alignItems: "center",
    height: 40,
    width: "70%",
    borderColor: "skyblue",
    borderWidth: 3,
    borderRadius: 10,
    textAlign: "center",
  },

  skill: {
    backgroundColor: "pink",
    height: 30,
    color: "olive",
    fontSize: "20",
  },

  devbox: {
    width: "80%",
    position: "absolute",
    top: 300,
  },
});

export default DevSkills;
