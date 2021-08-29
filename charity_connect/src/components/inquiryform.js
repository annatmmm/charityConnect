import '../App.css'

const send_message = async event => {
    alert("NOT IMPLEMENTED")
}

const InquiryForm = () => {
    return (
        <form className="inquiry_form">
            <input className="input_inq" id="person_name" type='text' placeholder='Your Name'/>
            <input className="input_inq" id="person_email" type='text' placeholder='Your Email'/>
            <button className="submit_inq" id="person_info_submit" type="submit" onClick={send_message}>

            </button>
        </form>
    );
}

export default InquiryForm;