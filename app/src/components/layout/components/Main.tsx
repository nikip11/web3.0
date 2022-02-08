import Grid from '@mui/material/Grid'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={12} sx={{ py: 5, my: 5 }}>
        <Outlet />
      </Grid>
    </Grid>
  )
}

{
  /* <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3
        }
      }}
    >
      <Grid item xs={12} md={12} sx={{ py: 5, my: 5 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Divider />
        {posts.map((post) => ({ post }))}
      </Grid>
    </Grid> */
}
