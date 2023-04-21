import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import AddGroupIcon from '../../icons/home/AddGroupIcon'

function HomeRightSide() {

    const itemStyle = {
        gap: "3",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        maxWidth: "340px",
        cursor: "pointer",
        padding: "2",
        borderRadius: "7",
        _hover: {
            backgroundColor: "#e7e8e9"
        }
    }

    return (
        <Flex
            position="fixed"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            width="100%"
            gap={4}
        >
            <Heading
                as={"span"}
                color="#65676B"
                fontSize="20px"
                padding = "2"
            >Group conversations</Heading>
            <Flex
                sx={itemStyle}
            >
                <Flex
                    fontSize="20px"
                    padding="8px"
                    borderRadius={50}
                    backgroundColor="#e4e6eb"
                    cursor="pointer"
                >
                    <AddGroupIcon/>
                </Flex>
                Create new group
            </Flex>
        </Flex>
    )
}

export default HomeRightSide