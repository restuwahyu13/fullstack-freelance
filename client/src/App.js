import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './redux/store'

import RootPage from './pages'

const App = () => (
	<ConnectedRouter history={history}>
		<Router>
			<Fragment>
				<Switch>
					<Route exact path="/" component={RootPage} />
					<Route
						path="*"
						render={() => (
							<>
								<h1 className="text-center text-danger"> ROUTE NOT MATCH - 404 </h1>
							</>
						)}
					/>
				</Switch>
			</Fragment>
		</Router>
	</ConnectedRouter>
)

export default App
