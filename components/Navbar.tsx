import { UnlockIcon } from '@chakra-ui/icons';
import {
  Flex,
  Heading,
  Box,
  Text,
  Button,
  Spacer,
  HStack,
  useToast,
  Avatar,
  AvatarBadge,
} from '@chakra-ui/react';
function Navbar() {
  const toast = useToast();
  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1">Chakra UI 연습</Heading>
      {/* 위아래 두 엘리먼트 사이의 공백 생성 */}
      <Spacer />

      {/* 감싼곳애 gap='20px'을 적용 */}
      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">
          <Avatar name="Mario" src="/img/mario.png">
            <AvatarBadge width="1.3em" bg="teal.300">
              <Text fontSize="x-small">5</Text>
            </AvatarBadge>
          </Avatar>
        </Box>
        <Text>mario@netninja.dev</Text>
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
          }}
        >
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;

/*

<Flex as="nav" bg="gray.200" justify="space-around" wrap="wrap" gap="2">
      <Box w="150px" h="50px" bg="red">
        1
      </Box>
      <Box w="150px" h="50px" bg="blue">
        2
      </Box>

      <Box w="150px" h="50px" bg="green" flexGrow="1">
        3
      </Box>

      <Box w="150px" h="50px" bg="yellow" flexGrow="2">
        4
      </Box>
    </Flex>
 */
