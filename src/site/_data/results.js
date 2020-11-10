const { netlifyPersonalAccessToken, kwgp5kSiteId } = require('./environment')

const NetlifyAPI = require('netlify')
const client = new NetlifyAPI(netlifyPersonalAccessToken())

module.exports = async function() {
    const results = await client.listSiteForms({
    // const results = await client.listFormSubmissions({
        form_id: '5faabd3e58099c00076a057d',
        site_id: kwgp5kSiteId(),
    })
    // return results.json()
    // const racerEmails = results.map(r => r.email)
    // console.log(`Results: ${racerEmails}`)
    return results
}