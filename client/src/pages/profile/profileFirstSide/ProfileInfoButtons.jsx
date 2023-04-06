import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { ProfileInfoButtonsStyle } from '../../../helpers/Profile'
import MoreIcon from '../../../svgs/profile/MoreIcon'

function ProfileInfoButtons() {

    const style = ProfileInfoButtonsStyle();

    return (
        <Flex
            padding="2px 0"
            justifyContent="space-between"
            alignItems="center"
        >
            <Flex>
                <Flex
                    sx={style.activeButtonStyle}
                >
                    Posts
                </Flex>
                <Flex
                    sx={style.buttonStyle}

                >
                    About
                </Flex>
                <Flex
                    sx={style.buttonStyle}
                >
                    Friends
                </Flex>
                <Flex
                    sx={style.buttonStyle}
                >
                    Photos
                </Flex>
                <Flex
                    sx={style.buttonStyle}
                >
                    Videos
                </Flex>
                <Flex
                    sx={style.buttonStyle}
                >
                    Check-ins
                </Flex>
                <Flex
                    sx={style.buttonStyle}
                >
                    More
                </Flex>
            </Flex>
            <Flex
                padding="10px 15px"
                backgroundColor="#f0f2f5"
                borderRadius={6}
                cursor="pointer"
                _hover={{
                    backgroundColor: "#e6e8eb"
                }}
            >
                <MoreIcon />
            </Flex>

        </Flex>
    )
}

export default ProfileInfoButtons