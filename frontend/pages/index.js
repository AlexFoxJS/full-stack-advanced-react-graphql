import Link from 'next/link'

const Home = props => (
	<div>

		<h1>Home</h1>

		<Link>
			<a href="/">Home</a>
		</Link>

		<Link>
			<a href="/Sell">Sell</a>
		</Link>

	</div>
);

export default Home;