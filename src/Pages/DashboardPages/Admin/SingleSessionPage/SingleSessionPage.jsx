import { useLocation, useParams } from "react-router-dom";
import Breadcrumb from "../../../../Components/Shared/Breadcrumb/Breadcrumb";
import SectionTitle from "../../../../Components/Non-Shared/DashboardPageCom/Admin/SectionTitle/SectionTitle";
import { AiOutlinePlus } from "react-icons/ai";
import AddStudentModal from "../../../../Components/Non-Shared/DashboardPageCom/Admin/AddStudentModal/AddStudentModal";
import SemesterCard from "../../../../Components/Non-Shared/DashboardPageCom/Admin/SemesterCard/SemesterCard";

import "./singleSessionPage.css";
import { useState } from "react";

const SingleSessionPage = () => {
    const { pathname } = useLocation();
    const { session } = useParams();
    // const [isShowAddStudentModal, setIsShowAddStudentModal] = useState(true);
    return (
        <div>
            <div>
                <Breadcrumb location={pathname} />
            </div>
            <div className="mt-4 mb-4">
                <SectionTitle title={`Session ${session}`} />
            </div>
            <div className="flex justify-end">
                <label
                    htmlFor="add_student_modal"
                    className="btn bg-[#3ab16a] btn-sm rounded-sm text-white hover:bg-[#2e9657] hover:shadow-md"
                >
                    <span className="text-base font-bold">
                        <AiOutlinePlus />
                    </span>
                    <span className="text-xs">add student</span>
                </label>
                <AddStudentModal session={session} />
            </div>
            <div className="semester-card-container mt-8 mb-8">
                <SemesterCard title="first semester" />
                <SemesterCard title="second semester" />
                <SemesterCard title="third semester" />
                <SemesterCard title="fourth semester" />
                <SemesterCard title="fifth semester" />
                <SemesterCard title="sixth semester" />
                <SemesterCard title="seventh semester" />
                <SemesterCard title="eight semester" />
            </div>
        </div>
    );
};

export default SingleSessionPage;