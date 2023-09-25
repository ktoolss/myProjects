export function generateUniqueId(existingIds: number[]): number {
    // Generate a random 5-digit number between 10000 and 99999
    let id = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);

    // Keep generating a new ID while it's in the existing IDs list
    while (existingIds.includes(id)) {
        id = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
    }

    // Once a unique ID is found, add it to the existing IDs list
    existingIds.push(id);

    return id;
}
