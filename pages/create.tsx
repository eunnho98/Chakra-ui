import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Button,
} from '@chakra-ui/react';
import { NextApiRequest } from 'next';
import { redirect } from 'next/dist/server/api-utils';
import React from 'react';

function Create() {
  return (
    <Box maxW="480px">
      <form method="post" action="/create">
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

export const createAction = async ({ request }: any) => {
  const data = await request.formData();

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === '',
  };

  console.log(task);
};

export default Create;
