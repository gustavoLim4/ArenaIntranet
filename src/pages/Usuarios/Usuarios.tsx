import { Box, Button } from "@mui/material"
import SearchInput from "../../components/SearchInput/SearchInput"
import theme from "../../theme"
import AddIcon from '@mui/icons-material/Add';

const Usuarios = () => {
  return (
    <Box sx={{ width: "100%", p: 3, boxShadow: 3, borderRadius: 2, minHeight: "85vh", display: "flex", flexDirection: "column", }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Box sx={{ width: "60%" }}>
          <SearchInput variant="rightIcon" placeholder="Buscar por nome" />
        </Box>
        <Button startIcon={<AddIcon />} variant="contained" sx={{ bgcolor: theme.palette.primary.main}}>
          Novo usuário
        </Button>
      </Box>
    </Box>
  )
}

export default Usuarios