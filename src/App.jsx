import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import SideMenu from './components/SideMenu.tsx';
import Header from './components/Header.tsx';
import Main from './pages/Main.tsx';
import BuildTogether from './pages/BuildTogether.tsx';
import About from './pages/About.tsx';
import MyPage from './pages/MyPage.tsx';
import Help from './pages/Help.tsx';
import Login from './pages/Login.tsx';
import ProjectCreate from './pages/ProjectCreate.tsx';
import ProjectEdit from './pages/ProjectEdit.tsx';
import ProjectManage from './pages/ProjectManage.tsx';
import ProjectDetail from './pages/ProjectDetail.tsx';
import MyProjects from './pages/MyProjects.tsx';
import ParticipatingProjects from './pages/ParticipatingProjects.tsx';
import NotFound from './pages/NotFound.tsx';

function App() {
    const path = useLocation();
    const isLoginPage = path.pathname === '/login';
    const isNotFoundPage = ![
        '/',
        '/buildtogether',
        '/about',
        '/user',
        '/help',
        '/projectEdit',
        '/projectCreate',
        '/projectManage',
        '/projectDetail',
        '/myProjects',
        '/participatingProjects',
    ].includes(path.pathname);

    return (
        <div className="main_wrap">
            {!(isLoginPage || isNotFoundPage) && <Header />}
            {!(isLoginPage || isNotFoundPage) ? (
                <div className="content">
                    <div className="left_content">
                        <SideMenu />
                    </div>
                    {/* <MobileSideMenu /> */}
                    <div className="right_content">
                        <Routes>
                            <Route path="/" element={<Main></Main>}></Route>
                            <Route path="/buildtogether" element={<BuildTogether></BuildTogether>}></Route>
                            <Route path="/about" element={<About></About>}></Route>
                            <Route path="/user" element={<MyPage></MyPage>}></Route>
                            <Route path="/help" element={<Help></Help>}></Route>
                            <Route path="/projectedit" element={<ProjectEdit></ProjectEdit>}></Route>
                            <Route path="/projectCreate" element={<ProjectCreate></ProjectCreate>}></Route>
                            <Route path="/projectManage" element={<ProjectManage></ProjectManage>}></Route>
                            <Route path="/projectDetail" element={<ProjectDetail></ProjectDetail>}></Route>
                            <Route path="/myProjects" element={<MyProjects></MyProjects>}></Route>
                            <Route
                                path="/participatingProjects"
                                element={<ParticipatingProjects></ParticipatingProjects>}
                            ></Route>
                        </Routes>
                    </div>
                </div>
            ) : (
                <Routes>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="*" element={<NotFound />} /> {/* 404 페이지 라우트 추가 */}
                </Routes>
            )}
        </div>
    );
}

export default App;
