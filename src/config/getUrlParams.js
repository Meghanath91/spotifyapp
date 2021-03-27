function getUrlParams() {
  let url = window.location.hash.substr(1);
  let accessToken = new URLSearchParams(url).get('access_token')
  return accessToken
}
export default getUrlParams