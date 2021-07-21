export async function getGroups(

): Promise<any> {
    return fetch(`http://localhost:4000/groups`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((resp) => resp.json());
}


export default getGroups;