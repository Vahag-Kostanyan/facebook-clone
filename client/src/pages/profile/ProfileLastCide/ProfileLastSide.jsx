import { Flex } from '@chakra-ui/react'
import React from 'react'
import CreatePost from '../../../components/CreatePost'
import ProfileFriends from './ProfileFriends'
import ProfileInfo from './ProfileInfo'
import ProfilePhotos from './ProfilePhotos'
import ProfileSuggestedBlock from './ProfileSuggestedBlock'

function ProfileLastSide() {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            width="100%"
            backgroundColor="#f0f2f5"

        >
            <Flex
                width={{ xl: "1250px", lg: "100%" }}
                padding="10px"
            >
                <Flex
                    width="100%"
                    flexDirection="column"
                    gap={3}
                >

                    <ProfileSuggestedBlock />
                    <Flex
                        gap={5}
                    >
                        <Flex
                            flex={5}
                            flexDirection="column"
                            gap={6}
                        >
                            <ProfileInfo/> 

                            <ProfilePhotos/>

                            <ProfileFriends/>
                        </Flex>
                        <Flex
                            flex={7}
                            flexDirection="column"
                        >
                            <CreatePost massage = "from profile"/>
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
        </Flex>)
}

export default ProfileLastSide