import React, { useReducer, useState } from 'react';

import Social from '../Social/Social';

import './styles.css';

import underscore from './underscore.png';
import linkedin from './linkedin.png';
import github from './github.png';
import mail from './mail.png';
import check from './check.png';

const initialState = {
  name: '',
  email: '',
  message: '',
  error: {
    nameErr: '',
    emailErr: '',
    messageErr: '',
  },
};

const ACTIONS = {
  CONTROL_FORM: 'control-form',
  HANDLE_ERROR: 'handle-error',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CONTROL_FORM:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case ACTIONS.HANDLE_ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          [action.payload.errorName]: action.payload.value,
        }
      }
    default:
      return state;
  }
}

function Contact() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    dispatch({type: ACTIONS.CONTROL_FORM, payload: { field: e.target.name, value: e.target.value }})
  }

  const { name, email, message, error} = state;

  const validate = () => {
    let nameErr = '', emailErr = '', messageErr = '';
    if (!email) {
      emailErr = 'Please enter your email address';
      dispatch({
        type: ACTIONS.HANDLE_ERROR,
        payload: {errorName: 'emailErr', value: emailErr
      }});
    } else if (!email.match(/^([a-zA-Z0-9]+)@([a-zA-Z]+).([a-zA-Z]+)$/)) {
      emailErr = 'Please enter your email address in the format: name@example.com';
      dispatch({
        type: ACTIONS.HANDLE_ERROR,
        payload: {errorName: 'emailErr', value: emailErr
      }});
    } else {
      dispatch({
        type: ACTIONS.HANDLE_ERROR,
        payload: {errorName: 'emailErr', value: ''
      }});
    }

    if (!name) {
      nameErr = 'Please enter your name';
      dispatch({
        type: ACTIONS.HANDLE_ERROR,
        payload: {errorName: 'nameErr', value: nameErr
      }});
    } else if (name.length <= 3) {
      nameErr = 'Please enter more than 3 characters';
      dispatch({
        type: ACTIONS.HANDLE_ERROR,
        payload: {errorName: 'nameErr', value: nameErr}
      });
    } else {
      dispatch({
        type: ACTIONS.HANDLE_ERROR,
        payload: {errorName: 'nameErr', value: ''
      }});
    }

    if (!message) {
      messageErr = 'Please enter a message';
      dispatch({
        type: ACTIONS.HANDLE_ERROR,
        payload: {errorName: 'messageErr', value: 'Please enter a message'
      }});
    } else {
      dispatch({
        type: ACTIONS.HANDLE_ERROR,
        payload: {errorName: 'messageErr', value: ''
      }});
    }

    if (emailErr || nameErr || messageErr) {
      return false;
    }
    return true;
  }

  const onSubmit = (e) => {
    e.preventDefault();

    let isValid = validate();
    if (!isValid) {
      console.log('invalid email!');
      return;
    }

    const postEmailData = async () => {
      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(state),
        };
        const request = await fetch('/api/contact-email/', options);
        console.log(await request.json());
      } catch (e) {
        console.log(e);
      }
    }
    setSent(true);
    postEmailData();
  }

  return (
    <section className='contact' id='contact'>
      <div className='contact-start'>
        <div className='title' id='contact-title'>
          <h2>Let's Connect!</h2>
          <img id='contact-underscore' className='underscore' src={underscore} alt='underscore'></img>
        </div>
        <p id='contact-prompt'>{sent ? '' : "Fill out the form below, and I'll respond within the next 24 hours."}</p>
        {sent ? 
        <div className='send-success'>
          <img className='check' src={check} alt='check'></img>
          <h4 className='successTitle'>Your message was sent!</h4>
          <p className='successMessage'>
            Thanks for connecting. I’ll be in touch within the next 24 hours! In the meantime, you can download my resume or view my work.
          </p>
          <div className='project-links success-link'>
            <a className='live-link' href='/Laurence-Castaneda-Resume-2020.docx' download>Download Resume</a>
            <a className='github-link' href={'/#work-section'}>See More Work</a>
          </div>
        </div> :
        <form id='contact-form' onSubmit={onSubmit}>
          <label htmlFor='name-input'>Name</label>
          <input type='text' id='name-input' name='name' onChange={onChange} onBlur={() => validate()} value={name}/>
          <div className='error'>{error.nameErr}</div>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' name='email' onChange={onChange} onBlur={() => validate()} value={email}/>
          <div className='error'>{error.emailErr}</div>
          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message' onChange={onChange} onBlur={() => validate()} value={message}/>
          <div className='error'>{error.messageErr}</div>
          <button>Submit</button>
        </form>}
      </div>
      <div className='contact-end'>
        <Social
          icon={linkedin}
          socialName='LinkedIn'
          link='https://www.linkedin.com/in/laurence-castaneda-523965137/'
        />
        <Social
          icon={github}
          socialName='GitHub'
          link='https://github.com/laurencecasta'
        />
        <Social
          icon={mail}
          socialName='larrycasta11@gmail.com'
          link='mailto: larrycasta11@gmail.com'
        />
      </div>
    </section>
  )
}

export default Contact