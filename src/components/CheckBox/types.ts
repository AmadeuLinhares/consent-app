import { CheckboxProps as CheckboxPropsMui } from '@mui/material'

export interface CheckboxProps extends CheckboxPropsMui {
  label: string | number
  helperText?: string
}
