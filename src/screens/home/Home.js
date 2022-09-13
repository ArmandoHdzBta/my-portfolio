import ProjectCard from "../../components/cards/ProjectCard";
import Parallax from "../../components/parallax/Parallax";
import proyecto1 from "../../images/proyecto1.jpg";
import proyecto3 from "../../images/background_parallax.png";

const Home = () => {
    console.log("Home renderizado");

    return (
        <>
            <Parallax title="Hola, soy Armando Hernandez.">
                desarrollador fullstack.
            </Parallax>

            <div className="p-3 m-5">
                <h2 className="text-center mb-5">Proyectos</h2>
                <div className="row">
                    <ProjectCard title="titulo proyecto"
                        to={`/project/${1}`}
                        image={proyecto1}
                        urlText="url text"
                    >
                        descripcion del proyecto
                    </ProjectCard>
                    <ProjectCard title="titulo proyecto"
                        to={`/project/${2}`}
                        image={proyecto1}
                        urlText="url text"
                    >
                        descripcion del proyecto 2
                    </ProjectCard>
                    <ProjectCard title="titulo proyecto"
                        to={`/project/${3}`}
                        image={proyecto3}
                        urlText="url text"
                    >
                        descripcion del proyecto 3
                    </ProjectCard>
                    <ProjectCard title="titulo proyecto"
                        to={`/project/${4}`}
                        image={proyecto1}
                        urlText="url text"
                    >
                        descripcion del proyecto 4
                    </ProjectCard>
                </div>
            </div>
        </>
    );
};

export default Home;