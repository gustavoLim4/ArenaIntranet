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

const CardLiderado = ({ nome, cargo, foto, onEdit }: any) => {
  return (
    <Paper elevation={0} sx={{ p: 1.5, display: 'flex', alignItems: 'center', gap: 2, width: '100%', borderRadius: 2, border: `1px solid #e0e0e0`, bgcolor: 'background.paper', }} >
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
  const ceo = ORGANOGRAMA_DATA[0].gestor;
  const setores = ORGANOGRAMA_DATA.slice(1);

  const handleAddMember = (setorNome: string) => console.log(`Adicionando ao setor: ${setorNome}`);
  const handleEditMember = (nome: string) => console.log(`Editando: ${nome}`);

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
        </Paper>
        <ArrowDownwardIcon sx={{ mt: 2, color: 'divider' }} />
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', alignItems: 'flex-start' }}>
        {setores.map((setor) => (
          <Box key={setor.setor} sx={{ width: 400 }}>
            <Divider sx={{ mb: 2 }}>
              <Typography variant="caption" fontWeight={700} color="text.secondary">{setor.setor}</Typography>
            </Divider>

            <Accordion elevation={0} sx={{ bgcolor: 'transparent', '&:before': { display: 'none' }, }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "secondary.main" }} />} sx={{ p: 0, '& .MuiAccordionSummary-content': { m: 0 }, '& .MuiAccordionSummary-expandIconWrapper': { position: 'absolute', right: 10, } }}>
                <Paper elevation={0} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, width: '100%', borderRadius: 2, border: `1px solid ${theme.palette.primary.main}`, bgcolor: 'rgba(25, 118, 210, 0.04)', }}>
                  <Avatar src={setor.gestor.foto} sx={{ width: 42, height: 42, border: `2px solid ${theme.palette.primary.main}` }} />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle2" fontWeight={700}>{setor.gestor.nome}</Typography>
                    <Typography variant="caption" color="text.secondary">{setor.gestor.cargo}</Typography>
                  </Box>

                  <IconButton size="small" onClick={(e) => { e.stopPropagation(); handleEditMember(setor.gestor.nome); }} sx={{ mr: 4 }} >
                    <EditIcon fontSize="small" sx={{ color: "primary.main" }} />
                  </IconButton>
                </Paper>
              </AccordionSummary>

              <AccordionDetails sx={{ p: 0, mt: 1.5 }}>
                <Stack spacing={1} sx={{ alignItems: 'center', }}>
                  {setor.liderados.map((liderado) => (
                    <CardLiderado
                      key={liderado.id}
                      nome={liderado.nome}
                      cargo={liderado.cargo}
                      foto={liderado.foto}
                      onEdit={() => handleEditMember(liderado.nome)}
                    />
                  ))}

                  <Button fullWidth variant="outlined" startIcon={<AddIcon />} onClick={() => handleAddMember(setor.setor)}
                    sx={{ borderStyle: 'dashed', textTransform: 'none', borderRadius: 2, mt: 1, bgcolor: 'background.paper' }}>
                    Novo Integrante
                  </Button>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
      </Box>
    </Box>
  );
};