import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { BackIcon } from "../icons";
import theme from "../theme";
import { HomeStackParamList } from "../types/stack";
import AppText from "./AppText";
import { RepoHeaderRight, RepoTopBar } from "./styles/RepoStyles";

const StarredHeader = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList, "Starred">>();

  return (
    <RepoTopBar>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackIcon size={20} color={theme.colors.customBlack} />
      </TouchableOpacity>
      <RepoHeaderRight>
        <AppText>sdras</AppText>
        <AppText variant="bold" size={20}>
          Starred
        </AppText>
      </RepoHeaderRight>
    </RepoTopBar>
  );
};

export default StarredHeader;
