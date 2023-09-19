import Link from "next/link";
import MainContainer from "../components/MainContainer/MainContainer";
import NavBar from "../components/NavBar/NavBar";

const Users = ({ users }) => {
	return (
		<MainContainer keywords="users">
			<h1>Users list</h1>
			<ul>
				{users.map(({ id, name }) => {
					return (
						<li key={id}>
							<Link href={`/users/${id}`}>{name}</Link>
						</li>
					);
				})}
			</ul>
		</MainContainer>
	);
};

export default Users;

export const getStaticProps = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await response.json();
	return { props: { users } };
};
