/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import DashboardStack from './dashboard.navigation';

export const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();
const routes = [
  {
    name: 'dashboardStack',
    component: DashboardStack,
  },
];

const Root = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={'dashboardStack'}>
        {routes?.map(route => {
          return (
            <Stack.Screen
              key={route?.name}
              name={route?.name}
              component={route?.component}
              options={{headerShown: false}}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
