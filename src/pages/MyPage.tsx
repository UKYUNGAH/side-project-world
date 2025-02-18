// *PAGE - 마이 페이지
import React from 'react';
import { Link } from 'react-router-dom';

const MyPage = () => {
    return (
        <div className="my_page">
            <div className="container">
                {/* pc와 모바일의 디자인의 구조가 달라서 pc와 모바일 부분을 다르게 해놨습니다 
                
                mp_content - pc
                mp_content - 모바일 */}
                <div className="mp_content">
                    {/* 계정 영역 */}
                    <div className="mp_title">
                        <h3>Account</h3>
                        {/* 이름, 이메일 */}
                        <p>
                            Boeun Choi, briannabonsoir@gmail.com&#160; &#183; &#160;
                            <button type="button">
                                {/* 로그인 페이지로 이동 */}
                                <Link to="/login" className="logout">
                                    Logout
                                </Link>
                            </button>
                        </p>
                    </div>

                    {/* 일단 만들어 달라고 하셔서 버튼 9개 들어갈만한걸로 넣어뒀습니다..! */}
                    <div className="mp_body">
                        <ul>
                            {/* 프로젝트 작성 */}
                            <li>
                                <Link to="/projectCreate" className="link">
                                    <img src="images/my_i3.png" alt="Trophy icon" />
                                    {/* 메뉴 이름 */}
                                    <h4>Start a Project</h4>
                                    {/* 설명 */}
                                    <p>Create a new project and recruit team members.</p>
                                </Link>
                            </li>
                            {/* 내가 생성한 프로젝트 리스트 */}
                            <li>
                                <Link to="/myProjects" className="link">
                                    <img src="images/my_i1.png" alt="List icon" />
                                    <h4>My Projects</h4>
                                    <p>Manage and edit the projects you have created.</p>
                                </Link>
                            </li>
                            {/* 내가 참여중인 프로젝트 */}
                            <li>
                                <Link to="/participatingProjects" className="link">
                                    <img src="images/my_i2.png" alt="Handshake icon" />
                                    <h4>Joined Projects</h4>
                                    <p>View the projects you are currently participating in.</p>
                                </Link>
                            </li>

                            <li>
                                <Link to="/" className="link">
                                    <img src="images/my_i4.png" alt="Bookmark icon" />
                                    <h4>Saved Projects</h4>
                                    <p>Save projects you’re interested in and revisit them later.</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="link">
                                    <img src="images/my_i5.png" alt="Profile card icon" />
                                    <h4>Personal Info</h4>
                                    <p>Manage your profile details and contact information.</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="link">
                                    <img src="images/my_i6.png" alt="Lock icon" />
                                    <h4>Login & Security</h4>
                                    <p>Update your password and secure your account.</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="link">
                                    <img src="images/my_i7.png" alt="Bell icon" />
                                    <h4>Notifications</h4>
                                    <p>
                                        Manage notifications for project invites, comments, and collaboration requests.
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="link">
                                    <img src="images/my_i8_3.png" alt="Eye icon" />
                                    <h4>Privacy & Sharing</h4>
                                    <p>Adjust your privacy settings and project sharing preferences.</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="link">
                                    <img src="images/my_i9.png" alt="Settings toggle icon" />
                                    <h4>Global Preferences</h4>
                                    <p>Change your language, timezone, and default preferences.</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* pc와 모바일의 디자인의 구조가 달라서 pc와 모바일 부분을 다르게 해놨습니다 
                
                mp_content - pc
                mp_content - 모바일 */}
                <div className="m_content">
                    <h2>Account</h2>
                    {/* 계정 영역 - 일단 홈으로 연결해 뒀습니다..! */}
                    <Link to="/" className="account">
                        <div className="left">
                            {/* 계정 이미지 영역 */}
                            <div className="profile">
                                <img src="images/paper2.jpg" alt="profile img" />
                                {/* <img src="images/profile2.png" alt="profile img" /> */}
                            </div>

                            <div className="text">
                                <h4>Hi!</h4>
                                <h5>Show profile</h5>
                            </div>
                        </div>

                        <div className="right">
                            <img src="images/right_arrow.png" alt="go to button" />
                        </div>
                    </Link>

                    {/* 프로젝트 작성 */}
                    <div className="list_top">
                        <Link to="/projectCreate">
                            <div className="lt_left">
                                {/* 메뉴 이름 */}
                                <h4>Start a Project</h4>
                                {/* 설명 */}
                                <p>Create a new project and recruit team members.</p>
                            </div>

                            {/* 프로젝트 이미지 기본 노트북 이미지가 가장 예뻐보여서 넣어뒀습니다

                            주석처리한건 로켓 이미지입니다 */}
                            <div className="lt_right">
                                <img src="images/profile.png" alt="create project icon" />
                                {/* <img src="images/start_icon.png" alt="create project icon" /> */}
                            </div>
                        </Link>
                    </div>

                    {/* common_list -  리스트 아이템이 반복될수도 있을것 같아서 공통 클래스 적용 시켜놨습니다 */}
                    <div className="common_list ">
                        <h3>Projects</h3>
                        <ul>
                            {/* 내가 생성한 프로젝트 리스트 */}
                            <li>
                                <Link to="/myProjects" className="link">
                                    <div className="left">
                                        <img src="images/my_i1.png" alt="List icon" className="icon" />
                                        <h4>My Projects</h4>
                                    </div>
                                    <img src="images/right_arrow.png" alt="right arrow icon" className="arr" />
                                </Link>
                            </li>
                            {/* 내가 참여중인 프로젝트 */}
                            <li>
                                <Link to="/participatingProjects" className="link">
                                    <div className="left">
                                        <img src="images/my_i2.png" alt="Handshake icon" className="icon" />
                                        <h4>collaborations I'm in</h4>
                                    </div>
                                    <img src="images/right_arrow.png" alt="right arrow icon" className="arr" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="common_list ">
                        <h3>Support</h3>
                        <ul>
                            {/* 헬프페이지  */}
                            <li>
                                <Link to="/myProjects" className="link">
                                    <div className="left">
                                        <img src="images/help.png" alt="List icon" className="icon" />
                                        <h4>Help</h4>
                                    </div>
                                    <img src="images/right_arrow.png" alt="right arrow icon" className="arr" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 로그아웃 버튼 - 로그인 페이지로 이동 */}
                    <div className="logout">
                        <Link to="/login">Log out</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPage;
