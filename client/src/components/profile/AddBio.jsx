import { Button, Flex, Textarea } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getToken } from '../../helpers/helper'
import ProfilePublicIcon from '../../icons/profile/ProfilePublicIcon'
import { EditBio } from '../../redux/actions/user'

function AddBio({ setBioStatus, bioStatus }) {
    const [bio, setBio] = useState("")

    const dispatch = useDispatch();


    const user = useSelector(state => state.user);

    const EditBioHandler = () => {
        if (bio.length > 101 || user.bio && user.bio == bio) return

        
        const token = getToken();
        if(bio == "") setBio(null)
        
        dispatch(EditBio({ bio, token }))
        setBioStatus(!bioStatus)
    }

    useEffect(() => {
        if (user.bio) setBio(user.bio)
    }, [user])

    return (
        <Flex
            flexDirection="column"
            gap={3}
        >
            <Flex
                flexDirection="column"
                fontSize={"13px"}
                color="#9a9b9d"
                textAlign="right"
            >
                <Textarea
                    value={bio}
                    color="black"
                    onChange={(e) => setBio(e.target.value)}
                    placeholder='Describe who are you'
                    fontWeight={500}
                    backgroundColor="#f0f2f5"
                    textAlign="center"

                    _focus={{
                        backgroundColor: "#ffffff"
                    }}
                />
                {101 - bio.length} characters remaining
            </Flex>
            <Flex
                justifyContent="space-between"
            >
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    gap={2}
                    fontSize="15px"
                >
                    <ProfilePublicIcon />
                    Public
                </Flex>
                <Flex
                    gap={2}
                >

                    <Button onClick={() => setBioStatus(!bioStatus)} >Cancel</Button>
                    <Button onClick={EditBioHandler} isDisabled={bio.length > 101 || user.bio && user.bio == bio}>Save</Button>


                </Flex>
            </Flex>

        </Flex>
    )
}

export default AddBio