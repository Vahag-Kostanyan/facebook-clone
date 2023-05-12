import { Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Avatar from './Avatar'
import More from './More'
import ProfileComment from './ProfileComment'
import ProfileLikeCommentAndShear from './ProfileLikeCommentAndShear'

function ProfilePost() {


    const user = useSelector(state => state.user);
    const posts = useSelector(state => state.post);

    console.log(posts);
    return (
        <Flex
            flexDirection="column"
            gap={3}
        >
            <Heading
                fontSize={"15px"}
                color="#4d4d4d"
                fontWeight={500}
            >
                Other posts
            </Heading>
            {posts.length > 0 ? (
                <Flex
                    flexDirection="column-reverse"
                    gap={4}
                >
                    {posts.map((item, index) => {
                        return (
                            <Flex
                                key={index}
                                backgroundColor={"#ffffff"}
                                borderRadius={10}
                                overflow="hidden"
                                flexDirection={"column"}
                            >
                                <Flex
                                    padding={3}
                                    flexDirection="column"
                                    width={"100%"}
                                >
                                    <Flex
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Flex
                                            gap={2}
                                        >
                                            <Avatar width={"40px"} height={"40px"} />
                                            <Flex
                                                flexDirection="column"
                                                fontWeight={600}
                                            >
                                                {user.firstName} {user.lastName}
                                            </Flex>
                                        </Flex>
                                        <More />
                                    </Flex>
                                    <Flex>
                                        {item.description}
                                    </Flex>
                                </Flex>
                                <Flex width={"100%"}>
                                    <Image width="100%"  src={item.image} />
                                </Flex>
                                <Flex
                                    width={"100%"}
                                    padding={3}
                                    flexDirection="column"
                                    gap={2}
                                >
                                    <ProfileLikeCommentAndShear/>
                                    <ProfileComment />
                                </Flex>

                            </Flex>
                        )
                    })}
                </Flex>
            ) : (
                <></>
            )}

        </Flex>
    )
}

export default ProfilePost