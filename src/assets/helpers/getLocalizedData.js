const getLocalizedData = (data, locale) => {
  const localizedData = data[locale].nodes //Array for each locale
  const fallbackImage = data.fallbackImage.childImageSharp.fluid

  return localizedData.map(data => {
    const image = data.articleImage ? data.articleImage.fluid : fallbackImage
    const document = data.content ? data.content.json : null

    return {
      title: data.title,
      date: data.date,
      slug: data.slug,
      document: document,
      image: image,
    }
  })
}

export default getLocalizedData
