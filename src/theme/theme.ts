import { createTheme } from '@mui/material'

import tokens from './tokens'
export const theme = () => {
  return createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          // Apply styles to all variants
          root: {
            borderRadius: tokens.RADII.medium,
            textTransform: `none`,
          },
          // Specific styles for the "contained" variant
          /**
           * Creating this styles just to show how we can change the default
           * theme inside MUI using our themes tokens
           */
          contained: {
            backgroundColor: tokens.colors.grey.GRAY_400,
            color: tokens.colors.grey.GRAY_100,
            '&:hover': {
              backgroundColor: tokens.colors.grey.GRAY_500,
            },
            width: `100%`,
            padding: tokens.SPACINGS.spacing12,
            fontSize: tokens.FONT_SIZE.SM,
            textTransform: `capitalize`,
          },
        },
      },
    },
  })
}
