import { ADD_ONE } from './types';
import { SUB_ONE } from './types';

export const addOne = () => ({
	type: ADD_ONE
});

export const subOne = () => ({
	type: SUB_ONE
})