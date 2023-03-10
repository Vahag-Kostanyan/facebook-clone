import { Flex } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'

function Groups() {
    return (
        <Flex
            flexDirection="column"
            backgroundColor="#f0f2f5"
            minW="100vw"
            minH="100vh"
        >
            <Navbar />
            <Flex
                marginTop="80px"
            >

                Groups
            </Flex>
        </Flex>
    )
}

export default Groups