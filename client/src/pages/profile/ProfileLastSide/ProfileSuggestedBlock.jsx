import { Button, Flex, Heading, Image, Link } from '@chakra-ui/react'
import React from 'react'
import MoreIcon from '../../../svgs/profile/MoreIcon'
import friendImage from "../../../imgs/friend.jpg"
import addFriend from "../../../imgs/addFriend.png"
import { CloseIcon } from '@chakra-ui/icons'

function ProfileSuggestedBlock() {
    return (
        <Flex
            width="100%"
            backgroundColor="#ffffff"
            height="auto"
            borderRadius={6}
            padding={3}
            flexDirection="column"
        >
            <Flex
                width="100%"
                justifyContent="space-between"
            >
                <Heading
                    as="p"
                    fontSize={17}
                    fontWeight={500}
                >
                    People You May Know
                </Heading>

                <Flex
                    borderRadius={50}
                    padding={3}
                    _hover={{
                        backgroundColor: "#f0f2f5"
                    }}
                    cursor="pointer"
                >
                    <MoreIcon />
                </Flex>
            </Flex>
            <Flex
                borderRadius={6}
                width="225px"
                height="330px"
                boxShadow="0px 3px 6px #dbdbdb"
                position="relative"
                flexDirection="column"
            >
                <CloseIcon
                    position="absolute"
                    color={"white"}
                    right="18px"
                    top="18px"
                    zIndex={20}
                    cursor="pointer"

                />
                <Flex
                    position="absolute"
                    width="32px"
                    height="32px"
                    backgroundColor="black"
                    opacity={0.5}
                    right="10px"
                    top="10px"
                    borderRadius={50}
                    cursor="pointer"
                >
                </Flex>
                <Image src={friendImage} borderTopRadius={6} height="220px" ></Image>
                <Flex
                    flexDirection="column"
                    justifyContent="space-between"
                    padding={2}
                    gap={1}
                >
                    <Link
                        fontSize={17}
                        fontWeight={600}
                    >
                        Ռազ Հովսեփյան
                    </Link>

                    <Link
                        fontSize={14}
                        fontWeight={600}
                        color="#96979a"
                    >
                        1 mutual friend
                    </Link>

                    <Flex
                        backgroundColor="#e7f3ff"
                        padding={2}
                        cursor="pointer"
                        borderRadius={5}
                        // _hover={{
                        //     backgroundColor: "#dae5ef"
                        // }}
                        color="#247ef3"
                        display="flex"
                        alignItems="center"
                        gap={1}
                        justifyContent="center"
                    >
                        <Image src={addFriend} ></Image>
                        Add Friend
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ProfileSuggestedBlock