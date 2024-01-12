import { RouteNames } from '@configs/routes'
import { DefaultLayout } from '@layouts/DefaultLayout'
import { ConsentCollectionForm } from '@pages/ConsentCollectionForm'
import { ConsentManagement } from '@pages/ConsentManagement'
import { Routes, Route } from 'react-router-dom'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path={RouteNames.home} element={<ConsentCollectionForm />} />
        <Route
          path={RouteNames.collected_consents}
          element={<ConsentManagement />}
        />
      </Route>
    </Routes>
  )
}
