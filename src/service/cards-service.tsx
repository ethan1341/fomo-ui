export async function getCards(setId:number): Promise<any> {
    return fetch(`http://localhost:4000/sets/${setId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((resp) => resp.json());
}


export default getCards;