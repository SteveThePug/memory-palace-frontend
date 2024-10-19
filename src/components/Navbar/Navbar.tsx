import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { userLogOut, userSet } from "../../store/slices/token.js";
import Login from "./Login.js";
import Modal from "../Modal.js";
import Form from "./Form.js";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.js";

export default function Navbar() {
  const token = useAppSelector((state: any) => state.token);

  // Login Modal
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  // Post Modal
  const [isPostModalOpen, setIsPostModalOpen] = useState<boolean>(false);
  const openPostModal = () => setIsPostModalOpen(true);
  const closePostModal = () => setIsPostModalOpen(false);

  const dispatch = useAppDispatch();

  const logout = () => dispatch(userLogOut());

  return (
    <div className="flex justify-between p-4">
      {/* Logo/Title */}
      <NavLink to="/">Home</NavLink>
      {/* User Info */}
      {token ? (
        <>
          <button onClick={openPostModal}>Upload</button>
          <button onClick={logout}>Logout</button>
          <NavLink to="#">{token.user.username}</NavLink>
        </>
      ) : (
        <>
          <button onClick={openLoginModal}>LOGIN</button>
        </>
      )}

      {/* Login Modal */}
      <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
        <Login onLoginSuccess={closeLoginModal} />
      </Modal>

      {/* Post Modal */}
      <Modal isOpen={isPostModalOpen} onClose={closePostModal}>
        <Form onFormSuccess={closePostModal} />
      </Modal>
    </div>
  );
}
