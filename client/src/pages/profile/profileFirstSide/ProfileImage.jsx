import { Flex, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import InactiveModal from "../../../components/modals/InactiveModal"
import NavbarProfileModal from "../../../components/modals/navbar/NavbarProfileModal"
import UploadProfileModal from '../../../components/modals/profile/UploadProfileModal'
import AddPhotoProfileModal from '../../../components/modals/profile/AddAvatarPhotoModal'
import Avatar from '../../../components/modals/profile/Avatar'


function ProfileImage() {

    const [uploadPhotoModal, setUploadPhotoModal] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()




    const uploadPhotoHandler = () => {
        setUploadPhotoModal(!uploadPhotoModal);
    }


    return (
        <Flex>
            <Flex
                borderRadius={"50%"}
                zIndex="10"
                padding={1}
                position="absolute"
                maxW="168px"
                top="430px"
                backgroundColor="#fff"
                cursor="pointer"
                onClick={uploadPhotoHandler}
            >
                <Avatar width={"168px"} height={"158px"}/>
            </Flex>
            <Flex
                borderRadius={"50%"}
                zIndex="10"
                padding={2}
                position="absolute"
                maxW="168px"
                cursor="pointer"
                top="545px"
                left="130px"
                backgroundColor="#e4e6eb"
                onClick={onOpen}
            >
                <i data-visualcompletion="css-img"
                    style={{
                        backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/DMUYjPbsmyp.png')",
                        backgroundPosition: "0px -42px", backgroundSize: "auto", width: "20px", height: "20px",
                        backgroundRepeat: "no-repeat", display: "inline-block"
                    }}
                ></i>
            </Flex>

            <Flex display={uploadPhotoModal ? "flex" : "none"}>
                <InactiveModal changeModalStatus={uploadPhotoHandler} />
                <UploadProfileModal onOpen={onOpen} />
            </Flex>
            <AddPhotoProfileModal onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
        </Flex>
    )
}

export default ProfileImage