import { useParams } from "react-router-dom";

const Project = () => {
    const { id } = useParams();

    console.log("Project renderizado");

    return (
        <>
            <h1>Proyecto {id}</h1>
        </>
    );
};

export default Project;