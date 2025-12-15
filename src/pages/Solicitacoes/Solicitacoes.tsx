import { Box, Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import AddIcon from "@mui/icons-material/Add";
import { InfoGridItem } from "../../components/InfoGridItem/InfoGridItem";
import theme from "../../theme";
import { useState } from "react";
import { SOLICITACOES_MOCK } from "./util/constats";
import { TelasStyles } from "../../styles/styleresposecomun.styles";
import NovoChamadoModal from "./components/newChamado";
import type { Atendimento } from "../Atendimentos/types/types";
import { ModaDetails } from "./components/ModaDetails";

const LIMITE_INICIAL = 6;

export const Solicitacoes = () => {
  const [mostrarTudo, setMostrarTudo] = useState(false);
  const [openNovo, setOpenNovo] = useState(false);

  const [openDetalhes, setOpenDetalhes] = useState(false);
  const [atendimentoSelecionado, setAtendimentoSelecionado] =
    useState<Atendimento | null>(null);

  const solicitacoesVisiveis = mostrarTudo
    ? SOLICITACOES_MOCK
    : SOLICITACOES_MOCK.slice(0, LIMITE_INICIAL);

  const handleToggle = () => {
    setMostrarTudo((prev) => !prev);
  };

  const abrirDetalhes = (item: Atendimento) => {
    setAtendimentoSelecionado(item);
    setOpenDetalhes(true);
  };

  return (
    <Box sx={{ ...TelasStyles }}>
      <Box sx={{ display: "flex", justifyContent: "end", mb: 2 }}>
        <Button
          onClick={() => setOpenNovo(true)}
          startIcon={<AddIcon />}
          variant="contained"
          sx={{ bgcolor: theme.palette.primary.main }}
        >
          Novo chamado
        </Button>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        {solicitacoesVisiveis.map((item) => (
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
        ))}
      </Box>

      {SOLICITACOES_MOCK.length > LIMITE_INICIAL && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            sx={{ bgcolor: theme.palette.primary.main }}
            onClick={handleToggle}
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
