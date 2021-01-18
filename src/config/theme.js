import { Platform } from "react-native";

const theme = {
  colors: {
    tagColor: '#0366d6',
    errorColor: 'crimson',
    textPrimary: '#333',
    textSecondary: '#888',
    textInverse: '#ffffff',
    appBackground: '#e1e4e8',
    appBarBackground: '#24292e',
    itemBackground: '#ffffff',
  },
  fonts: {
    main: Platform.select({
      android: 'roboto',
      ios: 'Arial',
      default: 'System'
    })
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  },
  textMargin:{
    bottom: 5
  },
  paddings: {
    itemPadding: 12
  }
};

export default theme;