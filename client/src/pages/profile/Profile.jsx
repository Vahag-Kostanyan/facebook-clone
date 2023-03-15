import { SmallAddIcon } from '@chakra-ui/icons'
import { Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../components/navbar/Navbar'


function Profile() {


    const user = useSelector(state => state.user)


    return (
        <Flex
            flexDirection="column"
        >
            <Flex>
                <Navbar />
            </Flex>
            <Flex
                marginTop="58px"
                alignItems="center"
                justifyContent="center"
                width="100vw"
                backgroundColor="#ffffff"
                borderBottom="1px solid rgba(0, 0, 0, 0.1)"
                boxShadow="0px 3px 6px #dbdbdb"

            >
                <Flex
                    position="relative"
                    width={{ xl: "1250px", lg: "100%" }}
                    padding="0 0 20px 0"
                    flexDirection="column"
                >
                    <Flex
                        height="460px"
                        backgroundColor="#f0f2f5"
                        width="100%"
                        borderBottomRadius={10}
                        alignItems="flex-end"
                    >
                        <Flex
                            backgroundImage={"linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6))"}
                            borderBottomRadius={10}
                            width="100%"
                            height="80px"
                            padding="0 30px"
                            alignItems="center"
                            justifyContent="flex-end"
                        >
                            <Flex
                                padding={2}
                                cursor="pointer"
                                borderRadius={4}
                                backgroundColor="#ffffff"
                                alignItems="center"
                                justifyContent="center"
                                gap={2}
                                fontSize="15"
                                fontWeight="600"
                            >
                                <i data-visualcompletion="css-img"
                                    style={{
                                        backgroundImage: "url('	https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/emk5nc_FTRC.png')",
                                        backgroundPosition: "0 -156px", backgroundSize: "auto", width: "16px", height: "16px",
                                        backgroundRepeat: "no-repeat", display: "inline-block"
                                    }}
                                ></i>
                                Add cover photo
                            </Flex>

                        </Flex>

                    </Flex>

                    <Flex>
                        <Flex width={"200px"}>

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
                                    backgroundColor="#1b74e4"
                                    color="#f1f6fd"
                                    _hover={{
                                        backgroundColor: "#1a6ed7"
                                    }}
                                >
                                    <SmallAddIcon fontSize={20} />
                                    Add to story
                                </Button>                            </Flex>
                        </Flex>
                    </Flex>
                    <hr />
                </Flex>
            </Flex>
            <Flex
                alignItems="center"
                justifyContent="center"
                width="100%"
                backgroundColor="#f0f2f5"

            >
                <Flex
                    width={{ xl: "1250px", lg: "100%" }}
                >
                    <Flex
                        height="100vh"
                        width="100%"
                    >

                        Profile
                    </Flex>

                </Flex>
            </Flex>
        </Flex>
    )
}

export default Profile