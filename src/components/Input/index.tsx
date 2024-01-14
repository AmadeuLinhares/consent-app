import { forwardRef } from 'react'

import { Typography } from '@components/Typography'
import {
  Box,
  TextField as TextFieldMui,
  TextFieldProps,
  styled,
} from '@mui/material'
import tokens from '@theme/tokens'

const TextField = styled(TextFieldMui)<TextFieldProps>(({ theme }) => ({
  width: `100%`,
  color: theme.palette.success.main,
  backgroundColor: `transparent`,
  '& .MuiInputLabel-root': { color: `green` },
  '& .MuiInputBase-input': { color: tokens.colors.grey.GRAY_100 },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: tokens.colors.grey.GRAY_300 },
    '&:hover fieldset': { borderColor: tokens.colors.grey.GRAY_400 },
    '&.Mui-focused fieldset': { borderColor: tokens.colors.grey.GRAY_200 },
  },
  '& .Mui-error': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: tokens.colors.red.RED_DARK,
    },
  },
}))

export const Input = forwardRef<HTMLDivElement, TextFieldProps>(
  ({ helperText, ...rest }, ref) => {
    return (
      <Box>
        <Box>
          <TextField variant="outlined" ref={ref} {...rest} />
        </Box>
        <Box
          paddingLeft={tokens.SPACINGS.spacing16}
          paddingTop={tokens.SPACINGS.spacing8}
        >
          <Typography variant="error">{helperText}</Typography>
        </Box>
      </Box>
    )
  },
)
