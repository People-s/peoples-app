import { FC, useRef, useState } from 'react'
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
} from '@chakra-ui/react'

interface CreatePostModalProps {
    isOpen: boolean;
    onOpen?: () => void;
    onClose: () => void;
    onPostCreate?: (content: string) => void;
}


const CreatePostDialog: FC<CreatePostModalProps> = ({ isOpen = false, onOpen, onClose, onPostCreate }) => {
    const textFieldRef = useRef<HTMLDivElement>(null);
    const [isPristine, setIsPristine] = useState(true);
    
    const handlePostCreate = () => {
        const text = textFieldRef.current?.textContent;

        if(!isPristine && text?.length && onPostCreate) {
            onPostCreate(text)
        }
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={textFieldRef}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create new post</ModalHeader>
                <ModalCloseButton />
                <ModalBody p={4} >
                    <Box   
                        ref={textFieldRef}
                        _focus={{ outline: 'none' }}
                        _focusVisible={{
                            outline: 'none',
                            backgroundColor: 'gray.50'
                        }}
                        p={2}
                        suppressContentEditableWarning={true}
                        contentEditable
                        height={200} width={'100%'} onInput={() => {
                            setIsPristine(false);
                        }}
                    >
                        This is just a placehodler
                    </Box>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={handlePostCreate}>
                        Create Post
                    </Button>
                    <Button variant='ghost' onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default CreatePostDialog;