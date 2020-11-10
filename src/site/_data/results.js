const { netlifyPersonalAccessToken, kwgp5kSiteId } = require('./environment')

const NetlifyAPI = require('netlify')
const client = new NetlifyAPI(netlifyPersonalAccessToken())

module.exports = async function() {
    // const results = await client.listSiteForms({
    const results = await client.listFormSubmissions({
        form_id: '5faaf705b3d68600072ab8dc',
        site_id: kwgp5kSiteId(),
    })
    // return results.json()
    // const racerEmails = results.map(r => r.email)
    // console.log(`Results: ${racerEmails}`)
    return results
}