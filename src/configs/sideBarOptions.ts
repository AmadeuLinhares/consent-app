import { RouteNames } from '@configs/routes'

export const sidebarOptions = [
  {
    label: `Give consent`,
    key: `give_consent`,
    route: RouteNames.home,
  },
  {
    label: `Collected consents`,
    key: `collected_consents`,
    route: RouteNames.collected_consents,
  },
]
