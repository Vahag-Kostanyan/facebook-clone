import React, { useState } from 'react'
import { Flex } from "@chakra-ui/react"
import { useLocation } from 'react-router-dom';
import InactiveModal from '../modals/InactiveModal';
import NavbarProfileModal from '../modals/navbar/NavbarProfileModal';
import NavbarLeftSide from './NavbarLeftSide';
import NavbarRightSide from './NavbarRightSide';
import NavbarMiddleSide from './NavbarMiddleSide';

function Navbar() {
    const [modalStatus, setModalStatus] = useState(false)
    const location = useLocation();

    const route = location.pathname;

    const changeModalStatus = () => {
        setModalStatus(!modalStatus);
    }

    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            padding="0 10px"
            backgroundColor="#ffffff"
            position="fixed"
            borderBottom="1px solid #f0f2f5"
            boxShadow="0px 3px 6px #dbdbdb"
            width="100%"
            zIndex={999}
        >
            <NavbarLeftSide />

            <NavbarMiddleSide route={route} />

            <NavbarRightSide route={route} changeModalStatus={changeModalStatus} />

            <Flex display={modalStatus ? "flex" : "none"}>

                <InactiveModal changeModalStatus={changeModalStatus} />

                <NavbarProfileModal />

            </Flex>
        </Flex>
    )
}

export default Navbar