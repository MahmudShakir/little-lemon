import { Container, HStack} from '@chakra-ui/react'
import React from 'react'
import Logo from '../icons_assets/Logo.svg'
import Nav from './Nav'

const Header = () => {
  return (
    <Container maxW={'4xl'}>
      <HStack justify={'space-between'} spacing='20px' my={'10px'}>
        <img src={Logo} alt='Logo'/>
        <Nav />
      </HStack>
    </Container>
  )
}

export default Header