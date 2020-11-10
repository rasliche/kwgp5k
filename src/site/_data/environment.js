module.exports = {
    stripePublishableKey: () => {
        if (process.env.CONTEXT === 'production') {
            return process.env.STRIPE_PROD_PUBLISHABLE_KEY
        } else {
            console.log('running in dev')
            return process.env.STRIPE_TEST_PUBLISHABLE_KEY
        }
    },
    stripeApiSecret: () => {
        if (process.env.CONTEXT === 'production') {
            return process.env.STRIPE_PROD_API_SECRET
        } else {
            console.log('running in dev')
            return process.env.STRIPE_TEST_API_SECRET
        }
    },
    netlifyPersonalAccessToken: () => {
        // Netlify User dashboard as kwgp5k_race_results
        return process.env.NETLIFY_PERSONAL_ACCESS_TOKEN
    },
    kwgp5kSiteId: () => {
        // siteId for API access
        return process.env.KWGP5K_SITE_ID
    }
}