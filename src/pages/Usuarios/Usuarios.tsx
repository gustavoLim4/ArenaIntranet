import { Box, Button, Typography } from "@mui/material"
import SearchInput from "../../components/SearchInput/SearchInput"
import theme from "../../theme"
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { MuiTableContainer } from "../../components/Table/MuiTable";
import { DADOS_EXIBICAO_USARIOS, USUARIOS_MOCK } from "./util/constants";
import { containerTableResposeStyles, dadosNãoEncostrado, scrollResponse, TelasStyles } from "../../styles/styleresposecomun.styles";
import { useMemo, useState } from "react";
import { UsuarioDrawer } from "./components/UsuarioDrawer";
import type { Usuario } from "./types/types";

export const Usuarios = () => {
  const colunas = DADOS_EXIBICAO_USARIOS;
  const [openDrawer, setOpenDrawer] = useState(false);
  const [modo, setModo] = useState<"criar" | "editar">("criar");
  const [usuarioSelecionado, setUsuarioSelecionado] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState<Usuario[]>(USUARIOS_MOCK);

  const abrirCriar = () => {
    setModo("criar");
    setUsuarioSelecionado(null);
    setOpenDrawer(true);
  };

  const abrirEditar = (row: any) => {
    setModo("editar");
    setUsuarioSelecionado(row);
    setOpenDrawer(true);
  };

  const handleSave = (data: any) => {
    if (modo === "criar") {
      setRows((prev) => [...prev, data]);
    } else {
      setRows((prev) =>
        prev.map((u) =>
          u.usuario === usuarioSelecionado.usuario ? data : u
        )
      );
    }
  };

  const filteredRows = useMemo(() => {
    if (!search.trim()) return USUARIOS_MOCK;

    return USUARIOS_MOCK.filter((usuario: Usuario) =>
      usuario.nome.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const actions = [
    {
      icon: (
        <EditOutlinedIcon
          sx={{ fontSize: 25, color: theme.palette.primary.main }}
        />
      ),
      label: "Editar",
      onClick: (row: Usuario) => abrirEditar(row),
    },
  ];

  return (
    <Box sx={{ ...TelasStyles }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 5 }}>
        <Box sx={{ width: "60%" }}>
          <SearchInput
            variant="rightIcon"
            placeholder="Buscar por nome"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
        <Button onClick={abrirCriar} startIcon={<AddIcon />} variant="contained" sx={{ bgcolor: theme.palette.primary.main }}>
          Novo usuário
        </Button>
      </Box>
      <Box sx={containerTableResposeStyles}>
        {filteredRows.length === 0 ? (
          <Typography sx={{ ...dadosNãoEncostrado }}>
            Usuário não encontrado - Por favor, verifique se o nome está escrito corretamente.
          </Typography>
        ) : (
          <MuiTableContainer
            columns={colunas}
            rows={filteredRows}
            lastColumn="Editar"
            actions={actions}
            LastColumnSx={{ textAlign: "end" }}
            tableIConSx={{ justifyContent: "end" }}
            containerSx={{ ...scrollResponse(theme) }}
          />
        )}
      </Box>
      <UsuarioDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        modo={modo}
        usuarioSelecionado={usuarioSelecionado}
        onSave={handleSave}
      />
    </Box>
  )
}
