import { styled } from 'theme';

import { Box } from './Styled';

const Img = styled(Box)`
	@media print {
		page-break-inside: avoid;
		max-height: 250px;
	}
`.withComponent('img');
Img.defaultProps = {
	maxWidth: '100%',
	maxHeight: '100%',
};

export default Img;
