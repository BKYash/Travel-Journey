
import './App.css';
import Nav from './Nav'
import CardDetails from './CardDetails'
import data from './data'
function App() {
  const cards =data.map(item=>{
    return(
    <CardDetails
    key={item.id}
    img= {item.img}
    country={item.location}
    name={item.name}
    date={item.date}
    desc={item.desc}
    map={item.map}
    />
    )
  })
  return (
    <div >

      <Nav/>
      <section  className='App'>
      {cards}
      </section>
    
    </div>
  );
}

export default App;
