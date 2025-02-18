import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, icon, children, variant = 'default' }: any) => {
    if (!isOpen) return null;

    return (
        <div className={`modal ${variant}`} onClick={onClose}>
            <div className="card" onClick={(e) => e.stopPropagation()}>
                {/* 아이콘 */}
                {icon && (
                    <div className="modal_icon">
                        <img src={icon} alt="modal icon" />
                    </div>
                )}

                {/* 제목 */}
                {title && <h3>{title}</h3>}

                {/* X 닫기 버튼 */}
                <button type="button" className="close_btn" onClick={onClose}>
                    <img src="/images/close_g.png" alt="close_icon" />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
