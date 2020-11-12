const { netlifyPersonalAccessToken, kwgp5kSiteId } = require('./environment')

const NetlifyAPI = require('netlify')
const client = new NetlifyAPI(netlifyPersonalAccessToken())

module.exports = async function() {
    // const results = await client.listSiteForms({
    const response = await client.listFormSubmissions({
        form_id: '5faaf705b3d68600072ab8dc',
        site_id: kwgp5kSiteId(),
    })

    const results = response.map(r => {
        const { name, email, distance, time, fuel, location, spirit, ...rest } = r.data
        return { name, email, distance, time, fuel, location, spirit, }
    })
    // return results.json()
    // const racerEmails = results.map(r => r.email)
    // console.log(`Results: ${racerEmails}`)
    return results
}