import { Box, Button, Card, Container, Heading, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import HeroImage from '../icons_assets/restauranfood.jpg'
import GreekSalad from '../icons_assets/greek salad.jpg'
import Bruchetta from '../icons_assets/bruchetta.svg'
import LemonDesert from '../icons_assets/lemon dessert.jpg'

const Main = () => {
  return (
    <VStack>
      <Box bgColor='#496e67' h='300px' w='100vw'>
        <Container maxW={'4xl'}>
          <SimpleGrid columns='2'>
            <VStack spacing={'10px'} align='flex-start' pt='20px'>
              <Heading color={'#f4CE14'} as='h1'>Little Lemon</Heading>
              <Heading as={'h2'} size='md' color={'whiteAlpha.900'}> Chicago</Heading>
              <Text color={'whiteAlpha.900'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
              <a href='/reservation'><Button bgColor={'#f4CE14'}>Reserve a Table</Button></a>
            </VStack>
            <Image src={HeroImage} h={'300px'} w='280px' borderRadius='10px' justifySelf='center' mt='15px' mb='-15px'/>
          </SimpleGrid>
        </Container>
      </Box>

      <Box pt={'20px'}>
        <Container maxW={'4xl'} my='20px'>
          <HStack justify={'space-between'} my='20px'>
            <Heading as={'h3'}>This Week Specials!</Heading>
            <Button bgColor={'#f4CE14'}>Online Menu</Button>
          </HStack>

          <SimpleGrid columns={{md: 3, sm:2, base:1}} spacing='10px'>
            <Card>
              <Image src={GreekSalad} h='200px' borderRadius={'10px'}/>
              <HStack justify={'space-between'} p='10px'>
                <Heading as={'h4'} size='md'>Greek Salad</Heading>
                <Text>12.88$</Text>
              </HStack>
              <Text p='10px'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ul pi o
              </Text>
              <HStack p='10px'>
                <Heading as='p' size='md'>Order a Delivery</Heading>
              </HStack>
            </Card>

            <Card>
              <Image src={Bruchetta} h='200px' borderRadius={'10px'}/>
              <HStack justify={'space-between'} p='10px'>
                <Heading as={'h4'} size='md'>Bruchetta</Heading>
                <Text>12.88$</Text>
              </HStack>
              <Text p='10px'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ul pi o
              </Text>
              <HStack p='10px'>
                <Heading as='p' size='md'>Order a Delivery</Heading>
              </HStack>
            </Card>

            <Card>
              <Image src={LemonDesert} h='200px' borderRadius={'10px'}/>
              <HStack justify={'space-between'} p='10px'>
                <Heading as={'h4'} size='md'>Lemon Desert</Heading>
                <Text>12.88$</Text>
              </HStack>
              <Text p='10px'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ul pi o
              </Text>
              <HStack p='10px'>
                <Heading as='p' size='md'>Order a Delivery</Heading>
              </HStack>
            </Card>
            
          </SimpleGrid>
        </Container>
      </Box>

      <Box bg='blackAlpha.300' w='100vw'>
        <Container maxW={'4xl'}>
          <HStack mt='40px' justify={'center'}>
            <Heading as={'h3'}>Testimonials</Heading>
          </HStack>
          <SimpleGrid columns={{md: 4, sm:2, base:1}} spacing='10px' py='50px'>
            <Card px='10px'>
              <Text py='10px' align={'center'}>
              ⭐⭐⭐⭐⭐
              </Text>
              <HStack>
                <Image src={HeroImage} h='100px' w='100px'>

                </Image>
                <Text align={'center'}>Mr. Customer</Text>

              </HStack>
              <Text py='10px'>
                Impressive Test & Services
              </Text>
            </Card>

            <Card px='10px'>
              <Text py='10px' align={'center'}>
              ⭐⭐⭐⭐⭐
              </Text>
              <HStack>
                <Image src={HeroImage} h='100px' w='100px'>

                </Image>
                <Text align={'center'}>Mr. Customer</Text>

              </HStack>
              <Text py='10px'>
                Impressive Test & Services
              </Text>
            </Card>

            <Card px='10px'>
              <Text py='10px' align={'center'}>
              ⭐⭐⭐⭐⭐
              </Text>
              <HStack>
                <Image src={HeroImage} h='100px' w='100px'>

                </Image>
                <Text align={'center'}>Mr. Customer</Text>

              </HStack>
              <Text py='10px'>
                Impressive Test & Services
              </Text>
            </Card>

            <Card px='10px'>
              <Text py='10px' align={'center'}>
              ⭐⭐⭐⭐⭐
              </Text>
              <HStack>
                <Image src={HeroImage} h='100px' w='100px'>

                </Image>
                <Text align={'center'}>Mr. Customer</Text>

              </HStack>
              <Text py='10px'>
                Impressive Test & Services
              </Text>
            </Card>

          </SimpleGrid>
        </Container>
      </Box>

      <Box>
        <Container maxw='4xl' justify={'space-between'} py='50px'>
          <SimpleGrid columns={{md: 2, base:1}} spacing='10px'>
            <VStack>
            <Box pt='50px'>
              <Heading py='10px'>Little Lemon</Heading>
              <Text py='10px'>Chicago</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
              </Text>

            </Box>
            </VStack>

            <Box>
              <Image src={HeroImage}></Image>

            </Box>

          </SimpleGrid>
        </Container>
      </Box>
      



    </VStack>
  )
}

export default Main