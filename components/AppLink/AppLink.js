import Link from "next/link";
import css from "./AppLink.module.css";

const Applink = ({ name, to }) => {
	return (
		<Link className={css.link} href={to}>
			{name}
		</Link>
	);
};

export default Applink;
