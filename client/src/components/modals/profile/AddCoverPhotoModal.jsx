import { Flex, Input } from '@chakra-ui/react'
import React from 'react'
import { TiCameraOutline } from "@react-icons/all-files/ti/TiCameraOutline"
import { GiNinjaHead } from "@react-icons/all-files/gi/GiNinjaHead"
import ModalCorner from '../../../svgs/profile/ModalCorner'
import ProfileSelectPhoto from '../../../icons/profile/ProfileSelectPhotoIcon'
import ProfileUploadPhoto from '../../../icons/profile/ProfileUploadPhotoIcon'
import { convertBase64 } from '../../../helpers/helper'
import { useDispatch, useSelector } from 'react-redux'
import { removeCoverPhoto, uploadCoverPhoto } from '../../../redux/actions/photo'
import ProfileRepositionIcon from '../../../icons/profile/ProfileRepositionIcon'
import ProfileRemoveIcon from '../../../icons/profile/ProfileRemoveIcon'


function AddCoverPhotoModal({changeModalStatus}) {

    const dispatch = useDispatch();
    const token = localStorage.getItem("token");

    const UploadCoverPhoto = async (e) => {

        const bas64 = await convertBase64(e.target.files[0]);

        const req = {
            cover: bas64,
            token
        }

        dispatch(uploadCoverPhoto(req));

        changeModalStatus();
    }

    const RemoveCoverPhoto = async () => {
        dispatch(removeCoverPhoto(token));

        changeModalStatus();
    }

    const user = useSelector(state => state.user);
    return (
        <Flex
            position={"absolute"}
            zIndex="11"
            top={"440px"}
            right={"25px"}
            flexDirection="column"
        >
            <Flex
                width={"350px"}
                backgroundColor="#ffffff"
                boxShadow="0px 0px 40px #adaeb0"
                borderRadius={10}
                color={"#3b3b3b"}
                padding={2}
                flexDirection="column"

            >
                <Flex
                    padding={2}
                    borderRadius={4}
                    alignItems="center"
                    gap={2}
                    _hover={{
                        backgroundColor: "#e4e6eb"
                    }}
                    cursor="pointer"
                    fontWeight={500}
                // onClick={onOpen}
                >
                    <ProfileSelectPhoto />
                    {/* <TiCameraOutline color='#606163' fontWeight={300}  size={30} /> */}
                    Select photo
                </Flex>
                <label htmlFor="addPhotoInput">
                    <Flex
                        padding={2}
                        borderRadius={4}
                        alignItems="center"
                        gap={2}
                        _hover={{
                            backgroundColor: "#e4e6eb"
                        }}
                        fontWeight={500}
                        cursor="pointer"
                    >
                        <ProfileUploadPhoto />
                        Upload photo
                    </Flex>
                </label>
                <input onChange={UploadCoverPhoto} type={"file"} style={{ display: "none" }} id="addPhotoInput" />
                <Flex
                    display={user.cover ? "flex" : "none"}
                    flexDirection="column"
                    gap={1}
                >
                    <Flex
                        padding={2}
                        borderRadius={4}
                        alignItems="center"
                        gap={2}
                        _hover={{
                            backgroundColor: "#e4e6eb"
                        }}
                        cursor="pointer"
                        fontWeight={500}
                    >
                        <ProfileRepositionIcon />
                        Reposition
                    </Flex>
                        <hr/>
                    <Flex
                        padding={2}
                        borderRadius={4}
                        alignItems="center"
                        gap={2}
                        _hover={{
                            backgroundColor: "#e4e6eb"
                        }}
                        cursor="pointer"
                        fontWeight={500}
                        onClick={RemoveCoverPhoto}
                    >
                        <ProfileRemoveIcon  />
                        Remove
                    </Flex>
                </Flex>

            </Flex>
        </Flex>
    )
}

export default AddCoverPhotoModal