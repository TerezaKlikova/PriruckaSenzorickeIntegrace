export type DeepPartial<T> = {
	[P in keyof T]?: DeepPartial<T[P]>;
};

export const MakeTuple = <T extends string[]>(...args: T) => args;

export const MapChapters = (
	id: string,
	variant: 'podkapitola' | 'aktivita',
	arr: string[],
) => arr.map((c, i) => ({ id: `${id}-${variant}-${i}`, title: c }));
