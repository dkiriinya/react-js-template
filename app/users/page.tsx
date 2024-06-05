import React, { cache } from "react";

const UsersPage = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',
    {cache: 'no-store'}
    );
    const users = await res.json();

    return (
        <div>
            <h1>Users</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((user: any) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default UsersPage;