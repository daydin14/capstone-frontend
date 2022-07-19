import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          placeholder="Add New Skill!"
          onChangeText={skillInputHandler}
          value={state}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="Add Skill" onPress={addSkillHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "lightyellow",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "skyblue",
    backgroundColor: "skyblue",
    color: "olive",
    borderRadius: 6,
    width: "100%",
    padding: 8,
  },

  buttons: {
    marginTop: 16,
    flexDirection: "row",
  },

  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default SkillInput;
