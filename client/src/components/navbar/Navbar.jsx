import React from 'react'
import { Flex, Image, Input } from "@chakra-ui/react"
import facebookIcon from "../../imgs/facebook-icon.png"
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import HomeIcone from '../../svgs/HomeIcone';
import FriendsIcon from '../../svgs/FriendsIcon';
import GroupsIcone from '../../svgs/GroupsIcone';
// import { VscHome } from "@react-icons/all-files/vs/SlHome"

function Navbar() {
    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            padding="10px"
            backgroundColor="#ffffff"
            position="fixed"
            borderBottom="1px solid #f0f2f5"
            boxShadow="0px 3px 6px #dbdbdb"
            width="100%"
        >
            <Flex
                flex={3}
                alignItems="center"
                justifyContent="flex-start"
                gap="10px"
                position="relative"
            >
                <Image src={facebookIcon} width="35px" height="35px" />
                <BsSearch
                    style={{
                        position: "absolute",
                        zIndex: 2,
                        left: "58px",
                        top: "14px",
                        fontSize: "17px"
                    }}
                    color='#65676b'

                />
                <Input
                    placeholder='Search Facebook'
                    backgroundColor="#f0f2f5"
                    border="none"
                    borderRadius="30px"
                    padding="0 0 0 38px"
                    focusBorderColor="#f0f2f5"
                    maxW="300px"
                    minW="200px"
                />
            </Flex>
            <Flex
                flex={6}
                alignItems="center"
                justifyContent="center"
                gap={15}
                color="#65676b"
                fontSize="30px"
            >
                <Flex
                    padding="0 30px"
                >
                    <HomeIcone />
                </Flex>
                <Flex
                    padding="0 30px"
                >
                    <FriendsIcon />
                </Flex>
                <Flex
                    padding="0 30px"
                >
                    <GroupsIcone />
                </Flex>
            </Flex>
            <Flex
                flex={3}
            >

            </Flex>
        </Flex>
    )
}

export default Navbar