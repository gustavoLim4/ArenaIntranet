import { Box, Typography, Paper } from '@mui/material';
import { TelasStyles } from '../../styles/stylesComun.styles';
import { MANUAL_CULTURA_DATA } from './util/help.util';


export const ManualCultura = () => {
  return (
    <Box sx={{ ...TelasStyles }}>
      <Box mb={4}>
        <Typography fontWeight={700} variant="h5" gutterBottom>
          Manual de Cultura
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Entenda os pilares que guiam nosso dia a dia.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'flex-start' }} >
        {MANUAL_CULTURA_DATA.map((item) => (
          <Box
            key={item.id}
            sx={{ width: { xs: '100%', sm: 'calc(50% - 24px)', md: 'calc(33.3% - 20px)' }, minWidth: '280px' }}>
            <Paper
              elevation={1}
              sx={{ p: 3, height: '100%', borderRadius: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid', borderColor: 'primary.main', '&:hover': { bgcolor: '#f9f9f9' } }} >
              <Box sx={{ mb: .5 }}>{item.icon}</Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {item.titulo}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {item.descricao}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};