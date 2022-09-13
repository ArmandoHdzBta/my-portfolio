import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./screens/home/Home";
import AboutMe from "./screens/aboutme/AboutMe";
import Project from "./screens/proyecto/Project";
import Screen404 from "./screens/errors/404";
import { NavLink } from "./components/Navbar/NavLink";
import Projects from "./screens/proyecto/Projects";

function App() {
	console.log("App renderizado");

  return (
    <>
		<nav className="navbar sticky-top navbar-expand-lg navbar-transparent bg-light">
			<span className="navbar-brand mb-0 h1">Principal</span>
			{/* <NavLink to="/" className="navbar-brand">
				Home
			</NavLink> */}
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    			<span className="navbar-toggler-icon"></span>
  			</button>
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<NavLink to="/">
							Principal
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/aboutme">
							Acerca de mi
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/projects">
							Proyectos
						</NavLink>
					</li>
					{/* <li><Link to="/">Home</Link></li>
					<li><Link to="/aboutme">About me</Link></li> */}
					{/* <li><Link to="/project">Project</Link></li> */}
				</ul>
			</div>
		</nav>
		<div className="container-fluid m-0 p-0">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/aboutme" element={<AboutMe />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/project/:id" element={<Project />} />
				<Route path="*" element={<Screen404 />} />
			</Routes>
		</div>
    </>
  );
}

export default App;
