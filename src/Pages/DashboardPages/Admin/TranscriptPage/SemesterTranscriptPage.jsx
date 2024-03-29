import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";
import StepOneForm from "../../../../Components/Non-Shared/DashboardPageCom/Admin/TranscriptPageCom/Semester/StepOneForm";
import StepTwoTranscript from "../../../../Components/Non-Shared/DashboardPageCom/Admin/TranscriptPageCom/Semester/StepTwoTranscript";
import {
    MarkFormStepProvider,
    useMarkFormStepContext,
} from "../../../../context/Admin/MarkFormStepContext";

const SemesterTranscriptPage = () => {
    const { stepValue } = useMarkFormStepContext();
    return (
        <Wrapper>
            <MarkFormStepProvider>
                {/* {step === 1 && <StepOneForm formName="semester final" />} */}
                {/* {step === 2 && <StepTwoTranscript />} */}
            </MarkFormStepProvider>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .row-1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 10px;
    }
`;

// export const useSemesterTranscriptContext = () => useContext(transcriptContext);

export default SemesterTranscriptPage;
