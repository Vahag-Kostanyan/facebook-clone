import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import photo from "../../../../imgs/photo.png"
import tagPeoplePhoto from "../../../../imgs/tagPeople.png"
import feelingPhoto from "../../../../imgs/feeling.png"
import locationPhoto from "../../../../imgs/location.png"
import gifPhoto from "../../../../imgs/gif.png"
import MoreIcon from '../../../../svgs/profile/MoreIcon'

function AddPostModalLastSide({ setPhotoBlockStatus }) {
    return (
        <Flex
            padding={2}
            border={"1px solid #ced0d4"}
            borderRadius={6}
            justifyContent="space-between"
        >
            <Flex
                fontWeight={600}
                padding={2}
            >
                Add to your post
            </Flex>
            <Flex
                gap={1}
            >
                <Flex
                    padding={2}
                    borderRadius={50}
                    cursor="pointer"
                    _hover={{
                        backgroundColor: "#f0f2f5"
                    }}
                    onClick={() => { setPhotoBlockStatus(false) }}

                >
                    <Image width="24px" height="24px" src={photo} ></Image>

                </Flex>
                <Flex
                    padding={2}
                    borderRadius={50}
                    cursor="pointer"
                    _hover={{
                        backgroundColor: "#f0f2f5"
                    }}

                >
                    <Image width="24px" height="24px" src={tagPeoplePhoto} ></Image>

                </Flex>
                <Flex
                    padding={2}
                    borderRadius={50}
                    cursor="pointer"
                    _hover={{
                        backgroundColor: "#f0f2f5"
                    }}
                >
                    <Image width="24px" height="24px" src={feelingPhoto} ></Image>

                </Flex>
                <Flex
                    padding={2}
                    borderRadius={50}
                    cursor="pointer"
                    _hover={{
                        backgroundColor: "#f0f2f5"
                    }}
                >
                    <Image width="24px" height="24px" src={locationPhoto} ></Image>

                </Flex>
                <Flex
                    padding={2}
                    borderRadius={50}
                    cursor="pointer"
                    _hover={{
                        backgroundColor: "#f0f2f5"
                    }}
                >
                    <Image width="24px" height="24px" src={gifPhoto} ></Image>

                </Flex>
                <Flex
                    alignItems="center"
                    justifyContent="center"
                >
                    <Flex
                        borderRadius={50}
                        padding={2}

                        _hover={{
                            backgroundColor: "#f0f2f5"
                        }}
                        cursor="pointer"
                    >
                        <MoreIcon />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default AddPostModalLastSide