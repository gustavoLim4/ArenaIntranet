import { Box, Button } from "@mui/material"
import SearchInput from "../../components/SearchInput/SearchInput"
import theme from "../../theme"
import AddIcon from '@mui/icons-material/Add';
import { TelasStyles } from "../../styles/styleresposecomun.styles";

export const Inventario = () => {
  return (
    <Box sx={{ ...TelasStyles }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box sx={{ width: "60%" }}>
          <SearchInput variant="rightIcon" placeholder="Buscar por nome" />
        </Box>
        <Button startIcon={<AddIcon />} variant="contained" sx={{ bgcolor: theme.palette.primary.main }}>
          Adicionar novo equipamento
        </Button>
      </Box>
    </Box>
  )
}
