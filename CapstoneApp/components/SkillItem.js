import { StyleSheet, View, Text } from "react-native";

function SkillItem(props) {
  return (
    <View style={styles.skill}>
      <Text style={styles.skillText}>{props.text}</Text>
    </View>
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
