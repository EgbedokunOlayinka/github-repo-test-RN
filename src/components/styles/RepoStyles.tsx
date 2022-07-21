import React from "react";
import styled from "styled-components/native";
import { IRepoItem } from "../../screens/Home/profile.screen";
import theme from "../../theme";
import AppText from "../AppText";

export const RepoTopBar = styled.View`
  flex-direction: row;
  align-items: center;
  width: 97%;
`;

export const RepoHeaderRight = styled.View`
  margin-left: ${theme.spacing.four};
`;

export const RepoPageContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.customBG};
`;

export const RepoContainer = styled.TouchableOpacity`
  background-color: white;
  padding-vertical: ${theme.spacing.four};
  padding-horizontal: ${theme.spacing.four};
  border-bottom-width: 0.5px;
  border-color: silver;
`;

export const RepoSubText = styled(AppText)``;

export const RepoDetail = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${theme.spacing.three};
`;

export const RepoDetailText = styled(AppText)`
  margin-left: ${theme.spacing.one};
`;

export const RepoDetailSub = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RepoDetailSubRight = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: ${theme.spacing.three};
`;

export const StarredTitle = styled(AppText)`
  margin-top: 1px;
`;
