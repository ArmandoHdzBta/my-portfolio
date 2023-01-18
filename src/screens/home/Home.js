import "./homestyle.css";
import CardInfo from "../../components/cards/CardInfo";
import Footer from "../../components/footer/Footer";
import MyProjects from "../../components/proyect/MyProjects";
import ProjectCard from "../../components/cards/ProjectCard";
import image from "../../images/codyVacaciones.png";
import Tecnologies from "../../components/tecnologies/Tecnologies";
// import image2 from "../../images/proyecto1.jpg";

const Home = () => {
  return (
    <div className="container-fluid pt-5 pb-5">
      <div className="col-md-6 col-lg-6 col-sm-12 container-info m-auto rounded pt-5 pl-5 pr-5">
        <CardInfo />

        <Tecnologies />

        <MyProjects>
          <ProjectCard
            image={image}
            active="active"
            title="Concurso Vacaciones Cody"
            description="Página web estática. Diseño de los elemntos utilizando animaciones y bootstrap"
            to="https://github.com/ArmandoHdzBta/vacaciones-cody"
          />
        </MyProjects>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
