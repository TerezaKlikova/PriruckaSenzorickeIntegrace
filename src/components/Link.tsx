import { Box, BoxProps } from 'components/Styled';

import { styled } from 'theme';

const Link = styled(Box)<BoxProps & { underline?: boolean; noLink?: boolean }>`
	pointer-events: all;
	${p => !p.underline && 'text-decoration: none;'}
	${p => p.noLink && '::after { display: none; }'}
`.withComponent('a');
Link.defaultProps = {
	color: 'primary',
};

export default Link;
