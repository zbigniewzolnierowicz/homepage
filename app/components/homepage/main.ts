import {styled} from "~/stitches.config";
import {Box} from "~/components/homepage/utils";

export const Main = styled("main", {
    [`& > ${Box} + ${Box}`]: {
        marginBlockStart: "1rem",
    },
});

export const AboutMyself = styled("section", {
    display: "grid",
    gridTemplateColumns: "1fr",
    marginBlockStart: "1rem",
    marginBlockEnd: "1rem",
    gap: "0.5rem",

    "@large": {
        gridTemplateColumns: "minmax(auto, 300px) 1fr"
    }
});

export const WhoAmI = styled(Box, {
    alignItems: "flex-start",
    "& :is(h2, h3, h4)": {
        marginBlockStart: "0.3rem",
        marginBlockEnd: "0.3rem",
    }
});

export const InfoList = styled("dl", {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridAutoRows: "min-content",
    marginInlineStart: "auto",
    marginInlineEnd: "auto",
    maxWidth: "350px",

    "& > dt": {
        textShadow: "$smallTextShadow"
    }
});

export const FriendsList = styled("ul", {
    listStyle: "none",
    width: "100%",
    maxWidth: "350px",
    marginBlockStart: "0.33rem",
    marginBlockEnd: "0.33rem",
    marginInlineStart: "auto",
    marginInlineEnd: "auto",
    paddingInlineStart: 0,
});
