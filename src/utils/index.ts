export type DeepPartial<T> = {
	[P in keyof T]?: DeepPartial<T[P]>;
};

export const MakeTuple = <T extends string[]>(...args: T) => args;
