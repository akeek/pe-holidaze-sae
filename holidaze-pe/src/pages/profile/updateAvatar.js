import React, { useState, useEffect } from "react";
import styles from "../../styles/profile.module.css";
import Modal from "react-bootstrap/Modal";

function UpdateAvatar() {
    const [userName, setUserName] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [avatar, setAvatar] = useState("");
    const [newAvatarUrl, setNewAvatarUrl] = useState("");

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser) {
            setAvatar(storedUser.avatar);
            setUserName(storedUser.name);
        }
    }, []);

    const avatarImg = avatar || "https://img.freepik.com/free-icon/user_318-552176.jpg?w=2000";

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleSave = () => {
        setAvatar(newAvatarUrl);
        localStorage.setItem(
            "user",
            JSON.stringify({ ...localStorage.getItem("user"), avatar: newAvatarUrl })
        );
        handleClose();
    };

    return (
        <div>
            <div>
                <h2 className={styles.username}>{userName}</h2>
            </div>
            <div className={styles.avatarContainer}>
                <img src={avatarImg} alt="Avatar" className={styles.avatar} />
                <button className={styles.edit} onClick={handleShow}>Edit profilepicture</button>
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update profilepicture</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label htmlFor="avatarUrl">Image-URL: </label>
                    <input
                        className={styles.url}
                        type="text"
                        placeholder="Ex: https://ibb.co/hHsZ0G2"
                        id="avatarUrl"
                        value={newAvatarUrl}
                        onChange={(e) => setNewAvatarUrl(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <button className={styles.formBtnClose} onClick={handleClose}>
                        Close
                    </button>
                    <button className={styles.formBtn} onClick={handleSave}>
                        Update picture
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default UpdateAvatar;
