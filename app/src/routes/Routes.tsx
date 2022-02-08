import { useRoutes, RouteObject } from 'react-router-dom'
import Home from 'components/views/Home'
import NotFound from 'components/views/NotFound'
import Layout from 'components/layout/Layout'
import Protected from 'components/views/Protected'
import RequireAuth from 'components/views/RequireAuth'
import Pokemon from 'components/views/Pokemon'
import Toast from 'components/views/customComponents/components/Toast'
import CustomComponents from 'components/views/customComponents/CustomComponents'

const Routes = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'pokemon/:id',
          element: <Pokemon />
        },
        {
          path: 'components/',
          element: <CustomComponents />
        },
        {
          path: 'components/toast/',
          element: <Toast />
        },
        {
          path: 'protected',
          element: (
            <RequireAuth>
              <Protected />
            </RequireAuth>
          )
        }
      ]
    },
    {},
    { path: '*', element: <NotFound /> }
  ]
  return useRoutes(routes)
}

export default Routes
