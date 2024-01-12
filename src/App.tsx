import { GlobalStyles, ThemeProvider } from '@mui/material'
import { Router } from '@router/index'
import { globalStyles } from '@theme/globalStyles'
import { theme } from '@theme/theme'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles styles={globalStyles.styles} />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
