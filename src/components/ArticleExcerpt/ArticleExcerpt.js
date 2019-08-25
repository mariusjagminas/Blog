import React from 'react';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import truncate from 'lodash/truncate';

const ArticleExcerpt = ({ content, length }) => {
	return <p>{truncate(documentToPlainTextString(content), { length: length })}</p>;
};

export default ArticleExcerpt;
