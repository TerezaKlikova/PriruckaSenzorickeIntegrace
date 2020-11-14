import { useLayoutEffect, useState } from 'react';

const useHeaderHeight = () => {
	const [height, setHeight] = useState(0);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useLayoutEffect(() => {
		setHeight(
			document.querySelector('header')?.getBoundingClientRect()?.height ?? 0,
		);
	});

	return height;
};

export default useHeaderHeight;
