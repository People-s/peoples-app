import {
  Box,
  Flex,
  Avatar,
  Text,
  useColorMode,
  Button,
  Icon,
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import { MdCopyright, MdSupervisorAccount, MdThumbUp } from "react-icons/md";
import { ChannelListProps } from "../JoinChannelList/JoinChannelList";
import Post from "../Post/Post";

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
  return (
    <Box pl={-1} pr={-1} overflow="auto" height="80vh">
      {mockChannels.map(
        ({ title, description, coin, members, votes }, index) => {
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
  );
};

export default PostWall;
