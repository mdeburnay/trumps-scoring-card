// CORE IMPORTS
import { Pressable, Text } from "react-native";

// STYLES
import { styles } from "../styles";

type IButtonProps = {
  onPress: () => void;
  title: string;
};

export const Button = ({ onPress, title }: IButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};
