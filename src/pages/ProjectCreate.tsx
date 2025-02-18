// *PAGE - 프로젝트 작성 페이지
import React, { useState } from 'react';

const ProjectCreate = () => {
    // 선택된 이미지 상태 관리
    const [seletedImage, setSeletedImage] = useState(null);

    // 파일 선택시 호출되는 행들러
    const handelImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSeletedImage(imageUrl);
        }
    };

    return (
        <div className="project_form project_create">
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

                    {/* 프로젝트 작성 폼 */}
                    <form action="">
                        <div className="pf_body">
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
                                                required
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
                                {/* 프로젝트 분야 선택 */}
                                <div className="inner left project_field">
                                    <div className="top">
                                        <h4 className="title">Project field</h4>
                                        <h5 className="required">(required)</h5>
                                    </div>
                                    <div className="bottom">
                                        <select name="project_field" id="project_field" required>
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
                                {/* 필요 언어 선택 */}
                                <div className="inner right required_language">
                                    <div className="top">
                                        <h4 className="title">Required language</h4>
                                        <h5 className="required">(required)</h5>
                                    </div>
                                    <div className="bottom">
                                        <select name="required_language" id="required_language">
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
                                    <h4 className="title">Additional link</h4>
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
                                {/* plus_line 클래스는 줄이 하나 더 생겼을때 아래 띄워놓기 위해서 넣어놨습니다! */}
                                <div className="bottom plus_line">
                                    <select name="team_member_1" id="team_member_1" required>
                                        <option value="">Choose a category</option>
                                        <option value="designer">Management</option>
                                        <option value="development">Development</option>
                                        <option value="service">Service</option>
                                    </select>

                                    <select name="team_member_2" id="team_member_2" required>
                                        <option value="">Choose a category</option>
                                        <option value="frontend">Frontend Developer</option>
                                        <option value="backend">Backend Developer</option>
                                        <option value="Project Manager">Project Manager</option>
                                    </select>

                                    <select name="team_member_3" id="team_member_3" required>
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
                                    <label htmlFor="file_image">
                                        <em></em>
                                        <span>Click to replace</span>
                                    </label>
                                </div>
                            </div>

                            {/* 선택한 이미지 미리보기 */}
                            <div className="pf_list image_preview selected_image">
                                <div className="top">
                                    <h4 className="title">Selected Image</h4>
                                </div>
                                <div className="bottom">
                                    {seletedImage ? (
                                        <img src={seletedImage} alt="selected preview" />
                                    ) : (
                                        <p>No image selected</p>
                                    )}
                                </div>
                            </div>

                            {/* 프로젝트 설명 입력 */}
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
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            {/* 저장 버튼 */}
                            <button type="submit" className="submit_btn btn-submit">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProjectCreate;
