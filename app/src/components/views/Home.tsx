import { Button, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useToastContext } from 'contexts/toastContext'

export default function Home() {
  const addToast = useToastContext()

  return (
    <Grid item xs={12} md={12} sx={{ py: 5, my: 5 }}>
      <Button size="small" onClick={() => addToast('Formulario enviado')}></Button>
      <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }}>
        This is the home
      </Typography>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
    </Grid>
  )
}
