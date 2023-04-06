import { Button, ModalFooter } from '@chakra-ui/react'
import React from 'react'

const SignUpFooter = ({SignUpBtn}) => {
    return (
        <ModalFooter alignItems="center" justifyContent="center">
            <Button
                onClick={SignUpBtn}
                padding="8px 60px" fontSize="18px" backgroundColor="#00a400" fontWeight="700" color="#fff"
                _hover={{ background: "linear-gradient(#67ae55, #578843)", backgroundColor: "#69a74e", boxShadow: "inset 0 1px 1px #a4e388" }}>Sign Up</Button>
        </ModalFooter>
    )
}

export default SignUpFooter