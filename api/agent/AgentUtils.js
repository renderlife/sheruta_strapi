module.exports = {
    freeAgentResponse: data => {
        return {
            name: data.name,
            location: data.location,
            logo_url: data.logo_url,
            banner_url: data.banner_url,
            created_at: data.created_at
        }
    }
}