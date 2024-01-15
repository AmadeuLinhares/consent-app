import { Loading } from '@components/Loading'
import { GlobalStyles, ThemeProvider } from '@mui/material'
import { Router } from '@router/index'
import { globalStyles } from '@theme/globalStyles'
import { theme } from '@theme/theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  const oneMinCacheTime = 1000 * 60 // 1min

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: oneMinCacheTime,
        staleTime: oneMinCacheTime,
        retryOnMount: true,
        retry: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Loading />
          <GlobalStyles styles={globalStyles.styles} />
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
