
export async function refreshAccessToken(): Promise<string> {

    const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `mutation { refresh { accessToken } }`,
        }),
    });

    const { data, errors } = await response.json();

    if (errors) throw new Error('Refresh failed');

    console.log(data.refresh);

    return data.refresh.accessToken;
}