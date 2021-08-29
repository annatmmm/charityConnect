import React from 'react';
import NavigationBar from '../components/navigation';
import InquiryForm from '../components/inquiryform';

const CharityInquiryPage = () => {
    return (
        <div className="App">
            <NavigationBar/>
            <div className="inquiry_box">
                <div className="inquiry_title">
                    <text>
                        INQUIRY
                    </text>
                </div>
                <div className="form">
                    <InquiryForm/>
                </div>
            </div>
        </div>
    );
}

export default CharityInquiryPage;