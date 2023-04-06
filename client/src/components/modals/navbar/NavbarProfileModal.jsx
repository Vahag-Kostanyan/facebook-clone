import React from 'react'
import { Flex, Heading } from "@chakra-ui/react"
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRightIcon } from "@chakra-ui/icons"
import Avatar from '../profile/Avatar';


function NavbarProfileModal() {


    const user = useSelector(state => state.user)
    const navigate = useNavigate();

    const itemStyle = {
        gap: "3",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        maxWidth: "340px",
        cursor: "pointer",
        padding: "3",
        borderRadius: "7",
        _hover: {
            backgroundColor: "#e7e8e9"
        }
    }

    const ModalItemArr = [
        {
            text: "Settings & privacy",
            position: "-147px -105px",
            url: "url('https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/FussyIWpc-t.png')",
            rightSide: true
        },
        {
            text: "Help & support",
            position: "0px -343px",
            url: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/97WXrCvtb4G.png')",
            rightSide: true
        },
        {
            text: "Display & accessibility",
            position: "0px -438px",
            url: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/XkQY_2Yv55n.png')",
            rightSide: true
        },
        {
            text: "Give feedback",
            position: "0px -175px",
            url: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/97WXrCvtb4G.png')",
            rightSide: false
        },
    ]


    const logOut = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <Flex
            position="fixed"
            top="53px"
            right="10px"
            zIndex={11}
            backgroundColor="#ffffff"
            boxShadow="0px 3px 6px #dbdbdb"
            borderRadius={10}
            padding={3}
            width="360px"
            flexDirection="column"
            gap={2}
        >
            <Flex
                width="100%"
                backgroundColor="#ffffff"
                boxShadow="0px 3px 6px #dbdbdb"
                borderRadius={10}
                padding={1}
                flexDirection="column"
                gap={1}
            >
                <Flex >

                    <Link style={{ width: "100%" }} to={"/profile"} >
                        <Flex
                            sx={itemStyle}
                        >
                                <Avatar width={"36px"} height={"36px"}/>
                            <Heading
                                as={"p"}
                                fontSize="16px"
                                fontWeight={500}
                            >{user.firstName + " " + user.lastName}</Heading>
                        </Flex>
                    </Link>
                </Flex>
                <hr />

                <Link style={{ width: "100%" }} to={"/profile"} >
                    <Flex
                        sx={itemStyle}
                        width="100%"
                    >

                        <Heading
                            width="100%"
                            as={"p"}
                            fontSize="16px"
                            fontWeight={500}
                            color="#2980f3"
                        >See all profiles</Heading>
                    </Flex>
                </Link>
            </Flex>
            <Flex
                flexDirection="column"
            >
                {ModalItemArr.map((item, index) => {
                    return (
                        <Flex
                            key={index}
                            justifyContent="space-between"
                            padding={1.5}
                            width="100%"
                            borderRadius={7}
                            cursor="pointer"
                            _hover={{
                                backgroundColor: "#f3f4f5",
                            }}
                            alignItems="center"
                        >
                            <Flex
                                alignItems="center"
                                justifyContent="center"
                                gap={2}
                                fontWeight={600}
                                fontSize="15px"
                            >
                                <Flex
                                    borderRadius={50}
                                    padding={2}
                                    backgroundColor="#e4e6eb"
                                >
                                    <i data-visualcompletion="css-img"
                                        style={{
                                            backgroundImage: item.url,
                                            backgroundPosition: item.position, backgroundSize: "auto", width: "20px", height: "20px",
                                            backgroundRepeat: "no-repeat", display: "inline-block"
                                        }}
                                    ></i>
                                </Flex>
                                {item.text}
                            </Flex>
                            <Flex display={item.rightSide ? "flex" : "none"}>
                                <ChevronRightIcon fontSize={45} color="#696f77" fontWeight={300} />
                            </Flex>
                        </Flex>
                    )
                })}

                <Flex
                    onClick={logOut}
                    justifyContent="space-between"
                    padding={1.5}
                    width="100%"
                    borderRadius={7}
                    cursor="pointer"
                    _hover={{
                        backgroundColor: "#f3f4f5",
                    }}
                    alignItems="center"
                >
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                        gap={2}
                        fontWeight={600}
                        fontSize="15px"
                    >
                        <Flex
                            borderRadius={50}
                            padding={2}
                            backgroundColor="#e4e6eb"
                        >
                            <i data-visualcompletion="css-img"
                                style={{
                                    backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/vH5AtclyDI9.png')",
                                    backgroundPosition: "0px -822px", backgroundSize: "auto", width: "20px", height: "20px",
                                    backgroundRepeat: "no-repeat", display: "inline-block"
                                }}
                            ></i>
                        </Flex>
                        Log Out
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                width="100%"
                color="#6d6f73"
                fontSize="14px"
            >
                Privacy· Terms· Advertising· Ad Choices· Cookies· Vahagn © 2023
            </Flex>
        </Flex>
    )
}

export default NavbarProfileModal