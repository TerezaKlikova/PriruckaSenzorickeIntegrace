import { styled } from 'theme';

import { Box } from './Styled';

const Img = styled(Box)``.withComponent('img');
Img.defaultProps = {
	maxWidth: '100%',
	maxHeight: '100%',
};

export default Img;
