export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        city: string;
        zipcode: string;
    };
}

export const fetchUsers = async (): Promise<User[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return response.json();
}
