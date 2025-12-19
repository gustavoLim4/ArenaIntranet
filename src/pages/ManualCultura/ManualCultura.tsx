import { Box, Typography } from '@mui/material'
import { TelasStyles } from '../../styles/stylesComun.styles'

export const ManualCultura = () => {
  return (
    <Box sx={{...TelasStyles}}>
      <Typography fontWeight={700} variant='h5' mb={1}>Manual de cultura</Typography>
      <Typography>Tela em desenvolvimento aguarde para novas atualizações...</Typography>
    </Box>
  )
}