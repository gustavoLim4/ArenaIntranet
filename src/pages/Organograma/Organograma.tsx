import { Box, Typography, Avatar, Paper, Stack, useTheme, Divider } from '@mui/material';
import { TelasStyles } from '../../styles/styleresposecomun.styles';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ORGANOGRAMA_DATA } from './util/util';

const CardColaborador = ({ nome, cargo, foto, isGestor }: any) => {
  const theme = useTheme();
  return (
    <Paper 
      elevation={0}
      sx={{ 
        p: 2, display: 'flex', alignItems: 'center', gap: 2, 
        width: 280, borderRadius: 3, 
        border: `1px solid ${isGestor ? theme.palette.primary.main : theme.palette.divider}`,
        bgcolor: isGestor ? 'rgba(25, 118, 210, 0.04)' : 'background.paper',
        boxShadow: isGestor ? '0 4px 10px rgba(0,0,0,0.05)' : 'none'
      }}
    >
      <Avatar src={foto} sx={{ width: 45, height: 45, border: isGestor ? `2px solid ${theme.palette.primary.main}` : 'none' }} />
      <Box>
        <Typography variant="subtitle2" fontWeight={700} lineHeight={1.2}>{nome}</Typography>
        <Typography variant="caption" color="text.secondary">{cargo}</Typography>
      </Box>
    </Paper>
  );
};

export const Organograma = () => {
  const ceo = ORGANOGRAMA_DATA[0].gestor;
  const setores = ORGANOGRAMA_DATA.slice(1);

  return (
    <Box sx={{ ...TelasStyles }}>
      <Typography fontWeight={700} variant='h5' mb={4}>Estrutura Organizacional</Typography>

      {/* TOPO: DIRETORIA (CEO) */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 6 }}>
        <Typography variant="overline" color="primary" fontWeight={800}>Diretoria Executiva</Typography>
        <CardColaborador nome={ceo.nome} cargo={ceo.cargo} foto={ceo.foto} isGestor />
        <ArrowDownwardIcon sx={{ mt: 2, color: 'divider' }} />
      </Box>

      {/* CONTAINER DOS SETORES USANDO BOX FLEX */}
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 5, 
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
        {setores.map((setor) => (
          <Box 
            key={setor.setor} 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              width: { xs: '100%', sm: 'auto' } // Full width no mobile, auto no desktop
            }}
          >
            {/* TÍTULO E GESTOR DO SETOR */}
            <Divider sx={{ width: '100%', mb: 2 }}>
                <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ px: 1 }}>
                    {setor.setor}
                </Typography>
            </Divider>
            
            <CardColaborador 
              nome={setor.gestor.nome} 
              cargo={setor.gestor.cargo} 
              foto={setor.gestor.foto} 
              isGestor 
            />

            {/* LINHA CONECTORA PARA OS LIDERADOS */}
            <Box sx={{ width: '2px', height: 20, bgcolor: 'divider', my: 1 }} />

            {/* LISTA DE LIDERADOS */}
            <Stack spacing={1.5} sx={{ alignItems: 'center' }}>
              {setor.liderados.map((liderado) => (
                <CardColaborador 
                  key={liderado.id} 
                  nome={liderado.nome} 
                  cargo={liderado.cargo} 
                  foto={liderado.foto} 
                />
              ))}
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
};