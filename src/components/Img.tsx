import { styled } from 'theme';

import { Box } from './Styled';

const Img = styled(Box)`
	@media print {
		page-break-inside: avoid;
		max-height: 250px;
		max-width: 33%;
	}
`.withComponent('img');
Img.defaultProps = {
	maxWidth: '100%',
	maxHeight: '100%',
};

export default Img;
