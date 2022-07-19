import { StyleSheet, View, Text, Pressable } from "react-native";

function SkillItem(props) {
  return (
    <View style={styles.skill}>
      <Pressable
        onPress={props.onDeleteSkill.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedSkill}
      >
        <Text style={styles.skillText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  skill: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "skyblue",
  },
  pressedSkill: {
    opacity: 0.5,
  },
  skillText: {
    color: "olive",
    padding: 8,
  },
});

export default SkillItem;
