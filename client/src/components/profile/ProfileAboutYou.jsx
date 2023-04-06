import { Flex, Heading, Image, Link, Textarea } from '@chakra-ui/react'
import React from 'react'
import MoreIcon from '../../svgs/profile/MoreIcon'
import profile from "../../imgs/profile.png"
import Bear from "../../imgs/whiteBear.png"
import { AiOutlineLike } from "@react-icons/all-files/ai/AiOutlineLike"
import { RiShareForwardLine } from "@react-icons/all-files/ri/RiShareForwardLine"
import { ChatIcon } from '@chakra-ui/icons'
import Avatar from '../modals/profile/Avatar'
import { ProfileAboutYouStyle } from '../../helpers/Profile'

function ProfileAboutYou() {

    const style = ProfileAboutYouStyle();

    return (
        <Flex
            sx={style.blocks}
            flexDirection="column"
            padding={3}
        >
            <Flex
                flexDirection="column"
            >
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    width="100%"
                >
                    <Flex
                        gap={2}
                    >
                        <Avatar width={"40px"} height={"40px"} />
                        <Flex
                            flexDirection="column"
                        >
                            <Heading
                                as="p"
                                fontSize={18}
                                fontWeight={500}
                            >
                                Vahagn Kostanyan
                            </Heading>
                            <Heading
                                as="p"
                                fontWeight={400}
                                fontSize={14}
                                color="#9a9b9d"
                            >
                                Jaunary 18 2005
                            </Heading>
                        </Flex>
                    </Flex>

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
                    alignItems="center"
                    padding="10px 0 50px 0"
                    gap={2}
                    flexDirection="column"
                >
                    <Flex
                        padding={3}
                        borderRadius={50}
                        backgroundColor="#1876f2"
                    >
                        <Image src={Bear}></Image>
                    </Flex>

                    <Link fontSize="20px" >Born on January 18, 2005</Link>
                </Flex>

            </Flex>
            <hr />
            <Flex
                padding="5px 0"
                gap={2}
                color="#65676b"
                fontSize="16px"
                fontWeight={500}
            >
                <Flex
                    sx={style.middleBlock}
                >
                    <AiOutlineLike size={20} />
                    Like</Flex>
                <Flex

                    sx={style.middleBlock}
                >
                    <ChatIcon />
                    Comment
                </Flex>
                <Flex
                    sx={style.middleBlock}
                >
                    <RiShareForwardLine size={20} />
                    Share
                </Flex>
            </Flex>
            <hr />

            <Flex
                padding="10px 0"
                gap={1}
            >
                <Flex>
                    <Avatar width={"40px"} height={"40px"} />

                </Flex>
                <Flex
                    flexDirection="column"
                    width="100%"
                >
                    <textarea
                        placeholder='Write a comment…'
                        style={{
                            height: "35px",
                            padding: "5px 10px",
                            backgroundColor: "#f0f2f5",
                            outline: "none",
                            borderRadius: 20,
                        }}
                    >

                    </textarea>
                    <Heading
                        as={"p"}
                        fontSize="13px"
                        fontWeight={400}
                        color="#787878"
                    >Press Enter to post.</Heading>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ProfileAboutYou