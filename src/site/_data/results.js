const { netlifyPersonalAccessToken, kwgp5kSiteId } = require('./environment')

const NetlifyAPI = require('netlify')
const client = new NetlifyAPI(netlifyPersonalAccessToken())

module.exports = async function() {
    const results = await client.listSiteSubmissions({
        form_id: 'email-list',
        site_id: kwgp5kSiteId(),
    })
    // return results.json()
    // const racerEmails = results.map(r => r.email)
    // console.log(`Results: ${racerEmails}`)
    return results
}