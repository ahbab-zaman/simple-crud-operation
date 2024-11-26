function App() {


  const handleAddUser = (event) =>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value
      const email = form.email.value;
      const user = {name, email};
      console.log(user)
      fetch('http://localhost:5000/users',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        form.reset()
      })


  }

  return (
    <div className="container py-12 space-y-3">
      <h1>Simple CRUD operation website</h1>
      <form onSubmit={handleAddUser}>
      <input type="text" placeholder="Type here" name="name" className="input input-bordered w-full mb-4" />
      <br />
     
      <input type="email" name="email" placeholder="Type here" className="input input-bordered w-full" />
    <div className="mt-4">
    <button className="btn mr-4">Add</button>
    </div>
      </form>
    </div>
  )
}

export default App
