import { Box, Button, FormControl, InputLabel, MenuItem, Select, useMediaQuery } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import AddIcon from "@mui/icons-material/Add";
import theme from "../../theme";
import { useState } from "react";
import { SOLICITACOES_MOCK } from "./util/constats";
import { dadosNãoEncostrado, TelasStyles } from "../../styles/stylesComun.styles";
import { InfoGridItem } from "../../components/InfoGridItem/InfoGridItem";
import type { Atendimento } from "../Atendimentos/types/types";
import { NovoChamadoModal } from "./components/newChamado";
import { ModaDetails } from "./components/ModaDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { botaoMobileMais } from "../../styles/styleresposecomun.styles";
import { TIPOS_CHAMADO_TI } from "./util/util";

const LIMITE_INICIAL = 6;

export const Solicitacoes = () => {
  const [mostrarTudo, setMostrarTudo] = useState(false);
  const [openNovo, setOpenNovo] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openDetalhes, setOpenDetalhes] = useState(false);
  const [atendimentoSelecionado, setAtendimentoSelecionado] = useState<Atendimento | null>(null);
  const [tipo, setTipo] = useState<string>("");

  const solicitacoesFiltradas = tipo
    ? SOLICITACOES_MOCK.filter((item) => item.titulo === tipo)
    : SOLICITACOES_MOCK;

  const solicitacoesVisiveis = mostrarTudo
    ? solicitacoesFiltradas
    : solicitacoesFiltradas.slice(0, LIMITE_INICIAL);

  const semResultados = solicitacoesFiltradas.length === 0;

  const handleToggle = () => {
    setMostrarTudo((prev) => !prev);
  };

  const abrirDetalhes = (item: Atendimento) => {
    setAtendimentoSelecionado(item);
    setOpenDetalhes(true);
  };

  return (
    <Box sx={{ ...TelasStyles }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <FormControl sx={{ width: { xs: "80%", md: 600 } }}>
          <InputLabel id="Filtrar por ações">
            Filtrar por ações
          </InputLabel>
          <Select
            labelId="Filtrar por ações"
            value={tipo}
            label="Filtrar por ações"
            onChange={(e) => setTipo(e.target.value)}
          >
            <MenuItem value="">Todos</MenuItem>
            {TIPOS_CHAMADO_TI.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box>
          {isMobile ? (
            <Button onClick={() => setOpenNovo(true)} sx={{ ...botaoMobileMais }} >
              <AddIcon />
            </Button>
          ) : (
            <Button onClick={() => setOpenNovo(true)} startIcon={<AddIcon />} variant="contained" >
              Novo chamado
            </Button>
          )}
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        {semResultados ? (
          <Box sx={{ ...dadosNãoEncostrado }}>
            Nenhum chamado encontrada para este filtro
          </Box>
        ) : (
          solicitacoesVisiveis.map((item) => (
            <InfoGridItem
              key={item.id}
              id={item.id}
              icon={<CallIcon sx={{ fontSize: 40, color: "#003366" }} />}
              numero={item.numero}
              titulo={item.titulo}
              mensagem={item.mensagem}
              status={item.status}
              horario={item.horario}
              onClick={() => abrirDetalhes(item)}
            />
          ))
        )}
      </Box>


      {solicitacoesFiltradas.length > LIMITE_INICIAL && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            sx={{ bgcolor: theme.palette.primary.main }}
            onClick={handleToggle}
            endIcon={mostrarTudo ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          >
            {mostrarTudo ? "Carregar menos" : "Carregar mais"}
          </Button>
        </Box>
      )}
      <NovoChamadoModal
        open={openNovo}
        onClose={() => setOpenNovo(false)}
      />

      <ModaDetails
        open={openDetalhes}
        onClose={() => setOpenDetalhes(false)}
        atendimento={atendimentoSelecionado}
      />
    </Box>
  );
};
