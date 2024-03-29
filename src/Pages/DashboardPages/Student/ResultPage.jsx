import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";

import { FaRegFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";

const resultContext = createContext();
const ResultPage = () => {
    const [step, setStep] = useState(1);
    const [processValue, setProcessValue] = useState(1);

    const values = { step, setStep, processValue, setProcessValue };

    return (
        <resultContext.Provider value={values}>
            <Wrapper>
                <h4 className="sec-title">explore result</h4>
                <div className="result-card-container">
                    <Link
                        to="/dashboard/student/result/internal"
                        className="result-card"
                    >
                        <h3 className="">
                            <span className="icon">
                                <FaRegFilePdf />
                            </span>
                            Internal
                        </h3>
                    </Link>

                    <Link
                        to="/dashboard/student/result/semester"
                        className="result-card"
                    >
                        <h3 className="">
                            <span className="icon">
                                <FaRegFilePdf />
                            </span>
                            semester
                        </h3>
                    </Link>

                    <Link
                        to="/dashboard/student/result/improve"
                        className="result-card"
                    >
                        <h3 className="">
                            <span className="icon">
                                <FaRegFilePdf />
                            </span>
                            improve
                        </h3>
                    </Link>
                </div>
            </Wrapper>
        </resultContext.Provider>
    );
};

const Wrapper = styled.section`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .sec-title {
        font-size: calc(22px + 0.75vw);
        text-transform: capitalize;
        font-weight: 700;
        color: var(--primary-clr);
    }
    .result-card-container {
        margin-top: 40px;
        display: grid;
        grid-template-columns: repeat(3, minmax(150px, 190px));
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
    .result-card-container .result-card {
        height: 100%;
        padding: 3rem 2.5rem;
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
    .result-card-container .result-card:hover {
        box-shadow: inset -5px -5px 10px #b6b6b6, inset 5px 5px 10px #ffffff;
    }
    .result-card-container .result-card h3 {
        text-decoration: none;
        font-size: calc(14px + 0.5vw);
        font-weight: 600;
        text-transform: capitalize;
        color: var(--secondary-clr);
        text-align: center;
        line-height: 29px;
    }
    .result-card-container .result-card h3 .icon {
        font-size: 42px;
        display: flex;
        justify-content: center;
        margin-bottom: 16px;
        opacity: 0.8;
    }
    .result-btn {
        display: inline-block;
        padding: 7px 30px;
        text-transform: capitalize;
        font-size: calc(13px + 0.3vw);
        border-radius: 6px;
        transition: all 0.3s linear;
        margin-top: calc(12px + 1vh);
        background-color: var(--primary-clr);
        color: var(--white-clr);
    }
    .result-btn:hover {
        background-color: var(--secondary-clr);
    }

    .back-btn {
        display: inline-block;
        padding: 6px 20px;
        background-color: #ebebeb;
        color: #000000d4;
        text-transform: capitalize;
        font-size: calc(13px + 0.3vw);
        border-radius: 6px;
        transition: all 0.3s linear;
        margin-top: calc(12px + 1vh);
    }
    .back-btn:hover {
        background-color: var(--neutral-clr);
        color: var(--black-clr);
    }

    .result-table {
        /* margin-top: calc(20px + 3vw); */
        /* margin-top: 20px; */
        border-collapse: collapse;
        width: 100%;
    }

    .result-table td,
    .result-table th {
        color: var(--white-black);
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.5px;
        border: 1px solid #ddd;
        padding: 8px;
    }
    .result-table th {
        text-align: left;
        background-color: var(--primary-clr);
        color: #fff;
        font-weight: 400;
    }
    .result-table th.txt_cntr {
        text-align: center;
    }
    .result-table td.cgpa {
        font-weight: 400;
        font-family: var(--roboto);
    }
    .zero-result {
        font-size: calc(14px + 0.6vw);
        font-weight: 500;
        text-align: center;
        text-transform: capitalize;
        margin-top: calc(20px + 3vw);
        color: #b52a2a;
    }
`;

export const useResultContext = () => useContext(resultContext);
export default ResultPage;
