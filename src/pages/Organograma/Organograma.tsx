import {
  Box, Typography, Avatar, Paper, Stack, useTheme, Divider,
  Button, IconButton, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import { TelasStyles } from '../../styles/stylesComun.styles';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { ORGANOGRAMA_DATA } from './util/util';
import type { CardPessoaProps, Pessoa } from './types/typesLiderado';
import { ModalPessoa } from './ModalOrganograma/MoldaOrganograma';
import { useState } from 'react';
import { useToast } from '../../hooks/useToast.hook';

const CardLiderado = ({ nome, cargo, foto, onEdit }: CardPessoaProps) => {
  return (
    <Paper elevation={0} sx={{ p: 1.5, display: 'flex', alignItems: 'center', gap: 2, width: '100%', borderRadius: 2, border: `1px solid #bbbbbbff`, bgcolor: 'background.paper', }} >
      <Avatar src={foto} sx={{ width: 38, height: 38 }} />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2" fontWeight={700} fontSize="0.8rem">
          {nome}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {cargo}
        </Typography>
      </Box>
      <IconButton size="small" onClick={(e) => { e.stopPropagation(); onEdit(); }}>
        <EditIcon fontSize="small" />
      </IconButton>
    </Paper>
  );
};

export const Organograma = () => {
  const theme = useTheme();
  const [orgData, setOrgData] = useState(ORGANOGRAMA_DATA);
  const ceo = orgData[0].gestor;
  const setores = orgData.slice(1);
  const [setorSelecionado, setSetorSelecionado] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [pessoaEdit, setPessoaEdit] = useState<Pessoa | null>(null);
  const { showToast } = useToast();

  const handleAddMember = (setor: string) => {
    setPessoaEdit(null);
    setSetorSelecionado(setor);
    setModalOpen(true);
  };

  const handleEditMember = (pessoa: Pessoa) => {
    setPessoaEdit(pessoa);
    setSetorSelecionado(null);
    setModalOpen(true);
  };

  const handleSaveData = (formData: Pessoa) => {
    const newData = [...orgData];

    if (pessoaEdit) {

      if (newData[0].gestor.id === formData.id) {
        newData[0].gestor = formData;
      } else {
        newData.forEach(item => {
          if (item.gestor.id === formData.id) {
            item.gestor = formData;
          }
          if (item.liderados) {
            const indexLiderado = item.liderados.findIndex(p => p.id === formData.id);
            if (indexLiderado !== -1) {
              item.liderados[indexLiderado] = formData;
            }
          }
        });
      }
    } else {
      const newPessoa = { ...formData, id: Math.floor(Math.random() * 10000) };
      const setorIndex = newData.findIndex(item => item.setor === setorSelecionado);
      if (setorIndex !== -1) {
        if (!newData[setorIndex].liderados) {
          newData[setorIndex].liderados = [];
        }
        newData[setorIndex].liderados.push(newPessoa);
      }
    }
    setOrgData(newData);
    setModalOpen(false);
    showToast("Novo integrante criado com sucesso", "success");
  };

  return (
    <Box sx={{ ...TelasStyles }}>
      <Typography fontWeight={700} variant='h5' mb={4}>Estrutura Organizacional</Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
        <Typography variant="overline" color="primary" fontWeight={800}>Diretoria Executiva</Typography>
        <Paper elevation={0} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, width: 350, borderRadius: 2, border: `1px solid ${theme.palette.primary.main}`, bgcolor: 'rgba(25, 118, 210, 0.04)' }} >
          <Avatar src={ceo.foto} sx={{ width: 45, height: 45, border: `2px solid ${theme.palette.primary.main}` }} />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle2" fontWeight={700}>
              {ceo.nome}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {ceo.cargo}
            </Typography>
          </Box>
          <IconButton size="small" onClick={(e) => { e.stopPropagation(); handleEditMember(ceo); }}>
            <EditIcon fontSize="small" sx={{ color: "primary.main" }} />
          </IconButton>
        </Paper>
        <ArrowDownwardIcon sx={{ mt: 2, color: 'divider' }} />
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', alignItems: 'flex-start' }}>
        {setores.map((setorItem) => (
          <Box key={setorItem.setor} sx={{ width: 400 }}>
            <Divider sx={{ mb: 2 }}>
              <Typography variant="caption" fontWeight={700} color="primary.main">{setorItem.setor}</Typography>
            </Divider>

            <Accordion elevation={0} sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "secondary.main" }} />} sx={{ p: 0, '& .MuiAccordionSummary-content': { m: 0 }, '& .MuiAccordionSummary-expandIconWrapper': { position: 'absolute', right: 15, } }}>
                <Paper elevation={0} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, width: '100%', borderRadius: 2, border: `1px solid ${theme.palette.primary.main}`, bgcolor: 'rgba(25, 118, 210, 0.04)', }}>
                  <Avatar src={setorItem.gestor.foto} sx={{ width: 42, height: 42, border: `2px solid ${theme.palette.primary.main}` }} />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle2" fontWeight={700}>{setorItem.gestor.nome}</Typography>
                    <Typography variant="caption" color="text.secondary">{setorItem.gestor.cargo}</Typography>
                  </Box>

                  <IconButton size="small" onClick={(e) => { e.stopPropagation(); handleEditMember(setorItem.gestor); }} sx={{ mr: 4 }} >
                    <EditIcon fontSize="small" sx={{ color: "primary.main" }} />
                  </IconButton>
                </Paper>
              </AccordionSummary>

              <AccordionDetails sx={{ p: 0, mt: 1.5 }}>
                <Stack spacing={1} sx={{ alignItems: 'center', }}>
                  {setorItem.liderados && setorItem.liderados.map((liderado) => (
                    <CardLiderado
                      key={liderado.id}
                      nome={liderado.nome}
                      cargo={liderado.cargo}
                      foto={liderado.foto}
                      onEdit={() => handleEditMember(liderado)}
                    />
                  ))}

                  <Button fullWidth variant="outlined" startIcon={<AddIcon />} onClick={() => handleAddMember(setorItem.setor)}
                    sx={{ borderStyle: 'dashed', textTransform: 'none', borderRadius: 2, mt: 1, bgcolor: 'background.paper' }}>
                    Novo Integrante
                  </Button>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
      </Box>

      <ModalPessoa
        open={modalOpen}
        initialData={pessoaEdit}
        setor={setorSelecionado}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveData}
      />
    </Box>
  );
};