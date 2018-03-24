const getToken = () => localStorage.getItem('token') || "";

const getHeaders = () => ({
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `JWT ${getToken()}`,
    }
})

export const fetchDives = () => fetch("/dives", getHeaders()).then(res => res.json());

export const signUp = (email, password) => fetch("/auth/signup", {
    method: "POST",
    ...getHeaders(),
    body: JSON.stringify({ email, password }),
}).then(response => {
    if (response.status === 401) {
        throw new Error("You already registered with this e-mail!");
    }
    return response.json();
});

export const logIn = (email, password) => fetch("/auth/login", {
    method: "POST",
    ...getHeaders(),
    body: JSON.stringify({ email, password }),
}).then(response => {
    if (response.status === 401 || response.status === 400) {
        throw new Error("Invalid email or password!");
    }
    return response.json();
});

export const logout = (email, password) => fetch('/auth/logout', getHeaders());

export const sendDive = (dive) => fetch('/dives', {
    method: 'POST',
    ...getHeaders(),
    body: JSON.stringify(dive)
}).then(response => response.json());

export const updateDive = (dive) => fetch(`/dives/${dive.id}`, {
    method: 'PUT',
    ...getHeaders(),
    body: JSON.stringify(dive)
}).then(response => response.json())

export const removeDive = (diveId) => fetch(`/dives/${diveId}`, {
    method: 'DELETE',
    ...getHeaders(),
}).then(response => {
    if (response.status === 204) return;
    throw new Error('Dive cannot be deleted.');
});