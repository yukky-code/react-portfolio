import React, { useState } from 'react'
import styled from 'styled-components';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.2rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: white;
    background-color: #212121;
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: #2B2B2B;
    color: white;
    font-size: 1.5rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  return (
    <div>
        <FormStyle>
            <div className="form-group">
                <label htmlFor="name">名前
                <input 
                type="text" 
                id='name' 
                name='name'
                value={name}
                onChange={e => setName(e.target.value)} 
                />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="email">アドレス
                <input 
                type="text" 
                id='email' 
                email='email'
                value={email}
                onChange={e => setEmail(e.target.value)} 
                />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="message">要望
                <textarea 
                type="text" 
                id='message' 
                message='message'
                value={message}
                onChange={e => setMessage(e.target.value)} 
                />
                </label>
            </div>
            <button type='submit'>送信</button>
        </FormStyle>
    </div>
  )
}

export default ContactForm