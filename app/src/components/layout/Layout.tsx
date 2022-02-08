import { Container, Grid } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Footer from 'components/layout/components/Footer'
import Header from 'components/layout/components/Header'
import Main from 'components/layout/components/Main'
import Sidebar from 'components/layout/components/Sidebar'

const theme = createTheme()

const menu = [
  { title: 'Home', url: '/' },
  { title: 'Pokemon', url: '/pokemon' },
  { title: 'Components', url: '/components' },
  { title: 'Technology', url: '#' },
  { title: 'Protected', url: '/protected' }
]

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={menu} />
        <main>
          <Grid container spacing={4}>
            <Grid item xs={12} md={9} sx={{ py: 5, my: 5 }}>
              <Main />
            </Grid>
            <Grid item xs={12} md={3} sx={{ py: 5, my: 5 }}>
              <Sidebar />
            </Grid>
          </Grid>
        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
