import { ReactNode } from 'react'

export type TypographyProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'error'
  dataTestid?: string
}
