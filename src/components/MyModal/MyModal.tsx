import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useStyles } from './style'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { addPlayer } from '../../features/player/playerSlice';
import { delay } from '../../utils/functions'

interface Player {
    id: number | null
    name: string
    club: string,
    image?: string
}

interface Props {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const Modal: React.FC<Props> = ({ setOpen }) => {
    const classes = useStyles()
    const dispatch = useDispatch()


    const [selectedFile, setSelectedFile] = useState<object | undefined>(undefined)
    const [player, setPlayer] = useState<Player>({ id: null, name: '', club: '' })
    const [isNameEmpty, setIsNameEmpty] = useState<boolean>(false)

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFile(e.target.files![0])
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayer({ ...player, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!player.name) {

        }

        dispatch(addPlayer(player))
        setOpen(false)
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
                    <TextField
                        variant='outlined'
                        label='Enter player club'
                        className={classes.field}
                        onChange={handleChange}
                        name='club'
                        value={player.club}
                    />
                    {/* <TextField variant='outlined' label='Enter player image (optional)' className={classes.field} /> */}
                    {/* <input type='file' name='file' onChange={handleFileUpload} /> */}
                    <Button type='submit' className={classes.addPlayer} variant='contained'>
                        <AddIcon />
                    </Button>
                </Stack>
            </Box>
        </form>
    )
}

export default Modal