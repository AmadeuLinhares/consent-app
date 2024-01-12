import { createTheme } from '@mui/material'

import tokens from './tokens'
export const theme = () => {
  return createTheme({
    spacing: [
      tokens.SPACINGS.spacing0,
      tokens.SPACINGS.spacing2,
      tokens.SPACINGS.spacing4,
      tokens.SPACINGS.spacing8,
      tokens.SPACINGS.spacing12,
      tokens.SPACINGS.spacing16,
      tokens.SPACINGS.spacing24,
      tokens.SPACINGS.spacing32,
    ],
    typography: {
      body1: {
        fontSize: tokens.FONT_SIZE.SM,
        color: tokens.colors.grey.GRAY_200,
        // Items tabela listagem
      },
      body2: {
        fontSize: tokens.FONT_SIZE.MD,
        // // Items tabela checkbox
      },
      h1: {
        fontSize: tokens.FONT_SIZE.XXXL,
      },
      h2: {
        fontSize: tokens.FONT_SIZE.XXL,
      },
      h3: {
        fontSize: tokens.FONT_SIZE.XL,
      },
      h4: {
        fontSize: tokens.FONT_SIZE.LG,
        color: tokens.colors.grey.GRAY_100,
        // items do menu
      },
    },
  })
}
