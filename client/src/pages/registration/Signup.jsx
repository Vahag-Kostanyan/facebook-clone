import { border, Button, Flex, Heading, Input, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Select, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { GrFormClose } from "@react-icons/all-files/gr/GrFormClose"
import { AiFillQuestionCircle } from "@react-icons/all-files/ai/AiFillQuestionCircle"


function Signup({ isOpen, onClose }) {

    const [signUpData, setSignUpData] = useState({
        firstName: "asds",
        lastName: "",
        mail: "",
        birthday: "",
        gender: "",
        password: "",
    });

    const mountaArr = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const dayArr = [];

    const yeaaArr = []

    for (let i = 2023; i >= 1905; i--) {
        yeaaArr.push(i)
    }
    for (let i = 1; i < 32; i++) {
        dayArr.push(i)
    }

    return (
        <Modal
            key={Math.random()}
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset='slideInBottom'
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader display="flex" flexDirection="column" gap="8px">
                    <Heading fontSize={"32px"} lineHeight="38px">Sign Up</Heading>
                    <Heading as="p" fontWeight="400" color="#8a8d91" fontSize="15px">It’s quick and easy.</Heading>
                </ModalHeader>
                <ModalCloseButton />
                <hr />
                <ModalBody >
                    <form>
                        <Flex
                            flexDirection="column"
                            gap="10px"
                            fontSize="15px"
                            fontWeight="400"
                            padding="10px 0 0 0"
                        >
                            <Flex
                                width="100%"
                                gap="10px"
                            >
                                <Input
                                    placeholder='First name' border="1px solid #d6d9dd" background="#f5f6f7"
                                    focusBorderColor="#d6d9dd" _hover={{ outline: "none" }} />
                                <Input placeholder='Last name' border="1px solid #d6d9dd" background="#f5f6f7" focusBorderColor="#d6d9dd" _hover={{ outline: "none" }} />
                            </Flex>
                            <Input placeholder='Mobile number or email' border="1px solid #d6d9dd" background="#f5f6f7" focusBorderColor="#d6d9dd" _hover={{ outline: "none" }} />
                            <Input placeholder='New password' border="1px solid #d6d9dd" background="#f5f6f7" focusBorderColor="#d6d9dd" _hover={{ outline: "none" }} />
                            <Flex
                                flexDirection="column"
                                alignItems="flex-start"

                                gap="5px"
                            >
                                <Heading as="p" fontWeight="400" color="#686b6e" fontSize="15px" display="flex" gap="5px" justifyContent="center" alignItems="center">Birthday  <AiFillQuestionCircle /></Heading>
                                <Flex
                                    justifyContent="space-between"
                                    width="100%"
                                    gap="10px"
                                >
                                    <Select border="1px solid #d6d9dd" focusBorderColor="#d6d9dd">
                                        {mountaArr.map(item => {
                                            return (
                                                <option value='option1'>{item}</option>
                                            )
                                        })}
                                    </Select>
                                    <Select border="1px solid #d6d9dd" focusBorderColor="#d6d9dd">
                                        {dayArr.map(item => {
                                            return (
                                                <option value='option1'>{item}</option>
                                            )
                                        })}
                                    </Select>
                                    <Select border="1px solid #d6d9dd" focusBorderColor="#d6d9dd">
                                        {yeaaArr.map(item => {
                                            return (
                                                <option value='option1'>{item}</option>
                                            )
                                        })}
                                    </Select>
                                </Flex>
                            </Flex>
                            <Flex
                                flexDirection="column"
                                alignItems="flex-start"

                                gap="5px"
                            >
                                <Heading as="p" fontWeight="400" color="#686b6e" fontSize="15px" display="flex" gap="5px" justifyContent="center" alignItems="center">Gender  <AiFillQuestionCircle /></Heading>
                                <Flex

                                >
                                    <RadioGroup>
                                        <Stack
                                            direction='flex'
                                            justifyContent="space-between"
                                            width="100%"
                                            gap="10px"
                                        >
                                            <label for="genderFemale">
                                                <Flex fontSize="16px" gap="40px" padding="5px 10px" borderRadius="5px" border="1px solid #d6d9dd">
                                                    Female
                                                    <Radio id='genderFemale' value='1'></Radio>
                                                </Flex>
                                            </label>
                                            <label for="genderMail">
                                                <Flex fontSize="16px" gap="45px" padding="5px 10px" borderRadius="5px" border="1px solid #d6d9dd">
                                                    Male
                                                    <Radio id='genderMail' value='2'></Radio>
                                                </Flex>
                                            </label>
                                            <label for="genderCustom">
                                                <Flex fontSize="16px" gap="35px" padding="5px 10px" borderRadius="5px" border="1px solid #d6d9dd">
                                                    Custom
                                                    <Radio id='genderCustom' value='3'></Radio>
                                                </Flex>
                                            </label>
                                        </Stack>
                                    </RadioGroup>


                                </Flex>
                            </Flex>
                            <Flex
                                flexDirection="column"
                                gap="10px"
                            >
                                <Heading as="span" fontWeight="400" color="#777" fontSize="11px">
                                    People who use our service may have uploaded your contact information to Facebook. <Link color="#385898" as="span">Learn more</Link>
                                </Heading>
                                <Heading as="span" fontWeight="400" color="#777" fontSize="11px">
                                    By clicking Sign Up, you agree to our <Link color="#385898" as="span">Terms</Link>, <Link color="#385898" as="span">Privacy Policy</Link>
                                    and <Link color="#385898" as="span">Cookies</Link> Policy. You may receive SMS Notifications from us and can opt out any time.
                                </Heading>
                            </Flex>
                        </Flex>
                    </form>
                </ModalBody>
                <ModalFooter alignItems="center" justifyContent="center">
                    <Button padding="8px 60px" fontSize="18px" backgroundColor="#00a400" fontWeight="700" color="#fff"
                        _hover={{ background: "linear-gradient(#67ae55, #578843)", backgroundColor: "#69a74e", boxShadow: "inset 0 1px 1px #a4e388" }}>Sign Up</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default Signup