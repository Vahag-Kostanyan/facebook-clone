import { Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import AddCoverPhotoModal from '../../../components/modals/profile/AddCoverPhotoModal';
import InactiveModal from "../../../components/modals/InactiveModal"
import { useSelector } from 'react-redux';
import AddCoverPhotoIcon from '../../../icons/home/AddCoverPhotoIcon';

function CoverPhoto() {
  const [coverPhotoModal, setCoverPhotoModal] = useState(false);

  const changeCoverPhotoModalStatus = () => {
    setCoverPhotoModal(!coverPhotoModal);
  }


  const user = useSelector(state => state.user)
  return (
    <Flex
      height="460px"
      backgroundColor={user.cover ? "" :"#f0f2f5"}
      backgroundImage={user.cover ? user.cover : ""}
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      width="100%"
      borderBottomRadius={10}
      alignItems="flex-end"
      onClick={changeCoverPhotoModalStatus}
      cursor={"pointer"}
    >
      <Flex
        backgroundImage={"linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6))"}
        borderBottomRadius={10}
        width="100%"
        height="80px"
        padding="0 30px"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Flex
          padding={2}
          cursor="pointer"
          borderRadius={4}
          backgroundColor="#ffffff"
          alignItems="center"
          justifyContent="center"
          gap={2}
          fontSize="15"
          fontWeight="600"
          onClick={changeCoverPhotoModalStatus}
        >
          <AddCoverPhotoIcon/>
          Add cover photo
        </Flex>

      </Flex>
      <Flex display={coverPhotoModal ? "flex" : "none"}>
        <InactiveModal changeModalStatus={changeCoverPhotoModalStatus}/>
        <AddCoverPhotoModal changeModalStatus={changeCoverPhotoModalStatus} />
      </Flex>
    </Flex>
  )
}

export default CoverPhoto