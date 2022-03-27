import {
  Box,
  Flex,
  Avatar,
  Button,
  useDisclosure,
  VStack,
  Text
} from "@chakra-ui/react";
import { FC, useContext, useEffect, useState } from "react";

import Post from "../Post/Post";
import CreatePostDialog from "../CreatePostDialog/CreatePostDialog";
import AppNetworkContext from "../AppNetworksContext/AppNetworkContext";

interface PostWallProps {
  channel: any
}

const PostWall: FC<PostWallProps> = ({ channel: { attributes: { profileId: channelId } } }) => {
  const { createPost, getPosts } = useContext(AppNetworkContext);
  const { isOpen: isCreateOpen, onOpen: onCreateOpen, onClose: onCreateClose } = useDisclosure();
  const [posts, setPosts] = useState<any[]>([])
  const sendPostCreate = (text: string) => {
    createPost(channelId, text)
  }
  useEffect(() => {
    async function receivePosts() {
      const receivedPosts = await getPosts();
      const filteredPosts = receivedPosts.filter(post => {
        return post.attributes.profileId === channelId
      })
      setPosts(filteredPosts);
    }
    receivePosts()
  }, [channelId]);
  
  return (<>
    <Flex dir="row" alignItems="center" mb={4}>
      <Avatar
        cursor="pointer"
        size="md"
        name="Ada Lovelace"
        mr={6}
        bgColor="gray"
      />
      <VStack width={'100%'}>
        <Button size="md" width={'100%'} colorScheme="blue" variant="outline" onClick={onCreateOpen}>Click here to write your post</Button>
        <Text mt={0} fontSize='sm'>Remember! You need to follow this channel first!</Text>
      </VStack>
    </Flex>
    <Box pl={-1} pr={-1} pb={-1} overflow="auto" height="80vh">
      {posts.map(
        ({ id, attributes: { contentURI, transaction_index } }) => {
          return (
            <Post
              key={id}
              title="Post Title"
              description={contentURI}
              votes={transaction_index}
              coin={"MATIC"}
            />
          );
        }
      )}
    </Box>
    <CreatePostDialog isOpen={isCreateOpen} onOpen={onCreateOpen} onClose={onCreateClose} onPostCreate={sendPostCreate} />
  </>
  );
};

export default PostWall;
