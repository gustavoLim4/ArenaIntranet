import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../../theme";

type SearchInputProps = {
  placeholder?: string;
  variant?: "leftIcon" | "rightIcon";
  background?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Buscar",
  variant = "leftIcon",
  background = "#fff",
  value,
  onChange,
}) => {
  return (
    <TextField
      placeholder={placeholder}
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
      sx={{
        backgroundColor: background,
        borderRadius: 1,
        "& .MuiOutlinedInput-root": {
          paddingRight: variant === "rightIcon" ? "12px" : undefined,
          "& fieldset": {
            borderColor: "#CFCFCF",
          },
          "&:hover fieldset": {
            borderColor: theme.palette.primary.main,
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.primary.main,
            borderWidth: 2,
          },
        },
      }}
      slotProps={{
        input: {
          startAdornment:
            variant === "leftIcon" ? (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ) : undefined,
          endAdornment:
            variant === "rightIcon" ? (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ) : undefined,
        },
      }}
    />
  );
};

export default SearchInput;