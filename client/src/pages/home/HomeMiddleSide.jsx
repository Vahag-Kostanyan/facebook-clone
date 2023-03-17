import React from 'react'
import { Flex, Image } from "@chakra-ui/react"
import HomeMiddleSideReelsIcon from '../../svgs/home/HomeMiddleSideReelsIcon'
import HomeMiddleSideStoriesIcon from '../../svgs/home/HomeMiddleSideStoriesIcon'
import ProfileImage from "../../imgs/profileImage2.png"
import profile from "../../imgs/profile.png"
import HomeMiddleSidePlusIcon from '../../svgs/home/HomeMiddleSidePlusIcon'
import liveVideo from "../../imgs/liveVideoIcone.png"
import photo from "../../imgs/photo.png"
import feeling from "../../imgs/feeling.png"
import CreatePost from '../../components/CreatePost'

function HomeMiddleSide() {

  const style = {
    center: {
      alignItems: "center",
      justifyContent: "center"
    },

    blocks: {
      width: "100%",
      backgroundColor: "#ffffff",
      borderRadius: 10,
      boxShadow: "0px 3px 6px #dbdbdb",
      flexDirection: "column",
    },
    firstBlockItem: {
      flex: 6,
      padding: "15px 0",
      alignItems: "center",
      justifyContent: "center",
      color: "#65676B",
      fontWeight: 600,
      cursor: "pointer",
      _hover: {
        backgroundColor: "#e7e8e9"
      },
      borderRadius: 10,
      gap: "10px"
    },
    secondBlockItem: {
      flex: 6,
      padding: "10px 0",
      alignItems: "center",
      justifyContent: "center",
      color: "#65676B",
      fontWeight: 600,
      cursor: "pointer",
      fontSize: "14px",
      _hover: {
        backgroundColor: "#e7e8e9"
      },
      borderRadius: 10,
      gap: "10px"
    }
  }

  return (
    <Flex
      flexDirection="column"
      gap={4}
      padding={"0 10px 30px"}
      height="auto"
      width="70%"
      minW="680px"
    >
      <Flex
        sx={style.blocks}
      >
        <Flex
          padding="5px 20px"
        >
          <Flex
            sx={style.firstBlockItem}
          >
            <Flex
              fontSize="20px"
            >
              <HomeMiddleSideStoriesIcon />
            </Flex>
            Stores
          </Flex>
          <Flex
            sx={style.firstBlockItem}
          >
            <Flex
              fontSize="20px"
            >
              <HomeMiddleSideReelsIcon />
            </Flex>
            Reels
          </Flex>
        </Flex>
        <hr />
        <Flex
          padding="20px"
          gap="20px 10px"
        >
          <Flex
            borderRadius={10}
            width="112px"
            height="200px"
            boxShadow="0px 3px 6px #dbdbdb"
            position={"relative"}
            flexDirection="column"
            cursor="pointer"
          >
            <Image src={ProfileImage} borderTopRadius={10} height="70%" ></Image>

            <Flex
              position={"absolute"}
              top={"119px"}
              left="29px"
              borderRadius={50}
              padding="7px"
              backgroundColor="#fff"
            >
              <Flex
                backgroundColor={"hsl(214, 89%, 52%)"}
                padding="8px"
                borderRadius={50}
              >

                <HomeMiddleSidePlusIcon />
              </Flex>
            </Flex>

            <Flex
              alignItems="center"
              justifyContent="center"
              height="30%"
              fontSize="13px"
              fontWeight={600}
              padding="20px 0 0 0"
            >
              Create story
            </Flex>
          </Flex>
        </Flex>

      </Flex>
      <CreatePost massage = "from home"/>

      <Flex
        sx={style.blocks}
        height="1000px"
      >

      </Flex>
      <Flex
        sx={style.blocks}
        height="1000px"
      >

      </Flex>
      <Flex
        sx={style.blocks}
        height="1000px"
      >

      </Flex>

    </Flex >
  )
}

export default HomeMiddleSide