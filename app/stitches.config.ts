import {createStitches} from '@stitches/react'
import type {Property} from '@stitches/react/types/css'

type BInput = {
    style: Property.BorderStyle,
    width: Property.BorderWidth,
    color: Property.BorderColor
};

export const { styled, createTheme, globalCss, getCssText, theme, css } =
  createStitches({
      theme: {
          colors: {
              "black": "#070707",
              "white": "#ffffff",
              "unbleached-silk": "#fcded0",
              "seashell": "#FEF2ED",
              "gunmetal": "#293241",
              "paradise-pink": "#EA526F",
              "accent": "$paradise-pink",
          },
          fontSizes: {
              main: "20px",
              h1: "40px",
              h2: "40px",
              h3: "30px",
              h4: "20px",
          },
          fonts: {
              main: "'PxPlus IBM VGA8', 'Courier New', Courier, monospace"
          },
          sizes: {
              full: "100%",
              readableWidth: "50rem",
          },
          shadows: {
              headingTextShadow: "2px 1px #EA526F",
              smallTextShadow: "0px 1px #EA526F",
          }
      },
      media: {
          small: "screen and (min-width: 30em)",
          large: "screen and (min-width: 50em)"
      },
      utils: {
          b: ({style, width, color}: BInput) => ({
              borderStyle: style,
              borderWidth: width,
              borderColor: color,
          })
      }
  })

export const globalStyles = globalCss({
    "*": {
        boxSizing: "border-box",
        textTransform: "lowercase",
    },
    "html, body": {
        backgroundColor: "$unbleached-silk",
        backgroundImage: 'url("/img/bg.png")',
    },
    "html, body, h1, h2, h3, h4, p, span": {
        "margin": 0
    },
    "h1, h2, h3, h4": {
        fontWeight: 400,
    },
    "ul, dl, dd, dt": {
        listStyle: "none",
        padding: 0,
        margin: 0,
    },
    ":root": {
        fontSize: "$main",
        fontFamily: "$main"
    },
    "p": {
        fontSize: "$main",
    },
    "h1": {
        fontSize: "$h1",
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
    "ul": {
        listStyle: "outside",
        marginBlockStart: "0.33em",
        marginBlockEnd: "0.33em",
        paddingInlineStart: "2ch"
    },
    "a, a:hover, a:active, a:visited": {
        color: "$gunmetal",
        textShadow: "$smallTextShadow",
    },
})

