import "./sectionTitle.css";

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="admin_sec_title">
            <h1 className="heading_1 capitalize">{title}</h1>
        </div>
    );
};

export default SectionTitle;
