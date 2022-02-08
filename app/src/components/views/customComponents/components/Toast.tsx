import { Button, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useToastContext } from 'contexts/toastContext/ToastContext'

type buttonToast = {
  title: string
  message: string
  severity?: 'success' | 'info' | 'warning' | 'error'
  action?: () => void
}

export default function Toast() {
  const addToast = useToastContext()

  const buttons: buttonToast[] = [
    {
      title: 'Success',
      message: 'This is a success message!',
      severity: 'success'
    },
    {
      title: 'info',
      message: 'This is an information message!',
      severity: 'info'
    },
    {
      title: 'error',
      message: 'This is an error message!',
      severity: 'error'
    },
    {
      title: 'warning',
      message: 'This is a warning message!',
      severity: 'warning'
    },
    {
      title: 'Action',
      message: 'Documento creado',
      action: () => alert('action')
    }
  ]

  return (
    <Grid item xs={12} md={12} sx={{ py: 5, my: 5 }}>
      <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }}>
        Toast
      </Typography>
      <Grid container spacing={2}>
        {buttons.map((button) => (
          <Grid item xs={12} sm={2} key={button.message}>
            <Button
              size="small"
              onClick={() =>
                addToast({
                  message: button.message,
                  severity: button.severity
                })
              }
            >
              {button.title}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
