import axios from 'axios'

const API_URL = 'http://localhost:8080/'

class TestbackService {
    getBasicMessage() {
        return axios.get(API_URL)
    }
}

export default new TestbackService()