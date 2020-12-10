/** @jsxImportSource @emotion/core */
import { css } from '@emotion/core';
import React, { FC, useState } from 'react';

import { Box, Flex } from 'components/Styled';
import Wrapper from 'components/Wrapper';
import Link from 'components/Link';
import Button from 'components/Button';

import { InvertFocusStyle, Theme } from 'theme';

import { ReactComponent as HamburgerIcon } from 'assets/hamburger-menu.svg';
import { ReactComponent as Icon } from 'assets/icon.svg';

type Props = {
	items: {
		onClick?: () => void;
		href?: string;
		title: string;
	}[];
};

const Header: FC<Props> = ({ items }) => {
	const [expanded, setExpanded] = useState(false);
	return (
		<Box
			as="header"
			bg="primary"
			position="sticky"
			top={0}
			zIndex={1}
			css={css`
				@media print {
					display: none;
				}
			`}
		>
			<Wrapper
				py={2}
				flexDirection={['column', 'row']}
				alignItems={['stretch', 'center']}
				justifyContent="space-between"
			>
				<Flex justifyContent="space-between">
					<Link
						display="flex"
						p={2}
						ml={-2}
						href="#"
						fontWeight="bold"
						fontSize="lg"
						color="white"
						css={css`
							align-items: center;
							&:focus {
								${InvertFocusStyle}
							}
						`}
					>
						<Box mr={2}>
							<Icon height={30} />
						</Box>
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
							<Flex key={i.title} as="li" py={3}>
								{i.href ? (
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
								) : (
									<Button
										p={2}
										onClick={i.onClick}
										color="white"
										css={css`
											&:focus {
												${InvertFocusStyle}
											}
										`}
									>
										{i.title}
									</Button>
								)}
							</Flex>
						))}
					</Flex>
				</nav>
			</Wrapper>
		</Box>
	);
};

export default Header;
