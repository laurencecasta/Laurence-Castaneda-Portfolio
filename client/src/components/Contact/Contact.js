import React, { useReducer } from 'react'

import Social from '../Social/Social'

import './styles.css'

import underscore from './underscore.png'
import linkedin from './linkedin.png'
import github from './github.png'
import mail from './mail.png'

const initialState = {
  name: '',
  email: '',
  message: '',
};

const ACTIONS = {
  CONTROL_FORM: 'control-form',
  RESET_FORM: 'reset-form',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CONTROL_FORM:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case ACTIONS.RESET_FORM:
      return {
        name: '',
        email: '',
        message: '',
      };
    default:
      return state;
  }
}

function Contact() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = (e) => {
    dispatch({type: ACTIONS.CONTROL_FORM, payload: { field: e.target.name, value: e.target.value }})
  }

  const { name, email, message } = state;

  const onSubmit = (e) => {
    e.preventDefault();

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
    postEmailData();

    dispatch({type: ACTIONS.RESET_FORM});
  }

  return (
    <section className='contact' id='contact'>
      <div className='contact-start'>
        <div className='title' id='contact-title'>
          <h2>Let's Connect!</h2>
          <img className='underscore' src={underscore} alt='underscore'></img>
        </div>
        <p id='contact-prompt'>Fill out the form below, and I'll respond within the next 24 hours.</p>
        <form id='contact-form' onSubmit={onSubmit}>
          <label htmlFor='name-input'>Name</label>
          <input type='text' id='name-input' name='name' onChange={onChange} value={name}/>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' name='email' onChange={onChange} value={email}/>
          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message' onChange={onChange} value={message}/>
          <button>Submit</button>
        </form>
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