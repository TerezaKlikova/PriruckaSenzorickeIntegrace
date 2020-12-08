import { Box } from 'components/Styled';

import { styled } from 'theme';

const Button = styled(Box)`
	border: 0;
	line-height: initial;
	background: none;
	cursor: pointer;
`.withComponent('button');
Button.defaultProps = {
	color: 'text',
	p: 0,
};

export default Button;
