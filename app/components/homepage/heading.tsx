import {styled} from "~/stitches.config";

export const Heading = styled("h1", {
    variants: {
        size: {
            "h1": {
                fontSize: "$h1"
            },
            "h2": {
                fontSize: "$h2"
            },
            "h3": {
                fontSize: "$h3"
            },
            "h4": {
                fontSize: "$h4"
            },
        },
        textShadow: {
            "small": {
                textShadow: "$smallTextShadow",
            },
            "big": {
                textShadow: "$headingTextShadow",
            }
        }
    },
    defaultVariants: {
        size: "h1",
        textShadow: "big"
    }
})
