import './contact.css';

const Contact = () => {
    return (
<div id="contact">
            <h1 className='contactTitle'>Contact Me</h1>
            <span className='contactDesc'>Complete the form below to discuss a new recipe idea. Share your name, contact details, and message, and we'll be in touch. Let's create something tasty together!</span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name'/>
                <input type='email' className='email' placeholder='Your Email'/>

                <textarea className='msg' rows='5' placeholder='Your Message'/>
                <button type='submit' value='Send' className='submitbtn'>Submit</button>
                

            </form>



            

        </div>    );
}

export default Contact;
