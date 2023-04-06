import { Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { getUser } from '../../redux/actions/user';
import HomeLeftSide from './HomeLeftSide';
import HomeMiddleSide from './HomeMiddleSide';
import HomeRightSide from './HomeRightSide';



function Home() {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            window.location.assign("/login")
        }

        dispatch(getUser(token))
    }, [])


    const user = useSelector(state => state.user);

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
                padding="0 10px 20px"
                overflowX="hidden"
                overflow="auto"

            >
                <Flex
                    flex={3}
                    display={{xl: "flex", lg: "none", md: "none", sm: "none"}}
                >
                    <HomeLeftSide/>
                </Flex>
                <Flex
                    flex={6.5}
                    height="1000px"
                >
                    <HomeMiddleSide/>
                </Flex>
                <Flex
                    display={{lg: "flex", md: "none", sm: "none"}}
                    flex={2.5}
                >
                    <HomeRightSide/>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Home