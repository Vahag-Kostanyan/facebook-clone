import React, { useEffect, useState } from 'react'
import { Flex } from "@chakra-ui/react"
import { useLocation } from 'react-router-dom';
import InactiveModal from '../modals/InactiveModal';
import NavbarProfileModal from '../modals/navbar/NavbarProfileModal';
import NavbarLeftSide from './NavbarLeftSide';
import NavbarRightSide from './NavbarRightSide';
import NavbarMiddleSide from './NavbarMiddleSide';
import NavbarSearchModal from '../modals/navbar/NavbarSearchModal';
import { UserSearch } from '../../redux/actions/search';
import { useDispatch } from 'react-redux';

function Navbar() {
    const [avatarModalStatus, setAvatarModalStatus] = useState(false);
    const [searchModalStatus, setSearchModalStatus] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const dispatch = useDispatch();

    const location = useLocation();

    const route = location.pathname;


    const changeAvatarModalStatus = () => {
        setAvatarModalStatus(!avatarModalStatus);
    }


    const changeSearchModalStatus = () => {
        setSearchModalStatus(!searchModalStatus)
    }

    useEffect(() => {
        dispatch(UserSearch(searchValue))
    }, [searchValue]);


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
            <NavbarLeftSide 
            setSearchModalStatus={setSearchModalStatus}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />

            <NavbarMiddleSide route={route} />

            <NavbarRightSide route={route} changeAvatarModalStatus={changeAvatarModalStatus} />

            <Flex display={avatarModalStatus ? "flex" : "none"}>

                <InactiveModal changeModalStatus={changeAvatarModalStatus} />

                <NavbarProfileModal />

            </Flex>

            <Flex display={searchModalStatus ? "flex" : "none"} >

                <NavbarSearchModal/>

                <InactiveModal changeModalStatus={changeSearchModalStatus} />

            </Flex>


        </Flex>
    )
}

export default Navbar