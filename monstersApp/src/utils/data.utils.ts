export const getData = async<T>(url:string): Promise<T> => {
    const respoonse = await fetch(url);
    return await respoonse.json();
}