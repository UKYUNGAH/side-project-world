// *PAGE - 프로젝트 수정 페이지
import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal.tsx';

const ProjectEdit = () => {
    const [seletedImage, setSeletedImage] = useState(null); // 선택한 이미지 url
    const [isDeleted, setIsDeleted] = useState(false); // 삭제 상태 여부
    const [isOpen, setIsOpen] = useState(false); // 모달 상태 관리 (열림/닫힘)

    // style 적용이 잘되는지 보기위해 일단 넣어뒀습니다!
    const originalImage = 'images/paper1.jpg';

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

    // 사용자가 파일을 선택했을 때 실행되는 핸들러
    const handelImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSeletedImage(imageUrl);
        }
    };

    // delete, restore 토글 핸들러
    const handleToggle = () => {
        setIsDeleted(!isDeleted);
    };

    return (
        <>
            {/* 삭제하기 모달(Delete) 컴포넌트 */}
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                closeIcon="/images/colse_black.png"
                variant="delete"
                icon="/images/modal_delete.png"
            >
                <div className="text_wrap">
                    <h3>Delete selected modules</h3>
                    <p>Are you sure you want to delete this item? This action cannot be undone.</p>
                    <div className="modal_btns">
                        <button
                            type="button"
                            onClick={() => {
                                setIsOpen(false); // 취소 버튼 클릭시에 모달 닫힘
                            }}
                        >
                            Cancel
                        </button>
                        <button type="button">Confirm</button>
                    </div>
                </div>
            </Modal>

            <div className="project_form project_edit">
                {/*  project_form - 프로젝트 작성 & 수정 폼에서 공통으로 사용되는 클래스 입니다!*/}

                <div className="container">
                    <div className="pf_wrap">
                        {/* 헤더 영역 - 뒤로가기 버튼 포함 */}
                        <div className="pf_header">
                            <button
                                type="button"
                                onClick={() => {
                                    window.history.back();
                                }}
                            >
                                <img src="images/back_icon.png" alt="go back icon" />
                            </button>
                            <h3>back</h3>
                        </div>

                        {/* 프로젝트 입력 폼 */}
                        <form action="">
                            <div className="pf_body">
                                {/* pf_list - 리스트 아이템들의 공통 클래스 입니다. */}
                                {/* 프로젝트 이름 입력 */}
                                <div className="pf_list project_name">
                                    <div className="top">
                                        <h4 className="title">Project Name</h4>
                                        <h5 className="required">(required)</h5>
                                    </div>
                                    <div className="bottom">
                                        <input
                                            type="text"
                                            name="project_name_text"
                                            id="project_name_text"
                                            placeholder="Enter project name"
                                            defaultValue="JavaScript 기반 병원 홈페이지 추가 개발 및 유지보수"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* 프로젝트 플랫폼 선택 (체크박스) */}
                                <div className="pf_list project_platform pf_checkbox">
                                    <div className="top">
                                        <h4 className="title">Project platform</h4>
                                        <h5 className="required">(required)</h5>
                                    </div>
                                    <div className="bottom">
                                        <ul>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    name="project_checkbox"
                                                    id="project_checkbox1"
                                                    defaultChecked
                                                />
                                                <label htmlFor="project_checkbox1">
                                                    <em></em>Web
                                                </label>
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    name="project_checkbox"
                                                    id="project_checkbox2"
                                                    required
                                                />
                                                <label htmlFor="project_checkbox2">
                                                    <em></em>Mobile
                                                </label>
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    name="project_checkbox"
                                                    id="project_checkbox3"
                                                    required
                                                />
                                                <label htmlFor="project_checkbox3">
                                                    <em></em>Android
                                                </label>
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    name="project_checkbox"
                                                    id="project_checkbox4"
                                                    required
                                                />
                                                <label htmlFor="project_checkbox4">
                                                    <em></em>IOS
                                                </label>
                                            </li>
                                            <li>
                                                <input
                                                    type="checkbox"
                                                    name="project_checkbox"
                                                    id="project_checkbox5"
                                                    required
                                                />
                                                <label htmlFor="project_checkbox5">
                                                    <em></em>other
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* 프로젝트 필드 및 필요 언어 선택 (셀렉트 박스) */}
                                <div className="pf_list project_two projcet_select">
                                    <div className="inner left project_field">
                                        <div className="top">
                                            <h4 className="title">Project field</h4>
                                            <h5 className="required">(required)</h5>
                                        </div>
                                        <div className="bottom">
                                            <select
                                                name="project_field"
                                                id="project_field"
                                                defaultValue="game"
                                                required
                                            >
                                                <option value="" disabled selected>
                                                    Select a project field
                                                </option>
                                                <option value="web">Web Development</option>
                                                <option value="mobile">Mobile App Development</option>
                                                <option value="ai">Artificial Intelligence</option>
                                                <option value="game">Game Development</option>
                                                <option value="blockchain">Blockchain</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="inner right required_language">
                                        <div className="top">
                                            <h4 className="title">Required language</h4>
                                            <h5 className="required">(required)</h5>
                                        </div>
                                        <div className="bottom">
                                            <select
                                                name="required_language"
                                                id="required_language"
                                                defaultValue="css"
                                                required
                                            >
                                                <option value="html">HTML</option>
                                                <option value="css">CSS</option>
                                                <option value="javascript">JavaScript</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* 추가 링크 입력 */}
                                <div className="pf_list additional_link">
                                    <div className="top">
                                        <h4 className="title">Additional link</h4>
                                    </div>
                                    <div className="bottom">
                                        <input
                                            type="text"
                                            name="additional_link_text"
                                            id="additional_link_text"
                                            placeholder="Enter additional link"
                                        />
                                    </div>
                                </div>

                                {/* 팀 멤버 선택 */}
                                <div className="pf_list projcet_select team_members">
                                    <div className="top">
                                        <h4 className="title">Team members needed</h4>
                                        <h5 className="required">(required)</h5>
                                        <div className="btn">
                                            <button type="button" className="btn-action">
                                                Add
                                            </button>
                                            <button type="button" className="btn-action">
                                                Delete
                                            </button>
                                        </div>
                                    </div>

                                    {/* 선택된 팀 멤버 목록 */}
                                    <div className="selected_list">
                                        <ul>
                                            {/* 삭제 버튼을 누르기 전 기본 상태 */}
                                            <li>
                                                <img src="images/check.png" alt="check icon" />

                                                {/* delete를 누르면 category_list에 line_through 클래스가 들어갑니다 */}
                                                <div className="category_list">
                                                    <span className="category_upper">
                                                        [ 상위 카테고리 1-1 ]&nbsp; &nbsp;
                                                    </span>
                                                    <span className="category_lower">하위 카테고리 1-1 &nbsp;</span>
                                                    <span className="member_count">[ 5 ]</span>
                                                </div>
                                                <div className="buttons">
                                                    <button type="button" className="btn-special delete_btn">
                                                        Delete
                                                    </button>
                                                </div>
                                            </li>

                                            {/* 삭제 후 복원할 수 있는 상태 */}
                                            <li>
                                                <img src="images/check.png" alt="check  icon" />

                                                {/* delete를 누르면 category_list에 line_through 클래스가 들어갑니다 */}
                                                <div className="category_list line_through">
                                                    <span className="category_upper">
                                                        [ 상위 카테고리 1-1 ]&nbsp; &nbsp;
                                                    </span>
                                                    <span className="category_lower">하위 카테고리 1-1 &nbsp;</span>
                                                    <span className="member_count">[ 5 ]</span>
                                                </div>
                                                <div className="buttons">
                                                    <button type="button" className="btn-special restore_btn">
                                                        Restore
                                                    </button>
                                                </div>
                                            </li>

                                            {/* {/* 삭제 및 복원 토글 가능 상태 
                                            
                                            예시로 토글되는 핸들러 넣어놨습니다! */}
                                            <li>
                                                <img src="images/check.png" alt="check  icon" />

                                                {/* delete를 누르면 category_list에 line_through 클래스가 들어갑니다 */}
                                                <div className={`category_list ${isDeleted ? 'line_through' : ''}`}>
                                                    <span className="category_upper">
                                                        [ 상위 카테고리 1-1 ]&nbsp; &nbsp;
                                                    </span>
                                                    <span className="category_lower">하위 카테고리 1-1 &nbsp;</span>
                                                    <span className="member_count">[ 5 ]</span>
                                                </div>
                                                <div className="buttons">
                                                    <button
                                                        type="button"
                                                        className={`btn-special ${
                                                            isDeleted ? 'restore_btn' : 'delete_btn'
                                                        }`}
                                                        onClick={handleToggle}
                                                    >
                                                        {isDeleted ? 'Restore' : 'Delete'}
                                                    </button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* plus_line 클래스는 줄이 하나 더 생겼을때 아래 띄워놓기 위해서 넣어놨습니다! */}
                                    <div className="bottom plus_line">
                                        <select
                                            name="team_member_1"
                                            id="team_member_1"
                                            defaultValue="management"
                                            required
                                        >
                                            <option value="">Choose a category</option>
                                            <option value="management">Management</option>
                                            <option value="development">Development</option>
                                            <option value="service">Service</option>
                                        </select>

                                        <select
                                            name="team_member_2"
                                            id="team_member_2"
                                            defaultValue="Project Manager"
                                            required
                                        >
                                            <option value="">Choose a category</option>
                                            <option value="frontend">Frontend Developer</option>
                                            <option value="backend">Backend Developer</option>
                                            <option value="designer">Designer Developer</option>
                                            <option value="Project Manager'">Project Manager'</option>
                                        </select>

                                        <select name="team_member_3" id="team_member_3" defaultValue="2" required>
                                            <option value="">number of ppl</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                        </select>
                                    </div>
                                </div>

                                {/* 이미지 선택 */}
                                <div className="pf_list main_image">
                                    <div className="top">
                                        <h4 className="title">Main image (up to 1MB)</h4>
                                    </div>
                                    <div className="bottom">
                                        <input
                                            type="file"
                                            name="file_image"
                                            id="file_image"
                                            accept="image/*"
                                            onChange={handelImageChange}
                                        />
                                        {/* 
                                        파일 선택 em 태그는 아이콘을 표시하기 위한 빈 요소로 사용했습니다!
                                        */}
                                        <label htmlFor="file_image">
                                            <em></em>
                                            <span>Click to replace</span>
                                        </label>
                                    </div>
                                </div>

                                {/* 새로 선택한 이미지 미리보기 */}
                                <div className="pf_list image_preview selected_image">
                                    <div className="top">
                                        <h4 className="title">Selected Image</h4>
                                    </div>
                                    <div className="bottom">
                                        {/* 이미지가 선택된 경우 이미지 표시, 아닌 경우 안내 텍스트 */}
                                        {seletedImage ? (
                                            <img src={seletedImage} alt="seleted img preview" />
                                        ) : (
                                            <p>No image selected</p>
                                        )}
                                    </div>
                                </div>

                                {/* 기존 이미지 미리보기 */}
                                <div className="pf_list image_preview original ">
                                    <div className="top">
                                        <h4 className="title">Original Image</h4>
                                    </div>
                                    <div className="bottom">
                                        {/* 기존 이미지가 있는 경우 표시, 아닌 경우 안내 텍스트 */}

                                        {originalImage ? (
                                            <img src={originalImage} alt="uploaded img preview" />
                                        ) : (
                                            <p>No image registered</p>
                                        )}
                                    </div>
                                </div>

                                {/* pf_textarea - 텍스트에리아 들어가는 공통 클래스 
                                
                                프로젝트 설명 입력 */}
                                <div className="pf_list pf_textarea description">
                                    <div className="top">
                                        <h4 className="title">Description</h4>
                                        <h5 className="required">(required)</h5>
                                    </div>
                                    <div className="bottom">
                                        <textarea
                                            name="description"
                                            id="description"
                                            placeholder="Descibe your project in detail."
                                            defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores adipisci consequatur totam laborum veniam deserunt molestias tempora? Laboriosam assumenda quas, iusto soluta quo repellat asperiores nobis vitae, tempora, earum necessitatibus.."
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                {/* 프로젝트 수익 배분 입력 */}
                                <div className="pf_list pf_textarea profit">
                                    <div className="top">
                                        <h4 className="title">Profit</h4>
                                        <h5 className="required">(required)</h5>
                                    </div>
                                    <div className="bottom">
                                        <textarea
                                            name="profit"
                                            id="profit"
                                            placeholder="Clearly out how profits from the project will be distributed among collaborators."
                                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iusto natus tenetur unde voluptates modi quasi, cum reprehenderit ratione omnis maxime expedita molestias, sunt dignissimos laudantium quam aliquam autem similique."
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="pe_buttons">
                                    {/* 저장 버튼 */}
                                    <button type="submit" className="submit_btn btn-submit">
                                        Updete
                                    </button>

                                    {/* 삭제 버튼 - 클릭 시 삭제 확인 모달 표시
                                    
                                    setIsOpen(true)를 호출하여 확인 모달 상태를 변경함 */}
                                    <button type="button" className="delete_btn" onClick={() => setIsOpen(true)}>
                                        DELETE THIS PROJECT
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectEdit;
