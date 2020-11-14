import { Flex } from 'components/Styled';

import styled from 'theme/styled';

const Wrapper = styled(Flex)`
	position: relative;
	width: 100%;
	max-width: 1140px;
	padding-left: 1rem;
	padding-right: 1rem;
	margin-left: auto;
	margin-right: auto;
`;
Wrapper.defaultProps = {
	flexDirection: 'column',
};

export default Wrapper;
