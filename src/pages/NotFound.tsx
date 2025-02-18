// *PAGE - 404 페이지
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not_found">
            <h1 className="title">404</h1>
            <p className="text">페이지를 찾을 수 없습니다.</p>
            <Link to="/" className="home_btn">
                홈으로 가기
            </Link>
            <img className="logo" src="/images/profile.png" alt="laptop logo" />
        </div>
    );
};

export default NotFound;
