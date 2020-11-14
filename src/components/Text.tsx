import { css } from '@emotion/core';

import { Box, BoxProps } from 'components/Styled';

import styled from 'theme/styled';

type Props = {
	ellipsis?: boolean;
};

const Text = styled(Box)<BoxProps & Props>`
	${p =>
		p.ellipsis &&
		css`
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		`}
`.withComponent('p');

export default Text;
