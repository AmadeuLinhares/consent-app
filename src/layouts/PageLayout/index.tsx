import { Box } from '@mui/material'
import tokens from '@theme/tokens'

import { PageLayoutProps } from './types'
export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Box display={`grid`}>
      <Box
        bgcolor={tokens.colors.grey.GRAY_500}
        borderRadius={`18px`}
        padding={tokens.SPACINGS.spacing24}
      >
        {children}
      </Box>
    </Box>
  )
}
