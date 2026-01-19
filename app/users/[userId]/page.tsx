export default async function Users() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users)
  
    return (
      <ul>
        {users.map((user: { id: number; name: string }) => (
          <li key={user.id}>
            <a href={`/users/${user.id}`}>{user.name}</a>
            <a href={`/users/${user.id}`}>{user.name}</a>

          </li>
        ))}
      </ul>
    );
  }
  