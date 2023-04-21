import React, { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    Flex,
} from '@chakra-ui/react'
import { SmallAddIcon } from '@chakra-ui/icons'
import { GiNinjaHead } from "@react-icons/all-files/gi/GiNinjaHead"
import { useDispatch, useSelector } from 'react-redux';
import { uploadAvatar } from '../../../redux/actions/photo';
import { convertBase64 } from '../../../helpers/helper';

function AddPhotoProfileModal({ isOpen, onClose }) {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();


    const addAvatar = async (e) => {
        
        const token = localStorage.getItem("token");

        const base64 = await convertBase64(e.target.files[0])        
        
        dispatch(uploadAvatar({ data: base64, token: token }));

        onClose();
    }

    

    return (
        <>
            <Modal onClose={onClose} isOpen={isOpen} isCentered size={"2xl"}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader
                        display="flex"
                    >
                        <Flex
                            alignItems="center"
                            justifyContent="center"
                            flex={10}
                        >
                            Update profile picture
                        </Flex>
                    </ModalHeader>
                    <hr />
                    <ModalCloseButton />
                    <ModalBody
                        display="flex"
                        flexDirection="column"
                        gap={2}
                        padding={3}
                    >
                        <label htmlFor="addAvatarInput">
                            <Flex
                                backgroundColor={"#e7f3ff"}
                                color="#237ef3"
                                width={"100%"}
                                padding="10px"
                                borderRadius={7}
                                alignItems="center"
                                justifyContent="center"
                                cursor="pointer"
                                _hover={{
                                    backgroundColor: "#e0ecf7"
                                }}
                            >
                                <SmallAddIcon fontSize={22} />
                                Upload photo
                            </Flex>
                        </label>
                        <input onChange={addAvatar} type={"file"} style={{ display: "none" }} id="addAvatarInput" />
                        <Button width={"100%"}
                            display="flex"
                            gap={2}
                        >
                            <GiNinjaHead color='#606163' size={20} />
                            Create avatar profile picture
                        </Button>
                        <Button width={"100%"} > Add Frame </Button>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddPhotoProfileModal