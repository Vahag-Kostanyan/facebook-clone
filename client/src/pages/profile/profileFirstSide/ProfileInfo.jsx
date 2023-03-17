import { SmallAddIcon } from '@chakra-ui/icons'
import { Button, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import editIcon from "../../../imgs/editIcon.png"
import ProfileImage from './ProfileImage'

function ProfileInfo({ user }) {
    return (
        <Flex
            padding= "0 20px 20px 0"

        >
            <Flex
                width={"220px"}
            >
                <ProfileImage />

            </Flex>
            <Flex
                width={"100%"}
                padding="20px 0"
                justifyContent="space-between"
                alignItems="flex-end"
            >
                <Flex
                    flexDirection="column"
                    gap={2}
                >
                    <Heading
                        as={"h1"}
                        fontSize="33px"
                        fontWeight={600}
                    >{user.firstName + " " + user.lastName}
                    </Heading>
                    <Heading
                        as={"p"}
                        fontSize="16px"
                        fontWeight={600}
                        color="#65676b"
                    >
                        150 friend
                    </Heading>
                    <Flex>
                        image
                    </Flex>
                </Flex>
                <Flex
                    gap={3}
                >
                    <Button
                        backgroundColor="#1b74e4"
                        color="#f1f6fd"
                        _hover={{
                            backgroundColor: "#1a6ed7"
                        }}
                    >
                        <SmallAddIcon fontSize={20} />
                        Add to story
                    </Button>
                    <Button
                        backgroundColor="#e4e6eb"
                        color="#1d1f23"
                        _hover={{
                            backgroundColor: "#dbdcdf"
                        }}
                        display="flex"
                        gap={2}
                        textAlign="center"
                    >
                        <Image width="15px" src={editIcon} ></Image>
                        Edit profile
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ProfileInfo