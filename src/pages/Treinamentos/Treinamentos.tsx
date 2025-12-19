import { Box, Typography, Card, CardMedia, CardContent, Button, useTheme, useMediaQuery, Avatar, Stack } from '@mui/material';
import { TelasStyles } from '../../styles/stylesComun.styles';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { TREINAMENTOS_MOCK } from './util/util';
import type { Treinamento } from './types/types';
import { TreinamentoDrawer } from './components/TreinamentoDrawer';
import { botaoMobileMais } from '../../styles/styleresposecomun.styles';

export const Treinamentos = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [treinamentos, setTreinamentos] = useState<Treinamento[]>(TREINAMENTOS_MOCK);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);
  const isExpanded = visibleCount >= treinamentos.length;

  const handleSaveNovoTreinamento = (novo: Treinamento) => {
    setTreinamentos((prev) => [novo, ...prev]);
  };
  const handleToggleVideos = () => {
    if (isExpanded) {
      setVisibleCount(8);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setVisibleCount(treinamentos.length);
    }
  };

  return (
    <Box sx={{ ...TelasStyles }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 5 }}>
        <Box>
          <Typography fontWeight={700} variant='h5' mb={1}>Treinamentos & Desenvolvimento</Typography>
          <Typography variant="body2" color="text.secondary">
            Conteúdos técnicos desenvolvidos para apoiar sua evolução profissional.
          </Typography>
        </Box>
        <Box>
          {isMobile ? (
            <Button onClick={() => setOpenDrawer(true)} sx={{ ...botaoMobileMais }}>
              <AddIcon />
            </Button>
          ) : (
            <Button startIcon={<AddIcon />} onClick={() => setOpenDrawer(true)} variant="contained">
              Novo treinamento
            </Button>
          )}
        </Box>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 3 }}>
        {treinamentos.slice(0, visibleCount).map((video) => (
          <Card key={video.id} sx={{ cursor: 'pointer', boxShadow: 'none', bgcolor: 'transparent', '&:hover img': { transform: 'scale(1.05)' } }} onClick={() => window.open(video.videoUrl, '_blank')} >
            <Box sx={{ position: 'relative', overflow: 'hidden', borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="180"
                image={video.imgVideo}
                alt={video.titulo}
                sx={{ transition: '0.3s', objectFit: 'cover' }}
              />
              <PlayCircleOutlineIcon sx={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)', color: 'rgba(255,255,255,0.8)',
                fontSize: 50, opacity: 0, '&:hover': { opacity: 1 }
              }} />
            </Box>

            <CardContent sx={{ px: 0, pt: 1.5 }}>
              <Stack direction="row" spacing={1.5}>
                <Avatar sx={{ bgcolor: 'primary.main', width: 36, height: 36 }}>
                  {video.instrutor.charAt(0)}
                </Avatar>
                <Box>
                  <Typography variant="subtitle2" fontWeight={700} sx={{
                    lineHeight: '1.2rem', mb: 0.5,
                    display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                  }}>
                    {video.titulo}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" display="block">
                    {video.instrutor} • {video.categoria}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
      {treinamentos.length > 8 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            endIcon={isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            onClick={handleToggleVideos}
          >
            {isExpanded ? "Ver menos" : `Ver mais`}
          </Button>
        </Box>
      )}

      <TreinamentoDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onSave={handleSaveNovoTreinamento}
      />
    </Box>
  );
};