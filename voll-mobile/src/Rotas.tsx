import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//TELAS
import Login from './Login';
import Cadastro from './Cadastro';
import Tabs from './Tabs';

const Tab = createNativeStackNavigator();
export default function Rotas() {
	return (
		<NavigationContainer independent={true}>
			<Tab.Navigator>
				<Tab.Screen
					name='Login'
					component={Login}
					options={
						{ headerShown: false }
					}
				/>
				<Tab.Screen
					name='Cadastro'
					component={Cadastro}
					options={
						{ headerShown: false }
					}
				/>
				<Tab.Screen
					name='Tabs'
					component={Tabs}
					options={
						{ headerShown: false }
					}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}