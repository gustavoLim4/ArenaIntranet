import { Box, Button, useMediaQuery } from "@mui/material";
import SearchInput from "../../components/SearchInput/SearchInput";
import theme from "../../theme";
import AddIcon from "@mui/icons-material/Add";
import { TelasStyles } from "../../styles/styleresposecomun.styles";
import { MuiTableContainer } from "../../components/Table/MuiTable";
import { DADOS_EXIBICAO_INVENTARIO, MODELOS_POR_EQUIPAMENTO } from "./util/utils";
import { mapDadosInventario } from "./util/constants";
import { useState } from "react";
import { EquipamentoDrawer } from "./components/DrawerEquipamentos";
import type { EquipamentoForm } from "./types/inventario.type";
import { ModalModelosEquipamento } from "./components/ModalModelosEquipamento";


export const Inventario = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [equipamentoSelecionado, setEquipamentoSelecionado] =
    useState<string | null>(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSaveEquipamento = (data: EquipamentoForm) => {
    console.log("Novo equipamento:", data);
  };

  return (
    <Box sx={{ ...TelasStyles }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 4,
        }}
      >
        <Box sx={{ width: { xs: "75%", md: "60%" } }}>
          <SearchInput variant="rightIcon" placeholder="Buscar por nome" />
        </Box>

        <Box>
          {isMobile ? (
            <Button
              onClick={() => setOpenDrawer(true)}
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
            <Button
              onClick={() => setOpenDrawer(true)}
              startIcon={<AddIcon />}
              variant="contained"
            >
              Adicionar novo equipamento
            </Button>
          )}
        </Box>
      </Box>

      <MuiTableContainer
        columns={DADOS_EXIBICAO_INVENTARIO}
        rows={mapDadosInventario}
        onRowClick={(row) => {
          setEquipamentoSelecionado(row.equipamento as string);
          setOpenModal(true);
        }}

      />

      <EquipamentoDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onSave={handleSaveEquipamento}
      />
      <ModalModelosEquipamento
        open={openModal}
        equipamento={equipamentoSelecionado}
        modelos={
          equipamentoSelecionado
            ? MODELOS_POR_EQUIPAMENTO[equipamentoSelecionado] || []
            : []
        }
        onClose={() => setOpenModal(false)}
      />

    </Box>
  );
};
