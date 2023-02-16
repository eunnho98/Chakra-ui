import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon,
} from '@chakra-ui/icons';
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';

export default function Profile() {
  return (
    <>
      <Tabs mt="40px" p="20px" variant="enclosed" colorScheme="purple">
        <TabList>
          {/* 선택되었을 때의 스타일 지정 */}
          <Tab _selected={{ color: 'white', bg: 'purple.400' }}>
            Account Info
          </Tab>
          <Tab _selected={{ color: 'white', bg: 'purple.400' }}>
            Task History
          </Tab>
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
    </>
  );
}
