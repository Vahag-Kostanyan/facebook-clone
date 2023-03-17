import { Flex } from '@chakra-ui/react'
import React from 'react'

function CoverPhoto() {
  return (
    <Flex
      height="460px"
      backgroundColor="#f0f2f5"
      width="100%"
      borderBottomRadius={10}
      alignItems="flex-end"
    >
      <Flex
        backgroundImage={"linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6))"}
        borderBottomRadius={10}
        width="100%"
        height="80px"
        padding="0 30px"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Flex
          padding={2}
          cursor="pointer"
          borderRadius={4}
          backgroundColor="#ffffff"
          alignItems="center"
          justifyContent="center"
          gap={2}
          fontSize="15"
          fontWeight="600"
        >
          <i data-visualcompletion="css-img"
            style={{
              backgroundImage: "url('	https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/emk5nc_FTRC.png')",
              backgroundPosition: "0 -156px", backgroundSize: "auto", width: "16px", height: "16px",
              backgroundRepeat: "no-repeat", display: "inline-block"
            }}
          ></i>
          Add cover photo
        </Flex>

      </Flex>

    </Flex>)
}

export default CoverPhoto