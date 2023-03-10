import React from 'react'
import { Flex, Image, Input } from "@chakra-ui/react"
import facebookIcon from "../../imgs/facebook-icon.png"
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import HomeIcone from '../../svgs/navbarIcons/HomeIcone';
import FriendsIcon from '../../svgs/navbarIcons/FriendsIcon';
import GroupsIcone from '../../svgs/navbarIcons/GroupsIcone';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import HomeActiveIcone from '../../svgs/navbarIcons/HomeActiveIcone';
import FriendsActiveIcone from '../../svgs/navbarIcons/FriendsActiveIcone';
import GroupsActiveIcone from '../../svgs/navbarIcons/GroupsActiveIcone';
import MenuIcon from '../../svgs/navbarIcons/MenuIcon';
import MessengerIcon from '../../svgs/navbarIcons/MessengerIcon';
import NotificationIcon from '../../svgs/navbarIcons/NotificationIcon';
import profileImage from "../../imgs/profile.png"


function Navbar() {

    const location = useLocation();

    const route = location.pathname;


    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            padding="0 10px"
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
            <Flex
                flex={3}
                alignItems="center"
                justifyContent="flex-end"
                gap={2.5}
            >
                <Flex  
                    display={{"xl": "flex", lg: "none", md: "none", sm: "none"}}
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
    >
                    <Image
                        borderRadius={50}
                        width="40px"
                        height="40px"
                        src={profileImage}
                    ></Image>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Navbar