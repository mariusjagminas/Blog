export const plainTextFromRichText = document => {
  return document
    .filter(item => item.nodeType == "paragraph")
    .map(item =>
      item.content.reduce(
        (prevValue, nextValue) =>
          nextValue.value ? prevValue.concat(nextValue.value) : "",
        ""
      )
    )
    .join(",")
}

// Return plain text string from Contenful Rich Text document
