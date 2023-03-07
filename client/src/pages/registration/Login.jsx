import { Box, Button, Flex, Heading, Image, Input, Link, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/footer/Footer';
import facebookLogo from "../../imgs/facebook-logo.png"
import { LogIn } from '../../redux/actions/user';
import Signup from './Signup';


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const logInHandler = async () => {
        if(email.length < 4 && password.length < 4){
            setError("The email must be minimum 3 symbols! \n \n The password must be minimum 3 symbols!")
        }else if(email.length < 4){
            setError("The email must be minimum 3 symbols!");
        }else if(password.length < 4){
            setError("The password must be minimum 3 symbols!");
        }else{
            const beckError = await LogIn({email, password});
            setError(beckError);
        }
    }

    return (
        <Flex
            flexDirection="column"
        >
            <Flex
                gap="100px"
                flexWrap="wrap"
                justifyContent="center"
                padding={{ lg: "150px 0", md: "0 0 70px", sm: "0 0 70px" }}
                width="100%"
                backgroundColor="#f0f2f5"
            >
                <Flex
                    maxW="980px"
                    gap={{ lg: "70px", md: "10px", sm: "0" }}
                    flexDirection={{ lg: "row", md: "column", sm: "column" }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Flex
                        flexDirection="column"
                        marginTop={{ lg: "-230px", md: "0", sm: "0" }}

                        padding={{ lg: "0", md: "30px", sm: "30px" }}
                        width={{ lg: "450px", md: "400px", sm: "400px" }}
                        alignItems={{ lg: "flex-start", md: "center", sm: "center" }}
                        justifyContent={{ lg: "flex-start", md: "center", sm: "center" }}
                    >
                        <Flex>
                            <Image height="106px" padding="30px 0" src={facebookLogo} ></Image>
                        </Flex>
                        <Flex>
                            <Heading fontSize={{ lg: "29px", md: "25px", sm: "25px" }} fontWeight="normal" textAlign={{ lg: "left", md: "center", sm: "center" }} width={{ lg: "450px", md: "400px", sm: "400px" }} lineHeight="32px" as="h2">Connect with friends and the world around you on Facebook.</Heading>
                        </Flex>
                    </Flex>
                    <Flex height="456px" width="396px" flexDirection="column">
                        <Flex
                            minH="350px"
                            width="100%"
                            backgroundColor="#fff"
                            boxShadow="0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);"
                            padding="20px 10px 28px"
                            borderRadius="8px"
                            fontSize="20px"
                            position="relative"
                        >
                            <form style={{ width: "100%", display: "flex", flexDirection: "column", gap: "15px" }} autocomplete="on" >
                                <Input
                                    value={email} onChange={e => setEmail(e.target.value)}
                                    type="email" border="1px solid #dddfe2" width="100%"
                                    height="52px" fontSize="18px" placeholder='Email or phone number' />
                                <Input
                                    value={password} onChange={e => setPassword(e.target.value)}
                                    type="password" border="1px solid #dddfe2" width="100%"
                                    height="52px" fontSize="18px" placeholder='Password' />
                                <Button
                                    onClick={logInHandler}
                                    backgroundColor="#1877f2" borderRadius="6px" fontSize="20px" lineHeight="48px" padding="25px 0" color="#fff"
                                    _hover={{ backgroundColor: "#1b75e9" }}>
                                    Log in
                                </Button>
                                <Heading marginLeft="5px" textAlign="center" color="#ff0000" as="span" fontSize="14px" className='error'>{error}</Heading>
                                <Flex>
                                    <Flex
                                        alignItems="center"
                                        justifyContent="center"
                                        padding="0 0 18px "
                                        borderBottom="1px solid #dadde1"
                                        width="100%"
                                    >
                                        <Link
                                            fontSize="14px"
                                            color="#1877f2"
                                        >Forgot password?</Link>
                                    </Flex>
                                </Flex>
                                <Flex
                                    alignItems="center"
                                    justifyContent="center"
                                    padding="10px 0 0 0"
                                >
                                    <Button
                                        onClick={onOpen}
                                        width="200px" backgroundColor="#42b72a" borderRadius="6px" fontSize="17px" lineHeight="48px"
                                        padding="25px 0" color="#fff" _hover={{ backgroundColor: "#30b116" }}>
                                        Create new account
                                    </Button>
                                </Flex>
                            </form>
                        </Flex>
                        <Flex
                            padding="15px"
                            alignItems="center"
                            justifyContent="center"
                            gap="8px"
                        >
                            <Link color="#1c1e21" fontSize="14px" fontWeight="700" >Create a Page</Link>
                            <Heading as="p" fontSize="14px" fontWeight="400">for a celebrity, brand or business.</Heading>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex>
                <Signup isOpen={isOpen} onClose={onClose} />
            </Flex>
            <Footer />
        </Flex>

    )
}

export default Login