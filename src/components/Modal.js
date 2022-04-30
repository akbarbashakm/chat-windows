import React, { useState } from 'react';
import styled from 'styled-components';


const Root = styled.form`
    display: block;
    position: fixed;
    z-index: 1;
    padding-top: 20%;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`;

const Content = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 200px;
    input {
        flex: 1;
        background: #ddd;
        padding: 10px;
        border: none;
        border-radius: 3px;
        font-size: 1em;
    }
    button {
        background: rgb(0, 196, 65);
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        transition: background 0.23s;
        border: transparent;
        width: 86px;
        height: 30px;
        border-radius: 4px;
        margin: auto;
        margin-top: 10%;
    }
`;

const Modal = ({
    setName
}) => {
    const [value, setValue] = useState('')
    return (
        <Root>
            <Content>
                <input type={'text'} value={value} placeholder={"Enter your name"} onChange={(e) => {
                    setValue(e.target.value)
                }} />
                <button type={"submit"} onClick={(e) => {
                    e && e.preventDefault();
                    setName(value)
                }}>Add User</button>
            </Content>

        </Root>
    )
}

export default Modal;