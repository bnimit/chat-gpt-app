import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";
import { Feather } from "@expo/vector-icons";
import KeyboardAvoidingViewContainer from "../components/KeyboardAvoidingViewContainer";

export default function ChatScreen() {
  return (
    <KeyboardAvoidingViewContainer>
      <View style={styles.container}>
        <View style={styles.messagesContainer} />
        <View style={styles.inputContainer}>
          <TextInput style={styles.textbox} placeholder="Type a message.." />
          <TouchableOpacity style={styles.sendButton}>
            <Feather name="send" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingViewContainer>
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
    width: 35,
    height: 35,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  textbox: {
    flex: 1,
  },
  messagesContainer: {
    flex: 1,
  },
});
