import React from 'react'
import { QuantumProvider } from 'quantum-elements'
import theme from './src/styles/theme'

export default ({ element }) => (
  <QuantumProvider theme={theme}>
    {element}
  </QuantumProvider>
)

