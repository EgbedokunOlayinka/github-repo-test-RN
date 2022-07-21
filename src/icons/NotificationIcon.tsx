import React from "react";
import { Svg, Path, Circle, Rect } from "react-native-svg";
import { IconProps } from "./HomeIcon";

const NotificationIcon: React.FC<IconProps> = ({ color = "teal", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <Rect x="0" y="0" width={size} height={size} fill="none" stroke="none" />
      <Path
        fill={color}
        fill-rule="evenodd"
        d="M12 1C8.318 1 5 3.565 5 7v4.539a3.25 3.25 0 0 1-.546 1.803l-2.2 3.299A1.518 1.518 0 0 0 3.519 19H8.5a3.5 3.5 0 1 0 7 0h4.982a1.518 1.518 0 0 0 1.263-2.36l-2.2-3.298A3.25 3.25 0 0 1 19 11.539V7c0-3.435-3.319-6-7-6zM6.5 7c0-2.364 2.383-4.5 5.5-4.5s5.5 2.136 5.5 4.5v4.539c0 .938.278 1.854.798 2.635l2.199 3.299a.017.017 0 0 1 .003.01l-.001.006l-.004.006l-.006.004l-.007.001H3.518l-.007-.001l-.006-.004l-.004-.006l-.001-.007l.003-.01l2.2-3.298a4.75 4.75 0 0 0 .797-2.635V7zM14 19h-4a2 2 0 1 0 4 0z"
      />
    </Svg>
  );
};

export default NotificationIcon;
