import styled from 'styled-components';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

const Container = styled.div`
	width: 100%;
	position: relative;
	/* background-image: url(bg.jpg);
	background-position: center;
	background-repeat: no-repeat; */
	background: #EBF0CE;
	/* background-size: cover; */
`

export default function App() {
	return (
		<Container>

			<Header />
			<Main />

		</Container>
	);
}