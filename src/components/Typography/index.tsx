import styled from '@emotion/styled'
import tokens from '@theme/tokens'

import { TypographyProps } from './types'

const styledChoiced = ({ variant }: Pick<TypographyProps, 'variant'>) => {
  switch (variant) {
    case `primary`: // Menu
      return `
        color: ${tokens.colors.grey.GRAY_300};
        font-size: ${tokens.FONT_SIZE.LG};    
    `
    case `secondary`: // Checkbox Items
      return `
        color: ${tokens.colors.grey.GRAY_400};
        font-size: ${tokens.FONT_SIZE.MD};    
    `
    case `tertiary`: // Label && table items
      return `
        color: ${tokens.colors.grey.GRAY_200};
        font-size: ${tokens.FONT_SIZE.SM};    
    `
    case `quaternary`: // label table
      return `
        color: ${tokens.colors.grey.GRAY_700};
        font-size: ${tokens.FONT_SIZE.MD};    
    `
    case `error`: // label table
      return `
        color: ${tokens.colors.red.RED_DARK};
        font-size: ${tokens.FONT_SIZE.SM};    
    `

    default:
      return `
        color: ${tokens.colors.grey.GRAY_600};
        font-size: ${tokens.FONT_SIZE.LG};    
    `
  }
}

const Text = styled(`p`)<TypographyProps>`
  ${(props) => styledChoiced({ variant: props.variant })}
`

export const Typography = ({
  children,
  variant = `primary`,
  dataTestid,
}: TypographyProps) => {
  return (
    <Text data-testid={dataTestid} variant={variant}>
      {children}
    </Text>
  )
}
