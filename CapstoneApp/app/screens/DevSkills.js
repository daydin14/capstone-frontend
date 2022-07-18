import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

function DevSkills(props) {
  const [add, added] = useState(true);

  return (
    <View style={styles.background}>
      <Text>Hello World!</Text>
      <TextInput style={styles.input} defaultValue="Add New Skill Here!" />

      <Button
        onPress={() => {
          added(false);
        }}
        disabled={!add}
        title={add ? "Add New Skill" : "Skill Added"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    alignItems: "center",
    width: "50%",
    height: 40,
    borderColor: "skyblue",
    borderWidth: 1,
  },
});

export default DevSkills;
