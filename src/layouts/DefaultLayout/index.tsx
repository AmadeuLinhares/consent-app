import { SideBar } from '@components/SideBar'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <Box
      display={`grid`}
      gridTemplateColumns={`20% auto`}
      columnGap={`10px`}
      height={`100vh`}
    >
      <SideBar />
      <Outlet />
    </Box>
  )
}
