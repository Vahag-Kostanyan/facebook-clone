import { Flex } from '@chakra-ui/react'
import React from 'react'
import MoreIcon from '../../../svgs/profile/MoreIcon'

function More() {
    return (
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
    )
}

export default More