// *PAGE - 프로젝트 상세 페이지
import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal.tsx';

const ProjectDetail = () => {
    // 모달 상태 관리 (열림/닫힘)
    const [isOpen, setIsOpen] = useState(false);

    // 모달이 열리고 닫힐때  body에 'modal-open' 클래스를 추가, 제거해서 배경뒤에 스크롤을 제어합니다
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isOpen]);

    return (
        <>
            {/* 모달(SEND) 메세지 보내기 컴포넌트 */}
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                closeIcon="/images/colse_black.png"
                variant="send"
                icon="/images/modal_send.png"
            >
                <div className="text_wrap">
                    {/* 제목 */}
                    <h3>To: One YMCA</h3>

                    <div className="write_box">
                        <div className="wb_top">
                            <span>Compose message</span>
                        </div>
                        {/* 글쓰기 영역 */}
                        <textarea
                            name="textarea_send"
                            id="textarea_send"
                            minlength="25"
                            maxlength="750"
                            placeholder="Please enter a message."
                            required
                        ></textarea>
                        <div className="wb_bottom">
                            <span>Minimum 25 chatacters</span>
                            <span>0/750</span>
                        </div>
                    </div>
                    <div className="modal_btn">
                        <button type="submit">Send message</button>
                    </div>
                </div>
            </Modal>

            <div className="project_detail">
                <div className="container">
                    <div className="pd_banner">
                        <img src="/images/paper2.jpg" alt="Uploaded img" />
                        <h1>가능한 성장의 길을 모색하고있습니다. 구조의 가능한 성장의 길을 모색하고있습니다.</h1>

                        {/* 프로젝트 언어 */}
                        <div className="language_box">
                            <div className="common_box language_img1">
                                <img src="/images/detail_book.png" alt="book icon" />
                            </div>
                            <div className="language_info">
                                <b>PHP</b>
                                <p>Language required</p>
                            </div>
                        </div>
                    </div>

                    {/* 프로젝트 정보 리스트 */}
                    <div className="project_info_list">
                        {/* 언어 */}
                        <div className="pil_box pb1">
                            <div className="common_box language_img">
                                <img src="/images/detail_book.png" alt="book icon" />
                            </div>
                            <h2>PHP</h2>
                            <h3>Language required</h3>
                        </div>

                        {/* 분야 */}
                        <div className="pil_box pb2">
                            <div className="common_box filed_img">
                                <img src="/images/detail_diagram.png" alt="diagram icon" />
                            </div>
                            <h2>Filed</h2>
                            <h3>CMS, shopping</h3>
                        </div>

                        {/* 플랫폼 */}
                        <div className="pil_box pb3">
                            <div className="common_box platform_img">
                                <img src="/images/detail_globe.png" alt="globe icon" />
                            </div>
                            <h2>Platform</h2>
                            <h3>Web, App</h3>
                        </div>
                    </div>

                    {/* 팀원 모집 영역 */}
                    <div className="category_apply">
                        <div className="ca_box">
                            {/* 모집 인원 */}
                            <div className="people">
                                <span className="p1">1</span>
                                <span className="p2">/</span>
                                <span className="p3">5</span>
                            </div>

                            <div className="wrap">
                                <div className="up_category">[상위 카테고리1][상위 카테고리1][상위 카테고리1]</div>
                                <div className="down_category">하위 카테고리1-1하위 카테고리1-1하위 카테고리1-1</div>
                            </div>

                            {/* aplly 버튼은 apply_btn 아래 button에 class on이면 누를수있는 버튼, 클래스off와 disabled='true'가 들어가면 누를수 없는 버튼입니다 
                            
                            지원 버튼 (활성화 됨) */}
                            <div className=" apply_btn">
                                <button
                                    className="on btn-default"
                                    onClick={() => {
                                        setIsOpen(true); // 모달 열림
                                    }}
                                >
                                    APPLY
                                </button>
                            </div>
                        </div>

                        {/* 버튼이 비활성화 된 지원 불가능한 상태 */}
                        <div className="ca_box">
                            <div className="people">
                                <span className="p1">1</span>
                                <span className="p2">/</span>
                                <span className="p3">5</span>
                            </div>
                            <div className="wrap">
                                <div className="up_category">[상위 카테고리1testtesttesttesttesttest]</div>
                                <div className="down_category">하위 카테고리1-1testtesttesttesttesttest</div>
                            </div>
                            <div className="apply_btn">
                                <button
                                    className="off  btn-default"
                                    disabled="true"
                                    onClick={() => {
                                        setIsOpen(true);
                                    }}
                                >
                                    APPLY
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 프로젝트 설명 */}
                    <div className="description_box">
                        <b>Description</b>
                        <p>
                            내용경제 구조의 경제 구조의 경제 구조의 경제 구조의 경제 구조의 경제 구조의 경제 구조의 경제
                            구조의 경제 구조의 경제 구조의 경제 구조의 경제 구조의 경제 구조의
                        </p>
                    </div>

                    {/* 수익 */}
                    <div className="profit_box">
                        <b>Profit</b>
                        <p>
                            내용경제 구조의 경제 구조의 경제 구조의 경제 구조의 경제 구조의 경제 구조의 경제 구조의 경제
                            구조의 경제 구조의 경제 구조의 경제 구조의 경제 구조의 경제 구조의
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetail;
