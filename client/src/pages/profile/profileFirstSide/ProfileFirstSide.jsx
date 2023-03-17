import { Button, Flex, Heading } from '@chakra-ui/react'
import { SmallAddIcon } from '@chakra-ui/icons'

import React from 'react'
import CoverPhoto from './CoverPhoto'
import ProfileInfo from './ProfileInfo'
import ProfileInfoButtons from './ProfileInfoButtons'

function ProfileFirstSide({ user }) {
    return (
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
                width={{ xl: "1250px", lg: "100%", md: "100%" }}
                flexDirection="column"
            >
                <CoverPhoto />


                <Flex
                    flexDirection="column"
                    padding="0 10px"
                >
                    <ProfileInfo user={user} />
                    <hr />

                    <ProfileInfoButtons />
                </Flex>

            </Flex>
        </Flex>
    )
}

export default ProfileFirstSide