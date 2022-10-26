import IconSocial from "../../components/iconSocial/IconSocial";

document.title= `About me`

const AboutMe = () => {
    return (
        <>
            <div className="container d-flex mt-5 justify-content-center">
                <div className="col-md-6">
                    <div className="row">
                        <img src="https://avatars.githubusercontent.com/ArmandoHdzBta"
                            alt="Avatar"
                            className="rounded mx-auto d-block w-50"/>
                    </div>
                    <div className="row">
                        <a href="https://github.com/ArmandoHdzBta"
                            target="_blank"
                            rel="noreferrer"
                            className="text-center mt-3">
                            ArmandoHdzBta
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <p className="p-3 text-justify">
                        ¡Hola! Soy Armando Hernandez, desarrollador web con poca experiencia, pero con
                        muchas ganas de aprender.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-around">
                        <IconSocial to="d">
                            <i className="fa-brands fa-instagram"></i>
                        </IconSocial> 
                        <IconSocial to="d">
                            <i className="fa-brands fa-github"></i>
                        </IconSocial>
                        <IconSocial to="d">
                            <i className="fa-brands fa-twitter"></i>
                        </IconSocial>
                        <IconSocial to="d">
                            <i className="fa-brands fa-linkedin"></i>
                        </IconSocial>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;