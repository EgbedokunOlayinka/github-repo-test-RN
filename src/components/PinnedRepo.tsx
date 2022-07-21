import React from "react";
import { BiggerDotIcon, StarIcon } from "../icons";
import theme from "../theme";
import {
  PinnedBottomFlex,
  PinnedContainer,
  PinnedFlexText,
  PinnedText,
  PinnedTopFlex,
  PinnedTopFlexRightBox,
} from "./styles/PinnedRepoStyles";
import { RepoDetail, RepoDetailSub, RepoDetailSubRight, RepoDetailText } from "./styles/RepoStyles";

interface Props {
  avatar: string;
  username: string;
}

const PinnedRepo: React.FC<Props> = ({ avatar, username }) => {
  return (
    <PinnedContainer>
      <PinnedTopFlex>
        <PinnedTopFlexRightBox source={{ uri: avatar }} />
        <PinnedFlexText color={theme.colors.customGrey}>{username}</PinnedFlexText>
      </PinnedTopFlex>

      <PinnedText variant="bold">awesome-actions</PinnedText>
      <PinnedText>Lorem ipsum dolor sit amet stuff</PinnedText>

      <RepoDetail>
        <RepoDetailSub>
          <StarIcon size={16} color={theme.colors.customYellow} />
          <RepoDetailText color={theme.colors.customGrey}>64</RepoDetailText>
        </RepoDetailSub>
        <RepoDetailSubRight>
          <BiggerDotIcon size={16} color="green" />
          <RepoDetailText color={theme.colors.customGrey}>Vue</RepoDetailText>
        </RepoDetailSubRight>
      </RepoDetail>
    </PinnedContainer>
  );
};

export default PinnedRepo;
