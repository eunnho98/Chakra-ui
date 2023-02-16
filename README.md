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

## Grid

SimpleGrid와 Grid 컴포넌트가 있다.

- SimpleGrid: 작은 카드, 메뉴, 작은 위젯을 만드는데 주로 사용되고 Flexibility가 없다.
- Grid: 대형 레이아웃, 그리드 기반 레이아웃, 타일 레이아웃을 만드는데 주로 사용된다.

props에도 차이가 있으니 공식 문서를 참고하자.

Grid를 쓸 땐 각 Grid 요소를 GridItem 컴포넌트로 감싼다.

### 예시 코드

```typescript
// SimpleGrid
import { Box, SimpleGrid } from '@chakra-ui/react';

export default function Dashboard() {
  return (
    // minChildWidth가 있으면 화면 너비에 따라 열이 조정되므로 사실상 columns는 필요없다.
    <SimpleGrid p="10px" columns={4} spacing={10} minChildWidth={250}>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>

      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>

      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
    </SimpleGrid>
  );
}

// Grid
import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Dashboard from '@/components/DashBoard';

function GridTest() {
  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
        {/* sidebar */}
        <GridItem
          as="aside"
          colSpan={1}
          bg="purple.400"
          minHeight="100hv"
          p="30px"
        >
          <span>sidebar</span>
        </GridItem>

        {/* main content & navbar */}
        <GridItem as="main" colSpan={5} p="40px">
          <Navbar />
          <Dashboard />
        </GridItem>
      </Grid>
    </>
  );
}

export default GridTest;
```

## 반응형

Chakra UI의 default responsive styles는 다음과 같다.

```javascript
const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};
```

Text 컴포넌트에 적용을 한다면 다음과 {}안에 넣으면 된다.

```typescript
<Text fontSize={{ base: '24px', md: '40px', lg: '56px' }}>
  This is responsive text
</Text>
```

- 즉 0 ~ 48em에선 24px, 48em ~ 62em에선 40px, 그 이상에선 56px이 적용된다.

## List & List Icons

### List

<ul> / <ol>을 대체하는 Chakra UI 컴포넌트이다. 각 항목을 표시하기 위해 <ListItem> 컴포넌트를 포함한다.

### Icons

> npm install @chakra-ui/icons

공식 Docs의 icon 항목으로 가면 사용할 수 있는 icon들이 있다.
Chakra-UI에서 제공하는 icon은 모두 컴포넌트이다.

사용 방법은 다음과 같다.

```typescript
import { CalendarIcon, EditIcon, AtSignIcon } from '@chakra-ui/icons';
import { List, ListItem, ListIcon } from '@chakra-ui/react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <Link href="/">
          <ListIcon as={CalendarIcon} color="white" />
          Dashboard
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/create">
          <ListIcon as={EditIcon} color="white" />
          New Task
        </Link>
      </ListItem>
      <ListItem>
        <Link href="/profile">
          <ListIcon as={AtSignIcon} color="white" />
          Profile
        </Link>
      </ListItem>
    </List>
  );
}
```

ListIcon 컴포넌트 as 프로퍼티에 자신이 사용하려고 하는 icon을 넣으면 된다.

컴포넌트이므로 props style도 지정 가능하다.

## Card Component

BOX 컴포넌트를 기반으로 하고, UI 섹션을 쉽게 나눌 수 있는 UI 컴포넌트이다.

쓰임새는 다음과 같다.

```typescript
<Card>
  <CardHeader> ~~ </CardHeader>

  <CardBody> ~~ </CardBody>

  <CardFooter> ~~ </CardFooter>
</Card>
```

Box 속성을 기반으로 하므로 여러 style을 적용할 수 있다.

## Tab

페이지나 앱에서 여러 콘텐츠를 표시하고 전환할 수 있도록 하는 탭 인터페이스를 생성한다. 각각의 탭에 대한 라벨과 콘텐츠를 정의할 수 있다.

Tabs 컴포넌트는 TabList와 TabPanels 컴포넌트를 포함한다.
TabList 컴포넌트는 각각의 탭에 대한 라벨을 정의하며, Tab 컴포넌트를 사용하여 각각의 탭을 생성한다.
TabPanels 컴포넌트는 각각의 탭에 대한 콘텐츠를 정의하며, TabPanel 컴포넌트를 사용하여 각각의 콘텐츠를 생성한다.

```typescript
<Tabs mt="40px" p="20px" variant="enclosed" colorScheme="purple">
  <TabList>
    {/* 선택되었을 때의 스타일 지정 */}
    <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Account Info</Tab>
    <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Task History</Tab>
  </TabList>

  <TabPanels py="10px">
    {/* 첫 번째 탭에 대한 콘텐츠 */}
    <TabPanel>
      <List spacing={4}>
        <ListItem>
          <ListIcon as={EmailIcon} />
          Email: mario@netninja.dev
        </ListItem>
        <ListItem>
          <ListIcon as={ChatIcon} />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </ListItem>
        <ListItem>
          <ListIcon as={StarIcon} />
          Lorem ipsum dolor sit amet consectetur.
        </ListItem>
      </List>
    </TabPanel>
    {/* 두 번째 탭에 대한 콘텐츠 */}
    <TabPanel>
      <List spacing={4}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="teal.400" />
          Lorem ipsum dolor sit amet consectetur.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="teal.400" />
          Lorem ipsum dolor sit amet consectetur.
        </ListItem>
        <ListItem>
          <ListIcon as={WarningIcon} color="red.400" />
          Lorem ipsum dolor sit amet consectetur.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="teal.400" />
          Lorem ipsum dolor sit amet consectetur.
        </ListItem>
      </List>
    </TabPanel>
  </TabPanels>
</Tabs>
```

## Form Fields

Chakra UI 자체 form 엘리먼트가 없어서 form은 기존 React를 써야한다.

Chakra UI에서 제공하는 form control component는 다음과 같다.

- FormControl: 하나의 Form을 묶는 Wrapper, 하위 컴포넌트에 다양한 속성 제공 -> isRequired 등
- FormLabel: form에 label을 지정(이름 지정)
- FormHelperText: form에 대한 추가 정보를 쓰느 곳
- FormErrorMessage: 에러가 발생하면 메시지를 주는 곳

### 예시

```typescript
function Create() {
  return (
    <Box maxW="480px">
      <form method="post">
        {/* isRequired하면 빨간색 벌표가 뜸 */}
        <FormControl isRequired mb="40px">
          <FormLabel>Task name:</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter a descriptive task name.</FormHelperText>
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Task description:</FormLabel>
          <Textarea
            placeholder="Enter a detailed description for your task..."
            name="description"
          />
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox name="isPriority" colorScheme="purple" size="lg" />
          <FormLabel mb="0" ml="10px">
            Make a priority task
          </FormLabel>
        </FormControl>

        <Button type="submit">submit</Button>
      </form>
    </Box>
  );
}
```

## toast

사용자에게 일시적인 메시지나 알림을 제공해주고, react hook의 형태로 지원한다. 일종의 alert 창이라고 할 수 있다.

```typescript
function Navbar() {
  const toast = useToast();
  return (
    /* ... */
        <Button
          colorScheme="purple"
          onClick={() => {
            toast({
              title: 'Logged out.',
              description: 'Successfully logged out',
              duration: 5000,
              isClosable: true,
              position: 'top',
              status: 'success',
              icon: <UnlockIcon />,
            });
          }>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
```

추가적인 정보는 공식 문서의 toast 항목을 참고하자.

## Avatar

User의 프로필 사진 등을 쉽게 보여주게 하는 컴포넌트이다.

세 가지의 Avatar 관련 컴포넌트가 있다.

- Avatar: 유저를 나타내는 이미지
- AvatarBadge: 오른쪽 구석에 유저에 대해 나타내는 뱃지
- AvatarGroup: 아바타를 묶는 그룹, 겹쳐 보여주기 등이 가능해진다.

만약 아바타가 존재하지 않으면 기본 아바타로 표현되고, 직접 커스터마이징도 가능하다.

```typescript
<Avatar name="Mario" src="/img/mario.png">
  <AvatarBadge width="1.3em" bg="teal.300">
    <Text fontSize="x-small">5</Text>
  </AvatarBadge>
</Avatar>

// 최대 두 명이 나타나게됨, 나머지는 +3으로 옆에 뜸
<AvatarGroup size='md' max={2}>
  <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
</AvatarGroup>
```

## Theme Customizing

Chakra UI에서 제공하는 테마에 내가 추가로 테마를 넣을 수 있다.

하는 방법은 다음 코드를 참조하자.

```typescript
// pages/_app.js
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

const colors = {
  facebook: {
    900: '#024fc9',
    800: '#146af5',
    700: '#2977f2',
    600: '#337df2',
    500: '#4287f5',
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
```

이제 facebook.500 등의 테마가 추가되었고 사용할 수 있게된다.

## 그 외

Modal, Center 등이 있고, useColorMode()로 쉽게 다크모드로 바꿀 수 있으니 나중에 찾아보도록 하자.
