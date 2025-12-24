import { Box, Typography } from '@mui/material'
import { TelasStyles } from '../../../../styles/stylesComun.styles'


export const Diretoria = () => {
  return (
    <Box sx={{...TelasStyles}}>
      <Typography fontWeight={700} variant='h5' mb={1}>Base Consultoria Diretoria</Typography>
      <Typography>Tela em desenvolvimento aguarde para novas atualizações...</Typography>
    </Box>
  )
}