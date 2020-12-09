import { ElementType } from 'react';
import {
	color,
	ColorProps,
	compose,
	flexbox,
	FlexboxProps,
	grid,
	GridProps,
	layout,
	LayoutProps,
	space,
	SpaceProps,
	position,
	PositionProps,
	TypographyProps,
	typography,
	ShadowProps,
	shadow,
	flex,
	flexGrow,
	flexShrink,
	flexBasis,
	justifySelf,
	alignSelf,
	order,
	gridColumn,
	gridRow,
	gridArea,
	justifyItems,
	alignItems,
	justifyContent,
	alignContent,
} from 'styled-system';
import isPropValid from '@emotion/is-prop-valid';

import styled from 'theme/styled';

type FlexSelfProps = Pick<
	FlexboxProps,
	| 'flex'
	| 'flexGrow'
	| 'flexShrink'
	| 'flexBasis'
	| 'justifySelf'
	| 'alignSelf'
	| 'order'
>;
type GridSelfProps = Pick<GridProps, 'gridColumn' | 'gridRow' | 'gridArea'>;
type GridAlignProps = Pick<
	FlexboxProps,
	'justifyItems' | 'alignItems' | 'justifyContent' | 'alignContent'
>;

type SSProps = SpaceProps &
	ColorProps &
	LayoutProps &
	FlexSelfProps &
	GridSelfProps &
	PositionProps &
	TypographyProps &
	ShadowProps;

export type BoxProps = Omit<SSProps, 'color'> & {
	as?: ElementType | keyof JSX.IntrinsicElements;
};
export type FlexProps = BoxProps & FlexboxProps;

export const Box = styled('div', {
	shouldForwardProp: isPropValid,
})<BoxProps>`
	${compose(
		space,
		color,
		layout,
		flex,
		flexGrow,
		flexShrink,
		flexBasis,
		justifySelf,
		alignSelf,
		order,
		gridColumn,
		gridRow,
		gridArea,
		position,
		typography,
		shadow,
	)}
`;

Box.defaultProps = {
	minWidth: 0,
};

export const Flex = styled(Box)<FlexProps>`
	${compose(flexbox)}
	@media not print {
		display: flex;
	}
`;

export const Grid = styled(Box)<BoxProps & GridProps & GridAlignProps>`
	${compose(grid, justifyItems, alignItems, justifyContent, alignContent)}
	@media not print {
		display: grid;
	}
`;
