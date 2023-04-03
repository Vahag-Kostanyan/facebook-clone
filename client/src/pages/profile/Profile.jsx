import { SmallAddIcon } from '@chakra-ui/icons'
import { Button, Flex, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/navbar/Navbar'
import { getImages } from '../../redux/actions/photo'
import { getUser } from '../../redux/actions/user'
import ProfileFirstSide from './profileFirstSide/ProfileFirstSide'
import ProfileLastSide from './ProfileLastSide/ProfileLastSide'


function Profile() {


    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            window.location.assign("/login")
        }

        dispatch(getUser(token))
    }, [])

    return (
        <Flex
            flexDirection="column"
        >
            <Flex>
                <Navbar />
            </Flex>

            <ProfileFirstSide user = {user}/>

            <ProfileLastSide/>
        </Flex>
    )
}

export default Profile