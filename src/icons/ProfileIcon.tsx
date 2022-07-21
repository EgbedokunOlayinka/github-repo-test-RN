import React from "react";
import { Svg, Path, Circle, Rect } from "react-native-svg";
import { IconProps } from "./HomeIcon";

const ProfileIcon: React.FC<IconProps> = ({ color = "teal", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <Rect x="0" y="0" width={size} height={size} fill="none" stroke="none" />
      <Path
        fill={color}
        fill-rule="evenodd"
        d="M12 2.5a5.5 5.5 0 0 0-3.096 10.047a9.005 9.005 0 0 0-5.9 8.18a.75.75 0 0 0 1.5.045a7.5 7.5 0 0 1 14.993 0a.75.75 0 1 0 1.499-.044a9.005 9.005 0 0 0-5.9-8.181A5.5 5.5 0 0 0 12 2.5zM8 8a4 4 0 1 1 8 0a4 4 0 0 1-8 0z"
      />
    </Svg>
  );
};

export default ProfileIcon;
