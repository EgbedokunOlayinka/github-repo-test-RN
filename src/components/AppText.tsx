import React, { useMemo } from "react";
import { Text, TextProps } from "react-native";

type Props = TextProps & {
  variant?: "bold" | "regular";
  color?: string;
  size?: number;
};

const AppText: React.FC<Props> = ({
  children,
  variant = "regular",
  color = "black",
  size = 16,
  style,
  ...props
}) => {
  const fontWeight: { fontWeight: "400" | "700" } = useMemo(() => {
    if (variant === "bold") {
      return { fontWeight: "700" };
    } else {
      return { fontWeight: "400" };
    }
  }, [variant]);

  const fontColor = useMemo(() => {
    return { color };
  }, [color]);

  const fontSize = useMemo(() => {
    return { fontSize: size };
  }, [size]);

  return (
    <Text {...props} style={[fontWeight, fontColor, fontSize, style]}>
      {children}
    </Text>
  );
};

export default AppText;
