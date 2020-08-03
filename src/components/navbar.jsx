import React, { useState } from 'react'
import { Flex, Box, Text, Center, useBreakpoint, useTheme } from 'quantum-elements'
import Container from './container'
import NavLink from './navlink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { lighten } from 'polished'

function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false)

  const theme = useTheme()
  const isMobile = useBreakpoint() === 0

  return (
    <Container maxWidth={1180} h={80} px={8} mb={16} align="center" justify="space-between" dir="row">
      <NavLink to="/">
        <img
          src="https://avatars0.githubusercontent.com/u/28285686?s=400&u=891673c9b13f71437d0ecb14a69dbb4ef4ee7688&v=4" 
          style={{ width: 32, marginRight: 8, borderRadius: '50%' }}
        />
        <Text family="heading" weight={500} size={20}>
          Michael Auderer
        </Text>
      </NavLink>
      <Box>
        {isMobile ? (
          <NavLink to={null}>
            <FontAwesomeIcon
              icon={faBars}
              style={{ fontSize: 20 }}
              onClick={() => setShowMobileNav(!showMobileNav)}
            />
          </NavLink>
        ) : (
          <Flex align="center" dir="row">
            <NavLink to="/blog" text="Blog" />
            <NavLink to="/portfolio" text="Portfolio" />
            <NavLink to="/about" text="About" />
            <NavLink to="/contact">
              <Text family="heading" size={18} weight={500} color="primary">
                CONTACT
              </Text>
            </NavLink>
          </Flex>
        )}
      </Box>
    </Container>
  )
}

export default React.memo(Navbar)

