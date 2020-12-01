export default async function ({ app }) {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const url = 'http://api4front.dev.hismith.ru/token/create'
  await fetch(proxyUrl + url)
    .then((response) => response.text())
    .then((result) => {
      const { token } = JSON.parse(result)
      app.$axios.setHeader('X-AUTH-TOKEN', token)
    })
    .catch(() =>
      console.log('Can’t access ' + url + ' response. Blocked by browser?')
    )
}
