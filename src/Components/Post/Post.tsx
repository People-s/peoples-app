import React, { useMemo } from "react";
import {
    Avatar,
    Box, Button, Divider, Flex, Heading, HStack, Text, useColorMode, VStack
} from "@chakra-ui/react";

import { MdThumbUp, MdShare, MdAttachMoney } from "react-icons/md";
import { HiSupport, HiOutlineChat } from "react-icons/hi";

interface PostData {
    title: string;
    description: string;
    coin?: any;
    votes?: any
}

const Post: React.FC<PostData> = ({ title, description, votes, coin }) => {
    const { colorMode } = useColorMode();
  const tileBackground = useMemo(
    () => (colorMode === "dark" ? "gray.800" : "gray.200"),
    [colorMode]
  );
    return (
        <Box bgColor={tileBackground} padding={4} mb={8} borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Flex pb={2} justify={"space-between"}>
                <HStack>
                    <Avatar
                        src='https://bit.ly/sage-adebayo'
                        size='sm'
                        name='Satoshi Buterin'
                        ml={-1}
                        mr={1}
                    />
                    <Box>
                        <Text fontWeight={600} fontSize='sm'>Your Name or address</Text>
                        <Text fontSize='xs'>0x092837450987sdfghssdfg</Text>
                    </Box>
                </HStack>
                <VStack>
                    <Button size="xs" pl={2} pr={2} pt={1} pb={1} variant="ghost" onClick={() => { alert("You just bought a post :)") }} leftIcon={<MdAttachMoney />}>{coin}</Button>
                    <Button size="xs" pl={2} pr={2} pt={1} pb={1} variant="ghost" onClick={() => { alert("Thank you for your support:)") }} leftIcon={<HiSupport />}>Support</Button>
                </VStack>
            </Flex>
            <Divider />
            <div>
                <Heading mb={2} mt={2} as='h4' size='md'>
                    {title}
                </Heading>
            </div>
            <Box>
                {description}
            </Box>
            <Box>
                <HStack>
                    <Button size="sx" pl={2} pr={2} pt={1} pb={1} variant="outline" onClick={() => { alert("Your vote matters :)") }} leftIcon={<MdThumbUp />}>{votes}</Button>
                    <Button size="sx" pl={2} pr={2} pt={1} pb={1} variant="outline" onClick={() => { alert("Your vote matters :)") }} leftIcon={<HiOutlineChat />}>{votes}</Button>
                    <Button size="sx" pl={2} pr={2} pt={1} pb={1} variant="outline" onClick={() => { alert("You created mirror :)") }} leftIcon={<MdShare />}>Share</Button>
                </HStack>
            </Box>
        </Box>
    );
};

export default Post;
