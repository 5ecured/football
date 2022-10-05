import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Stack, Typography } from '@mui/material'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

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
        <Main
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      </Stack>
      <footer>
        <Typography variant='h6' textAlign='center' gutterBottom sx={{ marginTop: 10, padding: 2 }}>
          Football Database 2022 ©
        </Typography>
      </footer>
    </>
  )
}

export default App