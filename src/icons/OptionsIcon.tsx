import React from "react";
import { Svg, Path, Circle, Rect } from "react-native-svg";
import { IconProps } from "./HomeIcon";

const OptionsIcon: React.FC<IconProps> = ({ color = "teal", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
      <Rect x="0" y="0" width={size} height={size} fill="none" stroke="none" />
      <Path
        fill={color}
        d="M9.5 13a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z"
      />
    </Svg>
  );
};

export default OptionsIcon;
