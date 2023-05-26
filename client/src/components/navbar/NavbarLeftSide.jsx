import { Flex, Image, Input } from '@chakra-ui/react'
import { BsSearch } from '@react-icons/all-files/bs/BsSearch'
import React from 'react'
import { Link } from 'react-router-dom'
import facebookIcon from "../../imgs/facebook-icon.png"

function NavbarLeftSide({setSearchModalStatus, searchValue, setSearchValue}) {
    return (
        <Flex
            flex={3}
            alignItems="center"
            justifyContent="flex-start"
            gap="10px"
            position="relative"
        >
            <Link to={"/"}>
                <Image src={facebookIcon} width="35px" height="35px" />
            </Link>
            <BsSearch
                style={{
                    position: "absolute",
                    zIndex: 2,
                    left: "58px",
                    top: "14px",
                    fontSize: "17px"
                }}
                color='#65676b'

            />
            <Input
                placeholder='Search Facebook'
                backgroundColor="#f0f2f5"
                border="none"
                borderRadius="30px"
                padding="0 0 0 38px"
                focusBorderColor="#f0f2f5"
                maxW="300px"
                minW="200px"
                onChange={(e) => {setSearchValue(e.target.value)}}
                onFocus={() => {setSearchModalStatus(true)}}
            />
        </Flex>
    )
}

export default NavbarLeftSide