# Chakra UI

> 참고: https://www.youtube.com/watch?v=iXsM6NkEmFc&list=PL4cUxeGkcC9hcnIeryurNMMcGBHp7AYlP

## Setup

> npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

\_app.tsx를 다음과 같이 설정한다.

```typescript
// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
```

\_document.tsx도 다음과 같이 수정한다.

```typescript
import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* 👇 Here's the script */}
        <ColorModeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

## Components & Props

공식 사이트에 이미 스타일링된 Components들(Text, Heading 등)의 스타일이 존재하고, 바꾸려면 Props만 바꿔주면 된다.

### Style Props

> https://chakra-ui.com/docs/styled-system/style-props

공식 문서에 가면 props의 종류가 자세히 나와있다.

### Example Code

```typescript
import React from 'react';
import { Heading, Text, Container, Box } from '@chakra-ui/react';

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
```

- css props를 주어 기존 컴포넌트의 스타일을 바꿀 수 있다. m은 margin, p는 padding을 뜻하고 그 외에 여러가지 props가 존재한다.

- Container: 중앙 정렬을 해주는 Wrapper, 기본 태그는 div인데 as로 태그를 바꿀 수 있다.

- props 객체를 선언하고 sx에 넘겨줄 수도 있는데, filter같은 inline에서 사용하지 못하는 css나 :hover같은 psuedo selector의 사용을 가능하게 해준다.

## Flex Components

Chakra UI에서 자체적으로 제공하는 Flex Box Component가 존재한다.

```typescript
import {
  Flex,
  Heading,
  Box,
  Text,
  Button,
  Spacer,
  HStack,
} from '@chakra-ui/react';
function Navbar() {
  return (
    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1">Chakra UI 연습</Heading>
      {/* 위아래 두 엘리먼트 사이의 공백 생성 */}
      <Spacer />

      {/* 감싼곳애 gap='20px'을 적용 */}
      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>mario@netninja.dev</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
```

- Spacer: 빈 div를 생성 (=공백)
- HStack: 내부 자식 엘리먼트간 gap을 설정
- colorScheme: 지정한 색으로 칠하고 유사한 색의 hover 이벤트도 제공, Box에도 해봤는데 안됨.
