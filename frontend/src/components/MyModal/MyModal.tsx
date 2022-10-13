import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useStyles } from './style'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { addPlayer, PlayerInterface } from '../../features/player/playerSlice';
import { delay } from '../../utils/functions'
import { createPlayer } from '../../api/frontToBackAPI';
import { AppDispatch } from '../../app/store'

/**
 * for react-file-base64 import, there are 2 options to ignore the TS error:
 * 
 * 1. use // @ts-ignore directly above that import line like so:
 * 
 * // @ts-ignore
 * import FileBase from 'react-file-base64'
 * 
 * 2. create a folder 'src/types/react-file-base64/index.d.ts' and inside, just type:
 * declare module 'react-file-base64'
 */

import FileBase from 'react-file-base64'


interface Props {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const Modal: React.FC<Props> = ({ setOpen }) => {
    const classes = useStyles()
    const dispatch = useDispatch<AppDispatch>()

    const [player, setPlayer] = useState<PlayerInterface>({ id: '', name: '', club: '', favorite: false })
    const [isNameEmpty, setIsNameEmpty] = useState<boolean>(false)
    const [isClubEmpty, setIsClubEmpty] = useState<boolean>(false)


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
            // dispatch(addPlayer(player))

            dispatch(createPlayer(player))
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
                        <Box>
                            <Typography>Optional image</Typography>
                            <Typography>(Less than 70 KB)</Typography>
                        </Box>
                        {/* <input type='file' accept='.png, .jpg, .jpeg .webp' name='file' onChange={handleFileUpload} /> */}
                        <FileBase
                            type='file'
                            multiple={false}
                            // { base64 }: { base64: any } below is how to do explicit type annotation when you are destructuring
                            onDone={({ base64 }: { base64: any }) => setPlayer({ ...player, photo: base64 })}
                        />
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