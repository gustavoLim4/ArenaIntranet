// NavButton.tsx
import { Button, useTheme, Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

type NavButtonProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  open: boolean;
  small?: boolean;
  expandable?: boolean;
  expanded?: boolean;
};

export const NavButton: React.FC<NavButtonProps> = ({
  icon,
  label,
  active = false,
  onClick,
  open,
  small = false,
  expandable,
  expanded = false,
}) => {
  const theme = useTheme();

  return (
    <Button
      onClick={onClick}
      fullWidth
      sx={{
        justifyContent: open ? "flex-start" : "center",
        textTransform: "none",
        borderRadius: "12px",
        paddingX: open ? (small ? "28px" : "14px") : "19px",
        fontWeight: small ? 400 : 500,
        fontSize: small ? "0.85rem" : "0.95rem",
        color: active ? theme.palette.background.paper : "#0d3b66",
        backgroundColor: active ? theme.palette.secondary.main : "#fff",
        transition: "all 0.2s ease",
        marginBottom: "8px",
        minHeight: small ? "20px" : "40px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {icon}
          </Box>

          {open && (
            <Typography
              variant="body1"
              sx={{
                color: active
                  ? theme.palette.background.paper
                  : theme.palette.text.primary,
                fontWeight: 600,
              }}
            >
              {label}
            </Typography>
          )}
        </Box>

        {open && expandable && (
          <Box sx={{ display: "flex", alignItems: "center", pr: 1 }}>
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Box>
        )}
      </Box>
    </Button>
  );
};
