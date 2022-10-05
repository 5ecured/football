import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Stack, Typography } from '@mui/material'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import ChampionsLeague from './components/ChampionsLeague/ChampionsLeague'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      <Navbar />
      
      <Stack direction='row'>
        {showSidebar &&
          <Sidebar
            setShowSidebar={setShowSidebar}
          />}

        <Routes>
          <Route path='/' element={<Main showSidebar={showSidebar} setShowSidebar={setShowSidebar} />} />
          <Route path='/champions' element={<ChampionsLeague />} />
          <Route path='/epl' />
          <Route path='/laliga' />
          <Route path='/seriea' />
        </Routes>
      </Stack>

      <Typography variant='h6' textAlign='center' gutterBottom sx={{ marginTop: 5, padding: 2 }}>
        Football Database 2022 ©
      </Typography>
    </>
  )
}

export default App