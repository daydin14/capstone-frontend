import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function Main(props) {
  const [state, setState] = useState("");
  const [skills, setSkill] = useState([]);

  function skillInputHandler(input) {
    setState(input);
  }

  function addSkillHandler() {
    setSkill((currentSkill) => [...currentSkill, state]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          placeholder="Add New Skill!"
          onChangeText={skillInputHandler}
        />
        <Button title="Add Skill" onPress={addSkillHandler} />
      </View>
      <View style={styles.skills}>
        {skills.map((skill) => (
          <Text key={skill}>{skill}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "skyblue",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "skyblue",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  skills: {
    flex: 5,
  },
});
