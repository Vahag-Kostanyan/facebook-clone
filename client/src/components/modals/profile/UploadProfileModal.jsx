import { Flex } from '@chakra-ui/react'
import React from 'react'
import { TiCameraOutline } from "@react-icons/all-files/ti/TiCameraOutline"
import { GiNinjaHead } from "@react-icons/all-files/gi/GiNinjaHead"
import ModalCorner from '../../../svgs/profile/ModalCorner'

function UploadProfileModal() {
    return (
        <Flex
            position={"absolute"}
            zIndex="11"
            top={"590px"}
            left={0}
            flexDirection="column"
        >
            <Flex
                alignItems="center"
                justifyContent="center"
                width={"70%"}
            >
                <Flex
                    borderBottom={"15px solid #ffffff"}
                    zIndex="11"
                    borderRight="20px solid transparent"      
                >
                </Flex>
            </Flex>
            <Flex
                width={"350px"}
                backgroundColor="#ffffff"
                boxShadow="0px 0px 40px #adaeb0"
                borderRadius={10}
                color={"#3b3b3b"}
                padding={2}
                flexDirection="column"

            >
                <Flex
                    padding="3px"
                    alignItems="center"
                    gap={2}
                    _hover={{
                        backgroundColor: "#e4e6eb"
                    }}
                    cursor="pointer"
                >
                    <TiCameraOutline color='#606163' size={30} />
                    Add photo
                </Flex>
                <Flex
                    padding="3px"
                    alignItems="center"
                    gap={2}
                    _hover={{
                        backgroundColor: "#e4e6eb"
                    }}
                    cursor="pointer"
                >
                    <GiNinjaHead color='#606163' size={25} />
                    Create avatar profile picture
                </Flex>
            </Flex>
        </Flex>
    )
}

export default UploadProfileModal