import { HamburgerIcon } from '@chakra-ui/icons'
import { Button, Flex, Heading } from '@chakra-ui/react'
import { BsFillGridFill } from "@react-icons/all-files/bs/BsFillGridFill"
import React from 'react'

function ViewPost() {

    const style = {
        blocks: {
            width: "100%",
            backgroundColor: "#ffffff",
            borderRadius: 10,
            boxShadow: "0px 3px 6px #dbdbdb",
            flexDirection: "column",
        },

    }

    return (
        <Flex
            sx={style.blocks}
            flexDirection="column"
        >

            <Flex
                alignItems="center"
                justifyContent="space-between"
                padding="10px"
            >
                <Heading
                    as="p"
                    fontSize={20}
                    fontWeight={600}
                >
                    Posts
                </Heading>
                <Flex
                    gap={2}
                >
                    <Button gap={2} >
                        <i data-visualcompletion="css-img"
                            style={{
                                backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/e0dQbElDp3a.png')",
                                backgroundPosition: "0px -255px", backgroundSize: "auto", width: "16px", height: "16px",
                                backgroundRepeat: "no-repeat", display: "inline-block"
                            }}
                        ></i>
                        Filters
                    </Button>
                    <Button
                        gap={2}
                    >
                        <i data-visualcompletion="css-img"
                            style={{
                                backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/e0dQbElDp3a.png')",
                                backgroundPosition: "0px -374px", backgroundSize: "auto", width: "16px", height: "16px",
                                backgroundRepeat: "no-repeat", display: "inline-block"
                            }}
                        ></i>
                        Manage Posts
                    </Button>
                </Flex>
            </Flex>
            <hr />
            <Flex
                padding="4px 10px"
                paddingBottom="0"
            >
                <Flex
                    flex={6}
                    alignItems="center"
                    justifyContent="center"
                    padding={1}
                    gap={1}
                    borderBottom="2px solid #1876f2"
                    color="#1876f2"
                >
                    <HamburgerIcon />
                    List view
                </Flex>
                <Flex
                    padding={1}
                    flex={6}
                    alignItems="center"
                    justifyContent="center"
                    gap={1}
                >
                    <Flex
                        padding={1}
                        width="100%"
                        cursor="pointer"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius={6}
                        fontWeight={500}
                        color="#65676B"
                        _hover={{
                            backgroundColor: "#DADDE1"
                        }}
                    >
                        <BsFillGridFill />
                        Grid view
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ViewPost