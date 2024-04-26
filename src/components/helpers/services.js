class Services {

    baseUrl = 'http://localhost:3000';

    getResources = async (url) => {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Couldn't fetch url: ${url}, status: ${res.status}`);
        }

        return await res.json();
    } 

    getAllVacany = async (title, location, employment, limit) => {

        const res = await this.getResources(`${this.baseUrl}/jobs?title_like=${title}&location_like=${location}&employment_type_like=${employment}`)

        return await res;
    }

    getFilters = async () => {
        const res = await this.getResources(`${this.baseUrl}/filters`)

        return await res;
    }

    getListQA = async () => {
        const res = await this.getResources(`${this.baseUrl}/catalogQA`)

        return await res;
    }

    getListPerformers = async (serviceId, performerId = '') => {
        const res = await this.getResources(`${this.baseUrl}/performers/${performerId}`)

        const filteredPerformers = serviceId ? res.filter(performer => performer.servciesId.includes(serviceId)) : res

        return await filteredPerformers;
    }

}

export default Services;