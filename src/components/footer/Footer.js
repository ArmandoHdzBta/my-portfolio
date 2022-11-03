import IconSocial from "../iconSocial/IconSocial";

const Footer = () => {
    return (
        <div className="d-flex justify-content-center pb-2 w-100">
            <IconSocial to="https://github.com/armandohdzbta">
                <i className="fa-brands fa-github"></i>
            </IconSocial>
            <IconSocial to="https://www.linkedin.com/in/armandohernandez-7a30341b5/">
                <i className="fa-brands fa-linkedin"></i>
            </IconSocial>
        </div>
    );
}

export default Footer;