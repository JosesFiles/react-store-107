import { useState } from "react";

function Contact() {
    const [isEmailVisible, setIsEmailVisible] = useState(false);

function getEmailSection() {
    if (isEmailVisible) {
        return <h5>Jose.cisneros1981@gmail.com</h5>;

    }
    else {
        return <label>Click the button </label>;
    }
}

function handleClick() {
    setIsEmailVisible(true);
}

function hideEmail() {
    setIsEmailVisible(false);
}


    return (
        <div className="contact">
            <h1>Jose Luis Sanchez</h1>

            {getEmailSection()}
            <br />
            <button onClick={handleClick} className='btn btn-sm btn-primary'>Show Email</button>
            <button onClick={hideEmail} className='btn btn-sm btn-danger'>Hide Email</button>

        </div>
    );
}

export default Contact;