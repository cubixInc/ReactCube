import { Platform } from "react-native";

const white = "#FFFFFF";
const black = "#000000";
const grey = Platform.select({
  ios: "#F4F4F4",
  android: "#FAFAFA"
});
const transparent = "rgba(0,0,0,0)";

const primary = white;
const secondary = white;
const tertiary = black;
const quaternary = grey;

const background = {
  primary,
  secondary: "#f2f2f2",
  tertiary: "#00000057"
};

const text = {
  primary: "#212121",
  secondary: "#bcbcbc",
  tertiary: primary,
  quaternary: "#707070",
  accent: "#ff2824"
};

const presetColors = {
  primary: ["#febb5b", "#f24645"],
  secondary: ["#f24645", "#febb5b"],
  instagram: [
    "rgb(106, 57, 171)",
    "rgb(151, 52, 160)",
    "rgb(197, 57, 92)",
    "rgb(231, 166, 73)",
    "rgb(181, 70, 92)"
  ],
  firefox: [
    "rgb(236, 190, 55)",
    "rgb(215, 110, 51)",
    "rgb(181, 63, 49)",
    "rgb(192, 71, 45)"
  ],
  sunrise: [
    "rgb(92, 160, 186)",
    "rgb(106, 166, 186)",
    "rgb(142, 191, 186)",
    "rgb(172, 211, 186)",
    "rgb(239, 235, 186)",
    "rgb(212, 222, 206)",
    "rgb(187, 216, 200)",
    "rgb(152, 197, 190)",
    "rgb(100, 173, 186)"
  ]
};

const navbar = {
  background: background.primary,
  text: text.primary
};

const border = "#f2f2f2";
const separator = "#f2f2f2";

const windowTint = "rgba(0, 0, 0, 0.4)";
const windowTintWhite = "rgba(255, 255, 255, 0.1)";

export default {
  white,
  black,
  grey,
  transparent,

  primary,
  secondary,
  tertiary,
  quaternary,

  background,
  navbar,
  text,
  presetColors,

  border,
  separator,
  windowTint,
  windowTintWhite,

  twitter: "#41abe1",
  google: "#e94335",
  facebook: "#3b5998",

  info: "#19bfe5",
  warning: "#feb401",
  danger: "#ed1c4d",
  success: "#b76c94"
};
