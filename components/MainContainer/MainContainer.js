import Head from "next/head";
import NavBar from "../NavBar/NavBar";

const MainContainer = ({ children, keywords }) => {
	return (
		<>
			<Head>
				<meta keywords={"important" + (keywords ? " " + keywords : "")}></meta>
				<title>Main page</title>
			</Head>
			<NavBar />
			<div> {children} </div>
		</>
	);
};

export default MainContainer;
