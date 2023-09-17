export function generateUniqueId(existingIds: number[]): number {
    let id = 1;
    while (existingIds.includes(id)) {
        id++;
    }
    existingIds.push(id);  // Add this line to update the array
    return id;
}
