const { netlifyPersonalAccessToken, kwgp5kSiteId } = require('./environment')

const NetlifyAPI = require('netlify')
const client = new NetlifyAPI(netlifyPersonalAccessToken())

module.exports = async function() {
    // const results = await client.listSiteForms({
    const resultsFormResponse = await client.listFormSubmissions({
        form_id: '5faaf705b3d68600072ab8dc',
        site_id: kwgp5kSiteId(),
    })

    const registerFormResponse = await client.listFormSubmissions({
        form_id: '5faabd3e58099c00076a057d',
        site_id: kwgp5kSiteId(),
    })
    // console.log(registerFormResponse)

    // get list of emails that are in the registered form
    const registeredEmails = registerFormResponse.map(r => {
        console.log(r.data.email)
        return r.data.email
    })

    // filter results that have registered
    const filteredResultsResponses = resultsFormResponse.filter(r => {
        return registeredEmails.includes(r.data.email)
    })

    // get necessary info from filtered results
    const raceResults = filteredResultsResponses.map(r => {
        const { name, email, distance, time, fuel, location, spirit, ...rest } = r.data
        return { name, email, distance, time, fuel, location, spirit, }
    })
    
    return raceResults
}