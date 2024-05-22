import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Principal from './Principal';
import Consulta from './Consulta';
import Explorar from './Explorar';
import Perfil from './Perfil';

const Tab = createBottomTabNavigator();
const screenOptions = {
	tabBarStyle: {
		backgroundColor: '#0B3B60'
	},
	tabBarActiveTintColor: '#339CFF',
	tabBarInactiveTintColor: '#FFF'
}
const tabs = [
	{
		name: 'Principal',
		componente: Principal,
		icone: 'home'
	},
	{
		name: 'Consulta',
		componente: Consulta,
		icone: 'calendar'
	},
	{
		name: 'Explorar',
		componente: Explorar,
		icone: 'search'
	},
	{
		name: 'Perfil',
		componente: Perfil,
		icone: 'person'
	}
]

export default function Tabs() {

	return (
		<Tab.Navigator screenOptions={screenOptions}>
			{tabs.map(tab => (
				<Tab.Screen
					key={tab.name}
					name={tab.name}
					component={tab.componente}
					options={{
						headerShown: false,
						tabBarIcon: ({ color, size }) => <Ionicons name={tab.icone} color={color} size={size} />

					}}
				/>
			))}
		</Tab.Navigator>
	)
}