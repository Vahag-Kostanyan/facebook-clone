import { Flex, Link } from '@chakra-ui/react'
import React from 'react'

function ProfileFriends() {
  return (
    <Flex
      padding={4}
      borderRadius={6}
      flexDirection="column"
      backgroundColor="#ffffff"
      boxShadow="0px 3px 6px #dbdbdb"
      gap={4}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
      >
        <Link
          fontSize={19}
          fontWeight={700}
        >
          Friends
        </Link>

        <Link
          _hover={{
            backgroundColor: "#f0f2f5"
          }}
          padding="5px 10px"
          color=" #216FDB"
          fontSize="18px"
          borderRadius={4}
        >
          See all friends
        </Link>
      </Flex>
      <Flex></Flex>

    </Flex>)
}

export default ProfileFriends