import React, { useState, useEffect } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useStyles } from './style'
import { PlayerInterface } from '../../features/player/playerSlice'
import { useDispatch } from 'react-redux'
import { editPlayer } from '../../features/player/playerSlice'
import { delay } from '../../utils/functions'
import { updatePlayer } from '../../api/backendAPI'
import { AppDispatch } from '../../app/store'


interface Props {
    playerToEdit: PlayerInterface
    setEditing: React.Dispatch<React.SetStateAction<boolean>>
}

const EditPlayer: React.FC<Props> = ({ playerToEdit, setEditing }) => {
    const classes = useStyles()
    const [player, setPlayer] = useState<PlayerInterface>(playerToEdit)
    const [isNameEmpty, setIsNameEmpty] = useState<boolean>(false)
    const [isClubEmpty, setIsClubEmpty] = useState<boolean>(false)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        setPlayer(playerToEdit)
    }, [playerToEdit])

    const triggerNameError = async () => {
        setIsNameEmpty(true)
        await delay(1500)
        setIsNameEmpty(false)
    }

    const triggerClubError = async () => {
        setIsClubEmpty(true)
        await delay(1500)
        setIsClubEmpty(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPlayer({ ...player, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!player.name) triggerNameError()

        if (!player.club) triggerClubError()

        if (player.name && player.club) {
            //RTK action payload only accepts 1 argument. For multiple args, use an array/object
            // dispatch(editPlayer([player, player.id]))

            dispatch(updatePlayer(player))
            setEditing(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box>
                <Typography textAlign='center' variant='h5'>
                    Edit a player
                </Typography>
                <Box className={classes.center} sx={{ marginTop: '15px' }}>
                    <TextField
                        variant='outlined'
                        label='Enter player name'
                        className={classes.field}
                        onChange={handleChange}
                        name='name'
                        value={player.name}
                    />
                    <TextField
                        variant='outlined'
                        label='Enter player club'
                        className={classes.field}
                        onChange={handleChange}
                        name='club'
                        value={player.club}
                    />
                </Box>
                <Box className={classes.error}>
                    {isNameEmpty ? <Typography color='error'>Please enter a name</Typography> : <Typography></Typography>}
                    {isClubEmpty ? <Typography color='error'>Please enter a club</Typography> : <Typography></Typography>}
                </Box>
                <Box className={classes.center} sx={{ marginTop: '30px' }}>
                    <Button type='submit' variant='contained'>Edit</Button>
                    <Button variant='outlined' onClick={() => setEditing(false)}>Cancel</Button>
                </Box>
            </Box>
        </form>
    )
}

export default EditPlayer