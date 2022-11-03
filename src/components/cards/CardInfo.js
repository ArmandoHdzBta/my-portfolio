import './cardInfo.css'

const CardInfo = () => {
    return (
        <div className="d-flex justify-content-between align-items-start text-white">
            <div className='pr-3'>
                <h2>Armando Hernández</h2>
                <h4 className='text-subtitle'>Desarrollador FullStack</h4>
                <p className='text-info'>
                    Desarrollador proactivo con entusiasmo por aprender nuevas cosas que favorezcan mi 
                    desarrollo profesional.
                </p>
            </div>
            <label className='avatar rounded-circle'>
                <img src="https://avatars.githubusercontent.com/ArmandoHdzBta" alt="avatar" className="avatar-img w-100" />
            </label>
        </div>
    );
}

export default CardInfo;