function normalizeURL(urlString) {
  const urlObj = new URL(urlString);
  const hostPath =`${urlObj.hostname}${urlObj.pathname}`;
  if (hostPath.endsWith("/")) {
    return hostPath.slice(0, -1);
  }
  return hostPath;
}

module.exports = { normalizeURL };
