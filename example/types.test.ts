/* eslint-disable @typescript-eslint/no-unused-vars */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabScreenProps,
} from '@react-navigation/material-top-tabs';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import { expectTypeOf } from 'expect-type';

type RootStackParamList = {
  Home: NavigatorScreenParams<HomeDrawerParamList>;
  PostDetails: { id: string };
  Login: undefined;
  NotFound: undefined;
};

type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

type HomeDrawerParamList = {
  Feed: NavigatorScreenParams<FeedTabParamList>;
  Account: undefined;
};

type HomeDrawerScreenProps<T extends keyof HomeDrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<HomeDrawerParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

type FeedTabParamList = {
  Popular: undefined;
  Latest: undefined;
};

type FeedTabScreenProps<T extends keyof FeedTabParamList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<FeedTabParamList, T>,
    HomeDrawerScreenProps<keyof HomeDrawerParamList>
  >;

const Stack = createStackNavigator<RootStackParamList>();
const NativeStack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<HomeDrawerParamList>();
const BottomTab = createBottomTabNavigator<FeedTabParamList>();
const MaterialTopTab = createMaterialTopTabNavigator<FeedTabParamList>();
const MaterialBottomTab = createMaterialBottomTabNavigator<FeedTabParamList>();

const HomeScreen = ({ navigation, route }: RootStackScreenProps<'Home'>) => {
  expectTypeOf(route.name).toEqualTypeOf<'Home'>();
  expectTypeOf(route.name).not.toEqualTypeOf<'Homee'>();
};
