import { CardActions, CardContent, CardMedia, Grid, Card, Typography, Button, Box } from '@mui/material'
import React from 'react'
import { PlayerInterface } from '../../features/player/playerSlice'
import { useStyles } from './style'
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  display: PlayerInterface[]
}

const IndividualCard: React.FC<Props> = ({ display }) => {
  const classes = useStyles()

  const render = display.map((player, i) => (
    <Grid item xs={12} lg={4} className={classes.center} mt={5} key={i}>
      <Card>
        <CardMedia
          image={player.image}
          className={classes.image}
        />
        <CardContent>
          <Typography textAlign='center'>
            <b>{player.name}</b>
            <br />
            <b>{player.club}</b>
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Box mb={2}>
            <Button variant='contained'>Player info</Button>
            <Button variant='outlined'><DeleteIcon /></Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  ))

  return (
    <>
      {render}
    </>
  )
}

export default IndividualCard