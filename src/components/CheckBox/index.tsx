import { forwardRef } from 'react'

import { Typography } from '@components/Typography'
import { Box } from '@mui/material'
import CheckboxMui from '@mui/material/Checkbox'
import tokens from '@theme/tokens'

import { CheckboxProps } from './types'

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (props, ref) => {
    const { label, helperText, ...rest } = props
    return (
      <Box display={`grid`} data-testid="checkbox-component-testid">
        <Box display={`flex`}>
          <Box display={`flex`}>
            <CheckboxMui {...rest} ref={ref} />
          </Box>
          <Box
            display={`flex`}
            justifyContent={`flex-start`}
            alignItems={`center`}
            marginLeft={tokens.SPACINGS.spacing4}
          >
            <Typography dataTestid="label-checkbox-testid">{label}</Typography>
          </Box>
        </Box>
        <Box paddingLeft={tokens.SPACINGS.spacing16}>
          <Typography dataTestid="error-label-checkbox-testid" variant="error">
            {helperText}
          </Typography>
        </Box>
      </Box>
    )
  },
)
