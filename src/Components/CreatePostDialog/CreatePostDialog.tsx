import { FC, useMemo, useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  useColorMode,
  Textarea,
} from "@chakra-ui/react";

interface CreatePostModalProps {
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
  onPostCreate?: (content: string) => void;
}

const CreatePostDialog: FC<CreatePostModalProps> = ({
  isOpen = false,
  onOpen,
  onClose,
  onPostCreate,
}) => {
  const textFieldRef = useRef<HTMLDivElement>(null);
  let [value, setValue] = useState("");

  const handlePostCreate = () => {
    console.log("value", value);
    if (value?.length && onPostCreate) {
      onPostCreate(value);
    }
  };

  let handleInputChange = (e: { target: { value: any } }) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={textFieldRef}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create new post</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={4}>
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="This is just a placehodler"
            size="sm"
            height={10}
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handlePostCreate}>
            Create Post
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreatePostDialog;
