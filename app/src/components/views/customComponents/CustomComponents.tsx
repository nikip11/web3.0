import Link from '@mui/material/Link'
type componentType = {
  title: string
  url: string
}
export default function CustomComponents() {
  const components: componentType[] = [
    {
      title: 'Toast',
      url: 'components/toast'
    }
  ]
  return (
    <div>
      <ul>
        <li>
          {components.map((component) => (
            <Link noWrap key={component.title} href={component.url} sx={{ p: 1, flexShrink: 0 }}>
              {component.title}
            </Link>
          ))}
        </li>
      </ul>
    </div>
  )
}
