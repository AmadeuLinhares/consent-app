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
    palette: {
      primary: {
        main: tokens.colors.grey.GRAY_100,
        '200': tokens.colors.grey.GRAY_200,
        '300': tokens.colors.grey.GRAY_300,
        '400': tokens.colors.grey.GRAY_400,
        '500': tokens.colors.grey.GRAY_500,
        '600': tokens.colors.grey.GRAY_600,
      },
      error: {
        main: tokens.colors.red.RED_DARK,
      },
      success: {
        main: tokens.colors.green.GREEN_500,
      },
    },
  })
}
