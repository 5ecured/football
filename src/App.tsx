import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Stack } from '@mui/material'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

const App = () => {
  return (
    <>
      <Navbar />
      <Stack direction='row'>
        {/* <Sidebar /> */}
        <Main />
      </Stack>
    </>
  )
}

export default App