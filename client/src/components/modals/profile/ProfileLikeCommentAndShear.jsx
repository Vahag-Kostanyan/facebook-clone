import { ChatIcon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/react'
import { AiOutlineLike } from '@react-icons/all-files/ai/AiOutlineLike'
import { RiShareForwardLine } from '@react-icons/all-files/ri/RiShareForwardLine'
import React from 'react'
import { ProfileAboutYouStyle } from '../../../helpers/Profile'

function ProfileLikeCommentAndShear() {

    const style = ProfileAboutYouStyle();
    
    return (
        <Flex 
        width={"100%"}
        flexDirection="column"
        >
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
        </Flex>
    )
}

export default ProfileLikeCommentAndShear