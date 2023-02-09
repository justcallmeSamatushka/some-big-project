import { classNames } from './classNames';

describe('classNames', () => {
	test('with only first param', () => {
		expect(classNames('someClass')).toBe('someClass');
	});

	test('with additional class', () => {
		const expected = 'someClass class1 class2';
		expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
	});

	test('with mods', () => {
		const expected = 'someClass class1 class2 hovered collapsed';
		expect(
			classNames('someClass', { hovered: true, collapsed: true }, [
				'class1',
				'class2',
			]),
		).toBe(expected);
	});

	test('with mods with false', () => {
		const expected = 'someClass class1 class2 hovered';
		expect(
			classNames('someClass', { hovered: true, collapsed: false }, [
				'class1',
				'class2',
			]),
		).toBe(expected);
	});
});
