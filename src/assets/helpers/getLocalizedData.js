import truncate from "lodash/truncate"

const getLocalizedData = (data, locale) => {
  const localizedData = data[locale].nodes //Array for each locale
  const fallbackImage = data.fallbackImage.childImageSharp.fluid

  return localizedData.map(data => {
    const image = data.articleImage ? data.articleImage.fluid : fallbackImage
    const text = data.content
      ? data.content.json.content[0].content[0].value
      : null
    const exerpt = truncate(text, { length: 300 })

    return {
      title: data.title,
      date: data.date,
      slug: data.slug,
      exerpt: exerpt,
      image: image,
    }
  })
}

export default getLocalizedData
