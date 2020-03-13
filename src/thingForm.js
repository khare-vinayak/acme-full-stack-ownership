import React , { useState, useEffect } from 'react';

const ThingForm = ({ createThing })=> {
    const [name, setName] = useState('');
    const onSubmit = (ev)=> {
      ev.preventDefault();
      createThing({ name });
    };
    return (
      <section>
        <form onSubmit={ onSubmit }>
          <h2>Create Thing</h2>
          <input value={ name } onChange={ ev => setName(ev.target.value)} />
          <button>Create</button>
        </form>
      </section>
    );
  };

  export default ThingForm;