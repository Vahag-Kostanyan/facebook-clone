import { Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { getUser } from '../../redux/actions/user';



function Home() {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            console.log(11);
            window.location.assign("/login")
        }

        dispatch(getUser(token))
    }, [])


    const user = useSelector(state => state.user);

    console.log(user);
    return (
        <Flex
            flexDirection="column"
            backgroundColor="#f0f2f5"
            minW="100vw"
            minH="100vh"
        >
            <Navbar />
            <Flex
                marginTop="80px"
            >

                {user.email}
            </Flex>
        </Flex>
    )
}

export default Home