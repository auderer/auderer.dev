import React from 'react'
import { Flex } from 'quantum-elements'

function Container(props) {
  return (
    <Flex align="center" justify="center">
      <Flex w="100%" maxWidth={1152} {...props} />
    </Flex>
  )
}

export default React.memo(Container)

