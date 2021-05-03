import React, { ReactNode} from 'react'
import {
  Container,
} from './styles'

interface ButtonProps {
  children: ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <Container>
      { children }
    </Container>
  )
}
