import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby-plugin-intl';
import { injectIntl } from 'gatsby-plugin-intl';

const StyledDiv = styled.div`
	width: 100%;
	min-height: calc(100vh - 227px);
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Text = styled.h2`
	font-size: 30px;
	width: 200px;
	text-align: center;
	${({ theme }) => theme.mq.laptop} {
		font-size: 55px;
		width: 450px;
	}
`;

const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.secondaryDark};
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

const ReturnToLink = ({ text, intl }) => {
	return (
		<StyledDiv>
			<Text>{text}</Text>
			<StyledLink to={'/'}>{`← ${intl.formatMessage({ id: 'go_back_link' })}`}</StyledLink>
		</StyledDiv>
	);
};

export default injectIntl(ReturnToLink);

// FIXME: make content unavailable reusable, or create new 404 page with link 'go back to main page'
