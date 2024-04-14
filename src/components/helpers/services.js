class Services {

    baseUrl = 'https://fakestoreapi.com';

    getResources = async (url) => {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Couldn't fetch url: ${url}, status: ${res.status}`);
        }

        return await res.json();
    } 

    getAllVacany = async (type = 'all', location = 'all') => {
        const res = await this.getResources(`${this.baseUrl}/vacancy?type=${type}?location=${location}`)

        return res;
    }

}

export default Services;