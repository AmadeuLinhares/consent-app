import { useCallback } from 'react'

import { Typography } from '@components/Typography'
import { RouteNames } from '@configs/routes'
import { sidebarOptions } from '@configs/sideBarOptions'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from '@mui/material'
import tokens from '@theme/tokens'
import { useNavigate } from 'react-router-dom'
export const SideBar = () => {
  const navigate = useNavigate()

  const onNavigate = useCallback(
    (route: RouteNames) => () => {
      navigate(route)
    },
    [navigate],
  )
  return (
    <Box
      bgcolor={tokens.colors.grey.GRAY_500}
      height={`100%`}
      borderRadius={`18px`}
    >
      <Box>
        <List>
          {sidebarOptions.map((item) => (
            <ListItem
              key={item.key}
              disablePadding
              onClick={onNavigate(item.route)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <ArrowRightIcon
                    sx={{
                      width: `30px`,
                      height: `30px`,
                      color: tokens.colors.grey.GRAY_600,
                    }}
                  />
                </ListItemIcon>
                <Typography variant="primary">{item.label}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  )
}
