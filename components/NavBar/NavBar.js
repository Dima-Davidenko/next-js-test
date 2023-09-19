import Applink from "../AppLink/Applink.js";
import css from "./NavBar.module.css";

const NavBar = () => {
	return (
		<div className={css.navbar}>
			<Applink name="Home" to="/" />
			<Applink name="Users" to="/users" />
		</div>
	);
};

export default NavBar;
