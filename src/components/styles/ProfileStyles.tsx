import React from "react";
import styled from "styled-components/native";
import theme from "../../theme";
import AppText from "../AppText";

export const AppLoaderView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const PageContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.customBG};
`;

export const PageSpacer = styled.View`
  width: 100%;
  height: ${theme.spacing.three};
  background-color: ${theme.colors.customBG};
`;

export const TopBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 97%;
`;

export const TopBarLeft = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 50px;
`;

export const UserInfo = styled.View`
  padding-top: ${theme.spacing.four};
  padding-horizontal: ${theme.spacing.four};
  padding-bottom: ${theme.spacing.three};
  background-color: white;
`;

export const UserInfoTop = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  resize-mode: cover;
`;

export const UserImgLeft = styled.View`
  margin-left: ${theme.spacing.four};
  justify-content: flex-end;
`;

export const UserImgSub = styled(AppText)``;

export const UserText = styled(AppText)`
  margin-top: ${theme.spacing.three};
`;

export const UserDetail = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${theme.spacing.three};
`;

export const UserLocationSub = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserLocationSubRight = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: ${theme.spacing.three};
`;

export const UserDetailText = styled(AppText)`
  margin-left: ${theme.spacing.one};
`;

export const UserFollowBtn = styled.TouchableOpacity`
  width: 100%;
  border: 0.5px solid ${theme.colors.customSilver};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-vertical: 10px;
  margin-top: ${theme.spacing.three};
  border-radius: 4px;
`;

export const UserFollowBtnText = styled(AppText)`
  margin-left: ${theme.spacing.one};
`;

export const BottomBox = styled.View`
  margin-vertical: ${theme.spacing.four};
  background-color: white;
  padding-vertical: ${theme.spacing.three};
`;

export const BottomBoxTitleFlex = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${theme.spacing.four};
`;

export const BottomBoxTitleText = styled(AppText)`
  margin-left: ${theme.spacing.three};
`;

export const RepoListView = styled.View`
  margin-vertical: ${theme.spacing.four};
  padding-horizontal: ${theme.spacing.four};
`;

export const RepoListSpacer = styled.View`
  width: ${theme.spacing.four};
`;

export const BottomListView = styled.View`
  padding-horizontal: ${theme.spacing.four};
  padding-vertical: -8px;
  border-top-width: 0.5px;
  border-top-color: ${theme.colors.customSilver};
`;

export const BottomListViewItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 12px;
`;

export const BottomListViewLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BottomListViewLeftBox = styled.View<{ bg: string }>`
  width: 28px;
  height: 28px;
  background-color: ${(props) => props.bg};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const BottomListViewLeftText = styled(AppText)`
  margin-left: ${theme.spacing.three};
`;
