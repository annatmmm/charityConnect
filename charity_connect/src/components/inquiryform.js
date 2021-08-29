import './inquiryform.css'

const send_message = async event => {
    event.preventDefault()
    alert("NOT IMPLEMENTED")
}

const InquiryForm = () => {
    return (
        <form className="inquiry_form">
            <input className="input_inq" id="person_name" type='text' placeholder='Your Name'/>
            <input className="input_inq" id="person_email" type='text' placeholder='Your Email'/>
            <br/>
            <textarea className="input_inq_1" id="person_message" type='textarea' placeholder='Message'/>
            <br/>
            <button className="submit_inq" id="person_info_submit" type="submit" onClick={send_message}>
                Submit
            </button>
        </form>
    );
}

export default InquiryForm;