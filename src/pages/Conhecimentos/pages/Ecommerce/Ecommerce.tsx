import { Box, Typography } from '@mui/material'
import { TelasStyles } from '../../../../styles/stylesComun.styles'


export const Ecommerce = () => {
  return (
    <Box sx={{...TelasStyles}}>
      <Typography fontWeight={700} variant='h5' mb={1}>Base Consultoria Ecommerce</Typography>
      <Typography>Tela em desenvolvimento aguarde para novas atualizações...</Typography>
    </Box>
  )
}