import "./myProjects.css";
import image from "../../images/proyecto1.jpg";
import ProjectCard from "../cards/ProjectCard";
import React from "react";

const MyProjects = ({children}) => {
    return (
        <>
            <h4 className="text-center text-white">Mis proyectos</h4>
            <div id="carouselExampleIndicators" className="carousel slide mb-3 mt-4" data-ride="carousel">
                <ol className="carousel-indicators">
                    {React.Children.map(children ,(element, index) => {
                        if (index === 0) {
                            return <li data-target="#carouselExampleIndicators" data-slide-to={index} className="active"></li>
                        } else {
                            return <li data-target="#carouselExampleIndicators" data-slide-to={index}></li>
                        }
                    })}
                    
                    
                    {/* <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
                </ol>
                <div className="carousel-inner rounded">
                    { children }
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    );
};

export default MyProjects;
