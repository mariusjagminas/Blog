import styled from 'styled-components';
import { Link } from 'gatsby-plugin-intl';

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
