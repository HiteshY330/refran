import { useState } from "react";
import "./styles.css";
import { v4 as uuid } from "uuid";

export default function App() {
  const [dataa, setDataa] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const _id = uuid();
  const submitEvent = (e) => {
    e.preventDefault();
    const arr = {
      id: _id,
      name: name,
      age: age,
      email: email,
      contact: contact
    };
    setDataa([...dataa, arr]);
    setName("");
    setAge("");
    setEmail("");
    setContact("");
  };

  const deleteItem = (id) => {
    const updateValue = dataa.filter((fdta) => fdta.id !== id);
    setDataa(updateValue);
  };

  const editData = (id) => {
    const updateValue = dataa.filter((fdta) => fdta.id === id);
    const newValue = dataa.filter((fdta) => fdta.id !== id);
    setDataa(newValue);
    setName(updateValue[0].name);
    setAge(updateValue[0].age);
    setEmail(updateValue[0].email);
    setContact(updateValue[0].contact);
  };

  return (
    <div className="App">
      <h1>Hello </h1>
      <form onSubmit={submitEvent}>
        <div>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <input type="submit" />
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {dataa.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                  <td>
                    <button
                      onClick={() => {
                        editData(item.id);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        deleteItem(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
