import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
// import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Icon } from '@mui/material'
import Login from 'components/views/Login'

interface HeaderProps {
  sections: Array<{
    title: string
    url: string
    icon?: string
  }>
  title: string
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props

  return (
    <header>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          sx={{ flex: 1 }}
          noWrap
        >
          {title}
        </Typography>
        <IconButton>{/* <SearchIcon /> */}</IconButton>
        <Login />
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.icon && <Icon color="primary">{section.icon}</Icon>}
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </header>
  )
}
