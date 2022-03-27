import { FC, useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Textarea,
} from "@chakra-ui/react";

import { encryptString } from "../../LitProtocol";

interface CreatePostModalProps {
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
  onPostCreate?: (content: string) => void;
  isSecret: boolean;
}

const CreatePostDialog: FC<CreatePostModalProps> = ({
  isOpen = false,
  onClose,
  onPostCreate,
  isSecret,
}) => {
  const textFieldRef = useRef<HTMLDivElement>(null);
  let [value, setValue] = useState("");

  const handlePostCreate = async () => {
    if (value?.length && onPostCreate) {
      if (isSecret) {
        const {
          // encryptedSymmetricKey,
          // symmetricKey,
          encryptedString,
        } = await encryptString(value);
        onPostCreate(encryptedString.text());
        return;
      } else {
        onPostCreate(value);
      }
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
        <ModalHeader>{isSecret ? "Secret post" : "Post"}</ModalHeader>
        <Text px={6} fontSize="sm">
          {isSecret
            ? "Share your secret thoughts with all your secret friends 😉"
            : "Create a new post"}
        </Text>
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
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              handlePostCreate();
              onClose();
            }}
          >
            Create Post
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreatePostDialog;
