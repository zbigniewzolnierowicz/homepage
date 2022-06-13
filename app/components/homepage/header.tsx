import { styled } from "~/stitches.config";
import { Box } from "./utils";

export const AvatarBoxImage = styled("img", {});

export const AvatarBox = styled(Box, {
  width: "$full",
  maxWidth: 300,
  minWidth: 0,
  height: "auto",
  padding: "0.5rem",
  [`& ${AvatarBoxImage}`]: {
    display: "block",
  }
});

export const TitleBox = styled(Box, {
  padding: "0.33rem",
  alignItems: "center",
  justifyContent: "center",
  "& h1": {
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  }
});

export const Header = styled("header", {
  display: "grid",
  gridTemplateRows: "repeat(2, auto)",
  gridTemplateAreas: `
    "avatar"
    "title"
  `,
  gap: "1rem",
  minWidth: 0,
  minHeight: 0,
  overflow: "hidden",
  marginBlockStart: "1rem",
  marginBlockEnd: "1rem",
  [`& ${AvatarBox}`]: {
    gridArea: "avatar",
    width: "$full",
    height: "fit-content",
    justifySelf: "center",
    "& img": {
      width: "$full",
      height: "auto",
    },
  },
  [`& ${TitleBox}`]: {
    gridArea: "title",
  },
  '@large': {
    gridTemplateColumns: "1fr 3fr",
    gridTemplateAreas: `"avatar title"`,
  },
});
