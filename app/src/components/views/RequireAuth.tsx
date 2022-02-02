import { useLocation, Navigate } from 'react-router-dom'

function RequireAuth({ children }: { children: JSX.Element }) {
  let location = useLocation()
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  if (!user.account) {
    return <Navigate to="/" state={{ from: location }} replace />
  }

  return children
}

export default RequireAuth
