import { Box, Typography } from '@mui/material'
import { TelasStyles } from '../../styles/styleresposecomun.styles'

export const Treinamentos = () => {
  return (
    <Box sx={{...TelasStyles}}>
      <Typography fontWeight={700} variant='h5' mb={1}>Treinamento</Typography>
      <Typography>Tela em desenvolvimento aguarde para novas atualizações...</Typography>
    </Box>
  )
}