import { Box, Container, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Heroimage from '../icons_assets/Logo.svg'

const Footer = () => {
  return (
    <Box bg='blackAlpha.300' py='50px'>
      <Container maxW={'4xl'}>
        <SimpleGrid columns={{md: 4, sm:2, base:1}} spacing='10px'>
          <Box>
            <Image src={Heroimage}/>

          </Box>
          <Box>
            <Heading>Navigation</Heading>
            <Text>Home</Text>
            <Text>About</Text>
            <Text>Menu</Text>
            <Text>Reservation</Text>
            <Text>Order Online</Text>
            <Text>Login</Text>

          </Box>
          <Box>
            <Heading>Contact</Heading>
            <Text>Addresses</Text>
            <Text>Phone</Text>
            <Text>Email</Text>

          </Box>
          <Box>
            <Heading>Social</Heading>
            <Text>Fb</Text>
            <Text>TT</Text>
            <Text>Li</Text>

          </Box>

        </SimpleGrid>
      </Container>
    </Box>  )
}

export default Footer