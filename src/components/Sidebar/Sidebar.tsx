import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from './style';
import { Link } from 'react-router-dom'

interface Props {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}


const Sidebar: React.FC<Props> = ({ setShowSidebar }) => {
  const classes = useStyles()

  return (
    <Box flex={1.25} bgcolor='#f7f7f1'>
      <List sx={{ marginTop: 5 }}>

        <Link to='/champions' style={{ textDecoration: 'none' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                ⭐️
              </ListItemIcon>
              <ListItemText primary="Champions League" />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to='/epl' style={{ textDecoration: 'none' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                🏴󠁧󠁢󠁥󠁮󠁧󠁿
              </ListItemIcon>
              <ListItemText primary="English Premier League" />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to='/laliga' style={{ textDecoration: 'none' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                🇪🇸
              </ListItemIcon>
              <ListItemText primary="La Liga" />
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to='/seriea' style={{ textDecoration: 'none' }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                🇮🇹
              </ListItemIcon>
              <ListItemText primary="Serie A" />
            </ListItemButton>
          </ListItem>
        </Link>
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