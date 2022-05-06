import { useRef } from 'react';

import Card from './ui/Card';
import classes from '.././styles/NewDeviceForm.module.css'

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const invnumInputRef = useRef();
  const specsInputRef = useRef();
  // const imageInputRef = useRef();
  // const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredDeviceName = titleInputRef.current.value;
    const enterDeviceNumber = invnumInputRef.current.value;
     const enteredSpecs = addressInputRef.current.value;
    // const enteredImage = imageInputRef.current.value;
    
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      invnum: enterDeviceNumber,
        device_name: enteredDeviceName,
        specs: enteredSpecs,
      // image: enteredImage,
      
      description: enteredDescription,
    };

    props.onAddDevice(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
          <label htmlFor='name'>Inventory Number</label>
          <input type='text' required id='title' ref={invnumInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='title'>Device Name</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
         {/* <div className={classes.control}>
          <label htmlFor='image'>Device Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div> */}
        <div className={classes.control}>
          <label htmlFor='specs'>Specs</label>
          <input type='text' required id='address' ref={specsInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Device</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;