import { Flex } from '@chakra-ui/react'
import React from 'react'

function InactiveModal({changeModalStatus}) {
  return (
    <Flex
      position="fixed"
      left={0}
      top={0}
      width="100vw"
      height="100vh"
      zIndex={10}
      onClick={changeModalStatus}
    >

    </Flex>
  )
}

export default InactiveModal