import { CloseIcon } from '@chakra-ui/icons'
import { Button, Flex, Heading, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import ProfileAddPhotoIcon from '../../../../icons/profile/ProfileAddPhotoIcon'
import ProfilePhoneIcon from '../../../../icons/profile/ProfilePhoneIcon'
import editIcon from "../../../../imgs/editIcon.png"

function AddPostModalMiddleSide({ setPhotoBlockStatus, photoBlockStatus, addPhoto, postPhoto, removePostPhoto }) {

  return (
    <Flex
      border={"1px solid #ced0d4"}
      borderRadius={6}
      padding={2}
      gap={2}
      flexDirection="column"
      position="relative"

    >
      {postPhoto == "" ? (
        <></>
      ) : (
        <Flex
          display={photoBlockStatus ? "none" : "flex"}
          position={"absolute"}
          left="20px"
          top="15px"
          gap={2}
        >
          <label htmlFor="addPostInput">
            <Flex
              cursor={"pointer"}
              borderRadius={6}
              fontWeight={500}
              backgroundColor={"#edf2f7"}
              height={"35px"}
              padding={"0 10px"}
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              gap={1}
              zIndex={11}
              _hover={{
                backgroundColor: "#e5eaee"
              }}
            >
              <Image width="15px" src={editIcon} />
              Edit all
            </Flex>
          </label>

          <Button
            height={"35px"}
            padding={"0 10px"}
            display="flex"
            alignItems={"center"}
            justifyContent="center"
            gap={1}
          >
            <ProfileAddPhotoIcon />
            Add Photos/Videos
          </Button>

        </Flex>
      )}

      {postPhoto == "" ? (
        <label htmlFor="addPostInput">
          <Flex
            display={photoBlockStatus ? "none" : "flex"}
            width={"100%"}
            height="100%"
            padding="50px"
            borderRadius={6}
            backgroundColor="#f7f8fa"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            cursor="pointer"
            _hover={{
              backgroundColor: "#ecedee"
            }}
          >


            <Flex
              padding={3}
              borderRadius={50}
              backgroundColor="#e4e6eb"
            >
              <ProfileAddPhotoIcon />
            </Flex>
            <Heading
              fontSize={"16px"}
              fontWeight={600}
            >
              Add Photos/Videos
            </Heading>
            <Heading
              fontSize={"12px"}
              fontWeight={400}
              color="#87898c"
            >
              or drag and drop
            </Heading>

          </Flex>
        </label>
      ) : (
        <Flex
          display={photoBlockStatus ? "none" : "flex"}
          width={"100%"}
          height="100%"
          borderRadius={6}
          overflow="hidden"
        >
          <Image width={"100%"} src={postPhoto} />
        </Flex>
      )}


      <input onChange={addPhoto} type="file" style={{ display: "none" }} id="addPostInput" />
      <Flex
        display={photoBlockStatus ? "none" : "flex"}
        borderRadius={50}
        backgroundColor="#ffffff"
        padding={2}
        position="absolute"
        top={"15px"}
        right="15px"
        cursor="pointer"
        border="1px solid #e3e4e6"
        zIndex={10}
        onClick={removePostPhoto}
      >
        <CloseIcon fontSize={12} color="#6c727a" />
      </Flex>
      <Flex
        borderRadius={6}
        backgroundColor="#f7f8fa"
        padding={2}
        justifyContent="space-between"
      >
        <Flex
          alignItems="center"
          gap={2}
          fontSize="12px"
        >
          <Flex
            padding={3}
            borderRadius={50}
            backgroundColor="#e4e6eb"
          >
            <ProfilePhoneIcon />
          </Flex>
          <Heading fontSize="13px" fontWeight={400}>
            Add photos and videos from your mobile device.
          </Heading>
        </Flex>
        <Flex>
          <Button>Add</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default AddPostModalMiddleSide