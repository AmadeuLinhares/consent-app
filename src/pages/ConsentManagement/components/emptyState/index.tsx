import { Typography } from '@components/Typography'
import SmsFailedTwoToneIcon from '@mui/icons-material/SmsFailedTwoTone'
import { Box } from '@mui/material'
import tokens from '@theme/tokens'
export const EmptyState = () => {
  return (
    <Box display={`grid`} rowGap={tokens.SPACINGS.spacing24}>
      <Box display={`flex`} justifyContent={`center`} alignItems={`center`}>
        <SmsFailedTwoToneIcon
          sx={{
            fontSize: tokens.FONT_SIZE.XXXXL,
          }}
          color="warning"
        />
      </Box>
      <Box display={`flex`} justifyContent={`center`} alignItems={`center`}>
        <Typography>You dont have consents added yet</Typography>
      </Box>
    </Box>
  )
}
