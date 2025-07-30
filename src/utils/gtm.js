import TagManager from "react-gtm-module";

const gtmId = "G-B4YM7VGMPM";

export const initializeTagManager = () => {
  TagManager.initialize({ gtmId });
};