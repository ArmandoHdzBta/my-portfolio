import { Link } from "react-router-dom";

const ProjectCard = ({title, image, children, to, urlText}) => {
    return (
        <>
            <div className="card m-2" style={{ width: "18rem" }}>
                <img classNameName="card-img-top" src={image} alt="Project card" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{children}</p>
                    <Link to={to}>
                        {urlText}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;