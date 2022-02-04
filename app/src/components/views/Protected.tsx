import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'

export default function Protected() {
  return (
    <Grid item xs={12} md={12} sx={{ py: 5, my: 5 }}>
      <Typography variant="h2" gutterBottom sx={{ textAlign: 'center' }}>
        This is protected page
      </Typography>
    </Grid>
  )
}
