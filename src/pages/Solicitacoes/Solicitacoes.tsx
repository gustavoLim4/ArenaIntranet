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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { botaoMobileMais } from "../../styles/styleresposecomun.styles";
import { TIPOS_CHAMADO_TI } from "./util/util";

const LIMITE_INICIAL = 6;

export const Solicitacoes = () => {
  const [openNovo, setOpenNovo] = useState(false);
  const [openDetalhes, setOpenDetalhes] = useState(false);
  const [atendimentoSelecionado, setAtendimentoSelecionado] = useState<Atendimento | null>(null);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [tipo, setTipo] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState(LIMITE_INICIAL);
  const solicitacoesFiltradas = tipo ? SOLICITACOES_MOCK.filter((item) => item.titulo === tipo) : SOLICITACOES_MOCK;
  const isExpanded = visibleCount >= solicitacoesFiltradas.length;

  const abrirDetalhes = (item: Atendimento) => {
    setAtendimentoSelecionado(item);
    setOpenDetalhes(true);
  };

  const handleToggleSolicitacoes = () => {
    if (isExpanded) {
      setVisibleCount(LIMITE_INICIAL);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setVisibleCount(solicitacoesFiltradas.length);
    }
  };

  return (
    <Box sx={{ ...TelasStyles }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, }}>
        <FormControl sx={{ width: { xs: "80%", md: 600 } }}>
          <InputLabel id="filtro-acoes">
            Filtrar por ações
          </InputLabel>
          <Select
            labelId="filtro-acoes"
            value={tipo}
            label="Filtrar por ações"
            onChange={(e) => {
              setTipo(e.target.value);
              setVisibleCount(LIMITE_INICIAL);
            }}
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
            <Button onClick={() => setOpenNovo(true)} sx={{ ...botaoMobileMais }}>
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
        {solicitacoesFiltradas.length === 0 ? (
          <Box sx={{ ...dadosNãoEncostrado }}>
            Nenhum chamado encontrado para este filtro
          </Box>
        ) : (
          solicitacoesFiltradas
            .slice(0, visibleCount)
            .map((item) => (
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
            onClick={handleToggleSolicitacoes}
            endIcon={isExpanded ? (<ExpandLessIcon />) : (<ExpandMoreIcon />)}>
            {isExpanded ? "Carregar menos" : "Carregar mais"}
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
