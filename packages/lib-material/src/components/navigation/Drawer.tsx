import { useState } from 'react'

import { Content } from '@exothermic/core'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

export type Props = {
  list?: string[]
} & DrawerProps

export function Drawer(props: Props) {
  const { list = [] } = props
  const [open, setOpen] = useState(false)

  return (
    <div>
      <IconButton color='inherit' aria-label='open drawer' onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <MuiDrawer open={open} onClose={() => setOpen(false)} {...props}>
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
          component='div'
        >
          <List>
            {list?.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={<Content content={text} />} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </MuiDrawer>
    </div>
  )
}
