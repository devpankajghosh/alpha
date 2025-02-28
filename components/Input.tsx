import React, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  Image,
  KeyboardTypeOptions,
  TextInputProps,
  Pressable,
} from "react-native";
import { useController, Control } from "react-hook-form";

import { EyeOff, Eye } from "@/constants/icons";

interface InputProps extends TextInputProps {
  label?: string;
  name: string;
  type?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  containerClassName?: string;
  className?: string;
  control: Control<any>;
  rules?: object;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "default",
  secureTextEntry = false,
  containerClassName = "",
  className = "",
  control,
  rules = {},
  ...props
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
    defaultValue: "",
    rules,
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View className={`relative ${containerClassName}`}>
      {label && <Text className="mb-2 text-lg font-medium">{label}</Text>}

      <View className="flex-row w-full border-2 border-gray-200 rounded-lg h-14 px-4 items-center">
        <TextInput
          value={field.value}
          onChangeText={field.onChange}
          keyboardType={type}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType={secureTextEntry ? "password" : "none"}
          className={`flex-1 text-lg placeholder:text-gray-400 ${className}`}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          {...props}
        />

        {secureTextEntry && (
          <Pressable
            hitSlop={10}
            onPress={() => setIsPasswordVisible((prev) => !prev)}
          >
            <Image
              source={isPasswordVisible ? Eye : EyeOff}
              className="w-6 h-6"
            />
          </Pressable>
        )}
      </View>

      {error?.message && (
        <Text className="text-red-500 absolute top-full">{error.message}</Text>
      )}
    </View>
  );
};

export default Input;
