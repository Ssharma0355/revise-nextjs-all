import Link from "next/link";

export default async function Users(){

    const fetchData = await fetch("https://jsonplaceholder.typicode.com/users")
    const pureData = await fetchData.json();
    console.log(pureData)
    return(
        <div>
               <ul>
            {pureData.map((user:{id: number, name: string})=>(
                <li key={user.id}>
                    <Link href={`/users/${user.id}`}><h3>{user.name}</h3></Link>
                    
                    </li>
            ))}
             </ul>
        </div>

    ) 
}