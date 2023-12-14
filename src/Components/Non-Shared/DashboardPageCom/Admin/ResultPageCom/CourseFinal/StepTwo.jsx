import React, { useState } from "react";

import styled from "styled-components";

import { PDFViewer } from "@react-pdf/renderer";

import { useResultStepContext } from "../../../../../../context/Admin/ResultStepContext";

import CourseFinalResultPDF from "../../../../../../assets/PDF/CourseFinalResultPDF";

const resultList = [
    {
        _id: 1,
        name: "Rizoan Kabir Akanda",
        roll: "18102901",
        attendance: 10,
        midOne: 8,
        midTwo: 8,
        presentationOrAssignment: 8,
        total: 34,
    },
    {
        _id: 2,
        name: "Alpona Akter koly",
        roll: "18102902",
        attendance: 10,
        midOne: 9,
        midTwo: 9,
        presentationOrAssignment: 8,
        total: 36,
    },
    {
        _id: 3,
        name: "Samsuzzaman",
        roll: "18102930",
        attendance: 10,
        midOne: 7,
        midTwo: 8,
        presentationOrAssignment: 8,
        total: 33,
    },
    {
        _id: 4,
        name: "Lipon Chandra Roy",
        roll: "18102940",
        attendance: 10,
        midOne: 7,
        midTwo: 8,
        presentationOrAssignment: 8,
        total: 33,
    },
];

const StepTwo = () => {
    const { step, setStep, stepOneValue } = useResultStepContext();
    const [results, setResults] = useState(resultList);

    return (
        <Wrapper>
            <div className="row-1 mb-4 mt-1">
                <button className="submit_btn px-6 py-2 text-sm font-medium capitalize rounded-md">
                    publish
                </button>
                {/* <button className="back_btn px-6 py-2 text-sm font-medium capitalize rounded-md">
                    back
                </button> */}
            </div>
            <div className="w-full">
                <PDFViewer width={1250} height={540}>
                    <CourseFinalResultPDF
                        results={results}
                        stepOneValue={stepOneValue}
                    />
                </PDFViewer>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .row-1 {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        column-gap: 10px;
    }
`;

export default StepTwo;
