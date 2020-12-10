import { styled } from 'theme';

import { Box } from './Styled';

const Img = styled(Box)`
	max-height: 300px;
	@media print {
		max-width: 30%;
		page-break-inside: avoid;
		&:only-child {
			display: block;
			margin: 0 auto;
			max-width: 50%;
		}
	}
`.withComponent('img');
Img.defaultProps = {
	maxWidth: '100%',
};

export default Img;
