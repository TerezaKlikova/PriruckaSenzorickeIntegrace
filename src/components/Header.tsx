/** @jsxImportSource @emotion/core */
import React, { FC, useState } from 'react';
import { css } from '@emotion/core';

import { Box, Flex } from 'components/Styled';
import Wrapper from 'components/Wrapper';
import Link from 'components/Link';

import { InvertFocusStyle, Theme } from 'theme';

import { ReactComponent as HamburgerIcon } from 'assets/hamburger-menu.svg';

type Props = {
	items: {
		href: string;
		title: string;
	}[];
};

const Header: FC<Props> = ({ items }) => {
	const [expanded, setExpanded] = useState(false);
	return (
		<Box as="header" bg="primary" position="sticky" top={0} zIndex={1}>
			<Wrapper
				py={2}
				flexDirection={['column', 'row']}
				alignItems={['stretch', 'center']}
				justifyContent="space-between"
			>
				<Flex justifyContent="space-between">
					<Link
						p={2}
						ml={-2}
						href="#"
						fontWeight="bold"
						fontSize="lg"
						color="white"
						css={css`
							&:focus {
								${InvertFocusStyle}
							}
						`}
					>
						Příručka senzorické integrace
					</Link>
					<Box
						as="button"
						aria-expanded={expanded}
						aria-label={expanded ? 'zavřít menu' : 'menu'}
						onClick={() => setExpanded(e => !e)}
						display={['block', 'none']}
						css={css`
							background: none;
							border: none;
							cursor: pointer;
							&:focus {
								${InvertFocusStyle}
							}
						`}
					>
						<HamburgerIcon width={26} />
					</Box>
				</Flex>
				<nav>
					<Flex
						as="ul"
						flexDirection={['column', 'row']}
						px={['1rem', 0]}
						my={0}
						ml={-2}
						css={(theme: Theme) => css`
							@media (max-width: ${theme.breakpoints[0]}) {
								position: absolute;
								top: 100%;
								right: 0;
								left: 0;
								background-color: ${theme.colors.primaryLight};
								visibility: hidden;
								opacity: 0;
								transform: translateY(-100%);
								transition: transform 0.3s ease-out, opacity 0.3s ease-out;

								${expanded &&
								css`
									visibility: visible;
									opacity: 1;
									transform: translateY(0);
								`}
							}
						`}
					>
						{items.map(i => (
							<Box key={i.href} as="li" py={3}>
								<Link
									p={2}
									href={`#${i.href}`}
									color="white"
									css={css`
										&:focus {
											${InvertFocusStyle}
										}
									`}
								>
									{i.title}
								</Link>
							</Box>
						))}
					</Flex>
				</nav>
			</Wrapper>
		</Box>
	);
};

export default Header;
