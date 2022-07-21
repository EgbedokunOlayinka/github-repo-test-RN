import { NavigationProp } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl } from "react-native";
import AppText from "../../components/AppText";
import {
  PinnedFlexText,
  PinnedTopFlex,
  PinnedTopFlexRightBox,
} from "../../components/styles/PinnedRepoStyles";
import { AppLoaderView } from "../../components/styles/ProfileStyles";
import {
  RepoContainer,
  RepoDetail,
  RepoDetailSub,
  RepoDetailSubRight,
  RepoDetailText,
  RepoPageContainer,
  RepoSubText,
  StarredTitle,
} from "../../components/styles/RepoStyles";
import kFormatter from "../../helpers/kFormatter";
import { BiggerDotIcon, StarIcon } from "../../icons";
import theme from "../../theme";
import { IUserRepoRes } from "../../types";
import { HomeStackParamList } from "../../types/stack";

type Props = {
  navigation: NavigationProp<HomeStackParamList, "Starred">;
};

const fetchStarredRepos = async (): Promise<IUserRepoRes[]> =>
  axios
    .get("https://api.github.com/users/sdras/starred")
    .then((response) => response.data)
    .catch((err) => console.log(err));

const StarredScreen: React.FC<Props> = () => {
  const { data, isLoading, refetch } = useQuery(["starred"], fetchStarredRepos);

  const [refreshing, setRefreshing] = useState(false);

  return isLoading ? (
    <AppLoaderView>
      <ActivityIndicator size="large" />
    </AppLoaderView>
  ) : data ? (
    <RepoPageContainer>
      {refreshing ? <ActivityIndicator /> : null}
      <FlatList
        data={data}
        keyExtractor={(item: IUserRepoRes) => (item as IUserRepoRes).id}
        renderItem={({ item }: { item: IUserRepoRes }) => (
          <RepoContainer>
            <PinnedTopFlex>
              <PinnedTopFlexRightBox source={{ uri: item?.owner?.avatar_url }} />
              <PinnedFlexText color={theme.colors.customGrey}>{item?.owner.login}</PinnedFlexText>
            </PinnedTopFlex>
            <StarredTitle variant="bold" size={16}>
              {item?.name}
            </StarredTitle>
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
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refetch} />}
      />
    </RepoPageContainer>
  ) : (
    <AppLoaderView>
      <AppText>An error occurred in fetching the data. Please try again</AppText>
    </AppLoaderView>
  );
};

export default StarredScreen;
