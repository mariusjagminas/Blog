const getLocalizedData = (data, locale) => {
	if (!data[locale]) return [];
	const localizedData = data[locale].nodes; //Array for each locale
	const fallbackImage = data.fallbackImage.childImageSharp.fluid;

	return localizedData.map(data => {
		const image = data.articleImage ? data.articleImage.fluid : fallbackImage;
		const content = data.content ? data.content.json : null;

		return {
			title: data.title,
			date: data.date ? data.date : null,
			slug: data.slug ? data.slug : null,
			content: content,
			image: image
		};
	});
};

export default getLocalizedData;
