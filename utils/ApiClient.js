import { GET } from "@/app/api/geocoding/route";

export class ApiClient {

    async getRequest(location) {
        const response = await GET(location);
        
        return response ? response.data : null;
    }
}
