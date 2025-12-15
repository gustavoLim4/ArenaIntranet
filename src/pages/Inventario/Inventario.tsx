import { Box, Button, useMediaQuery } from "@mui/material"
import SearchInput from "../../components/SearchInput/SearchInput"
import theme from "../../theme"
import AddIcon from '@mui/icons-material/Add';
import { TelasStyles } from "../../styles/styleresposecomun.styles";

export const Inventario = () => {

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ ...TelasStyles }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box sx={{ width: { xs: "75%", md: "69%" } }}>
          <SearchInput variant="rightIcon" placeholder="Buscar por nome" />
        </Box>
        <Box>
          {isMobile ? (
            <Button
              sx={{
                minWidth: "48px",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "primary.main",
                color: "#fff",
                padding: 0,
                "&:hover": { backgroundColor: "primary.dark" },
              }}
            >
              <AddIcon />
            </Button>
          ) : (
            <Button startIcon={<AddIcon />} variant="contained">
              Adicionar novo equipamento
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  )
}
