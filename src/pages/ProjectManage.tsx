// *PAGE - 프로젝트 관리 페이지
import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal.tsx';

const ProjectManage = () => {
    const [isOpen, setIsOpen] = useState(false);

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
            {/* 모달(Chat) 컴포넌트 */}
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                closeIcon="/images/colse_black.png"
                variant="chat"
                icon="/images/modal_chat.png"
            >
                <div className="text_wrap">
                    <h3>Boeun choi</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores alias aperiam esse repudiandae
                        quae vero, sint nisi vitae modi, eveniet, obcaecati suscipit optio. Nulla a voluptatibus numquam
                        earum? Harum, libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores alias
                        aperiam esse repudiandae quae vero, sint nisi vitae modi, eveniet, obcaecati suscipit optio.
                        Nulla a voluptatibus numquam earum? Harum, libero. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Maiores alias aperiam esse repudiandae quae vero, sint nisi vitae modi,
                        eveniet, obcaecati suscipit optio. Nulla a voluptatibus numquam earum? Harum, libero.
                    </p>
                </div>
                {/* <button type="button" className="other_btn">
                    <span>BUTTON</span>
                    <img src="/images/right_arr2.png" alt="right arrow icon" />
                </button> */}
            </Modal>

            <div className="project_manage project_table">
                <div className="container">
                    <div className="banner">
                        <h1>Applicant(s)</h1>
                        <b>4 applicant(s) found</b>
                    </div>

                    <div className="manage_list_wrap">
                        <div className="ml_title">
                            <div className="mlt1">Name</div>
                            <div className="mlt2">Category</div>
                            <div className="mlt3">Message</div>
                            <div className="mlt4">Status</div>
                        </div>
                        {/* ml_item이 하나씩 늘어나는 것 Approved, Devlined, KickOut 에는 disabled="true" 가 따로 들어가야합니다 */}
                        <div className="ml_item">
                            <div className="mlb1">
                                <span className="mlb_img">
                                    <img src="/images/paper2.jpg" alt="laptop logo" />
                                </span>
                                <span className="mlb_name">
                                    <span className="name">Name</span>
                                    <span className="email">email@email.com</span>
                                </span>
                            </div>
                            <div className="mlb2">
                                <span className="mlb2_upcate">상위카테고리1-상위카테고리1</span>
                                <span className="mlb2_downcate">하위카테고리1-1-하위카테고리1-1</span>
                            </div>
                            <div className="mlb3">
                                <button type="button" onClick={() => setIsOpen(true)}>
                                    <img src="/images/letter_ico.png" alt="message icon" />
                                </button>
                            </div>
                            <div className="mlb4">
                                <button className="btn-tag decline_btn ">Decline</button>
                                <button className="btn-tag declined_btn" disabled="true">
                                    Declined
                                </button>
                            </div>
                        </div>
                        <div className="ml_item">
                            <div className="mlb1">
                                <span className="mlb_img">
                                    <img src="/images/profile2.png" alt="laptop icon" />
                                </span>
                                <span className="mlb_name">
                                    <span className="name">Name</span>
                                    <span className="email">email@email.com</span>
                                </span>
                            </div>
                            <div className="mlb2">
                                <span className="mlb2_upcate">상위카테고리1</span>
                                <span className="mlb2_downcate">하위카테고리1-1</span>
                            </div>
                            <div className="mlb3">
                                <button type="button">
                                    <img src="/images/letter_ico.png" alt="message icon" />
                                </button>
                            </div>
                            <div className="mlb4">
                                <button className="btn-tag approve_btn ">Approve</button>
                                <button className="btn-tag decline_btn ">Decline</button>
                            </div>
                        </div>
                        <div className="ml_item">
                            <div className="mlb1">
                                <span className="mlb_img">
                                    <img src="/images/profile2.png" alt="laptop icon" />
                                </span>
                                <span className="mlb_name">
                                    <span className="name">Name</span>
                                    <span className="email">email@email.com</span>
                                </span>
                            </div>
                            <div className="mlb2">
                                <span className="mlb2_upcate">상위카테고리1-상위카테고리1</span>
                                <span className="mlb2_downcate">하위카테고리1-1-하위카테고리1-1</span>
                            </div>
                            <div className="mlb3">
                                <button type="button">
                                    <img src="/images/letter_ico.png" alt="message icon" />
                                </button>
                            </div>
                            <div className="mlb4">
                                <button className="btn-tag declined_btn" disabled="true">
                                    Declined
                                </button>
                                <button className="btn-tag kickout_btn">KickOut</button>
                            </div>
                        </div>
                        <div className="ml_item">
                            <div className="mlb1">
                                <span className="mlb_img">
                                    <img src="/images/profile2.png" alt="laptop icon" />
                                </span>
                                <span className="mlb_name">
                                    <span className="name">Name</span>
                                    <span className="email">email@email.com</span>
                                </span>
                            </div>
                            <div className="mlb2">
                                <span className="mlb2_upcate">상위카테고리1</span>
                                <span className="mlb2_downcate">하위카테고리1-1</span>
                            </div>
                            <div className="mlb3">
                                <button type="button">
                                    <img src="/images/letter_ico.png" alt="message icon" />
                                </button>
                            </div>
                            <div className="mlb4">
                                <button className="btn-tag approved_btn" disabled="true">
                                    Approved
                                </button>
                                <button className="btn-tag kickout_btn">KickOut</button>
                            </div>
                        </div>
                        <div className="ml_item">
                            <div className="mlb1">
                                <span className="mlb_img">
                                    <img src="/images/profile2.png" alt="laptop icon" />
                                </span>
                                <span className="mlb_name">
                                    <span className="name">Name</span>
                                    <span className="email">email@email.com</span>
                                </span>
                            </div>
                            <div className="mlb2">
                                <span className="mlb2_upcate">상위카테고리1-상위카테고리1</span>
                                <span className="mlb2_downcate">하위카테고리1-1-하위카테고리1-1</span>
                            </div>
                            <div className="mlb3">
                                <button type="button" onClick={() => setIsOpen(true)}>
                                    <img src="/images/letter_ico.png" alt="message icon" />
                                </button>
                            </div>
                            <div className="mlb4">
                                <button className="btn-tag decline_btn ">Decline</button>
                                <button className="btn-tag declined_btn" disabled="true">
                                    Declined
                                </button>
                            </div>
                        </div>
                        <div className="ml_item">
                            <div className="mlb1">
                                <span className="mlb_img">
                                    <img src="/images/profile2.png" alt="laptop icon" />
                                </span>
                                <span className="mlb_name">
                                    <span className="name">Name</span>
                                    <span className="email">email@email.com</span>
                                </span>
                            </div>
                            <div className="mlb2">
                                <span className="mlb2_upcate">상위카테고리1</span>
                                <span className="mlb2_downcate">하위카테고리1-1</span>
                            </div>
                            <div className="mlb3">
                                <button type="button">
                                    <img src="/images/letter_ico.png" alt="message icon" />
                                </button>
                            </div>
                            <div className="mlb4">
                                <button className="btn-tag approve_btn ">Approve</button>
                                <button className="btn-tag decline_btn ">Decline</button>
                            </div>
                        </div>
                        <div className="ml_item">
                            <div className="mlb1">
                                <span className="mlb_img">
                                    <img src="/images/profile2.png" alt="laptop icon" />
                                </span>
                                <span className="mlb_name">
                                    <span className="name">Name</span>
                                    <span className="email">email@email.com</span>
                                </span>
                            </div>
                            <div className="mlb2">
                                <span className="mlb2_upcate">상위카테고리1-상위카테고리1</span>
                                <span className="mlb2_downcate">하위카테고리1-1-하위카테고리1-1</span>
                            </div>
                            <div className="mlb3">
                                <button type="button">
                                    <img src="/images/letter_ico.png" alt="message icon" />
                                </button>
                            </div>
                            <div className="mlb4">
                                <button className="btn-tag declined_btn" disabled="true">
                                    Declined
                                </button>
                                <button className="btn-tag kickout_btn">KickOut</button>
                            </div>
                        </div>
                        <div className="ml_item">
                            <div className="mlb1">
                                <span className="mlb_img">
                                    <img src="/images/profile2.png" alt="laptop icon" />
                                </span>
                                <span className="mlb_name">
                                    <span className="name">Name</span>
                                    <span className="email">email@email.com</span>
                                </span>
                            </div>
                            <div className="mlb2">
                                <span className="mlb2_upcate">상위카테고리1</span>
                                <span className="mlb2_downcate">하위카테고리1-1</span>
                            </div>
                            <div className="mlb3">
                                <button type="button">
                                    <img src="/images/letter_ico.png" alt="message icon" />
                                </button>
                            </div>
                            <div className="mlb4">
                                <button className="btn-tag approved_btn" disabled="true">
                                    Approved
                                </button>
                                <button className="btn-tag kickout_btn">KickOut</button>
                            </div>
                        </div>
                    </div>

                    {/* scroll_guide - 모바일일때 표가 가로스크롤이 생기기때문에 UX를 위해서 넣어뒀습니다!
                
                    보시고 마음에 안드시면 scroll_guide,sg_text 만 삭제시키면 됩니다 */}
                    <div className="scroll_guide">Swipe left/right to see more</div>

                    {/* 페이지네이션 */}
                    <nav className="common_pagenation pagination">
                        {/* 이전 버튼 */}
                        <button className="prev">
                            <img src="/images/page_left.png" alt="Previous page button" />
                        </button>

                        <ul>
                            {/* 숫자 클릭시 li의 className에 on이 들어가면 숫자에 불이 들어옵니다. */}
                            <li className="on">
                                <button>1</button>
                            </li>
                            <li>
                                <button>2</button>
                            </li>
                            <li>
                                <button>3</button>
                            </li>
                            <li>
                                <button>4</button>
                            </li>
                            <li>
                                <button>5</button>
                            </li>
                        </ul>

                        {/* 다음 버튼 */}
                        <button className="next">
                            <img src="/images/page_right.png" alt="Next page button" />
                        </button>
                    </nav>

                    <div className="collaborator">
                        <h3>Collaborator Status</h3>
                        <ul>
                            <li>
                                <div className="icon">
                                    <img src="/images/group_icon1.png" alt="group icon" />
                                    <span>Team</span>
                                </div>
                                <div className="li_wrap">
                                    <div className="li_left">
                                        <h4>상위카테고리상위카테고리상위카테고리상위카테고리</h4>
                                    </div>
                                    <div className="li_mid">
                                        <h4>하위카테고리하위카테고리하위카테고리하위카테고리</h4>
                                    </div>
                                </div>
                                <div className="li_right">
                                    <h4>
                                        0 Accepted / <wbr /> 5 Slots
                                    </h4>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <img src="/images/group_icon1.png" alt="group icon" />
                                    <span>Team</span>
                                </div>
                                <div className="li_wrap">
                                    <div className="li_left">
                                        <h4>상위카테고리상위카테고리상위카테고리상위카테고리</h4>
                                    </div>
                                    <div className="li_mid">
                                        <h4>하위카테고리하위카테고리하위카테고리하위카테고리</h4>
                                    </div>
                                </div>
                                <div className="li_right">
                                    <h4>
                                        0 Accepted / <wbr /> 5 Slots
                                    </h4>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <img src="/images/group_icon1.png" alt="group icon" />
                                    <span>Team</span>
                                </div>
                                <div className="li_wrap">
                                    <div className="li_left">
                                        <h4>상위카테고리상위카테고리상위카테고리상위카테고리</h4>
                                    </div>
                                    <div className="li_mid">
                                        <h4>하위카테고리하위카테고리하위카테고리하위카테고리</h4>
                                    </div>
                                </div>
                                <div className="li_right">
                                    <h4>
                                        0 Accepted / <wbr /> 5 Slots
                                    </h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectManage;
