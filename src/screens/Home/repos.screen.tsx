import { NavigationProp } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AppText from "../../components/AppText";
import { AppLoaderView } from "../../components/styles/ProfileStyles";
import {
  RepoContainer,
  RepoDetail,
  RepoDetailSub,
  RepoDetailSubRight,
  RepoDetailText,
  RepoPageContainer,
  RepoSubText,
} from "../../components/styles/RepoStyles";
import kFormatter from "../../helpers/kFormatter";
import { BiggerDotIcon, DotIcon, StarIcon } from "../../icons";
import theme from "../../theme";
import { IUserRepoRes } from "../../types";
import { HomeStackParamList } from "../../types/stack";

type Props = {
  navigation: NavigationProp<HomeStackParamList, "Repos">;
};

const fetchRepos = async (): Promise<IUserRepoRes[]> =>
  axios
    .get("https://api.github.com/users/sdras/repos")
    .then((response) => response.data)
    .catch((err) => console.log(err));

const ReposScreen: React.FC<Props> = ({ navigation }) => {
  const { data, isLoading } = useQuery(["repos"], fetchRepos);

  return isLoading ? (
    <AppLoaderView>
      <ActivityIndicator size="large" />
    </AppLoaderView>
  ) : data ? (
    <RepoPageContainer>
      <FlatList
        data={data}
        keyExtractor={(item: IUserRepoRes) => (item as IUserRepoRes).id}
        renderItem={({ item }: { item: IUserRepoRes }) => (
          <RepoContainer>
            <AppText variant="bold" size={16}>
              {item?.name}
            </AppText>
            {item?.description ? <RepoSubText>{item?.description}</RepoSubText> : null}

            <RepoDetail>
              <RepoDetailSub>
                <StarIcon size={16} color={theme.colors.customYellow} />
                <RepoDetailText color={theme.colors.customGrey}>
                  {kFormatter(item?.stargazers_count)}
                </RepoDetailText>
              </RepoDetailSub>
              {item?.language ? (
                <RepoDetailSubRight>
                  <BiggerDotIcon size={16} color="green" />
                  <RepoDetailText color={theme.colors.customGrey}>{item?.language}</RepoDetailText>
                </RepoDetailSubRight>
              ) : (
                <></>
              )}
            </RepoDetail>
          </RepoContainer>
        )}
      />
    </RepoPageContainer>
  ) : (
    <AppLoaderView>
      <AppText>An error occurred in fetching the data. Please try again</AppText>
    </AppLoaderView>
  );
};

export default ReposScreen;
