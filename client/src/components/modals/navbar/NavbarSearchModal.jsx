import { Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function NavbarSearchModal() {

  const searchValue = useSelector(state => state.search);


  console.log(searchValue);
  return (
    <Flex
      position="absolute"
      top={"50px"}
      left={1}
      backgroundColor={"#ffffff"}
      rounded={9}
      boxShadow="0px 3px 6px #dbdbdb"
      zIndex={111}
    >

      {searchValue.length > 0 ? (
        <Flex
          flexDirection={"column"}
          padding={3}
          gap={1}
        >
          {searchValue.map((item, index) => {
            return (
              <Link to={`/profile/${item._id}`}>
                <Flex
                  key={index}
                  padding={2}
                  width={"350px"}
                  cursor={"pointer"}
                  gap={3}
                  borderRadius={10}
                  _hover={{
                    backgroundColor: "#c8c9cb"
                  }}
                >
                  <Image
                    src={item.avatar}
                    borderRadius={50}
                    width={"40px"}
                    height={"40px"}
                  ></Image>
                  <Flex
                    flexDirection={"column"}
                  >
                    <Heading
                      fontSize={15}
                      fontWeight={500}
                    >{item.fullName}</Heading>
                    <Heading
                      fontSize={13}
                      fontWeight={400}
                    >Friend</Heading>
                  </Flex>
                </Flex>
              </Link>
            )
          })}
        </Flex>
      ) : (
        <Heading
          color={"#9a9b9d"}
          fontSize={18}
          width={"350px"}
          textAlign={"center"}
          fontWeight={400}
          padding={6}
        >
          No recent searches
        </Heading>
      )}


    </Flex>
  )
}

export default NavbarSearchModal