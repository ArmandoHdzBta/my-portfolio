import "./Parallax.css";

const Parallax = ({title, children}) => {
    return (
        <div className="parallax">
            <div className="content">
                <h1 className="title">{title}</h1>
                <p className="body">
                    {children}
                </p>
            </div>
        </div>
    );
}

export default Parallax;