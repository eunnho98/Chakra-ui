import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import Dashboard from '@/components/DashBoard';
import Sidebar from '@/components/Sidebar';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:5000/tasks');
  const data = await res.json();
  return { props: { data } };
};

function GridTest({ data }: InferGetServerSidePropsType<GetServerSideProps>) {
  console.log('context', data);
  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
        {/* sidebar */}
        <GridItem
          as="aside"
          colSpan={{ base: 6, lg: 2, xl: 1 }}
          bg="purple.400"
          minHeight={{ lg: '100vh' }}
          p={{ base: '20px', lg: '30px' }}
        >
          <Sidebar />
        </GridItem>

        {/* main content & navbar */}
        <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
          <Navbar />
          <Dashboard context={data} />
        </GridItem>
      </Grid>
    </>
  );
}

export default GridTest;

// SimpleGrid로 flexabilirty가 없는 grid를 만듬
// Grid로 유연성이 있는 grid
