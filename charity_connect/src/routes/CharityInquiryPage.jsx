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
                        [CHARITY] inquiry
                    </text>
                </div>
                <InquiryForm/>
            </div>
        </div>
    );
}

export default CharityInquiryPage;