// This function provides a checkout screen for a racer using Stripe given their
// chosen race option.
// If successfully signed up, submit formdata to a signup form
const stripeApiSecret = () => {
    if (process.env.CONTEXT === 'production') {
        return process.env.STRIPE_PROD_API_SECRET
    } else {
        console.log('running in dev')
        return process.env.STRIPE_TEST_API_SECRET
    }
}

const stripe = require('stripe')(process.env.STRIPE_PROD_API_SECRET);

const products = require('../site/_data/races.json')

exports.handler = async ({ body }) => {
    try {
        const { sku } = JSON.parse(body)
        const product = products.find(p => p.sku === sku)
        console.log(product)
        
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        unit_amount: product.price,
                        product_data: {
                            name: product.title,
                            description: product.details,
                        }
                    },
                    quantity: 1,
                }
            ],
            shipping_address_collection: {
                allowed_countries: ['US']
            },
            mode: 'payment',
            // This is always the production URL
            success_url: `${process.env.URL}/register`,
            cancel_url: `${process.env.URL}`,
        })

        return {
            statusCode: 200,
            body: JSON.stringify(session.id),
        }
    } catch (error) {
        console.log(error)
        return {
            statusCode: 500,
            body: error.toString()
        }
    }
}
