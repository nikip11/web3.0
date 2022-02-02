import { useRoutes, RouteObject } from 'react-router-dom'
import Home from 'components/views/Home'
import NotFound from 'components/views/NotFound'
import Layout from 'components/layout/Layout'
import Protected from 'components/views/Protected'
import RequireAuth from 'components/views/RequireAuth'

const Routes = () => {
  let routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/protected',
          element: (
            <RequireAuth>
              <Protected />
            </RequireAuth>
          )
        }
      ]
    },
    // { path: '/login', element: <Login /> },
    { path: '*', element: <NotFound /> }
  ]
  return useRoutes(routes)
}

export default Routes
