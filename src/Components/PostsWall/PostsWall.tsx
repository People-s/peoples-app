import {
  Box,
  Flex,
  Avatar,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

import Post from "../Post/Post";
import CreatePostDialog from "../CreatePostDialog/CreatePostDialog";

const mockChannels = [
  {
    title: "Dogs Lovers",
    description:
      "We love dogs and we speak about them, but you can also join if you have a cat",
    coin: "10 BNB",
    members: 543,
    votes: 2,
  },
  {
    title: "Football Fans",
    description:
      "We love dogs and we speak about them, but you can also join if you have a cat",
    coin: "10 BNB",
    members: 543,
    votes: 2,
  },
  {
    title: "Football Fans",
    description:
      "We love dogs and we speak about them, but you can also join if you have a cat",
    coin: "10 BNB",
    members: 543,
    votes: 2,
  },
  {
    title: "Football Fans",
    description:
      "We love dogs and we speak about them, but you can also join if you have a cat",
    coin: "10 BNB",
    members: 543,
    votes: 2,
  },
  {
    title: "Football Fans",
    description:
      "We love dogs and we speak about them, but you can also join if you have a cat",
    coin: "10 BNB",
    members: 543,
    votes: 2,
  },
  {
    title: "Football Fans",
    description:
      "We love dogs and we speak about them, but you can also join if you have a cat",
    coin: "10 BNB",
    members: 543,
    votes: 2,
  },
];
const PostWall: React.FC = () => {
  const { isOpen: isCreateOpen, onOpen: onCreateOpen, onClose: onCreateClose } = useDisclosure();
  const sendPostCreate = (text: string) => {
    alert(`You created post with text: 
      ${text}
    `)
  }

  return (<>
    <Flex dir="row" alignItems="center" mb={4}>
      <Avatar
        cursor="pointer"
        size="md"
        name="Ada Lovelace"
        mr={6}
        bgColor="gray"
      />
      <Button size="md" width={'100%'} colorScheme="blue" variant="outline" onClick={onCreateOpen}>Click here to write your post</Button>
    </Flex>
    <Box pl={-1} pr={-1} pb={-1} overflow="auto" height="80vh">
      {mockChannels.map(
        ({ title, description, coin, votes }, index) => {
          return (
            <Post
              key={index}
              title={title}
              description={description}
              votes={votes}
              coin={coin}
            />
          );
        }
      )}
    </Box>
    <CreatePostDialog isOpen={isCreateOpen} onOpen={onCreateOpen} onClose={onCreateClose} onPostCreate={sendPostCreate}/>
  </>
  );
};

export default PostWall;
