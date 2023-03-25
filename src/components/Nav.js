import { HStack, Menu, MenuButton, MenuItem, MenuList, Button, Box} from '@chakra-ui/react'
import React from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'

const Nav = () => {
  return (
      <nav>
          <HStack fontWeight={'bold'} spacing='20px' display={{md:'flex', base:'none'}} >
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/menu'>Menu</a>
            <a href='/reservation'>Reservation</a>
            <a href='/orderonline'>Order Online</a>
            <a href='/login'>Login</a>
          </HStack>
          <Box display={{md:'none'}}>
          <Menu>
            <MenuButton as={Button}>
              <HamburgerIcon/>
            </MenuButton>
            <MenuList>
              <a href='/'><MenuItem>Home</MenuItem></a>
              <a href='/about'><MenuItem>About</MenuItem></a>
              <a href='/menu'><MenuItem>Menu</MenuItem></a>
              <a href='/reservation'><MenuItem>Reservation</MenuItem></a>
              <a href='/orderonline'><MenuItem>Order Online</MenuItem></a>
              <a href='/login'><MenuItem>Login</MenuItem></a>
            </MenuList>
          </Menu>
          </Box>
      </nav>
  )
}

export default Nav