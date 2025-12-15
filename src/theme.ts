import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#142B4D",
      light: "#0D1F3A26",
      dark: "#0D1F3A",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#D12029",
      light: "#D33B42",
      dark: "#8D0012",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F5F7FA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#0D1F3A",
      secondary: "#757575",
    },
  },

  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },

  components: {
    /* ========================
       BUTTON
    ======================== */
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: "1rem",
          padding: "10px 24px",
          borderRadius: 8,

          "&.Mui-disabled": {
            opacity: 0.5,
            cursor: "not-allowed",
          },
        },
      },
    },

    /* ========================
       TEXT FIELD
    ======================== */
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,

            "& fieldset": {
              borderColor: "#757575",
            },

            "&:hover fieldset": {
              borderColor: "#142B4D",
            },

            "&.Mui-focused fieldset": {
              borderColor: "#142B4D",
              borderWidth: 2,
            },

            "&.Mui-disabled": {
              opacity: 0.6,
            },
          },
        },
      },
    },

    /* ========================
       SWITCH
    ======================== */
    MuiSwitch: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            opacity: 0.5,
          },
        },
        switchBase: {
          "&.Mui-checked": {
            color: "#FFFFFF",
            "& + .MuiSwitch-track": {
              backgroundColor: "#0D1F3A",
            },
          },
        },
        track: {
          backgroundColor: "#B5B5B5",
        },
      },
    },
  },
});

export default theme;
