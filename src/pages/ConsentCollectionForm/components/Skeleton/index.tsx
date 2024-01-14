import { Box } from '@mui/material'
import SkeletonMui from '@mui/material/Skeleton'
import tokens from '@theme/tokens'

export const SkeletonHome = () => {
  return (
    <Box display={`grid`} rowGap={tokens.SPACINGS.spacing32}>
      <Box
        display={`grid`}
        gridTemplateColumns={`repeat(2, 300px)`}
        columnGap={`30px`}
        justifyContent={`center`}
        alignItems={`center`}
      >
        <SkeletonMui variant="rectangular" width={`100%`} height={60} />
        <SkeletonMui variant="rounded" width={`100%`} height={60} />
      </Box>
      <Box display={`grid`} rowGap={tokens.SPACINGS.spacing24} paddingX={`20%`}>
        <SkeletonMui variant="rectangular" width={`100%`} height={40} />
        <SkeletonMui variant="rounded" width={`100%`} height={40} />
        <SkeletonMui variant="rectangular" width={`100%`} height={40} />
        <SkeletonMui variant="rounded" width={`100%`} height={40} />
      </Box>
      <Box display={`flex`} justifyContent={`center`} alignItems={`center`}>
        <SkeletonMui variant="rounded" width={`10%`} height={40} />
      </Box>
    </Box>
  )
}
