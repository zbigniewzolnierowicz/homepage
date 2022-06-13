import {css, styled} from "~/stitches.config";
import {Box} from "~/components/homepage/utils";

const CopyrightLicenseSectionBase = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    "& > a": {
        display: "flex",
        "@small": {
            marginBlockStart: 0,
        },
    },

});

export const Footer = styled("footer", {
    display: "grid",
    gridTemplateColumns: "auto",
    gridTemplateRows: "repeat(3, auto)",
    gridTemplateAreas: `
        "badges"
        "copyright"
        "license"
    `,
    gap: "0.5rem",
    marginBlockStart: "1rem",
    marginBlockEnd: "1rem",
    fontSize: "0.7rem",

    "@small": {
        gridTemplateColumns: "auto 1fr",
        gridTemplateRows: "auto auto",
        gridTemplateAreas: `
            "badges     badges"
            "copyright license"
        `,
    }
});

export const CopyrightSection = styled(Box, {
    ...CopyrightLicenseSectionBase,
    [`${Footer} &`]: {
        gridArea: "copyright",
    },

});

export const LicenseSection = styled(Box, {
    ...CopyrightLicenseSectionBase,
    [`${Footer} &`]: {
        gridArea: "license",
    },
});

export const BadgesSection = styled(Box, {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(90px, auto))",
    gap: "0.2rem",
    width: "$full",
    justifyContent: "center",
    [`${Footer} &`]: {
        gridArea: "badges",
    },
    "& img": {
        width: "88px",
        height: "31px",
    }
});
