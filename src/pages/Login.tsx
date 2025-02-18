// *PAGE - 로그인 페이지
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
            {/* login_wrap - 로그인 폼을 감싸는 컨테이너
            데스크탑에서는 좌우 2단 레이아웃, 모바일에서는 이미지 사라지고 폼만 표시됨 */}
            <div className="login_wrap">
                {/* login_left - 왼쪽 이미지 영역
                테블릿부터는 이 영역이 사라짐 (display: none 처리됨 */}
                <div className="login_left">
                    <img src="images/paper1.jpg" alt="side project world images" />
                </div>

                {/* login_right - 로그인 폼 영역
                모바일에서는 이 영역이 전체 화면 가운데 구현 */}
                <div className="login_right">
                    <div className="lr_wrap">
                        {/* 일단 로고를 누르면 홈으로 가도록 링크 연결 */}
                        <Link to="/" className="login_home_link">
                            <img src="images/g_logo.png" alt="side project world logo" className="logo_img" />
                        </Link>
                        <h3>LOGIN</h3>
                        <ul>
                            {/* 구글 로그인 버튼 */}
                            <li>
                                <button type="button">
                                    <img src="images/icon_google.png" alt="google icon" />
                                    <span>Continue with Google</span>
                                </button>
                            </li>
                            {/* 애플 로그인 버튼 */}
                            <li>
                                <button type="button">
                                    <img src="images/icon_apple.png" alt="apple icon" />
                                    <span>Continue with Apple</span>
                                </button>
                            </li>
                            {/* 이메일 로그인 버튼 */}
                            <li>
                                <button type="button">
                                    <img src="images/icon_letter.png" alt="letter icon" />
                                    <span>Continue with email</span>
                                </button>
                            </li>
                        </ul>

                        {/* 회원가입 영역 */}
                        <div className="sign_up">
                            <p>Don't you have an account?</p>
                            <Link to="/" className="su_link">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
