import { Flex, Heading, Image, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import mostRecent from "../../imgs/mostRecent.png"
import facebookIcon from "../../imgs/facebook-icon.png"
import HomeSidebarIconDown from "../../svgs/home/HomeSidebarIconDown"
import Avatar from '../../components/modals/profile/Avatar'
import { homeLeftSideItemArr } from '../../helpers/Home'
import IconWithData from '../../icons/home/IconWithData'
import FriendsIcon from '../../icons/home/FriendsIcon'


const itemsArr = homeLeftSideItemArr();


function HomeLeftSide() {
    const [isHeightThan800] = useMediaQuery('(min-height: 800px)')

    const itemStyle = {
        gap: "3",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        maxWidth: "340px",
        cursor: "pointer",
        padding: "2",
        borderRadius: "7",
        _hover: {
            backgroundColor: "#e7e8e9"
        }
    }

    const user = useSelector(state => state.user)

    return (
        <Flex
            flexDirection="column"
            justifyContent="space-between"
            padding={isHeightThan800 ? " 0 0 10px 0" : " 0 0 50px 0"}
            position="fixed"
            height="90vh"
            overflowY="auto"

        >
            <Flex
                alignItems="flex-start"
                justifyContent="flex-start"
                flexDirection="column"
                width="100%"
            >
                <Link style={{ width: "100%" }} to={"/profile"} >
                    <Flex
                        sx={itemStyle}
                    >
                        <Avatar width={"36px"} height={"36px"} />
                        <Heading
                            as={"p"}
                            fontSize="16px"
                            fontWeight={500}
                        >{user.firstName + " " + user.lastName}</Heading>
                    </Flex>
                </Link>
                <Link style={{ width: "100%" }} to={"/friends"} >
                    <Flex
                        sx={itemStyle}
                    >
                       <FriendsIcon/>
                        <Heading
                            as={"span"}
                            fontSize="16px"
                            fontWeight={500}
                        >Find Friends</Heading>
                    </Flex>
                </Link>
                <Link style={{ width: "100%" }} >
                    <Flex
                        sx={itemStyle}
                    >
                        <Image
                            src={mostRecent}
                            width="36px"
                            height="36px"
                            borderRadius={50}
                        >
                        </Image>

                        <Heading
                            as={"span"}
                            fontSize="16px"
                            fontWeight={500}
                        >Most Recent</Heading>
                    </Flex>
                </Link>
                <Link style={{ width: "100%" }}>
                    <Flex
                        sx={itemStyle}
                    >
                        <Image
                            src={facebookIcon}
                            width="30px"
                            height="30px"
                            borderRadius={50}
                        >
                        </Image>

                        <Heading
                            as={"span"}
                            fontSize="16px"
                            fontWeight={500}
                        >Welcom</Heading>
                    </Flex>
                </Link>
                {itemsArr.map((item, index) => {
                    return (
                        <Link key={index} style={{ width: "100%" }} to={item.route} >
                            <Flex
                                sx={itemStyle}
                            >
                                <IconWithData item={item} />

                                <Heading
                                    as={"span"}
                                    fontSize="16px"
                                    fontWeight={500}
                                >{item.text}</Heading>
                            </Flex>
                        </Link>
                    )
                })}
                <Flex
                    sx={itemStyle}
                    padding
                >
                    <Flex
                        fontSize="20px"
                        padding="8px"
                        borderRadius={50}
                        backgroundColor="#e4e6eb"
                        cursor="pointer"
                    >
                        <HomeSidebarIconDown />
                    </Flex>

                    <Heading
                        as={"span"}
                        fontSize="16px"
                        fontWeight={500}
                    >See more</Heading>
                </Flex>

            </Flex>
            <Flex
                maxW="340px"
                color="#6d6f73"
                fontSize="14px"
            >
                Privacy· Terms· Advertising· Ad Choices· Cookies· Vahagn © 2023
            </Flex>
        </Flex>

    )
}

export default HomeLeftSide