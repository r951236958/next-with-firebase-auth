import Link from 'next/link';
import React, { useState } from 'react';
import { firebaseClient } from '../firebaseClient';
export default (_props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    return (React.createElement("div", null,
        React.createElement(Link, { href: "/" },
            React.createElement("a", null, "Go back to home page")),
        React.createElement("br", null),
        React.createElement("input", { value: email, onChange: (e) => setEmail(e.target.value), placeholder: 'Email' }),
        React.createElement("input", { type: 'password', value: pass, onChange: (e) => setPass(e.target.value), placeholder: 'Password' }),
        React.createElement("button", { onClick: async () => {
                await firebaseClient
                    .auth()
                    .createUserWithEmailAndPassword(email, pass);
                window.location.href = '/';
            } }, "Create account"),
        React.createElement("button", { onClick: async () => {
                await firebaseClient.auth().signInWithEmailAndPassword(email, pass);
                window.location.href = '/';
            } }, "Log in")));
};