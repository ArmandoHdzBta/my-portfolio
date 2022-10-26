import './homestyle.css';
import CardInfo from "../../components/cards/CardInfo";
import Footer from '../../components/footer/Footer';
import MyProjects from '../../components/proyect/MyProjects';

const Home = () => {
    console.log("Home renderizado");

    return (
        <div className="container rounded w-50 my-5 pt-5 pl-5 pr-5">
            <CardInfo />

            <div className='mt-4 mb-3 text-white'>
                <p className='parrafo'>
                    Desarrolador web fullstack con experiencia en el uso de tecnologias como 
                    Laravel, Lumen, React, Blade.
                </p>
            </div>

            {/* <MyProjects /> */}

            <Footer />
        </div>
    );
};

export default Home;