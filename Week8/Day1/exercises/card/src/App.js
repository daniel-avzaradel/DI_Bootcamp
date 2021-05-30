import './App.css';
import Card from './Card'
import 'tachyons';

const robots = [
  {
    id: '1',
    name: 'Daniel',
    email: 'daniel@gmail.com'
  },
  {
    id: '2',
    name: 'Gavin',
    email: 'gavin@gmail.com'
  },
  {
    id: '3',
    name: 'Hadas',
    email: 'hadas@gmail.com'
  },
  {
    id: '4',
    name: 'Josh',
    email: 'josh@gmail.com'
  },
  {
    id: '5',
    name: 'Yechiel',
    email: 'yechiel@gmail.com'
  }
]

function App() {
  return (
    <>

    {
      robots.map((item, i) => {
        return <Card data={item} key={i} />
      })
    }

    {/* {
      robots.map((item, i) => {
        return <Card name={item.name} email={item.email} id={item.id} key={i} />
      })
    } */}

    {/* <Card name={'Daniel'} email={'daniel@gmail.com'} id={'1'} />
    <Card name={'Galvin'} email={'gavin@gmail.com'} id={'2'} />
    <Card name={'Hadas'} email={'hadas@gmail.com'} id={'3'} />
    <Card name={'Josh'} email={'josh@gmail.com'} id={'4'} />
    <Card name={'Yechiel'} email={'yechiel@gmail.com'} id={'5'} /> */}


      {/* <Card name={robots[0].name} email={robots[0].email} id={robots[0].id}> */}
    </>
  );
}

export default App;
