import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export const theme = createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: "white",
    },
    tabs: {
      marginLeft: "auto", 
      fontSize: "1rem",
    },
    estimateButton: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white"
    },
    logoButton: {
      padding: 0,
    }
  },
});
