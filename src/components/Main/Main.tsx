import React from 'react'
import { Container, Button, Typography, Box, Grid } from '@mui/material'
import { useStyles } from './MainStyle'
import IndividualCard from '../Card/IndividualCard'
import type { RootState } from '../../app/store'
import { useSelector } from 'react-redux'

const Main: React.FC = () => {
  const classes = useStyles()
  const display = useSelector((state: RootState) => state.player.mainArray)

  return (
    <Container maxWidth='lg' style={{ backgroundColor: 'pink' }} >
      <Box className={classes.center} mt={5}>
        <Button variant='contained'>Add player</Button>
      </Box>
      <Box>
        <Grid container spacing={3} className={classes.center}>
          <IndividualCard display={display} />
          {/* <Grid item xs={12} lg={4}>a</Grid>
          <Grid item xs={12} lg={4}>a</Grid>
          <Grid item xs={12} lg={4}>a</Grid>
          <Grid item xs={12} lg={4}>a</Grid>
          <Grid item xs={12} lg={4}>a</Grid>
          <Grid item xs={12} lg={4}>a</Grid> */}
        </Grid>
      </Box>
    </Container>
  )
}

export default Main