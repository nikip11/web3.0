import { useLocation, Navigate } from 'react-router-dom'

type Props = {
  children: JSX.Element
}
function RequireAuth({ children }: Props) {
  const location = useLocation()
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  if (!user.account) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children
}

export default RequireAuth
