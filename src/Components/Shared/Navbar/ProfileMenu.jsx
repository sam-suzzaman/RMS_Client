import { Link, NavLink } from "react-router-dom";
import avatarPhoto from "../../../assets/avatar_photo.jpg";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { useUserContext } from "../../../context/Admin/UserContext";

const ProfileMenu = () => {
    const { user, userLogout } = useUserContext();
    return (
        <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="">
                <div className="flex justify-end items-center mr-6 cursor-pointer">
                    <img
                        src={avatarPhoto}
                        alt="avatar_photo"
                        className="w-10 rounded-full"
                    />
                    <div className="ml-2">
                        <h3 className="text-[12px] font-normal number capitalize mb-0 text-primary">
                            {user?.name || "unknown"}
                        </h3>
                        <p className="text-[10px] mb-0 text-slate-700 capitalize font-semibold tracking-wide">
                            {/* <span className="font-medium">role:</span>{" "} */}
                            <span className="">{user?.role || "..."}</span>
                        </p>
                    </div>
                </div>
            </label>
            <ul
                tabIndex={0}
                className="mt-5 z-100 p-2 shadow-md menu menu-sm dropdown-content bg-base-200 rounded-sm w-52"
            >
                <li>
                    {user?.role === "admin" || user?.role === "faculty" ? (
                        <NavLink
                            to="/dashboard/admin/"
                            className="capitalize rounded-sm"
                        >
                            <span className="text-lg">
                                <MdOutlineDashboardCustomize />
                            </span>
                            dashboard
                        </NavLink>
                    ) : (
                        <NavLink
                            to="/dashboard/student/"
                            className="capitalize rounded-sm"
                        >
                            <span className="text-lg">
                                <MdOutlineDashboardCustomize />
                            </span>
                            dashboard
                        </NavLink>
                    )}
                </li>
                <li>
                    {user?.name ? (
                        <button
                            onClick={() => userLogout()}
                            className="flex items-center text-red-600 hover:text-red-700 hover:font-medium rounded-sm"
                        >
                            <FiLogOut />
                            <span className="text-[11px] uppercase font-medium ">
                                logout
                            </span>
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="flex items-center text-red-600 hover:text-red-700 hover:font-medium rounded-sm"
                        >
                            <span className="font-bold text-base">
                                <FiLogIn />
                            </span>
                            login
                        </Link>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default ProfileMenu;
