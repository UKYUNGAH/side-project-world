// *PAGE - 소개페이지

import React from 'react';

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="about_wrap">
                    {/* 소개페이지 프로필,타이틀,날짜 */}
                    <div className="about_header">
                        <div>
                            <img src="/images/profile.png" alt="Laptop logo" />
                        </div>
                        <h4 className="title">
                            Nerdigloo
                            <span className="date">15/11/2023</span>
                        </h4>
                    </div>

                    {/* 소개페이지 내용 */}
                    <div className="about_body">
                        <h5>Where IT geeks meet to build their own businesses</h5>
                        <p>
                            Are you an IT geek with a great idea for a product but don't have the team or resources to
                            make it a reality?
                            <strong>
                                {' '}
                                Nerdigloo is a free platform that connects you with other IT geeks like you to{' '}
                                <span className="success">start side projects and build your own businesses</span>
                            </strong>
                        </p>

                        <h5>What is Nerdigloo?</h5>
                        <p>
                            <span className="emoticon">🚨</span>
                            <strong className="danger">Nerdigloo is not a job posting website.</strong> You shouldn't
                            expect to be paid for your work on a side project.
                            <strong className="success">(See the profit section on each project)</strong>. However,
                            Nerdigloo can help you find the people you need to make your dream a reality.
                        </p>

                        <h5>How does Nerdigloo work?</h5>
                        <p className="p1">
                            To get started, simply create a project on Nerdigloo and describe your idea. You can then
                            specify the types of people you need to join your team, such as back-end developers,
                            front-end developers, UX/UI designers, or marketing managers.
                        </p>
                        <p>
                            Once you've created your project, other Nerdigloo users can apply to join your team. You can
                            then review their applications and approve or decline them.
                        </p>

                        <h5>What are the benefits of using Nerdigloo?</h5>
                        <ul>
                            <li>
                                <strong className="success">
                                    <span className="emoticon">🏬</span> A Global Hub for Collaboration
                                </strong>{' '}
                                – Nerdigloo has a large community of IT geeks who are eager to work on side projects.
                            </li>
                            <li>
                                <strong className="success">
                                    <span className="emoticon">💰</span> No Paychecks, Just Profits
                                </strong>{' '}
                                – Nerdigloo encourages users to share all profits equally for their own projects so that
                                they can work for themselves.
                            </li>
                            <li>
                                <strong className="success">
                                    <span className="emoticon">🚀</span> Build Your Portfolio
                                </strong>{' '}
                                – If you are a junior developer, you can include your side projects on Nerdigloo in your
                                portfolio. This will help you get hired for your dream job.
                            </li>
                            <li>
                                <strong className="success">
                                    <span className="emoticon">💸</span> Start Your Own Business
                                </strong>{' '}
                                – If you are a senior developer, you can use Nerdigloo to start your own business. This
                                is a great way to be your own boss and build something of your own.
                            </li>
                            <li>
                                <strong className="success">
                                    <span className="emoticon">🌐</span> Work with people from all over the world
                                </strong>{' '}
                                – It doesn't matter where you live. You can build your side project with someone else
                                who lives on another continent.
                            </li>
                            <li>
                                <strong className="success">
                                    💻 All you need is your laptop and internet connection
                                </strong>{' '}
                                – With these two things, you can start your own business.
                            </li>
                        </ul>

                        <p>
                            Nerdigloo is a great way to turn your IT product ideas into reality. So what are you waiting
                            for? Sign up for Nerdigloo today and start building your dream business!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
