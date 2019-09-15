import environment from './../../environment';

export const fetchAPI = async (url, type, data = null, isPublic = false) => {
    const headers = {
        'content-type': 'application/json',
    };
    if (!isPublic) {
        try {
            const authToken = window.localStorage.getItem('token');
            if (authToken) {
                headers.Authorization = `Bearer ${authToken}`;
            }
        } catch (error) {
            throw error;
        }
    }
    return fetch(`${environment.BASE_URL}${url}`, {
        body: data ? JSON.stringify(data) : null,
        cache: 'no-cache',
        headers,
        method: type, // *GET, POST, PUT, DELETE, etc.
    }).then((response) => {
        if (!response.ok) {
            throw response;
        }
        return response.json();
    }).catch((error) => {
        throw error;
    });
};
