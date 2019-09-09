import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby-plugin-intl';

const StyledDiv = styled.div``;

const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.secondaryDark};
	text-decoration: none;
	font-size: 19px;
	opacity: 1;
	transition: opacity 0.2 ease-in-out;
	&:hover {
		opacity: 0.7;
	}
	${({ theme }) => theme.mq.laptop} {
		font-size: 35px;
	}
`;

const ReturnToLink = ({ text, path }) => {
	return (
		<StyledDiv>
			<StyledLink to={`${path}`}>{`← ${text}`}</StyledLink>
		</StyledDiv>
	);
};

export default ReturnToLink;

ReturnToLink.defaultProps = {
	path: '/',
	text: null
};
