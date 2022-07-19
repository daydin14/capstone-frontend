import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";

import SkillItem from "../../components/SkillItem";
import SkillInput from "../../components/SkillInput";

export default function Main(props) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [skills, setSkill] = useState([]);

  function startAddSkillHandler() {
    setModalIsVisible(true);
  }

  function endAddSkillHandler() {
    setModalIsVisible(false);
  }

  function addSkillHandler(state) {
    setSkill((currentSkill) => [
      ...currentSkill,
      { text: state, id: Math.random().toString() },
    ]);
    endAddSkillHandler();
  }

  function deleteSkillHander(id) {
    setSkill((currentSkill) => {
      return currentSkill.filter((skill) => skill.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Skill"
        color="skyblue"
        onPress={startAddSkillHandler}
      />
      <SkillInput
        visible={modalIsVisible}
        onAddSkill={addSkillHandler}
        onCancel={endAddSkillHandler}
      />
      <View style={styles.skills}>
        <FlatList
          data={skills}
          renderItem={(itemData) => {
            return (
              <SkillItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteSkill={deleteSkillHander}
              />
            );
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
    backgroundColor: "lightyellow",
  },

  skills: {
    flex: 5,
  },
});
