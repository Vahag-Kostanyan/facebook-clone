import { Flex, Textarea } from '@chakra-ui/react'
import React from 'react'
import ProfileEmojiIcon from '../../../../icons/profile/ProfileEmojiIcon'
import Picker from "@emoji-mart/react"
import data from "@emoji-mart/data"
import InactiveModal from '../../InactiveModal'
import Avatar from '../Avatar'
import { useSelector } from 'react-redux'


function AddPostModalBodyFirstSide({ postDescription, setPostDescription, isPickerVisible, setPickerVisible, onEmojiClick }) {


    const user = useSelector(state => state.user)

    return (
        <Flex
            display="flex"
            flexDirection="column"
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
            <Flex>
                <Textarea
                    flex={11.4}
                    border="none"
                    placeholder="what's on your mind?"
                    padding={0}
                    focusBorderColor="transparent"
                    minH="15px"
                    value={postDescription}
                    onChange={e => setPostDescription(e.target.value)}
                    outline="none"
                />
                <Flex
                    flex={0.6}
                    alignItems="center"
                    justifyContent="center"
                    cursor={"pointer"}
                    onClick={() => setPickerVisible(!isPickerVisible)}
                >
                    <ProfileEmojiIcon />
                </Flex>
                <Flex display={isPickerVisible ? "flex" : "none"} position="absolute" >
                    <InactiveModal display={isPickerVisible ? "flex" : "none"} changeModalStatus={() => setPickerVisible(false)} />
                    <Flex
                        marginTop="50px"
                        zIndex={12}
                    >
                        <Picker
                            data={data}
                            previewPosition="none"
                            onEmojiSelect={e => onEmojiClick(e)}
                        />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default AddPostModalBodyFirstSide