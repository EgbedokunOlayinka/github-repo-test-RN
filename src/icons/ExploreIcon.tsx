import React from "react";
import { Svg, Path, Circle, Rect } from "react-native-svg";
import { IconProps } from "./HomeIcon";

const ExploreIcon: React.FC<IconProps> = ({ color = "teal", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <Rect x="0" y="0" width={size} height={size} fill="none" stroke="none" />
      <Path
        fill={color}
        fillRule="evenodd"
        d="M.408 15.13a2 2 0 0 1 .59-2.642L17.038 1.33a2 2 0 0 1 2.85.602l2.828 4.644a2 2 0 0 1-.851 2.847l-17.762 8.43a2 2 0 0 1-2.59-.807L.408 15.13zm5.263-4.066l7.842-5.455l2.857 4.76l-8.712 4.135l-1.987-3.44zm-1.235.86L1.854 13.72a.5.5 0 0 0-.147.66l1.105 1.915a.5.5 0 0 0 .648.201l2.838-1.347l-1.862-3.225zm13.295-2.2L14.747 4.75l3.148-2.19a.5.5 0 0 1 .713.151l2.826 4.644a.5.5 0 0 1-.212.712l-3.49 1.656z"
      />
      <Path
        fill={color}
        d="M17.155 22.87a.75.75 0 0 0 .226-1.036l-4-6.239a.75.75 0 0 0-.941-.278l-2.75 1.25a.75.75 0 0 0-.318.274l-3.25 4.989a.75.75 0 0 0 1.256.819l3.131-4.806l.51-.232v5.64a.75.75 0 1 0 1.5 0v-6.22l3.6 5.613a.75.75 0 0 0 1.036.226z"
      />
    </Svg>
  );
};

export default ExploreIcon;
