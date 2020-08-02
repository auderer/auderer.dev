import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { Flex, Text } from 'quantum-elements'

function NavLink({ to, text, children, ...props }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      dir="row"
      bg={hovered ? '#ebebeb' : ''}
      p={8}
      mx={8}
      radius={4}
      cursor="pointer"
      style={{ 
        cursor: 'pointer',
        transition: '100ms ease-in-out'
      }}
      onClick={() => navigate(to)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {text
        ? <Text family="heading" size={18} weight={500}>
            {text.toUpperCase()}
          </Text>
        : children
      }
    </Flex>
  ) 
}

export default React.memo(NavLink)

