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
  width: 300,
  color: theme.palette.success.main,
  backgroundColor: `transparent`,
  '& .MuiInputLabel-root': { color: `green` },
  '& .MuiInputBase-input': { color: `white` },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: `pink` },
    '&:hover fieldset': { borderColor: `yellow` },
    '&.Mui-focused fieldset': { borderColor: `purple` },
  },
}))

export const Input = forwardRef<HTMLDivElement, TextFieldProps>(
  ({ helperText, ...rest }, ref) => {
    return (
      <Box>
        <Box>
          <TextField ref={ref} {...rest} />
        </Box>
        <Box
          paddingLeft={tokens.SPACINGS.spacing16}
          paddingTop={tokens.SPACINGS.spacing4}
        >
          <Typography variant="error">{helperText}</Typography>
        </Box>
      </Box>
    )
  },
)
