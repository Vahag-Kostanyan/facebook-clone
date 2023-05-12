import { Avatar, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

function ProfileComment() {
    return (
        <Flex
            width={"100%"}
            padding="10px 0"
            gap={1}
        >
            <Flex>
                <Avatar width={"40px"} height={"40px"} />

            </Flex>
            <Flex
                flexDirection="column"
                width="100%"
            >
                <textarea
                    placeholder='Write a comment…'
                    style={{
                        height: "35px",
                        padding: "5px 10px",
                        backgroundColor: "#f0f2f5",
                        outline: "none",
                        borderRadius: 20,
                    }}
                >

                </textarea>
                <Heading
                    as={"p"}
                    fontSize="13px"
                    fontWeight={400}
                    color="#787878"
                >Press Enter to post.</Heading>
            </Flex>
        </Flex>
    )
}

export default ProfileComment