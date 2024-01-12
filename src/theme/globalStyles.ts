import { GlobalStylesProps } from '@mui/material'

import tokes from './tokens'
export const globalStyles: Pick<GlobalStylesProps, 'styles'> = {
  styles: {
    '*': {
      padding: 0,
      margin: 0,
    },
    body: {
      backgroundColor: tokes.colors.grey.GRAY_700,
    },
  },
}
