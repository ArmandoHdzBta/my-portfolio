import './cardInfo.css'
import avatar from '../../images/avatar.jpg'

const CardInfo = () => {
    return (
        <div className="d-flex justify-content-between align-items-start text-white">
            <div className='pr-3'>
                <h2>Armando Hernández</h2>
                <h4 className='text-subtitle'>Desarrollador FullStack</h4>
                <p className='text-info'>Ingeniero en Software con experiencia en el desarollo web.</p>
            </div>
            <label className='avatar rounded-circle'>
                <img src={avatar} alt="avatar" className="avatar-img w-100" />
            </label>
        </div>
    );
}

export default CardInfo;