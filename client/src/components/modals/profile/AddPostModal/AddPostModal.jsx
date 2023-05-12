import React, { useState } from 'react'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex,
    Textarea,
} from '@chakra-ui/react'
import AddPostModalBodyFirstSide from './AddPostModalBodyFirstSide'
import AddPostModalMiddleSide from './AddPostModalMiddleSide'
import AddPostModalLastSide from './AddPostModalLastSide'
import { convertBase64, getToken } from '../../../../helpers/helper'
import { useDispatch, useSelector } from 'react-redux'
import { AddPost } from '../../../../redux/actions/photo'


function AddPostModal({ isOpen, onClose }) {
    const [isPickerVisible, setPickerVisible] = useState(false)
    const [postDescription, setPostDescription] = useState("")
    const [photoBlockStatus, setPhotoBlockStatus] = useState(false);
    const [postPhoto, setPostPhoto] = useState("");

    const dispatch = useDispatch();

    const onEmojiClick = (emojiObject) => {
        setPostDescription(item => item + emojiObject.native)
    }

    const addPhoto = async (e) => {
        const photo = e.target.files[0];
        if (photo.type.includes("image")) {
            const base64 = await convertBase64(e.target.files[0])
            setPostPhoto(base64)
        }
    }

    const AddPostHandler = () => {
        const token = getToken();

        if (postPhoto == "") return

        dispatch(AddPost({ token, data: { description: postDescription, photos: postPhoto } }))

        setPostPhoto("");
        setPostDescription("");
        onClose();
    }

    const removePostPhoto = () => {
        setPostPhoto("")
        setPhotoBlockStatus(true)
    }

    return (
        <Modal onClose={onClose} isOpen={isOpen} size="lg" isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Flex>
                        <Flex
                            flex={10}
                            fontSize="20px"
                            fontWeight={700}
                            alignItems="center"
                            justifyContent="center"
                        >
                            Create Post
                        </Flex>
                    </Flex>
                </ModalHeader>
                <hr />
                <ModalCloseButton />
                <ModalBody
                    display="flex"
                    flexDirection="column"
                    gap={2}
                >
                    <AddPostModalBodyFirstSide
                        postDescription={postDescription}
                        setPostDescription={setPostDescription}
                        isPickerVisible={isPickerVisible}
                        setPickerVisible={setPickerVisible}
                        onEmojiClick={onEmojiClick}
                    />

                    <AddPostModalMiddleSide
                        setPhotoBlockStatus={setPhotoBlockStatus}
                        photoBlockStatus={photoBlockStatus}
                        addPhoto={addPhoto}
                        postPhoto={postPhoto}
                        removePostPhoto={removePostPhoto}
                    />

                    <AddPostModalLastSide setPhotoBlockStatus={setPhotoBlockStatus} />
                </ModalBody>
                <ModalFooter>
                    <Button width={"100%"} onClick={AddPostHandler} isDisabled={postPhoto.length == 0} >Post</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default AddPostModal