// *PAGE - 메인 페이지

import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    // 게이지바 사용하기 위해서 목업데이터 임시로 만들었습니다..!
    // recruitedCount - 모집된인원
    // totalCount - 총 인원
    const projects = [
        {
            id: 1,
            recruitedCount: 4,
            totalCount: 5,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        },
        {
            id: 2,
            recruitedCount: 2,
            totalCount: 5,
            title: 'Lorem Ipsum es simplemente.',
        },
        {
            id: 3,
            recruitedCount: 1,
            totalCount: 8,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.',
        },
        {
            id: 4,
            recruitedCount: 5,
            totalCount: 12,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 5,
            recruitedCount: 3,
            totalCount: 9,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 6,
            recruitedCount: 7,
            totalCount: 15,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 7,
            recruitedCount: 6,
            totalCount: 10,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 8,
            recruitedCount: 8,
            totalCount: 16,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 9,
            recruitedCount: 4,
            totalCount: 11,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 10,
            recruitedCount: 2,
            totalCount: 6,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 11,
            recruitedCount: 5,
            totalCount: 14,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 12,
            recruitedCount: 3,
            totalCount: 8,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 13,
            recruitedCount: 6,
            totalCount: 12,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 14,
            recruitedCount: 9,
            totalCount: 18,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 15,
            recruitedCount: 7,
            totalCount: 10,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 16,
            recruitedCount: 4,
            totalCount: 7,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 17,
            recruitedCount: 10,
            totalCount: 20,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 18,
            recruitedCount: 8,
            totalCount: 13,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 19,
            recruitedCount: 3,
            totalCount: 9,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 20,
            recruitedCount: 5,
            totalCount: 10,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 21,
            recruitedCount: 2,
            totalCount: 6,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 22,
            recruitedCount: 9,
            totalCount: 14,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 23,
            recruitedCount: 6,
            totalCount: 12,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 24,
            recruitedCount: 7,
            totalCount: 15,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
        {
            id: 25,
            recruitedCount: 4,
            totalCount: 10,
            title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
        },
    ];

    return (
        <div className="common_list main">
            {/* 전체 프로젝트 리스트 컨테이너 영역
                common_list - 메인, 빌드투게더, 내프로젝트 리스트에서 공통으로 사용하는 클래스 입니다. */}

            <div className="container">
                {/* top_bar - 상단 검색바 영역 - 모든 리스트 페이지에서 동일하게 사용됨 */}
                <div className="top_bar">
                    {/* 전체 프로젝트 카운트 표시 */}
                    <div className="total">
                        <p>
                            total <span>123</span> project
                        </p>
                    </div>

                    {/* 검색 기능 구현 영역 */}
                    <div className="search">
                        {/* 검색 옵션 선택 셀렉트 박스 */}
                        <div className="select">
                            <select name="" id="">
                                <option value="image">image</option>
                                <option value="name">name</option>
                                <option value="name">name</option>
                                <option value="name">name</option>
                            </select>
                        </div>
                        {/* 검색어 입력 필드 */}
                        <div className="input">
                            <input type="text" placeholder="Search here." />
                        </div>
                        {/* 검색 버튼 */}
                        <button className="search_btn">
                            <img src="/images/search_btn.png" alt="search button icon" />
                        </button>
                    </div>
                </div>

                {/*list_wrap - 프로젝트 리스트 아이템들을 감싸는 공통 컨테이너입니다.
                
                페이지당 20개씩 출력하는 로직은 모든 리스트에 공통으로 적용됩니다!
                */}
                <div className="list_wrap">
                    {projects?.slice(0, 20).map((project) => {
                        // 모집 현황 백분율 계산 (게이지바 너비에 사용)
                        const recruitmentRatio = (project.recruitedCount / project.totalCount) * 100;
                        console.log('프로젝트 아이템: ', project); // 데이터 확인용

                        return (
                            <div className="item" key={project.id}>
                                {/* 프로젝트 썸네일 이미지 영역 */}
                                <div className="img">
                                    {/* 상세페이지 이동 */}
                                    <Link to="/projectDetail">
                                        <img src="/images/main_list_img.png" alt="Project thumbnail" />
                                    </Link>
                                </div>

                                {/* 프로젝트 정보 */}
                                <div className="info">
                                    {/* 프로젝트 진행 상태 (예: 1/4) */}
                                    <div className="number">
                                        {/* 모집완료인원 & 총 모집인원  */}
                                        <div className="top">
                                            <span>{project.recruitedCount}</span>
                                            <span className="slash">/</span>
                                            <span>{project.totalCount}</span>
                                        </div>
                                        {/* 게이지바 */}
                                        <div className="gauge">
                                            {/* recruitmentRatio에 따라 너비가 동적으로 변하는 게이지 채우기 */}
                                            <div className="gauge-fill" style={{ width: `${recruitmentRatio}%` }}></div>
                                        </div>
                                    </div>

                                    {/* 프로젝트 제목 */}
                                    <div className="txt">{project.title}</div>
                                </div>

                                {/* 상세 페이지 이동 버튼 */}
                                <div className="view_btn">
                                    <Link to="/projectDetail" className="btn-default">
                                        VIEW
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* 페이지네이션 
                 common_pagenation - 페이지네이션이 필요한 페이지에서 공통으로 사용되는 클래스 입니다.*/}
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

export default Main;
