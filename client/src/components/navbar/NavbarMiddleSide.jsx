import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import FriendsActiveIcone from '../../svgs/navbarIcons/FriendsActiveIcone'
import FriendsIcon from '../../svgs/navbarIcons/FriendsIcon'
import GroupsActiveIcone from '../../svgs/navbarIcons/GroupsActiveIcone'
import GroupsIcone from '../../svgs/navbarIcons/GroupsIcone'
import HomeActiveIcone from '../../svgs/navbarIcons/HomeActiveIcone'
import HomeIcone from '../../svgs/navbarIcons/HomeIcone'

function NavbarMiddleSide({route}) {
    return (
        <Flex
            flex={6}
            alignItems="center"
            gap={10}
            justifyContent="center"
            color="#65676b"
            fontSize="30px"
        >
            {route == "/" ? (
                <Flex
                    padding="15px 45px"
                    cursor="pointer"
                    borderBottom="3px solid #1b74e4"
                    color="#1b74e4"
                >
                    <HomeActiveIcone />
                </Flex>
            ) : (
                <Link to="/" >
                    <Flex
                        padding="15px 45px"
                        borderRadius={10}
                        cursor="pointer"
                        _hover={{
                            backgroundColor: "#f0f2f5"
                        }}
                    >
                        <HomeIcone />
                    </Flex>
                </Link>
            )}

            {route == "/friends" ? (
                <Flex
                    padding="15px 45px"
                    cursor="pointer"
                    borderBottom="3px solid #1b74e4"
                    color="#1b74e4"
                >
                    <FriendsActiveIcone />
                </Flex>
            ) : (
                <Link to="/friends" >
                    <Flex
                        padding="15px 45px"
                        borderRadius={10}
                        cursor="pointer"
                        _hover={{
                            backgroundColor: "#f0f2f5"

                        }}
                    >

                        <FriendsIcon />
                    </Flex>
                </Link>
            )}


            {route == "/groups" ? (
                <Flex
                    padding="15px 45px"
                    cursor="pointer"
                    borderBottom="3px solid #1b74e4"
                    color="#1b74e4"
                >
                    <GroupsActiveIcone />
                </Flex>
            ) : (
                <Link to="/groups" >
                    <Flex
                        padding="15px 50px"
                        borderRadius={10}
                        cursor="pointer"
                        _hover={{
                            backgroundColor: "#f0f2f5"

                        }}
                    >
                        <GroupsIcone />

                    </Flex>
                </Link>

            )}

        </Flex>
        )
}

export default NavbarMiddleSide