import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from './style';

interface Props {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}


const Sidebar: React.FC<Props> = ({ setShowSidebar }) => {
  const classes = useStyles()

  return (
    <Box flex={1.25} bgcolor='pink'>
      <List sx={{ marginTop: 5 }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              ⭐️
            </ListItemIcon>
            <ListItemText primary="Champions League" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              🏴󠁧󠁢󠁥󠁮󠁧󠁿
            </ListItemIcon>
            <ListItemText primary="English Premier League" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              🇪🇸
            </ListItemIcon>
            <ListItemText primary="La Liga" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              🇮🇹
            </ListItemIcon>
            <ListItemText primary="Serie A" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setShowSidebar(false)}>
            <ListItemIcon>
              <CloseIcon />
            </ListItemIcon>
            <ListItemText primary="Close sidebar" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default Sidebar