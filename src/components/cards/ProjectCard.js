import './ProjectCard.css'

const ProjectCard = ({image, active, title, description, to}) => {
    return (
        
        <div className={`carousel-item bg-little-dark ${active ?? ''}`}>
            <a href={to}>
                <img src={image} className="d-block w-100 image-fit" alt="poject cover" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    );
};

export default ProjectCard;