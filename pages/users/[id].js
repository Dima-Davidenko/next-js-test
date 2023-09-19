import MainContainer from "../../components/MainContainer/MainContainer";

const User = ({ user }) => {
	console.log("🚀  user:", user);

	return (
		<MainContainer>
			<h1>User with ID {user.id} </h1>
			<div>User name - {user.name}</div>
		</MainContainer>
	);
};

export default User;

export const getServerSideProps = async ({ params }) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${params.id}`
	);
	const user = await response.json();
	return { props: { user } };
};
