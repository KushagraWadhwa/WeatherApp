/* eslint-disable react/react-in-jsx-scope */
import {Home, Weather} from '../screens';
import {Stack} from './root.navigation';

export default function DashboardStack() {
  const dashboardRoutes = [
    {
      name: 'home',
      component: Home,
      screenID: 'HOME',
    },
    {
      name: 'weatherScreen',
      component: Weather,
      screenID: 'WTHR',
    },
  ];
  return (
    <Stack.Navigator initialRouteName={'home'}>
      {dashboardRoutes?.map(route => {
        return (
          <Stack.Screen
            key={route?.screenID}
            name={route?.name}
            initialParams={{eventId: route?.screenID}}
            component={route?.component}
            options={{headerShown: false}}
          />
        );
      })}
    </Stack.Navigator>
  );
}
