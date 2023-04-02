import { observer } from 'mobx-react';
import { Books } from './Books/Books'

const Homepage = observer(() => {
	return (
		<>
			<Books />
		</>
	)
})
export default Homepage;