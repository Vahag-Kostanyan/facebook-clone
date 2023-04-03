import { Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

function ProfileInfo() {
  return (
    <Flex
      padding={4}
      borderRadius={6}
      flexDirection="column"
      backgroundColor="#ffffff"
      boxShadow="0px 3px 6px #dbdbdb"
      gap={4}
    >
      <Heading
        as="p"
        fontSize={18}
        fontWeight={500}
      >
        Intro
      </Heading>

      <Button>Add bio</Button>

      <Button>Edit details</Button>

      <Button>Add hobbies</Button>

      <Button>Add featured</Button>
    </Flex>
  )
}

export default ProfileInfo