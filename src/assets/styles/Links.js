import styled from 'styled-components';
import { Link } from 'gatsby-plugin-intl';

const StyledLink = styled(Link)`
	position: absolute;
	bottom: 0;
	text-decoration: none;
	padding: 20px;
	width: 120px;
	color: ${({ theme }) => theme.primary};
	transition: color 0.2s ease-in-out;
	${({ theme }) => theme.mq.tablet} {
		width: auto;
	}
	&:hover {
		color: ${({ theme }) => theme.secondary};
	}
`;

export const LinkToPrevious = styled(StyledLink)`
	left: 0;
`;

export const LinkToNext = styled(StyledLink)`
	right: 0;
`;

export const LinkFramed = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.primaryLight};
	border: 1px solid ${({ theme }) => theme.grey};
	border-radius: 3px;
	position: relative;
	padding: 6px 30px;
	transition-property: background-color, border;
	transition-duration: 0.5s;
	&:before {
		content: '';
		position: absolute;
		top: 2px;
		bottom: 2px;
		left: 2px;
		right: 2px;
		border: 1px solid ${({ theme }) => theme.grey};
		border-radius: 3px;
	}

	&:hover {
		background: ${({ theme }) => theme.secondaryLight};
		border: 1px solid ${({ theme }) => theme.secondary};

		:before {
			border: 1px solid ${({ theme }) => theme.secondary};
		}
	}
`;
