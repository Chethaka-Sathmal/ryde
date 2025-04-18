import { ComponentType } from "react";
import {
  TextInput,
  TextInputProps,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

declare interface CustomInputFieldProps extends TextInputProps {
  label?: string;
  Icon?: ComponentType<any>;
  containerStyles?: string;
  inputFieldStyles?: string;
  inputTextStyles?: string;
}

export default function CustomInputField({
  label,
  Icon,
  containerStyles,
  inputFieldStyles,
  inputTextStyles,
  secureTextEntry = false,
  ...props
}: CustomInputFieldProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className={`mt-[3vh] w-full ${containerStyles}`}>
          <Text className="text-black font-jakarta-semibold text-xl">
            {label}
          </Text>
          <View
            className={`flex-row rounded-full bg-neutral-100 px-[3vw] mt-[1vh] ${inputFieldStyles}`}
          >
            {Icon && <Icon />}
            <TextInput
              {...props}
              className={`mx-[2vw] text-lg ${inputTextStyles}`}
              secureTextEntry={secureTextEntry}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
