import { Flex, Image, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import profileImage from "../../../imgs/profileImage2.png"
import InactiveModal from "../../../components/modals/InactiveModal"
import NavbarProfileModal from "../../../components/modals/NavbarProfileModal"
import UploadProfileModal from '../../../components/modals/profile/UploadProfileModal'


function ProfileImage() {

    const [uploadPhotoModal, setUploadPhotoModal] = useState(false);


    const uploadPhotoHandler = () => {
        setUploadPhotoModal(!uploadPhotoModal);
        console.log(uploadPhotoModal);
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
            >
                    <Image onClick={uploadPhotoHandler} borderRadius={"50%"} width="100%" src={profileImage} ></Image>
                {/* <label for="uploadProfile"> */}
                {/* </label> */}
                {/* <Input type="file" display={"none"} id="uploadProfile" onClick={uploadPhotoHandler} /> */}
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
                    <InactiveModal changeModalStatus = {uploadPhotoHandler}/>
                    <UploadProfileModal/>
            </Flex>
        </Flex>
    )
}

export default ProfileImage