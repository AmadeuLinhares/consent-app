import { useMemo } from 'react'

import { Typography } from '@components/Typography'
import { Box } from '@mui/material'
import { useGlobalLoader } from '@storage/globalLoader'
import tokens from '@theme/tokens'

export const Loading = () => {
  const load = useGlobalLoader((state) => state.loading)

  const renderComponent = useMemo(() => {
    if (load) {
      return (
        <Box
          position={`absolute`}
          width={`100vw`}
          height={`100vh`}
          display={`flex`}
          justifyContent={`center`}
          alignItems={`center`}
          bgcolor={tokens.colors.grey.GRAY_400}
          zIndex={9}
          data-testid="global-loader-component"
        >
          <Box>
            <Typography dataTestid='global-loader-label'>Loading....</Typography>
          </Box>
        </Box>
      )
    }
    return null
  }, [load])
  return renderComponent
}
