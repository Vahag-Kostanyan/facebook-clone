import { Box, Flex, Heading, Link } from '@chakra-ui/react'
import React from 'react'

const footerLinks = [
    "Sign Up", "Log In", "Messenger", "Facebook Lite", "Watch", "Places", "Games", "Marketplace", "Meta Pay", "Oculus", "Portal", "Instagram", "Bulletin", "Fundraisers",
    "Services", "Voting Information Center", "Privacy Policy", "Privacy Center", "Groups", "About", "Create Ad", "Create Page", "Developers", "Careers", "Cookies", "Ad choices",
    "Terms", "Help", "Contact Uploading & Non-UsersSettings"
]


function Footer() {
    return (
        <Flex
            alignItems="center"
            justifyContent="center"
            padding="15px 0"
        >
            <Flex
                maxW="980px"
                alignItems="flex-start"
                flexDirection="column"
                padding="20px "
            >
                <Flex
                    alignItems="center"
                    justifyContent={{lg: "center", md: "flex-start",  sm: "flex-start"}}
                    gap="10px"
                    padding="10px 0"
                    flexWrap="wrap"
                >
                    <Heading as="p" fontWeight="400" color="#8a8d91" fontSize="12px">English (US)</Heading>
                    <Link color='#8a8d91' fontSize="12px">Русский</Link>
                    <Link color='#8a8d91' fontSize="12px">Français (France)</Link>
                    <Link color='#8a8d91' fontSize="12px">Deutsch</Link>
                    <Link color='#8a8d91' fontSize="12px">Español (España)</Link>
                    <Link color='#8a8d91' fontSize="12px">Português (Brasil)</Link>
                    <Link color='#8a8d91' fontSize="12px">Italiano</Link>
                </Flex>
                <Flex
                    flexWrap="wrap"
                    columnGap="15px"
                    rowGap="10px"
                    borderTop="1px solid #dadde1"
                    padding="10px 0"
                >
                    {footerLinks.map(item => {
                        return (
                            <Link color='#8a8d91' fontSize="12px">{item}</Link>
                        )
                    })}
                </Flex>
                <Flex
                    padding="15px 0"
                >
                    <Heading as="p" color="#8a8d91" fontWeight="400" fontSize="12px">Vahag © 2023</Heading>

                </Flex>
            </Flex>
        </Flex>
    )
}

export default Footer