import { Box } from 'components/Styled';
import Text from 'components/Text';

import styled from 'theme/styled';

const List = styled(Box)`
	list-style: none;
	padding-left: 0;

	& li::before {
		color: ${p => p.theme.colors.primary};
		line-height: 0;
		font-weight: bold;
		padding-right: 8px;
	}
`;

export const UnorderedList = styled(List)`
	& li {
		::before {
			content: '•';
		}
		& li {
			::before {
				content: '◦';
			}
		}
	}
`.withComponent('ul');

export const NumberedList = styled(List)`
	counter-reset: list-counter;
	list-style-type: none;
	& li {
		counter-increment: list-counter;
		::before {
			content: counter(list-counter) '. ';
		}
		& li {
			margin-left: ${p => p.theme.space[3]}px;
			::before {
				content: counters(list-counter, '.');
			}
		}
	}
`.withComponent('ol');

export const AlphabeticalList = styled(NumberedList)`
	& li::before {
		content: counter(list-counter, lower-alpha) ')' !important;
	}
`;

export const ListItem = styled(Text)``.withComponent('li');
