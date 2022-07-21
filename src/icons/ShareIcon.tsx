import React from "react";
import { Svg, Path, Circle, Rect } from "react-native-svg";
import { IconProps } from "./HomeIcon";

const ShareIcon: React.FC<IconProps> = ({ color = "teal", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <Rect x="0" y="0" width={size} height={size} fill="none" stroke="none" />
      <Path
        fill={color}
        fillRule="evenodd"
        d="M20 5.5a3.5 3.5 0 0 1-6.062 2.385l-5.112 3.021a3.497 3.497 0 0 1 0 2.188l5.112 3.021a3.5 3.5 0 1 1-.764 1.29l-5.112-3.02a3.5 3.5 0 1 1 0-4.77l5.112-3.021v.001A3.5 3.5 0 1 1 20 5.5zm-1.5 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0zM5.5 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4zm13 4.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0z"
      />
    </Svg>
  );
};

export default ShareIcon;
