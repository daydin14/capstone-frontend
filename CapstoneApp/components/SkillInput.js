import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";

function SkillInput(props) {
  const [state, setState] = useState("");

  function skillInputHandler(input) {
    setState(input);
  }

  function addSkillHandler() {
    props.onAddSkill(state);
    setState("");
  }

  return (
    <View style={styles.input}>
      <TextInput
        style={styles.textInput}
        placeholder="Add New Skill!"
        onChangeText={skillInputHandler}
        value={state}
      />
      <Button title="Add Skill" onPress={addSkillHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default SkillInput;
