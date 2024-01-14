import { GlobalStyles, ThemeProvider } from '@mui/material'
import { Router } from '@router/index'
import { globalStyles } from '@theme/globalStyles'
import { theme } from '@theme/theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000,
        staleTime: 1000,
        retryOnMount: true,
        retry: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyles styles={globalStyles.styles} />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
