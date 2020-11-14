import {
	ThemeProvider as EmotionThemeProvider,
	useTheme as useEmotionTheme,
} from 'emotion-theming';
import { mergeWith } from 'lodash-es';
import React, { FC } from 'react';

import { DeepPartial } from 'utils';

const theme = {
	colors: {
		primary: '#424242',
		primaryLight: '#616161',
		text: 'black',
	},
	breakpoints: ['52em', '76em'],
	fontSizes: { sm: 14, md: 16, lg: 20, xl: 24 },
	fontFamily: 'Raleway',
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};

export type Theme = typeof theme;
export type PartialTheme = DeepPartial<Theme>;

export const useTheme = useEmotionTheme as () => Theme;

type Props = {
	themeOverrides?: PartialTheme;
};
export const ThemeProvider: FC<Props> = ({ themeOverrides = {}, children }) => (
	<EmotionThemeProvider theme={mergeWith({}, theme, themeOverrides)}>
		{children}
	</EmotionThemeProvider>
);

export * from './GlobalStyles';
export { default as GlobalStyles } from './GlobalStyles';
export { default as styled } from './styled';
