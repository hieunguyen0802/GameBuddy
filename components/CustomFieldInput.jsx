import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const CustomFieldInput = ({
  fieldLabel,
  iconComponent,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}
    >
      {iconComponent}
      {inputType === "password" ? (
        <TextInput
          placeholder={fieldLabel}
          style={{ marginLeft: 5, flex: 1, paddingVertical: 0 }}
          secureTextEntry={true}
          keyboardType={keyboardType}
        />
      ) : (
        <TextInput
          placeholder={fieldLabel}
          keyboardType={keyboardType}
          style={{ marginLeft: 5, flex: 1, paddingVertical: 0 }}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{ fontWeight: "700", color: "#AD40AF" }}>{fieldButtonLabel} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomFieldInput;
