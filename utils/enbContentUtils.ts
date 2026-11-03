function pickAnchorsForContent(
  doc: Document,
  textContent: string = "enb:ad",
): Element[] {
  if (!doc || !textContent) return [];
  const anchors = doc.querySelectorAll("a");
  const result: Element[] = [];
  anchors.forEach((a) => {
    if (a.textContent === textContent) {
      result.push(a);
    }
  });
  return result;
}

export function pickAndReplaceAnchorToAdIframe(doc: Document): Document {
  if (!doc) return doc;
  try {
    const anchors = pickAnchorsForContent(doc);
    anchors.forEach((a: Element, i: number) => {
      const iframe = doc.createElement("iframe");
      iframe.setAttribute("id", `ad-iframe-${i}`);
      iframe.setAttribute("src", `https://example.com`);
      iframe.setAttribute("height", "200");
      iframe.setAttribute("width", "315");
      iframe.setAttribute("loading", "lazy");
      iframe.setAttribute("data_href", `${a.getAttribute("href")}`);
      iframe.setAttribute("scrolling", "no");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("sandbox", "");
      const iframeWrapper = doc.createElement("div");
      iframeWrapper.appendChild(iframe);
      iframeWrapper.setAttribute("class", "iframe-ad");
      const parent = a?.parentNode;
      parent?.insertBefore(iframeWrapper, a);
      parent?.removeChild(a);
    });
    return doc;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
