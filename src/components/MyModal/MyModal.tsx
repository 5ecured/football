import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useStyles } from './style'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { addPlayer, PlayerInterface } from '../../features/player/playerSlice';
import { delay } from '../../utils/functions'

interface Props {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const Modal: React.FC<Props> = ({ setOpen }) => {
    const classes = useStyles()
    const dispatch = useDispatch()


    const [selectedFile, setSelectedFile] = useState<object | undefined>(undefined)
    const [player, setPlayer] = useState<PlayerInterface>({ id: null, name: '', club: '' })
    const [isNameEmpty, setIsNameEmpty] = useState<boolean>(false)
    const [isClubEmpty, setIsClubEmpty] = useState<boolean>(false)

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFile(e.target.files![0])
    }

    console.log('player.id', player.id)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayer({ ...player, [e.target.name]: e.target.value })
    }

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!player.name) triggerNameError()

        if (!player.club) triggerClubError()

        if (player.name && player.club) {
            dispatch(addPlayer(player))
            setOpen(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box className={classes.modal}>
                <Typography textAlign='center' className={classes.text} variant='h6'>Add a player</Typography>
                <Stack spacing={3} className={classes.center}>
                    <TextField
                        variant='outlined'
                        label='Enter player name'
                        className={classes.field}
                        onChange={handleChange}
                        name='name'
                        value={player.name}
                    />
                    {isNameEmpty && <Typography color='error'>Please enter a name</Typography>}
                    <TextField
                        variant='outlined'
                        label='Enter player club'
                        className={classes.field}
                        onChange={handleChange}
                        name='club'
                        value={player.club}
                    />
                    {isClubEmpty && <Typography color='error'>Please enter a club</Typography>}
                    <Box className={classes.imageField}>
                        <Typography>Image (optional)</Typography>
                        <input type='file' name='file' onChange={handleFileUpload} />
                    </Box>
                    <Button type='submit' className={classes.addPlayer} variant='contained'>
                        <AddIcon />
                    </Button>
                </Stack>
            </Box>
        </form>
    )
}

export default Modal