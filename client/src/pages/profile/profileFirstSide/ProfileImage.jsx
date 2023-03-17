import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import profileImage from "../../../imgs/profileImage2.png"

function ProfileImage() {
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
                <Image borderRadius={"50%"} width="100%" src={profileImage} ></Image>
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
        </Flex>
    )
}

export default ProfileImage