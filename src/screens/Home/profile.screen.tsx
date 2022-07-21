import { NavigationProp } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useCallback, useMemo } from "react";
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import AppText from "../../components/AppText";
import PinnedRepo from "../../components/PinnedRepo";
import {
  PageContainer,
  TopBar,
  TopBarLeft,
  UserImg,
  UserImgSub,
  UserInfo,
  UserImgLeft,
  UserInfoTop,
  UserText,
  UserLocationSub,
  UserLocationSubRight,
  UserDetail,
  UserDetailText,
  UserFollowBtn,
  UserFollowBtnText,
  PageSpacer,
  BottomBox,
  BottomBoxTitleFlex,
  BottomBoxTitleText,
  RepoListView,
  BottomListView,
  BottomListViewLeft,
  BottomListViewLeftText,
  BottomListViewLeftBox,
  BottomListViewItem,
  RepoListSpacer,
  AppLoaderView,
} from "../../components/styles/ProfileStyles";
import kFormatter from "../../helpers/kFormatter";
import {
  BuildingIcon,
  DotIcon,
  LinkIcon,
  LocationIcon,
  MsgIcon,
  OrgIcon,
  PinIcon,
  PlusIcon,
  ProfileIcon,
  RepoIcon,
  SponsorIcon,
  StarOutlineIcon,
  TwitterIcon,
} from "../../icons";
import BackIcon from "../../icons/BackIcon";
import OptionsIcon from "../../icons/OptionsIcon";
import ShareIcon from "../../icons/ShareIcon";
import theme from "../../theme";
import { IUserProfileRes, IUserRepoRes } from "../../types";
import { HomeStackParamList } from "../../types/stack";

export interface IRepoItem {
  title: string;
  desc: string;
  username: string;
  id: string;
}

type Props = {
  navigation: NavigationProp<HomeStackParamList, "Profile">;
};

const repos: IRepoItem[] = [
  {
    title: "awesome-stuff",
    desc: "lorem lorem m,ormr kmrmn eprkfnej eded",
    username: "wawuu",
    id: "1",
  },
  {
    title: "awesome-stuff",
    desc: "lorem lorem m,ormr kmrmn eprkfnej eded",
    username: "wawuu",
    id: "2",
  },
  {
    title: "awesome-stuff",
    desc: "lorem lorem m,ormr kmrmn eprkfnej eded",
    username: "wawuu",
    id: "3",
  },
  {
    title: "awesome-stuff",
    desc: "lorem lorem m,ormr kmrmn eprkfnej eded",
    username: "wawuu",
    id: "4",
  },
];

const fetchProfile = async (): Promise<IUserProfileRes> =>
  axios
    .get("https://api.github.com/users/sdras")
    .then((response) => response.data)
    .catch((err) => console.log(err));

const fetchStarredRepos = async (): Promise<IUserRepoRes[]> =>
  axios
    .get("https://api.github.com/users/sdras/starred")
    .then((response) => response.data)
    .catch((err) => console.log(err));

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const { data, isLoading } = useQuery(["profile"], fetchProfile);

  const { data: starredData, isLoading: isLoadingStarred } = useQuery(
    ["starred"],
    fetchStarredRepos
  );

  const navToRepos = useCallback(() => {
    navigation.navigate("Repos");
  }, [navigation]);

  const navToStarred = useCallback(() => {
    navigation.navigate("Starred");
  }, [navigation]);

  return isLoading ? (
    <AppLoaderView>
      <ActivityIndicator size="large" />
    </AppLoaderView>
  ) : data ? (
    <PageContainer>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <UserInfo>
          <UserInfoTop>
            <UserImg source={{ uri: data?.avatar_url }} />
            <UserImgLeft>
              <AppText variant="bold" size={20}>
                {data?.name}
              </AppText>
              <UserImgSub color={theme.colors.customGrey}>{data?.login}</UserImgSub>
            </UserImgLeft>
          </UserInfoTop>

          <UserText color={theme.colors.customGrey}>{data?.bio}</UserText>

          <UserDetail>
            <UserLocationSub>
              <BuildingIcon size={16} color={theme.colors.customGrey} />
              <UserDetailText color={theme.colors.customGrey}>{data?.company}</UserDetailText>
            </UserLocationSub>
            <UserLocationSubRight>
              <LocationIcon size={16} color={theme.colors.customGrey} />
              <UserDetailText color={theme.colors.customGrey}>{data?.location}</UserDetailText>
            </UserLocationSubRight>
          </UserDetail>

          <UserDetail>
            <LinkIcon size={16} color={theme.colors.customGrey} />
            <UserDetailText color={theme.colors.customBlack} variant="bold">
              {data?.blog ?? "N/A"}
            </UserDetailText>
          </UserDetail>

          <UserDetail>
            <MsgIcon size={16} color={theme.colors.customGrey} />
            <UserDetailText color={theme.colors.customBlack} variant="bold">
              {data?.email ?? "N/A"}
            </UserDetailText>
          </UserDetail>

          <UserDetail>
            <TwitterIcon size={16} color={theme.colors.customGrey} />
            <UserDetailText color={theme.colors.customBlack} variant="bold">
              @{data?.twitter_username ?? "N/A"}
            </UserDetailText>
          </UserDetail>

          <UserDetail>
            <UserLocationSub>
              <ProfileIcon size={16} color={theme.colors.customGrey} />
              <UserDetailText color={theme.colors.customGrey}>
                <AppText variant="bold">{kFormatter(data?.followers)}</AppText> followers
              </UserDetailText>
            </UserLocationSub>
            <UserLocationSubRight>
              <DotIcon size={16} color={theme.colors.customGrey} />
              <UserDetailText color={theme.colors.customGrey}>
                <AppText variant="bold">{kFormatter(data?.following)}</AppText> following
              </UserDetailText>
            </UserLocationSubRight>
          </UserDetail>

          <UserFollowBtn>
            <PlusIcon size={16} color={theme.colors.customGrey} />
            <UserFollowBtnText color={theme.colors.customGrey}>FOLLOW</UserFollowBtnText>
          </UserFollowBtn>
        </UserInfo>

        <BottomBox>
          <BottomBoxTitleFlex>
            <PinIcon size={20} />
            <BottomBoxTitleText variant="bold">Pinned</BottomBoxTitleText>
          </BottomBoxTitleFlex>

          <RepoListView>
            <FlatList
              data={repos}
              keyExtractor={(item: IRepoItem) => (item as IRepoItem).id}
              renderItem={({ item }: { item: IRepoItem }) => (
                <PinnedRepo username={data?.login} avatar={data?.avatar_url} />
              )}
              horizontal
              ItemSeparatorComponent={() => <RepoListSpacer />}
            />
          </RepoListView>

          <BottomListView>
            <BottomListViewItem onPress={navToRepos}>
              <BottomListViewLeft>
                <BottomListViewLeftBox bg="#333">
                  <RepoIcon size={16} />
                </BottomListViewLeftBox>
                <BottomListViewLeftText>Repositories</BottomListViewLeftText>
              </BottomListViewLeft>
              <AppText>{data?.public_repos ?? 0}</AppText>
            </BottomListViewItem>
            <BottomListViewItem>
              <BottomListViewLeft>
                <BottomListViewLeftBox bg="orange">
                  <OrgIcon size={16} />
                </BottomListViewLeftBox>
                <BottomListViewLeftText>Organizations</BottomListViewLeftText>
              </BottomListViewLeft>
              <AppText>3</AppText>
            </BottomListViewItem>
            <BottomListViewItem onPress={navToStarred}>
              <BottomListViewLeft>
                <BottomListViewLeftBox bg="#FFE171">
                  <StarOutlineIcon size={16} />
                </BottomListViewLeftBox>
                <BottomListViewLeftText>Starred</BottomListViewLeftText>
              </BottomListViewLeft>
              {isLoadingStarred ? (
                <ActivityIndicator />
              ) : (
                <AppText>{starredData?.length ?? 0}</AppText>
              )}
            </BottomListViewItem>
            <BottomListViewItem>
              <BottomListViewLeft>
                <BottomListViewLeftBox bg="pink">
                  <SponsorIcon size={16} />
                </BottomListViewLeftBox>
                <BottomListViewLeftText>Sponsoring</BottomListViewLeftText>
              </BottomListViewLeft>
              <AppText>11</AppText>
            </BottomListViewItem>
          </BottomListView>
        </BottomBox>
      </ScrollView>
    </PageContainer>
  ) : (
    <AppLoaderView>
      <AppText>An error occurred in fetching the data. Please try again</AppText>
    </AppLoaderView>
  );
};

export default ProfileScreen;
