module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-15766.c289.us-west-1-2.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || 15766,
        password: process.env.REDIS_PASS || 'QJGqw4VzawCKCUoZqK1u2MFEKlmbq5jT',
    }
}
