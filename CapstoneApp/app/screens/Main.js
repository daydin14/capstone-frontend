import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";

import SkillItem from "../../components/SkillItem";
import SkillInput from "../../components/SkillInput";

export default function Main(props) {
  const [skills, setSkill] = useState([]);

  function addSkillHandler(state) {
    setSkill((currentSkill) => [
      ...currentSkill,
      { text: state, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <SkillInput onAddSkill={addSkillHandler} />
      <View style={styles.skills}>
        <FlatList
          data={skills}
          renderItem={(itemData) => {
            return <SkillItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
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

  skills: {
    flex: 5,
  },
});
