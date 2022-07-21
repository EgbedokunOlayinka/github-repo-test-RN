import React from "react";
import { Svg, Path, Circle, Rect, G } from "react-native-svg";

export type IconProps = {
  color?: string;
  size?: number;
};

export const HomeIcon: React.FC<IconProps> = ({ color = "teal", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <Rect x="0" y="0" width={size} height={size} fill="none" stroke="none" />
      <Path
        fill={color}
        d="M12.97 2.59a1.5 1.5 0 0 0-1.94 0l-7.5 6.363A1.5 1.5 0 0 0 3 10.097V19.5A1.5 1.5 0 0 0 4.5 21h4.75a.75.75 0 0 0 .75-.75V14h4v6.25c0 .414.336.75.75.75h4.75a1.5 1.5 0 0 0 1.5-1.5v-9.403a1.5 1.5 0 0 0-.53-1.144l-7.5-6.363z"
      />
    </Svg>
  );
};

export const NotificationIcon: React.FC<IconProps> = ({ color = "teal", size = 40 }) => {
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

export const OptionsIcon: React.FC<IconProps> = ({ color = "teal", size = 40 }) => {
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

export const ProfileIcon: React.FC<IconProps> = ({ color = "teal", size = 40 }) => {
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

export const ShareIcon: React.FC<IconProps> = ({ color = "teal", size = 40 }) => {
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

export const ExploreIcon: React.FC<IconProps> = ({ color = "teal", size = 40 }) => {
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

export const BuildingIcon: React.FC<IconProps> = ({ color = "teal", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <Rect x="0" y="0" width={size} height={size} fill="none" stroke="none" />
      <Path
        fill={color}
        d="M18 2H6c-1.103 0-2 .897-2 2v17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zm0 18H6V4h12v16z"
      />
      <Path
        fill={color}
        d="M8 6h3v2H8zm5 0h3v2h-3zm-5 4h3v2H8zm5 .031h3V12h-3zM8 14h3v2H8zm5 0h3v2h-3z"
      />
    </Svg>
  );
};

export const LocationIcon: React.FC<IconProps> = ({ color = "teal", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <Rect x="0" y="0" width={size} height={size} fill="none" stroke="none" />
      <G fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <Circle cx="12" cy="10" r="3" />
        <Path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8Z" />
      </G>
    </Svg>
  );
};

export const LinkIcon: React.FC<IconProps> = ({ color = "teal", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <Rect x="0" y="0" width={size} height={size} fill="none" stroke="none" />
      <G fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <Path d="M13.544 10.456a4.368 4.368 0 0 0-6.176 0l-3.089 3.088a4.367 4.367 0 1 0 6.177 6.177L12 18.177" />
        <Path d="M10.456 13.544a4.368 4.368 0 0 0 6.176 0l3.089-3.088a4.367 4.367 0 1 0-6.177-6.177L12 5.823" />
      </G>
    </Svg>
  );
};

export const MsgIcon: React.FC<IconProps> = ({ color = "teal", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
      <Rect x="0" y="0" width={size} height={size} fill="none" stroke="none" />
      <Path
        fill={color}
        fill-rule="evenodd"
        d="m1 3.5l.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zm1 1.035V12h12V4.536L8.31 8.9H7.7L2 4.535zM13.03 4H2.97L8 7.869L13.03 4z"
        clip-rule="evenodd"
      />
    </Svg>
  );
};

export const TwitterIcon: React.FC<IconProps> = ({ color = "teal", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <Rect x="0" y="0" width={size} height={size} fill="none" stroke="none" />
      <Path
        fill={color}
        d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z"
      />
    </Svg>
  );
};

export const DotIcon: React.FC<IconProps> = ({ color = "teal", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
      <Rect x="0" y="0" width="16" height="16" fill="none" stroke="none" />
      <Path fill={color} d="M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3z" />
    </Svg>
  );
};

export const PlusIcon: React.FC<IconProps> = ({ color = "teal", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <Rect x="0" y="0" width={size} height={size} fill="none" stroke="none" />
      <Path
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-width="2"
        d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
      />
    </Svg>
  );
};

export const PinIcon: React.FC<IconProps> = ({ color = "teal", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
      <Rect x="0" y="0" width={size} height={size} fill="none" stroke="none" />
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m10.25 10.25l4 4m-12.5-7.5l5-5s1 2 2 3s4.5 2 4.5 2l-6.5 6.5s-1-3.5-2-4.5s-3-2-3-2z"
      />
    </Svg>
  );
};

export const StarIcon: React.FC<IconProps> = ({ color = "yellow", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
      <Rect x="0" y="0" width={size} height={size} fill="none" stroke="none" />
      <Path
        fill={color}
        fill-rule="evenodd"
        d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815l4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97l.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z"
      />
    </Svg>
  );
};

export const BiggerDotIcon: React.FC<IconProps> = ({ color = "yellow", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
      <Circle cx="16" cy="16" r="8" fill={color} />
    </Svg>
  );
};

export const RepoIcon: React.FC<IconProps> = ({ color = "white", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7a.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"
      />
    </Svg>
  );
};

export const StarOutlineIcon: React.FC<IconProps> = ({ color = "white", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815l4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97l.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45l2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084l2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456l-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183l-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694v.001z"
      />
    </Svg>
  );
};

export const OrgIcon: React.FC<IconProps> = ({ color = "white", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25v12.5zM1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.75.75 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.75.75 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75h-3zM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75zM3.75 6a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5zM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75zM7.75 9a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5zM7 6.75A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75zM7.75 3a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5z"
      />
    </Svg>
  );
};

export const SponsorIcon: React.FC<IconProps> = ({ color = "white", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3c0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 0 0 8 13.393a20.561 20.561 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3c-1.373 0-2.609.986-3.029 2.456a.75.75 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666l-.002-.001l-.006-.003l-.018-.01a7.643 7.643 0 0 1-.31-.17a22.075 22.075 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5C0 2.836 2.086 1 4.25 1C5.797 1 7.153 1.802 8 3.02C8.847 1.802 10.203 1 11.75 1C13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 0 1-3.744 2.584l-.018.01l-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 0 1-.69 0L8 14.25z"
      />
    </Svg>
  );
};

export const BackIcon: React.FC<IconProps> = ({ color = "teal", size = 40 }) => {
  return (
    <Svg width={size} height={size} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <Rect x="0" y="0" width={size} height={size} fill="none" stroke="none" />
      <Path
        fill={color}
        fillRule="evenodd"
        d="M10.78 19.03a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 1 1 1.06 1.06L5.81 11.5h14.44a.75.75 0 0 1 0 1.5H5.81l4.97 4.97a.75.75 0 0 1 0 1.06z"
      />
    </Svg>
  );
};
