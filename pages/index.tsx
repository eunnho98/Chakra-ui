import React from 'react';
import { Heading, Text, Container, Box } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';

function Index() {
  const boxStyles = {
    p: '10px',
    bg: 'purple.400',
    color: 'white',
    m: '10px',
    textAlign: 'center',
    filter: 'blur(2px)',
    ':hover': {
      color: 'black',
      bg: 'blue.200',
    },
  };

  return (
    <div>
      <Navbar />
      <Container as="section" maxWidth="3xl">
        <Heading my="30px" p="10px">
          Chakra ui Compoents
        </Heading>
        <Text ml="30px">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          quibusdam tenetur delectus. Animi doloribus facere est optio beatae
          reiciendis, dolores nesciunt id natus perspiciatis debitis itaque
          possimus rerum ratione. Harum.
        </Text>
        <Text ml="30px" color="blue.300" fontWeight="bold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          quibusdam tenetur delectus. Animi doloribus facere est optio beatae
          reiciendis, dolores nesciunt id natus perspiciatis debitis itaque
          possimus rerum ratione. Harum.
        </Text>

        <Box my="30px" bg="orange" p="10">
          <Text color="white">Box 내부 글</Text>
        </Box>

        <Box sx={boxStyles}>Hello, World!</Box>
      </Container>
    </div>
  );
}

export default Index;

/**
 * m: margin, my하면 y방향 margin
 * ml이라고 해도 되고 full name으로 marginLeft라고 해도 된다.
 * p: padding
 *
 * Box: 빈 div와 같은 역할을 함
 *
 * sx: inline css에서 사용할 수 없는 props를 사용 & psuedo selecor을 사용할 수 있게 된다) filter 등
 */
