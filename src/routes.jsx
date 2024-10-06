import App from './App';
import Home from './components/Home';
import Shop from './components/Shop'; 
// import Profile from './Profile';
// import ErrorPage from './ErrorPage';

const routes = [
	{
		path: '/',
		element: <App />,
        children: [
            { path: "home", element: <Home />},
            { path: "shop", element: <Shop />},
        ]
	},
	// {
	// 	path: 'shop',
	// 	element: <Shop />,
	// },
];

export default routes;
