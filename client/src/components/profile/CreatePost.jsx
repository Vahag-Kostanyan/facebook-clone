import { Flex, Image, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import liveVideo from "../../imgs/liveVideoIcone.png"
import photo from "../../imgs/photo.png"
import feeling from "../../imgs/feeling.png"
import lifeEvent from "../../imgs/lifeEvent.png"
import profile from "../../imgs/profile.png"
import Avatar from "../modals/profile/Avatar"
import { CreatePostStyle } from '../../helpers/components/modals'
import AddPostModal from '../modals/profile/AddPostModal/AddPostModal'

function CreatePost({ massage }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const style = CreatePostStyle();


    return (
        <Flex
            sx={style.blocks}
            padding="5px 20px"

        >
            <Flex
                alignItems="center"
                justifyContent="center"
                padding="10px 0"
                gap={4}
                cursor="pointer"
            >
                <Avatar width={"40px"} height={"40px"} />
                <Flex
                    width="100%"
                    backgroundColor="#f0f2f5"
                    color="#65676B"
                    padding="8px 10px"
                    borderRadius={25}
                    fontSize="17px"
                    _hover={{
                        backgroundColor: "#e5e7e9"
                    }}
                >
                    What's on your mind, Vahagn?
                </Flex>
            </Flex>
            <hr />
            <Flex
                padding="10px 0"
                gap="20px 10px"
            >
                <Flex
                    flex={4}
                    sx={style.secondBlockItem}
                >
                    <Image width="22px" src={liveVideo} ></Image>
                    Live video
                </Flex>
                <Flex
                    flex={4}
                    sx={style.secondBlockItem}
                    onClick={onOpen}
                >
                    <AddPostModal isOpen={isOpen} onClose={onClose}/>
                    <Image width="22px" src={photo} ></Image>
                    Photo/video
                </Flex>
                {massage == "from home" ? (
                    <Flex
                        flex={4}
                        sx={style.secondBlockItem}
                    >
                        <Image width="22px" src={feeling} ></Image>
                        Feeling/activity
                    </Flex>
                ) : (
                    <Flex
                        flex={4}
                        sx={style.secondBlockItem}
                    >
                        <Image width="22px" src={lifeEvent} ></Image>
                        Life event
                    </Flex>
                )}

            </Flex>

        </Flex>
    )
}

export default CreatePost