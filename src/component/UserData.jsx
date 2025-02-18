import React, { useEffect } from 'react'

const UserData = () => {
    const [userData ,setUserData] = React.useState([]);
    const [copiedUserData , setCopieduserData] = React.useState(userData)
    const [name,setName] = React.useState('');
    useEffect(()=>{
        const fetchData = async()=>{
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const fetchedData = await data.json();
   setUserData(fetchedData);
   setCopieduserData(fetchedData)
        }
        fetchData()
    },[]);
    
    const handleChange = (e)=>{
     setName(e.target.value)
    };

    const handleSearch =()=>{
 const filteredSearch = copiedUserData.filter((item)=>(item.name.toLowerCase().includes(name.toLowerCase())));
 setUserData(filteredSearch)
copiedUserData.includes(name)
    }
    console.log("userData-",userData)
  return (<>
  <input placeholder='Enter name' name='name' value={name} onChange={(e)=>handleChange(e)}/>
  <button onClick={handleSearch}>Search</button>
    <div>{userData.map((item)=>{
        return <>

        <div style={{border:'2px solid black', width:"50%",margin:'auto',marginBottom:"10px",marginTop:'10px'}}>

            <h4>Name- {item.name}</h4>
            <h4>Email- {item.email}</h4>
            <h4>Address-{item.username}</h4>
            <h4>Website - {item.website}</h4>

        </div>
        </>
    })}</div>
    </>
  )
}

export default UserData