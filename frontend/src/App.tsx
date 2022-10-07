import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import { Routes, Route } from 'react-router-dom'
import ChampionsLeague from './components/ChampionsLeague/ChampionsLeague'
import EnglishLeague from './components/EnglishLeague/EnglishLeague'
import SpanishLeague from './components/SpanishLeague/SpanishLeague'
import ItalianLeague from './components/ItalianLeague/ItalianLeague'

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      <Navbar setShowSidebar={setShowSidebar} />

      <Stack direction='row'>
        {showSidebar &&
          <Sidebar
            setShowSidebar={setShowSidebar}
          />}

        <Routes>
          <Route path='/' element={<Main showSidebar={showSidebar} setShowSidebar={setShowSidebar} />} />
          <Route path='/champions' element={<ChampionsLeague showSidebar={showSidebar} setShowSidebar={setShowSidebar} />} />
          <Route path='/epl' element={<EnglishLeague showSidebar={showSidebar} setShowSidebar={setShowSidebar} />} />
          <Route path='/laliga' element={<SpanishLeague showSidebar={showSidebar} setShowSidebar={setShowSidebar} />} />
          <Route path='/seriea' element={<ItalianLeague showSidebar={showSidebar} setShowSidebar={setShowSidebar} />} />
        </Routes>
      </Stack>

      <Box bgcolor='#f7f7f1'>
        <Typography variant='h6' textAlign='center' sx={{ marginTop: 5, padding: 2 }}>
          Football Database 2022 ©
        </Typography>
      </Box>
    </>
  )
}

export default App