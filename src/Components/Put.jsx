import { useLoaderData } from "react-router-dom";

const Put = () => {
  const data = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const updatedUser = { name, email };

    fetch(`http://localhost:5000/users/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount){
            alert('Updated successfully')
        }
      });
  };
  return (
    <div className="text-center">
      <h2>This is put route</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="name"
          placeholder="Type here"
          defaultValue={data?.name}
          className="input input-bordered w-full max-w-xs mb-4"
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Type here"
          defaultValue={data?.email}
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <button className="btn mt-4">Update</button>
      </form>
    </div>
  );
};

export default Put;
