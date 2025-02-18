// *PAGE - 내가 참가중인 프로젝트 페이지
import React from 'react';

const ParticipatingProjects = () => {
    return (
        <div className="part_projects project_table">
            <div className="container">
                <div className="banner">
                    <h1>Collaborations</h1>
                    <b>9 found</b>
                </div>

                <div className="list_wrap">
                    <div className="title">
                        <div className="lt1">Project name</div>
                        <div className="lt2">Position</div>
                        <div className="lt3">Status</div>
                    </div>

                    <div className="list_item">
                        <div className="lb1">
                            <span className="lb_name">
                                <span className="name">Name</span>
                            </span>
                        </div>
                        <div className="lb2">
                            <span className="lb2_cate">하위카테고리1-1</span>
                        </div>
                        <div className="lb3">
                            <button className="btn-tag approved_btn" disabled="true">
                                Approved
                            </button>
                        </div>
                    </div>
                    <div className="list_item">
                        <div className="lb1">
                            <span className="lb_name">
                                <span className="name">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            </span>
                        </div>
                        <div className="lb2">
                            <span className="lb2_cate">하위카테고리1-1</span>
                        </div>
                        <div className="lb3">
                            <button className="btn-tag pending_btn" disabled="true">
                                Pending
                            </button>
                        </div>
                    </div>
                    <div className="list_item">
                        <div className="lb1">
                            <p className="lb_name">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque corporis modi,
                            </p>
                        </div>
                        <div className="lb2">
                            <span className="lb2_cate">
                                하위카테고리1-1하위카테고리1-1하위카테고리1-1하위카테고리1-1
                            </span>
                        </div>
                        <div className="lb3">
                            <button className="btn-tag declined_btn" disabled="true">
                                Declined
                            </button>
                        </div>
                    </div>
                    <div className="list_item">
                        <div className="lb1">
                            <span className="lb_name">
                                <span className="name">Name</span>
                            </span>
                        </div>
                        <div className="lb2">
                            <span className="lb2_cate">하위카테고리1-1</span>
                        </div>
                        <div className="lb3">
                            <button className="btn-tag approved_btn" disabled="true">
                                Approved
                            </button>
                        </div>
                    </div>
                    <div className="list_item">
                        <div className="lb1">
                            <span className="lb_name">
                                <span className="name">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            </span>
                        </div>
                        <div className="lb2">
                            <span className="lb2_cate">하위카테고리1-1</span>
                        </div>
                        <div className="lb3">
                            <button className="btn-tag pending_btn" disabled="true">
                                Pending
                            </button>
                        </div>
                    </div>
                    <div className="list_item">
                        <div className="lb1">
                            <p className="lb_name">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque corporis modi,
                            </p>
                        </div>
                        <div className="lb2">
                            <span className="lb2_cate">
                                하위카테고리1-1하위카테고리1-1하위카테고리1-1하위카테고리1-1
                            </span>
                        </div>
                        <div className="lb3">
                            <button className="btn-tag declined_btn" disabled="true">
                                Declined
                            </button>
                        </div>
                    </div>
                    <div className="list_item">
                        <div className="lb1">
                            <span className="lb_name">
                                <span className="name">Name</span>
                            </span>
                        </div>
                        <div className="lb2">
                            <span className="lb2_cate">하위카테고리1-1</span>
                        </div>
                        <div className="lb3">
                            <button className="btn-tag approved_btn" disabled="true">
                                Approved
                            </button>
                        </div>
                    </div>
                    <div className="list_item">
                        <div className="lb1">
                            <span className="lb_name">
                                <span className="name">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            </span>
                        </div>
                        <div className="lb2">
                            <span className="lb2_cate">하위카테고리1-1</span>
                        </div>
                        <div className="lb3">
                            <button className="btn-tag pending_btn" disabled="true">
                                Pending
                            </button>
                        </div>
                    </div>
                    <div className="list_item">
                        <div className="lb1">
                            <p className="lb_name">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque corporis modi,
                            </p>
                        </div>
                        <div className="lb2">
                            <span className="lb2_cate">
                                하위카테고리1-1하위카테고리1-1하위카테고리1-1하위카테고리1-1
                            </span>
                        </div>
                        <div className="lb3">
                            <button className="btn-tag declined_btn" disabled="true">
                                Declined
                            </button>
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
            </div>
        </div>
    );
};

export default ParticipatingProjects;
