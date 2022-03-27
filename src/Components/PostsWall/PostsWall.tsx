import {
  Box,
  Flex,
  Avatar,
  Button,
  useDisclosure,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, useContext, useEffect, useState } from "react";

import Post from "../Post/Post";
import CreatePostDialog from "../CreatePostDialog/CreatePostDialog";
import AppNetworkContext from "../AppNetworksContext/AppNetworkContext";
import { useMoralis } from "react-moralis";

interface PostWallProps {
  channel: any;
}

const PostWall: FC<PostWallProps> = ({
  channel: {
    attributes: { profileId: channelId },
  },
}) => {
  const { createPost, getPosts } = useContext(AppNetworkContext);
  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure();
  let [isSecret, setIsSecret] = useState(false);
  const { isInitialized } = useMoralis()
  const [posts, setPosts] = useState<any[]>([])
  const sendPostCreate = (text: string) => {
    createPost(channelId, text);
  };
  useEffect(() => {
    async function receivePosts() {
      if (isInitialized) {
        const receivedPosts = await getPosts();
        const filteredPosts = receivedPosts.filter(post => {
          return post.attributes.profileId === channelId
        })
        setPosts(filteredPosts);
      }
    }
    receivePosts()
  }, [channelId, isInitialized]);

  const openDialog = (isSecret: boolean) => {
    setIsSecret(isSecret);
    onCreateOpen();
  };

  return (
    <>
      <VStack dir="row" alignItems="center" mb={4}>
        <HStack justifyContent="space-between" width="100%">
          <Avatar
            cursor="pointer"
            size="md"
            name="Ada Lovelace"
            mr={6}
            bgColor="gray"
          />

          <Flex>
            <Button
              size="md"
              mr={2}
              colorScheme="blue"
              variant="outline"
              onClick={() => openDialog(false)}
            >
              Create a post
            </Button>
            <Button
              size="md"
              colorScheme="blue"
              variant="outline"
              onClick={() => openDialog(true)}
            >
              Create a secret post 😉
            </Button>
          </Flex>
        </HStack>
        <Box w="100%">
          <Text mt={0} fontSize="sm" textAlign="end">
            Remember! You need to follow this channel first!
          </Text>
        </Box>
      </VStack>
      <Box pl={-1} pr={-1} pb={-1} overflow="auto" height="80vh">
        {posts.map(({ id, attributes: { contentURI, transaction_index } }) => {
          return (
            <Post
              key={id}
              title="Post Title"
              description={contentURI}
              votes={transaction_index}
              coin={"MATIC"}
            />
          );
        })}
      </Box>
      <CreatePostDialog
        isOpen={isCreateOpen}
        onOpen={onCreateOpen}
        onClose={onCreateClose}
        onPostCreate={sendPostCreate}
        isSecret={isSecret}
      />
    </>
  );
};

export default PostWall;
