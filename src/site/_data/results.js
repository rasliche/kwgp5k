const NetlifyAPI = require('netlify')

const client = new NetlifyAPI(process.env.NETLIFY_PERSONAL_ACCESS_TOKEN)

// IR8imZPne2wummThMa3dZ94QpsE81x1zhl_66_GjkJw

module.exports = async function() {
    const results = await client.listSiteSubmissions({
        form_id: 'email-list',
        site_id: 'feb9ae4f-8a80-4d82-bc31-6ab0f0f06c56',
    })
    // return results.json()
    const racerEmails = results.map(r => r.email)
    console.log(`Results: ${racerEmails}`)
    return racerEmails
}