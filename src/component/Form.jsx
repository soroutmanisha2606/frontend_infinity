import React from 'react'

const Form = () => {
    const [formData,setFormData] = React.useState({name:'',firstName:'',lastName:'',senior:'',doj:'',code:'', department: ''});

  const handleSubmit = async(event) =>{
    event.preventDefault();
    try {
        const response = await fetch('http://localhost:3005/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const result = await response.json();
        console.log('Response:', result);
    } catch (error) {
        console.error('Error submitting form:', error);
    }    
  }

  const handleChange = (e) =>{
    console.log("handle change")
setFormData({...formData,[e.target.name]:e.target.value})
  };
  
  return (
    <div>
        <input placeholder='userName' name='name' value={formData.name} onChange={handleChange}/>
        <input placeholder='First Name' name='firstName' value={formData.firstName} onChange={(e)=>handleChange(e)}/>
        <input placeholder='lastname' name='lastName' value={formData.lastName} onChange={(e)=>handleChange(e)}/>
        <input placeholder='seniority' name='senior' value={formData.senior} onChange={(e)=>handleChange(e)}/>
        <input placeholder='DOJ' name='doj' value={formData.doj} onChange={(e)=>handleChange(e)}/>
        <input placeholder='EmployeCode' name='code' value={formData.code} onChange={(e)=>handleChange(e)}/>
        <select name="department" value={formData.department} onChange={handleChange}>
                <option value="">Select Department</option>
                <option value="account">Accounts</option>
                <option value="dev">Development</option>
                <option value="admin">Admin</option>
            </select>
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Form