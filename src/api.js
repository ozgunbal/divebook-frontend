const options = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
    },
    credentials: "include",
};

export const fetchDives = () => fetch("/dives", options).then(res => res.json());

export const signUp = (email, password) => fetch("/auth/signup", {
    method: "POST",
    ...options,
    body: JSON.stringify({ email, password }),
}).then(response => {
    if (response.status === 401) {
        throw new Error("You already registered with this e-mail!");
    }
    return response.json();
});

export const logIn = (email, password) => fetch("/auth/login", {
    method: "POST",
    ...options,
    body: JSON.stringify({ email, password }),
}).then(response => {
    if (response.status === 401 || response.status === 400) {
        throw new Error("Invalid email or password!");
    }
    return response.json();
});

export const logout = (email, password) => fetch('/auth/logout', options);

export const sendDive = (dive) => fetch('/dives', {
    method: 'POST',
    ...options,
    body: JSON.stringify(dive)
}).then(response => response.json());

export const updateDive = (dive) => fetch(`/dives/${dive.id}`, {
    method: 'PUT',
    ...options,
    body: JSON.stringify(dive)
}).then(response => response.json())

export const removeDive = (diveId) => fetch(`/dives/${diveId}`, {
    method: 'DELETE',
    ...options,
}).then(response => {
    if (response.status === 204) return;
    throw new Error('Dive cannot be deleted.');
});