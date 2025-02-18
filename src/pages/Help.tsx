// *PAGE - 헬프 페이지
import React from 'react';

const Help = () => {
    return (
        <div className="help">
            <div className="container">
                <div className="help_content">
                    <div className="deco">
                        <img src="/images/profile.png" alt="laptop logo" />
                    </div>
                    <h3>
                        Greeting to the awesome
                        <br />
                        nerdigloo Community!
                    </h3>
                    <p>your thoughts mean the world to us!</p>
                    <p className="label">Drop us a line at:</p>
                    <div className="contact_mail">
                        {/* <span>📧</span>
                         */}
                        <div className="icon">
                            <img src="images/i1.png" alt="message icon" />
                        </div>
                        <a href="mailto:nerdigloo@gmail.com">nerdigloo@gmail.com</a>
                    </div>
                    <p>And yes, we're on it every day!</p>
                    <p>
                        Looking forward to hearing from you!{' '}
                        <span>
                            <img src="images/r1.png" alt="rocket icon" />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Help;
