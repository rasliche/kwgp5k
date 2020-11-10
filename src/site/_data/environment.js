module.exports = {
    stripePublishableKey: () => {
        if (process.env.CONTEXT === 'production') {
            return process.env.STRIPE_PROD_PUBLISHABLE_KEY
        } else {
            return process.env.STRIPE_TEST_PUBLISHABLE_KEY
        }
    },
    netlifyPersonalAccessToken: () => {
        // Netlify User dashboard as kwgp5k_race_results
        return process.env.NETLIFY_PERSONAL_ACCESS_TOKEN
    }
}