import React, { useState } from "react";
import { Form, Button, Input, Checkbox } from "antd";
import { UserOutlined, IdcardOutlined, MailOutlined, KeyOutlined, PhoneOutlined  } from "@ant-design/icons";

import "./Register.scss";
export default function Register() {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        repeatPassword: "",
        privacyPolicy: false,
    });

    const changeForm = (e) => {
        if (e.target.name === "privacyPolicy") {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked,
            });
        } else {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value,
            });
        }
    };

    return (
        <Form className="register-form" onChange={changeForm}>
            <Form.Item>
            <Input
                    prefix={
                        <UserOutlined />
                    }
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    className="register-form__input"
                    value={inputs.name} 
                />
            </Form.Item>
            <Form.Item>
            <Input
                    prefix={
                        <UserOutlined />
                    }
                    type="text"
                    name="lastname"
                    placeholder="Apellido"
                    className="register-form__input"
                    value={inputs.lastname} 
                />
            </Form.Item>
            <Form.Item>
            <Input
                    prefix={
                        <IdcardOutlined />
                    }
                    type="text"
                    name="govId"
                    placeholder="Numero de Identificación"
                    className="register-form__input"
                    value={inputs.govId} 
                />
            </Form.Item>
            <br></br>
            <Form.Item>
            <Input
                    prefix={
                        <MailOutlined />
                    }
                    type="email"
                    name="email"
                    placeholder="Correo Electronico"
                    className="register-form__input"
                    value={inputs.email} 
                />
            </Form.Item>
            <Form.Item>
            <Input
                    prefix={
                        <PhoneOutlined />
                    }
                    type="text"
                    name="phone"
                    placeholder="Telefono"
                    className="register-form__input"
                    value={inputs.phone} 
                />
            </Form.Item>
            <Form.Item>
            <Input
                    prefix={
                        <KeyOutlined />
                    }
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="register-form__input"
                    value={inputs.password} 
                />
            </Form.Item>
            <Form.Item>
            <Input
                    prefix={
                        <KeyOutlined />
                    }
                    type="password"
                    name="repeatPassword"
                    placeholder="Repetir Contraseña"
                    className="register-form__input"
                    value={inputs.repeatPassword} 
                />
            </Form.Item>
            <Form.Item>
                <Checkbox name="privacyPolicy" checked={inputs.privacyPolicy}>
                    He leido y acepto la politica de privacidad.
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="register-form__button">
                    Crear Cuenta
                </Button>
            </Form.Item>
        </Form>
    )
}