import React from 'react'
import { QuantumProvider } from 'quantum-elements'
import theme from './src/styles/theme'
import './src/styles/global.css'

export const wrapRootElement = ({ element }) => (
  <QuantumProvider theme={theme}>
    {element}
  </QuantumProvider>
)

