import React from "react";
import styled from "styled-components/native";
import theme from "../../theme";
import AppText from "../AppText";

export const PinnedContainer = styled.TouchableOpacity`
  flex: 1;
  border-color: ${theme.colors.customSilver};
  border-width: 0.5px;
  border-radius: 4px;
  padding: ${theme.spacing.four};
  width: 280px;
`;

export const PinnedTopFlex = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PinnedTopFlexRightBox = styled.Image`
  width: 16px;
  height: 16px;
  border-radius: 50px;
  resize-mode: cover;
`;

export const PinnedFlexText = styled(AppText)`
  margin-left: ${theme.spacing.two};
`;

export const PinnedText = styled(AppText)`
  margin-top: ${theme.spacing.two};
`;
export const PinnedBottomFlex = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${theme.spacing.four};
`;
