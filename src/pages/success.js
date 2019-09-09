import React from 'react';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import styled from 'styled-components';
import ReturnToLink from '../components/ReturnToLink/ReturnToLink';
import { injectIntl } from 'gatsby-plugin-intl';

const Wrapper = styled.div`
	max-width: 1360px;
	height: calc(100vh - 228px);
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${({ theme }) => theme.bright};
`;

const H2 = styled.h2`
	${({ theme }) => theme.mq.tablet} {
		font-size: ${({ theme }) => theme.font.size.xl};
	}
`;

const Index = ({ intl }) => (
	<MainTemplate>
		<Wrapper>
			<H2>{intl.formatMessage({ id: 'success' })}</H2>
			<ReturnToLink text={intl.formatMessage({ id: 'go_back_link' })} />
		</Wrapper>
	</MainTemplate>
);

export default injectIntl(Index);
//FIXME: After delivering a message redirection is always to a polish success page '/success'
// It's look like a problem is on Netlify side, because on <form> tag atribute action has correct path
// egz. action='/en/success"
