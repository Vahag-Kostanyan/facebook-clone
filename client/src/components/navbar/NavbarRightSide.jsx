import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '../../svgs/navbarIcons/MenuIcon'
import MessengerIcon from '../../svgs/navbarIcons/MessengerIcon'
import NotificationIcon from '../../svgs/navbarIcons/NotificationIcon'
import Avatar from '../modals/profile/Avatar';

function NavbarRightSide({ route, changeAvatarModalStatus }) {
    return (
        <Flex
            flex={3}
            alignItems="center"
            justifyContent="flex-end"
            gap={2.5}
        >
            <Flex
                display={{ "xl": "flex", lg: "none", md: "none", sm: "none" }}
            >
                {route == "/friends" ? (
                    <Flex
                        cursor="pointer"
                        padding="8px 15px"
                        borderRadius={30}
                        backgroundColor="#e7f3ff"
                        fontSize="14px"
                        color="#3385f4"
                        fontWeight={600}
                    >
                        Find Friends
                    </Flex>
                ) : (
                    <Link to="/friends" >
                        <Flex
                            cursor="pointer"
                            padding="8px 15px"
                            borderRadius={30}
                            backgroundColor="#e4e6eb"
                            fontSize="15px"
                            color="#434445"
                            fontWeight={600}
                        >
                            Find Friends
                        </Flex>
                    </Link>
                )}
            </Flex>

            <Flex
                fontSize="20px"
                padding="10px"
                borderRadius={50}
                backgroundColor="#e4e6eb"
                cursor="pointer"
            >
                <MenuIcon />
            </Flex>

            <Flex
                fontSize="20px"
                padding="10px"
                borderRadius={50}
                backgroundColor="#e4e6eb"
                cursor="pointer"
            >
                <MessengerIcon />
            </Flex>

            <Flex
                fontSize="20px"
                padding="10px"
                borderRadius={50}
                backgroundColor="#e4e6eb"
                cursor="pointer"
            >
                <NotificationIcon />
            </Flex>
            <Flex
                cursor="pointer"
                onClick={changeAvatarModalStatus}
            >
                <Avatar width={"40px"} height={"40px"} />

            </Flex>
        </Flex>
    )
}

export default NavbarRightSide