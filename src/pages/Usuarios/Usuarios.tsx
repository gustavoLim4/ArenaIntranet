import { useMemo, useState } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SearchInput from "../../components/SearchInput/SearchInput";
import theme from "../../theme";
import { MuiTableContainer } from "../../components/Table/MuiTable";
import { UsuarioDrawer } from "./components/UsuarioDrawer/UsuarioDrawer";
import { DADOS_EXIBICAO_USARIOS, USUARIOS_MOCK, } from "./util/constants";
import { botaoMobileMais, containerTableResposeStyles, scrollResponse } from "../../styles/styleresposecomun.styles";
import type { Usuario, UsuarioForm } from "./types/types";
import { gerarAvatar } from "./components/Avatar/avatar";
import { dadosNãoEncostrado, TelasStyles } from "../../styles/stylesComun.styles";
import { useToast } from "../../hooks/useToast.hook";
import { calcularTempoEmpresa } from "../../util/masc";

export const Usuarios = () => {
  const [rows, setRows] = useState<Usuario[]>(USUARIOS_MOCK);
  const [search, setSearch] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [modo, setModo] = useState<"criar" | "editar">("criar");
  const [usuarioSelecionado, setUsuarioSelecionado] = useState<Usuario | null>(null);
  const { showToast } = useToast();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const abrirCriar = () => {
    setModo("criar");
    setUsuarioSelecionado(null);
    setOpenDrawer(true);
  };

  const abrirEditar = (row: Usuario) => {
    setModo("editar");
    setUsuarioSelecionado(row);
    setOpenDrawer(true);
  };

  const handleSave = (data: UsuarioForm) => {
    if (modo === "criar") {
      const novoUsuario: Usuario = {
        ...data,
        id: Date.now(),
        foto: gerarAvatar(data.nome),
      };
      setRows((prev) => [...prev, novoUsuario]);
    } else {
      setRows((prev) =>
        prev.map((u) => {
          if (u.id === usuarioSelecionado?.id) {
            return {
              ...u,
              ...data,
              foto: gerarAvatar(data.nome)
            } as Usuario;
          }
          return u;
        })
      );
    }
    showToast("Colaborador criado com sucesso", "success")
    setOpenDrawer(false);
  };
  const filteredRows = useMemo<Usuario[]>(() => {
    const termo = search.toLowerCase().trim();
    if (!termo) return rows;

    return rows.filter((u) => u.nome.toLowerCase().includes(termo));
  }, [search, rows]);

  const rowsComTempoEmpresa = useMemo(() => {
    return filteredRows.map((u) => ({
      ...u,
      tempoEmpresa: calcularTempoEmpresa(u.dataAdmissao),
    }));
  }, [filteredRows]);


  const actions = [
    {
      icon: <EditOutlinedIcon sx={{ fontSize: 26, color: theme.palette.primary.main }} />,
      label: "Editar",
      onClick: (row: Usuario) => abrirEditar(row),
    },
  ];

  return (
    <Box sx={{ ...TelasStyles }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: { xs: 2, md: 5 } }}>
        <Box sx={{ width: { xs: "75%", md: "69%" } }}>
          <SearchInput
            variant="rightIcon"
            placeholder="Buscar por nome"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
        <Box>
          {isMobile ? (
            <Button onClick={abrirCriar} sx={{ ...botaoMobileMais }}>
              <AddIcon />
            </Button>
          ) : (
            <Button startIcon={<AddIcon />} onClick={abrirCriar} variant="contained">
              Novo usuário
            </Button>
          )}
        </Box>
      </Box>

      <Box sx={containerTableResposeStyles}>
        {filteredRows.length === 0 ? (
          <Typography sx={{ ...dadosNãoEncostrado }}>
            Usuário não encontrado - Por favor, verifique se o nome está escrito corretamente.
          </Typography>
        ) : (
          <MuiTableContainer
            columns={DADOS_EXIBICAO_USARIOS}
            rows={rowsComTempoEmpresa}
            lastColumn="Editar"
            actions={actions}
            LastColumnSx={{ textAlign: "end" }}
            tableIConSx={{ justifyContent: "end" }}
            containerSx={{
              ...scrollResponse(theme),
            }}
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
  );
};