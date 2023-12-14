import React from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import SectionTitle from "../../../../Components/Non-Shared/DashboardPageCom/Admin/SectionTitle/SectionTitle";
import styled from "styled-components";

import { FaRegFilePdf } from "react-icons/fa";
import { LuFilePlus } from "react-icons/lu";

const GetMarkPage = () => {
    const { pathname } = useLocation();
    return (
        <>
            <Wrapper>
                <div className="add_mark_page_wrapper">
                    <Breadcrumb location={pathname} />
                    <div className="mt-6">
                        <SectionTitle title="Manage marks" />
                    </div>

                    <div className="add-mark-card-container mt-16">
                        <Link
                            to="/dashboard/admin/get-mark/internal"
                            className="card"
                        >
                            <h3 className="">
                                <span className="icon">
                                    <FaRegFilePdf />
                                </span>
                                internal
                            </h3>
                        </Link>

                        <Link
                            to="/dashboard/admin/get-mark/course-final"
                            className="card"
                        >
                            <h3 className="">
                                <span className="icon">
                                    <FaRegFilePdf />
                                </span>
                                course final
                            </h3>
                        </Link>
                        <Link
                            to="/dashboard/admin/get-mark/semester-final"
                            className="card"
                        >
                            <h3 className="">
                                <span className="icon">
                                    <FaRegFilePdf />
                                </span>
                                semester final
                            </h3>
                        </Link>

                        {/* <Link
                            to="/dashboard/admin/add-mark/lab"
                            className="card"
                        >
                            <h3 className="">
                                <span className="icon">
                                    <FaRegFilePdf />
                                </span>
                                lab
                            </h3>
                        </Link> */}

                        <Link
                            to="/dashboard/admin/get-mark/improve"
                            className="card"
                        >
                            <h3 className="">
                                <span className="icon">
                                    <FaRegFilePdf />
                                </span>
                                Improvement
                            </h3>
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.section`
    .add-mark-card-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 190px));
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
    .add-mark-card-container .card {
        height: 100%;
        padding: 3rem 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s linear;
        cursor: pointer;

        border-radius: 8px;
        background: #f7f7f7;
        box-shadow: 5px 5px 11px #bfbfbf, -5px -5px 11px #ffffff;
        transition: all 0.3s ease;
    }

    .add-mark-card-container .card:hover {
        box-shadow: inset -5px -5px 10px #b6b6b6, inset 5px 5px 10px #ffffff;
    }
    .add-mark-card-container .card h3 {
        font-size: calc(14px + 0.5vw);
        font-weight: 600;
        text-transform: capitalize;
        color: var(--secondary-clr);
        text-align: center;
        line-height: 29px;
    }
    .add-mark-card-container .card h3 .icon {
        font-size: 42px;
        display: flex;
        justify-content: center;
        margin-bottom: 16px;
        opacity: 0.8;
    }
`;

export default GetMarkPage;
