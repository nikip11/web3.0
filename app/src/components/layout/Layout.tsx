import { Container, Grid } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Footer from './components/Footer'
import Header from './components/Header'
// import Main from './components/Main'

const theme = createTheme()

const menu = [
  { title: 'Home', url: '#' },
  { title: 'Technology', url: '#' }
]

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={menu} />
        <main>
          <Grid container spacing={4}></Grid>
        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
