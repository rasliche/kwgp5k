module.exports = {
    stripePublishableKey: () => {
        if (process.env.CONTEXT === 'production') {
            return process.env.STRIPE_PROD_PUBLISHABLE_KEY
        } else {
            return process.env.STRIPE_TEST_PUBLISHABLE_KEY
        }
    }
}