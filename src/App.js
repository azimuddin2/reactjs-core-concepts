import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  const decreaseCount = () => {
    const newCount = count - 1;
    setCount(newCount);
  }


  const persons = [
    { id: 1, name: 'Azim', job: 'Full Stack Web Developer (Front-end & Back-end)' },
    { id: 2, name: 'Masuam', job: 'Graphic Designer' },
    { id: 3, name: 'Rakib', job: 'MERN Developer' },
    { id: 4, name: 'Rahat', job: 'WordPress Developer' },
  ]

  const products = [
    { name: 'Laptop', price: 90000 },
    { name: 'Phone', price: 50000 },
    { name: 'Tablet', price: 40000 },
    { name: 'watch', price: 10000 }
  ]

  return (
    <div className="App">
      <div className='count-container'>
        <h1>Count: {count}</h1>
        <button style={{marginRight: '10px'}} onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
      </div>
      <h1>Q) What is JSX? <span>Ans: JavaScript XML.</span></h1>
      {
        persons.map(person => <Person
          key={person.id}
          id={person.id}
          name={person.name}
          job={person.job}
        ></Person>)
      }

      <h1>My Products</h1>
      {
        products.map(product => <Product
          name={product.name}
          price={product.price}
        ></Product>)
      }

      {/* <Person id='1' name='Azim' job='Web Developer'></Person>
      <Person id='2' name='Masuam' job='Graphic Design'></Person>
      <Person id='3' name='Rakib' job='MERN Developer'></Person> */}

      <h1>New Component YAY</h1>
      <Friend language='HTML' description='The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.' release='1993; 29 years ago'></Friend>
      <Friend language='CSS' description='Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.' release='17 December 1996; 25 years ago'></Friend>
      <Friend language='JavaScript' description='JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.' release='December 4, 1995; 26 years ago'></Friend>
      <Friend language='React.js' description='React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies' release='May 29, 2013; 9 years ago'></Friend>

      <ExternalUsers></ExternalUsers>
    </div>
  );
}



function Person(props) {
  const { id, name, job } = props;
  return (
    <div className='person'>
      <h1>ID: {id}</h1>
      <h2>Name: {name}</h2>
      <p>Job: {job}</p>
    </div>
  )
}

function Friend(props) {
  console.log(props)
  return (
    <div className='friend'>
      <h2>{props.language}</h2>
      <p>Description: {props.description}</p>
      <p>Release: {props.release}</p>
    </div>
  );
}

function Product(props) {
  const { name, price } = props;
  return (
    <div className='product'>
      <h2>Name: {name}</h2>
      <p>Price: {price}</p>
    </div>
  );
}

const ExternalUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1>External Users: {users.length}</h1>
      {
        users.map(user => <User
          id={user.id}
          name={user.name}
          email={user.email}
        ></User>)
      }
    </div>
  );
}

function User(props) {
  const { id, name, email } = props;
  return (
    <div className='user'>
      <h1>Id: {id}</h1>
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
    </div>
  );
}

export default App;
