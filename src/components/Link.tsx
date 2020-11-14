import { Box } from 'components/Styled';

import { styled } from 'theme';

const Link = styled(Box)`
	text-decoration: none;
`.withComponent('a');
Link.defaultProps = {
	color: 'text',
};

export default Link;
