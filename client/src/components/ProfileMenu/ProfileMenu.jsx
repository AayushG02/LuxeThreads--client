import React from "react";
import { useSelector } from "react-redux";
import "./ProfileMenu.css";
import { useLogout } from "../../hooks/useLogout";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const ProfileMenu = ({ hide }) => {
  const { user } = useSelector((state) => state.user);
  const { logout } = useLogout();
  return (
    <div onMouseLeave={hide} className="profile-container">
      {user.id !== "" ? (
        <>
          <span>Hello! {user.name}</span>
          <div className="profile-menu">
            <Link className="link" to="/orders">
              Orders
            </Link>
            <Link className="link" to="/wishlist">
              Wishlist
            </Link>
          </div>
          <div
            className="logout"
            onClick={() => {
              logout();
              toast.success("Logged out successfully", {
                duration: 2000,
              });
            }}
          >
            Logout
          </div>
        </>
      ) : (
        <span>
          <a href="/auth/login">Login</a> or <a href="/auth/signup">Signup</a>
        </span>
      )}
    </div>
  );
};

export default ProfileMenu;
