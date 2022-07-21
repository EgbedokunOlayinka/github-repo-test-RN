import React from "react";
import { TouchableOpacity } from "react-native";
import { OptionsIcon, ShareIcon } from "../icons";
import BackIcon from "../icons/BackIcon";
import theme from "../theme";
import { TopBar, TopBarLeft } from "./styles/ProfileStyles";

const ProfileHeader = () => {
  return (
    <TopBar>
      <TouchableOpacity>
        <BackIcon size={20} color={theme.colors.customBlack} />
      </TouchableOpacity>
      <TopBarLeft>
        <TouchableOpacity>
          <ShareIcon size={20} color={theme.colors.customBlue} />
        </TouchableOpacity>
        <TouchableOpacity>
          <OptionsIcon size={20} color={theme.colors.customBlue} />
        </TouchableOpacity>
      </TopBarLeft>
    </TopBar>
  );
};

export default ProfileHeader;
