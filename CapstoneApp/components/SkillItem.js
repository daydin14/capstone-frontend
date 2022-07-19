import { StyleSheet, View, Text, Pressable } from "react-native";

function SkillItem(props) {
  return (
    <Pressable onPress={props.onDeleteSkill.bind(this, props.id)}>
      <View style={styles.skill}>
        <Text style={styles.skillText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  skill: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "skyblue",
  },

  skillText: {
    color: "olive",
  },
});

export default SkillItem;
