import { Button, Flex, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import AddBio from '../../../components/profile/AddBio'

function ProfileInfo() {
  const [bioStatus, setBioStatus] = useState(false);

  const user = useSelector(state => state.user)


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

      {bioStatus ? (
        <AddBio setBioStatus={setBioStatus} bioStatus={bioStatus} />
      ) : (
        <Flex
          flexDirection="column"
          gap={2}
        >
          {user.bio ? (
            <Heading
              textAlign="center"
              as="p"
              fontSize={18}
              fontWeight={500}
            >
              {user.bio}
            </Heading>
          ) : (
            <></>
          )}


          <Button onClick={() => setBioStatus(!bioStatus)} >Add bio</Button>
        </Flex>

      )}

      <Button>Edit details</Button>

      <Button>Add hobbies</Button>

      <Button>Add featured</Button>
    </Flex>
  )
}

export default ProfileInfo