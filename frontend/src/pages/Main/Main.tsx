import React, { useEffect, useState } from 'react'
import { Container, Button, Box, Grid, Modal, TextField } from '@mui/material'
import { useStyles } from './style'
import IndividualCard from '../../components/IndividualCard/IndividualCard'
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import MyModal from '../../components/MyModal/MyModal'
import { PlayerInterface } from '../../features/player/playerSlice'
import EditPlayer from '../../components/EditPlayer/EditPlayer'
import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { fetchFromBackend } from '../../features/player/playerSlice'
import { AppDispatch } from '../../app/store'


interface Props {
  showSidebar: boolean
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const Main: React.FC<Props> = ({ showSidebar, setShowSidebar }) => {
  const classes = useStyles()
  const dispatch = useDispatch<AppDispatch>()
  const originalData = useSelector((state: RootState) => state.player.mainArray)

  const [open, setOpen] = useState<boolean>(false)
  const [editing, setEditing] = useState<boolean>(false)
  const [playerToEdit, setPlayerToEdit] = useState<PlayerInterface>({ id: null, name: '', club: '', important: false })
  const [filteredText, setFilteredText] = useState<string>('')
  const [showFavorite, setShowFavorite] = useState<boolean>(false)

  useEffect(() => {
    dispatch(fetchFromBackend())
  }, [])

  const whichPlayerToEdit = (obj: PlayerInterface) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setEditing(true)
    setPlayerToEdit(obj)
  }

  let display = originalData.filter(player => {
    return (
      player.name.toLowerCase().includes(filteredText.toLowerCase()) ||
      player.club.toLowerCase().includes(filteredText.toLowerCase())
    )
  })

  let playersToDisplay = showFavorite ? display.filter(player => player.important) : display

  return (
    <Box flex={5}>
      <Container maxWidth='lg'>
        <Box className={classes.center} mt={5} mb={5}>
          {editing ? (
            <EditPlayer playerToEdit={playerToEdit} setEditing={setEditing} />
          ) : (
            <Button sx={{ height: 55 }} variant='contained' onClick={() => setOpen(true)} className={classes.add}>Add player</Button>
          )}
        </Box>


        <Box className={classes.filterAndFavorite}>
          <Box className={classes.center}>
            <TextField
              variant='outlined'
              label='Filter by player name or club'
              sx={{ width: 250 }}
              value={filteredText}
              onChange={e => setFilteredText(e.target.value)}
            />
            <Button onClick={e => setFilteredText('')} variant='outlined' sx={{ height: 55, marginLeft: 2, width: 100 }}>Clear</Button>
          </Box>

          <Box>
            <Button onClick={() => setShowFavorite(!showFavorite)} variant='outlined' sx={{ height: 55, marginLeft: 5 }}>Showing {showFavorite ? 'favorite' : 'all'} players</Button>
          </Box>
        </Box>


        <Modal
          open={open}
          onClose={() => setOpen(false)}
          className={classes.center}
        >
          <Box>
            <MyModal setOpen={setOpen} />
          </Box>
        </Modal>

        <Box>
          <Grid container spacing={3} className={classes.center}>
            <IndividualCard playersToDisplay={playersToDisplay} whichPlayerToEdit={whichPlayerToEdit} />
          </Grid>
        </Box>

        {!showSidebar &&
          <Fab sx={{ position: 'fixed', bottom: '50%', left: 20 }} onClick={() => setShowSidebar(true)}>
            <ArrowForwardIcon />
          </Fab>
        }

        <Fab sx={{ position: 'fixed', bottom: 20, right: 20 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ArrowUpwardIcon />
        </Fab>
      </Container>
    </Box>
  )
}

export default Main