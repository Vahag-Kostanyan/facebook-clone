import { Image } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux';
import profileImage from "../../../imgs/profileImage2.png"

function Avatar({ width, height }) {

    const user = useSelector(state => state.user);

    console.log(user);
    return (
        <Image
            borderRadius={"50%"}    
            width={width}
            height={height}
            overflow="hidden"
            padding={0.3}
            src={user.avatar ? user.avatar : profileImage}
            objectFit="inherit"
        >
        </Image>
    )
}

export default Avatar