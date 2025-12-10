import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#142b4dff",     
      light: "#0d1f3a26",
      dark: "#0D1F3A",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#D12029",     
      light: "#ff5b62",
      dark: "#8d0012",
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
    }
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          fontSize: "1rem",
          padding: "10px 24px",
          borderRadius: 8,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#142b4dff",
            },
            "&:hover fieldset": {
              borderColor: "#D12029",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#D12029",
              borderWidth: 2,
            },
          },
        },
      },
    },

    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          "&.Mui-checked": {
            color: "#fff",
            "& + .MuiSwitch-track": {
              backgroundColor: "#0D1F3A",
            },
          },
        },
        track: {
          backgroundColor: "#b5b5b5",
        },
      },
    },
  },
});

export default theme;
