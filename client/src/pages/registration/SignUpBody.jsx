import { Flex, Heading, Input, Link, ModalBody, Radio, RadioGroup, Select, Stack } from '@chakra-ui/react'
import { AiFillQuestionCircle } from "@react-icons/all-files/ai/AiFillQuestionCircle"
import React from 'react'

function SignUpBody({ SignUpHandler, datas, monthaArr, dayArr, yearArr, signUpValidatio }) {

    return (
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
                                value={datas.firstName}
                                onChange={SignUpHandler}
                                name="firstName"
                                placeholder='First name'
                                border={signUpValidatio.firstName != "" ? "1px solid #ff0000" : "1px solid #d6d9dd"}
                                background="#f5f6f7"
                                focusBorderColor="#d6d9dd" _hover={{ outline: "none" }} />
                            <Heading marginLeft="5px" color="#ff0000" as="span" fontSize="12px" >
                                {signUpValidatio.firstName}
                            </Heading>                        </Flex>
                        <Flex gap="3px" flexDirection="column">
                            <Input
                                value={datas.lastName}
                                onChange={SignUpHandler}
                                name="lastName"
                                placeholder='Last name'
                                background="#f5f6f7"
                                focusBorderColor="#d6d9dd"
                                _hover={{ outline: "none", border: "none", }}
                                border={signUpValidatio.lastName != "" ? "1px solid #ff0000" : "1px solid #d6d9dd"}
                            />
                            <Heading marginLeft="5px" color="#ff0000" as="span" fontSize="12px" >
                                {signUpValidatio.lastName}
                            </Heading>
                        </Flex>

                    </Flex>
                    <Flex gap="3px" flexDirection="column">
                        <Input
                            value={datas.email}
                            onChange={SignUpHandler}
                            name="email"
                            placeholder='Email'
                            border={signUpValidatio.lastName != "" ? "1px solid #ff0000" : "1px solid #d6d9dd"}
                            background="#f5f6f7" focusBorderColor="#d6d9dd"
                            _hover={{ outline: "none" }} />
                        <Heading marginLeft="5px" color="#ff0000" as="span" fontSize="12px" >
                            {signUpValidatio.email}
                        </Heading>
                    </Flex>
                    <Flex gap="3px" flexDirection="column">
                        <Input
                            value={datas.password}
                            onChange={SignUpHandler}
                            name="password"
                            type="password"
                            placeholder='New password'
                            border={signUpValidatio.password != "" ? "1px solid #ff0000" : "1px solid #d6d9dd"}
                            background="#f5f6f7" focusBorderColor="#d6d9dd"
                            _hover={{ outline: "none" }} />
                        <Heading marginLeft="5px" color="#ff0000" as="span" fontSize="12px" >
                            {signUpValidatio.password}
                        </Heading>
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
                                defaultValue={datas.month}
                                onChange={SignUpHandler}
                                name="month"
                                border="1px solid #d6d9dd"
                                focusBorderColor="#d6d9dd">
                                {monthaArr.map((item, index) => {
                                    return (
                                        <option key={index} value={index + 1} >{item}</option>
                                    )
                                })}
                            </Select>
                            <Select
                                defaultValue={datas.day}
                                onChange={SignUpHandler}
                                name="day"
                                border="1px solid #d6d9dd" focusBorderColor="#d6d9dd">
                                {dayArr.map((item, index) => {
                                    return (
                                        <option key={index} value={index + 1}>{item}</option>
                                    )
                                })}
                            </Select>
                            <Select
                                defaultValue={datas.year}
                                onChange={SignUpHandler}
                                name="year"
                                border="1px solid #d6d9dd" focusBorderColor="#d6d9dd">
                                {yearArr.map((item, index) => {
                                    return (
                                        <option key={index} value={item} >{item}</option>
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
                            <RadioGroup value={datas.gender}>
                                <Flex gap="3px" flexDirection="column">
                                    <Stack
                                        direction='flex'
                                        justifyContent="space-between"
                                        width="100%"
                                        gap="10px"
                                    >
                                        <label htmlFor="genderFemale">
                                            <Flex
                                                fontSize="16px"
                                                gap="40px"
                                                padding="5px 10px"
                                                borderRadius="5px"
                                                border={signUpValidatio.gender != "" ? "1px solid #ff0000" : "1px solid #d6d9dd"}
                                            >
                                                Female
                                                <Radio
                                                    onChange={SignUpHandler}
                                                    name="gender"
                                                    id='genderFemale' value='male'

                                                ></Radio>
                                            </Flex>
                                        </label>
                                        <label htmlFor="genderMail">
                                            <Flex
                                                fontSize="16px"
                                                gap="45px"
                                                padding="5px 10px"
                                                borderRadius="5px"
                                                border={signUpValidatio.gender != "" ? "1px solid #ff0000" : "1px solid #d6d9dd"}
                                            >
                                                Male
                                                <Radio
                                                    onChange={SignUpHandler}
                                                    name="gender"
                                                    id='genderMail' value='female'></Radio>
                                            </Flex>
                                        </label>
                                        <label htmlFor="genderCustom">
                                            <Flex
                                                fontSize="16px"
                                                gap="35px"
                                                padding="5px 10px"
                                                borderRadius="5px"
                                                border={signUpValidatio.gender != "" ? "1px solid #ff0000" : "1px solid #d6d9dd"}
                                            >
                                                Custom
                                                <Radio
                                                    onChange={SignUpHandler}
                                                    name="gender"
                                                    id='genderCustom' value='custom'></Radio>
                                            </Flex>
                                        </label>
                                    </Stack>
                                    <Heading marginLeft="5px" color="#ff0000" as="span" fontSize="12px" >
                                        {signUpValidatio.gender}
                                    </Heading>
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
    )
}

export default SignUpBody