// This function provides a checkout screen for a racer using Stripe given their
// chosen race option.
// If successfully signed up, send the racer info to the racer-signup function
exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: "meow - checkout function",
    }
}