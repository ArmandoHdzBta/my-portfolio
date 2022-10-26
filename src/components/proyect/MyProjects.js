import './myProjects.css'
import image from '../../images/proyecto1.jpg'

const MyProjects = () => {
    return (
        <div>
            <h4 className="text-center text-white">Mis proyectos</h4>
            <div className='w-75 m-auto'>
                <div className='col-12'>
                    <div className="row">
                        <div className="card proyect-card p-0">
                            <img classNameName="card-img-top fit" src={image} alt="Project card" />
                        </div>
                        <div className="card proyect-card p-0">
                            <img classNameName="card-img-top fit" src={image} alt="Project card" />
                        </div>
                        <div className="card proyect-card p-0">
                            <img classNameName="card-img-top fit" src={image} alt="Project card" />
                        </div>
                        <div className="card proyect-card p-0">
                            <img classNameName="card-img-top fit" src={image} alt="Project card" />
                        </div>
                        <div className="card proyect-card p-0">
                            <img classNameName="card-img-top fit" src={image} alt="Project card" />
                        </div>
                        <div className="card proyect-card p-0">
                            <img classNameName="card-img-top fit" src={image} alt="Project card" />
                        </div>
                    </div>
                </div>
                <div className="pagination w-100 justify-content-center p-2">
                    <i class="fa-solid fa-circle m-1 text-white circle-size"></i>
                    <i class="fa-solid fa-circle m-1 text-white circle-size"></i>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;