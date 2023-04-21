import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React, { useState } from 'react'
import { SignUp } from '../../redux/actions/user';
import SignUpHeader from './SignUpHeader';
import SignUpFooter from './SignUpFooter';
import SignUpBody from './SignUpBody';

function SignUpComponent({ isOpen, onClose }) {

    const [check, setCheck] = useState(false);
    const [datas, setDatas] = useState({
        firstName: "",
        lastName: "",
        email: "",
        birthday: "2023-01-01",
        gender: "",
        password: "",
        day: "1 ",
        month: "1",
        year: "2023",
    })
    const [signUpValidation, setSignUpValidation] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        password: "",
    });

    const monthaArr = [
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

    const validationFunction = (field, value) => {

        if(value){
            value = value.replace(/\s/g, '');
            if (field != "birthday" && field != "day" && field != "month" && field != "year") {
                signUpValidation[field] = "";
                if (value == "") {
                    signUpValidation[field] = `${field} field is required!`;
                } else {
                    if (value.length < 3) {
                        signUpValidation[field] = `${field} must be minimum 3 symbols!`;
                    } else {
                        if (field == "email") {
                            let regexExp = /\S+@\S+\.\S+/;
                            if (!regexExp.test(value)) {
                                signUpValidation[field] = `email address is invalid!`;
                            }
                        }
                    }
                }
            }

            return
        }

        if (field != "birthday" && field != "day" && field != "month" && field != "year") {
            signUpValidation[field] = "";
            if (datas[field].replace(/\s/g, '') == "") {
                signUpValidation[field] = `${field} field is required!`;
            } else {
                if (datas[field].replace(/\s/g, '').length < 3) {
                    signUpValidation[field] = `${field} must be minimum 3 symbols!`;
                } else {
                    if (field == "email") {
                        let regexExp = /\S+@\S+\.\S+/;
                        if (!regexExp.test(datas[field])) {
                            signUpValidation[field] = `email address is invalid!`;
                        }
                    }
                }
            }
        }
    }

    const validation = (all = false, field = "", value = null) => {
        if (all) {
            let t = false;
            for (let SignUpDate in datas) {
                if (SignUpDate == "birthday" || SignUpDate == "day" || SignUpDate == "month" || SignUpDate == "year") {
                    continue;
                }
                validationFunction(SignUpDate);
            }

            for (let item in signUpValidation) if (signUpValidation[item] != "") return true

            return false;
        }

        if (field != "birthday" && field != "day" && field != "month" && field != "year") {
            validationFunction(field, value);
        }

    }


    const SignUpHandler = (e) => {
        setDatas(item => {
            return { ...item, [e.target.name]: e.target.value }
        })

        if (check) {
            validation(false, e.target.name, e.target.value);
        }
    }

    const SignUpBtn = async () => {

        setCheck(true)
        let t = validation(true)

        console.log(t);

        if (t) return;

        if (datas.day.length == 1) {
            datas.day = `0${datas.day}`
        }
        if (datas.month.length == 1) {
            datas.month = `0${datas.month}`
        }

        datas.birthday = datas.year + "-" + datas.month + "-" + datas.day;


        const backError = await SignUp({
            firstName: datas.firstName, lastName: datas.lastName, email: datas.email,
            birthday: datas.birthday, gender: datas.gender, password: datas.password
        })

        if (backError.status == "ok") {
            onClose();
            alert("login for go your account")
            return
        }
        if (backError.for) {
            document.querySelector(`.email`).innerHTML = backError.massage;
        } else {
            alert(backError.massage)
        }

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

                <SignUpHeader />

                <ModalCloseButton />

                <hr />

                <SignUpBody SignUpHandler={SignUpHandler} datas={datas} monthaArr={monthaArr} dayArr={dayArr} yearArr={yearArr} signUpValidatio={signUpValidation} />

                <SignUpFooter SignUpBtn={SignUpBtn} />

            </ModalContent>
        </Modal>
    )
}

export default SignUpComponent