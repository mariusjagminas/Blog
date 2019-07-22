const getLocalizedData = (data, loc, indexFrom, indexUntil) => {
	const nodes = data.allContentfulArticles.edges;

	const array = nodes
		.map(node => {
			return {
				title: loc === 'pl' ? node.node.titlePl : node.node.titleFr,
				slug: node.node.slug,
				date: node.node.date,
				image: node.node.articleImage || data.file.childImageSharp
			};
		})
		.filter(obj => obj.title) // Discard nodes with empty titles
		.slice(indexFrom, indexUntil);

	return array;
};
export default getLocalizedData;
