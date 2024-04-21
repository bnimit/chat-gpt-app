import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../constants/colors";
import { Feather } from "@expo/vector-icons";

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textbox} placeholder="Type a message.." />
        <TouchableOpacity styles={styles.sendButton}>
          <Feather name="send" size={18} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyBg,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 20,
  },
  sendButton: {
    backgroundColor: colors.primary,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});
