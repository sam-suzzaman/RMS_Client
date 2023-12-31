import styled from "styled-components";

const Wrapper = styled.div`
    .mark_wrapper {
        width: 100%;
        margin: 0 auto;
        max-height: 40vh;
        overflow-y: auto;
        padding: 10px;
        padding-top: 0;
        scrollbar-width: auto; /* width of the scrollbar */
        scrollbar-color: #888 #f2f2f2; /* thumb color and track color */
    }
    /* Customize scrollbar for Chrome, Safari, and newer versions of Edge */
    .mark_wrapper::-webkit-scrollbar {
        width: 5px; /* width of the vertical scrollbar */
    }

    .mark_wrapper::-webkit-scrollbar-thumb {
        background-color: #888; /* color of the thumb */
        border-radius: 5px; /* rounded corners for the thumb */
    }

    .mark_wrapper::-webkit-scrollbar-track {
        background-color: #f2f2f2; /* color of the track */
    }

    .mark_container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        justify-content: space-between;
        align-items: center;
        grid-row-gap: 13px;
        grid-column-gap: 2px;
    }
    .mark_container {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        overflow: -moz-scrollbars-none; /* Firefox */
    }
    .mark_container::-webkit-scrollbar {
        display: none;
    }

    /* Target the first row */
    .mark_container > *:nth-child(-n + 5) {
        background-color: rgb(235, 235, 235);
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        padding: 4px 0;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mark_container .mark h3 {
        color: #363636;
        font-size: 13px;
        font-weight: 600;
        text-align: center;
        text-transform: capitalize;
    }

    .mark_container input {
        width: 100%;
        max-width: 80px;
        height: 22px;
        box-shadow: 0px 0px 0px 0.2px;
        border: none;
        text-align: center;
        font-size: 11px;
        font-weight: 600;
        border-radius: 1.5px;
        outline: none;
        margin: 0 auto;
        padding: 4px 4px;
    }
    .mark_container input.roll_field {
        min-width: fit-content;
        font-size: 11px;
    }
    .mark_container input:focus {
        border: 1px solid #9e9e9e;
        outline: none;
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export default Wrapper;
