import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import {
  Box,
  SimpleGrid,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  HStack,
  Button,
  Divider,
  Avatar,
} from '@chakra-ui/react';

interface IProps {
  id: number;
  title: string;
  description: string;
  author: string;
  img: string;
}

export default function Dashboard({ context }: any) {
  return (
    <SimpleGrid spacing={5} minChildWidth="300px">
      {context &&
        context.map((task: IProps) => (
          <Card
            key={task.id}
            borderTop="8px"
            borderColor="purple.400"
            bg="white"
          >
            <CardHeader>
              <Flex gap={10}>
                <Box w="50px" h="50px">
                  <Avatar src={task.img} />
                </Box>
                <Box>
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>By {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody color="gray.500">
              <Text>{task.description}</Text>
            </CardBody>

            <Divider borderColor="gray.500" />

            <CardFooter>
              <HStack>
                {/* 버튼에 icon을 삽입하는 법, varaint로 visual style 변경 */}
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}
