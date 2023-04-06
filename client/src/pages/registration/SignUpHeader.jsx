import { Heading, ModalHeader } from '@chakra-ui/react'
import React from 'react'

function SignUpHeader() {
    return (
        <ModalHeader display="flex" flexDirection="column" gap="8px">
            <Heading fontSize={"32px"} lineHeight="38px">Sign Up</Heading>
            <Heading as="p" fontWeight="400" color="#8a8d91" fontSize="15px">It’s quick and easy.</Heading>
        </ModalHeader>
    )
}

export default SignUpHeader