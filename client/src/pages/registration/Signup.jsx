import { Button, Flex, Heading, Input, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Select, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiFillQuestionCircle } from "@react-icons/all-files/ai/AiFillQuestionCircle"
import { useDispatch } from 'react-redux'
import { SignUp } from '../../redux/actions/user';

function Signup({ isOpen, onClose }) {

    const dispatch = useDispatch();

    const SignUpDates = {
        firstName: "",
        lastName: "",
        mail: "",
        birthday: "2023-01-01",
        gender: "",
        password: "",
        day: "1",
        mount: "1",
        year: "2023",
    };
    const mountaArr = [
         "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const dayArr = [];

    const yearArr = []

    for (let i = 2023; i >= 1905; i--) {
        yearArr.push(i)
    }
    for (let i = 1; i < 32; i++) {
        dayArr.push(i)
    }


    const requiredValidate = (all = false, field = "") => {
        if (all) {
            let t = false;
            for (let SignUpDate in SignUpDates) {
                if (SignUpDate == "birthday" || SignUpDate == "day" || SignUpDate == "mount" || SignUpDate == "year") {
                    continue;
                }

                if (SignUpDates[SignUpDate].length <= 3) {
                    if (SignUpDate == "gender") {
                        t = true;
                        const gender = document.querySelectorAll(`.genderContainer`)
                        gender.forEach(item => {
                            item.style.border = "1px solid #ff0000"
                        })
                        document.querySelector(`.${SignUpDate}`).innerHTML = `${SignUpDate} field is required!`
                    } else {
                        document.querySelector(`[name=${SignUpDate}]`).style.border = "1px solid #ff0000"
                        document.querySelector(`.${SignUpDate}`).innerHTML = `The ${SignUpDate} must be minimum 3 symbols!`
                    }
                } else {
                    if (SignUpDate == "gender") {
                        const gender = document.querySelectorAll(`.genderContainer`)
                        gender.forEach(item => {
                            item.style.border = "1px solid #d6d9dd"
                        })
                        document.querySelector(`.${SignUpDate}`).innerHTML = ``
                    } else if (SignUpDate == "mail") {
                        let item = document.querySelector(`[name=${SignUpDate}]`);
                        var regexExp = /\S+@\S+\.\S+/;
                        if (!regexExp.test(item.value)) {
                            document.querySelector(`[name=${SignUpDate}]`).style.border = "1px solid #ff0000"
                            document.querySelector(`.${SignUpDate}`).innerHTML = `email address is invalid`
                        } else {
                            document.querySelector(`[name=${SignUpDate}]`).style.border = "1px solid #d6d9dd"
                            document.querySelector(`.${SignUpDate}`).innerHTML = ``
                        }
                    } else {
                        document.querySelector(`[name=${SignUpDate}]`).style.border = "1px solid #d6d9dd"
                        document.querySelector(`.${SignUpDate}`).innerHTML = ``
                    }
                }
            }
            return t;
        } else {
            if (field == "birthday" || field == "day" || field == "mount" || field == "year") return;

            let item = document.querySelector(`[name=${field}]`);

            if (item.value.length <= 3) {
                if (field == "gender") {
                    const gender = document.querySelectorAll(`.genderContainer`)
                    gender.forEach(item => {
                        item.style.border = "1px solid #ff0000"
                    })
                    document.querySelector(`.${field}`).innerHTML = `The ${field} must be minimum 3 symbols!`
                } else {
                    document.querySelector(`[name=${field}]`).style.border = "1px solid #ff0000"
                    document.querySelector(`.${field}`).innerHTML = `The ${field} must be minimum 3 symbols!`
                }
            } else {
                if (field == "gender") {
                    const gender = document.querySelectorAll(`.genderContainer`)
                    gender.forEach(item => {
                        item.style.border = "1px solid #d6d9dd"
                    })
                    document.querySelector(`.${field}`).innerHTML = ``
                } else if (field == "mail") {
                    let regexExp = /\S+@\S+\.\S+/;
                    if (!regexExp.test(item.value)) {
                        document.querySelector(`[name=${field}]`).style.border = "1px solid #ff0000"
                        document.querySelector(`.${field}`).innerHTML = `email address is invalid`
                    } else {
                        document.querySelector(`[name=${field}]`).style.border = "1px solid #d6d9dd"
                        document.querySelector(`.${field}`).innerHTML = ``
                    }
                } else {
                    document.querySelector(`[name=${field}]`).style.border = "1px solid #d6d9dd"
                    document.querySelector(`.${field}`).innerHTML = ``
                }
            }
        }
    }


    const SignUpHandler = (e) => {
        SignUpDates[e.target.name] = e.target.value;
        requiredValidate(false, e.target.name);

    }
    const SignUpBtn = async() => {

        let t = requiredValidate(true)

        if (t) return;

        if(SignUpDates.day.length == 1){
            SignUpDates.day = `0${SignUpDates.day}` 
        }
        if(SignUpDates.mount.length == 1){
            SignUpDates.mount = `0${SignUpDates.mount}` 
        }

        SignUpDates.birthday = SignUpDates.year + "-" + SignUpDates.mount + "-" + SignUpDates.day;

        
        const backError = await SignUp({firstName: SignUpDates.firstName, lastName: SignUpDates.lastName, email: SignUpDates.mail, 
            birthday: SignUpDates.birthday, gender: SignUpDates.gender, password: SignUpDates.password})
            
        if(backError.status == "ok"){
            onClose();
            alert("login for go your account")
            return
        }

        document.querySelector(`.mail`).innerHTML = backError.massage;
    }

    return (
        <Modal
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
                    <form autoComplete='off'>
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
                                <Flex gap="3px" flexDirection="column">
                                    <Input
                                        onChange={SignUpHandler}
                                        name="firstName"
                                        placeholder='First name' border="1px solid #d6d9dd" background="#f5f6f7"
                                        focusBorderColor="#d6d9dd" _hover={{ outline: "none" }} />
                                    <Heading marginLeft="5px" color="#ff0000" as="span" fontSize="12px" className='firstName' />
                                </Flex>
                                <Flex gap="3px" flexDirection="column">
                                    <Input
                                        onChange={SignUpHandler}
                                        name="lastName"
                                        placeholder='Last name' border="1px solid #d6d9dd"
                                        background="#f5f6f7" focusBorderColor="#d6d9dd" _hover={{ outline: "none" }} />
                                    <Heading marginLeft="5px" color="#ff0000" as="span" fontSize="12px" className='lastName' />
                                </Flex>

                            </Flex>
                            <Flex gap="3px" flexDirection="column">
                                <Input
                                    onChange={SignUpHandler}
                                    name="mail"
                                    placeholder='Email' border="1px solid #d6d9dd" background="#f5f6f7" focusBorderColor="#d6d9dd"
                                    _hover={{ outline: "none" }} />
                                <Heading marginLeft="5px" color="#ff0000" as="span" fontSize="12px" className='mail' />
                            </Flex>
                            <Flex gap="3px" flexDirection="column">
                                <Input
                                    onChange={SignUpHandler}
                                    name="password"
                                    type="password"
                                    placeholder='New password' border="1px solid #d6d9dd" background="#f5f6f7" focusBorderColor="#d6d9dd"
                                    _hover={{ outline: "none" }} />
                                <Heading marginLeft="5px" color="#ff0000" as="span" fontSize="12px" className='password' />
                            </Flex>

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
                                    <Select
                                        onChange={SignUpHandler}
                                        name="mount"
                                        border="1px solid #d6d9dd" focusBorderColor="#d6d9dd">
                                        {mountaArr.map((item, index) => {
                                            return (
                                                <option value={index}>{item}</option>
                                            )
                                        })}
                                    </Select>
                                    <Select
                                        onChange={SignUpHandler}
                                        name="day"
                                        border="1px solid #d6d9dd" focusBorderColor="#d6d9dd">
                                        {dayArr.map(item => {
                                            return (
                                                <option value={item}>{item}</option>
                                            )
                                        })}
                                    </Select>
                                    <Select
                                        onChange={SignUpHandler}
                                        name="year"
                                        border="1px solid #d6d9dd" focusBorderColor="#d6d9dd">
                                        {yearArr.map(item => {
                                            return (
                                                <option value={item}>{item}</option>
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
                                        <Flex gap="3px" flexDirection="column">
                                            <Stack
                                                direction='flex'
                                                justifyContent="space-between"
                                                width="100%"
                                                gap="10px"
                                            >
                                                <label for="genderFemale">
                                                    <Flex className='genderContainer' fontSize="16px" gap="40px" padding="5px 10px" borderRadius="5px" border="1px solid #d6d9dd">
                                                        Female
                                                        <Radio
                                                            onChange={SignUpHandler}
                                                            name="gender"
                                                            id='genderFemale' value='male'></Radio>
                                                    </Flex>
                                                </label>
                                                <label for="genderMail">
                                                    <Flex className='genderContainer' fontSize="16px" gap="45px" padding="5px 10px" borderRadius="5px" border="1px solid #d6d9dd">
                                                        Male
                                                        <Radio
                                                            onChange={SignUpHandler}
                                                            name="gender"
                                                            id='genderMail' value='female'></Radio>
                                                    </Flex>
                                                </label>
                                                <label for="genderCustom">
                                                    <Flex className='genderContainer' fontSize="16px" gap="35px" padding="5px 10px" borderRadius="5px" border="1px solid #d6d9dd">
                                                        Custom
                                                        <Radio
                                                            onChange={SignUpHandler}
                                                            name="gender"
                                                            id='genderCustom' value='custom'></Radio>
                                                    </Flex>
                                                </label>
                                            </Stack>
                                            <Heading marginLeft="5px" color="#ff0000" as="span" fontSize="12px" className='gender' />
                                        </Flex>

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
                    <Button
                        onClick={SignUpBtn}
                        padding="8px 60px" fontSize="18px" backgroundColor="#00a400" fontWeight="700" color="#fff"
                        _hover={{ background: "linear-gradient(#67ae55, #578843)", backgroundColor: "#69a74e", boxShadow: "inset 0 1px 1px #a4e388" }}>Sign Up</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default Signup