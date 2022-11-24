import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import '../css/Notice.css';

export const Notice = () => {
    const githubIo = "https://github.com/llvovll89?tab=repositories";

    return (
        <div className="modal">
            <div className="modal-container">
                <div className="modal-head">
                    <h1 className="main-title">React</h1>
                    <span className="sub-title">MovieApp</span>
                </div>
                <div className="modal-body">
                    <h3>추가 해야할 사항</h3>
                    <span>(1) CONTENT들 모두 KOR 번역</span>
                    <span>(2) Poster 클릭 시 상세화면(줄거리, 영상, 도메인 등)</span>
                    <span>(3) Aside로 왼쪽 또는 오른쪽 메뉴바</span>
                    <span>(4) UI / UX 생각해서 제작</span>
                </div>
                <div className="btn-box">
                    <Link to="/" className="back-btn">
                        BACK
                    </Link>
                    <Link className="back-btn" onClick={() =>
                        window.open(githubIo)}>
                        <FaGithub /> &nbsp;Go
                    </Link>
                </div>
            </div>
        </div>
    )
}