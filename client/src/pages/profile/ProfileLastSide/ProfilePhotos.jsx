import { Flex, Heading, Image, Link } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

function ProfilePhotos() {

  let posts = useSelector(state => state.post)

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
          Photos
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
          See all photos
        </Link>
      </Flex>
      <Flex
        flexWrap={"wrap"}
        gap={2}
      >
        {posts.map((post, index) => {
          return (
            <Image
              objectFit={"cover"}
              width={"150px"}
              height="150px"
              src={posts[posts.length - 1 - index].image}
              key={index}
              cursor="pointer"
            />
          )
        })}
      </Flex>

    </Flex>
  )
}

export default ProfilePhotos