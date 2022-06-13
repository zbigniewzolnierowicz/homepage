import { styled, css } from "~/stitches.config";

export const limitWidth = css({
  maxWidth: "revert",
  marginInlineStart: "1rem",
  marginInlineEnd: "1rem",
  "@small": {
    maxWidth: "$readableWidth",
    marginInlineStart: "auto",
    marginInlineEnd: "auto",
    paddingInlineStart: "1rem",
    paddingInlineEnd: "1rem"
  }
});

export const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  backgroundColor: "$unbleached-silk",
  padding: "0.33rem",
  b: {
    color: "$seashell",
    style: "solid",
    width: 3,
  },
  "main > & + &": {
    marginBlockStart: "1rem"
  },
});

export const Badge = styled("img", {
  width: "88px",
  height: "31px",
})

export const subheading = css({
  fontSize: "0.75em"
});

export const normalCase = css({
  textTransform: "none"
});

export const fullWidth = css({
  width: "100%",
});

export const textCenter = css({
  textAlign: "center"
})
