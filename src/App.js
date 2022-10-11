import logo from './logo.svg';
import './App.css';
import Chart from './Chart.js';



function App() {


  fetch("https://hp-api.herokuapp.com/api/characters")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )




  



  return (
    <div className="App">
      {/* <div className='text-gray-800 p-6 shadow-lg font-bold'>Welcome to Shaunak's website</div>
      <div className='text-gray-800 p-10'>This website has been created using</div>
      <div className='flex justify-center text-left'>
        <div className='p-10 border-2 m-2 rounded-lg w-64'>
          <div className='text-2xl font-bold text-gray-800'>React</div>
          <div className='text-gray-600'>JS</div>
        </div>
        <div className='p-10 border-2 m-2 rounded-lg w-64'>
          <div className='text-2xl font-bold text-gray-800'>Tailwind</div>
          <div className='text-gray-600'>CSS</div>
        </div>
      </div>
      <div className='p-10'>And I'm gonna work with Dharini on my project this sem!</div> */}


      <header className='flex justify-between p-5 shadow-md'>
        <div>Logo goes here</div>
        <div>Navigation links go here</div>
      </header>

        <Chart />
      

      <div className='p-10'>
        <div className='text-2xl font-bold m-10'>The heading goes here</div>
        <div className='container-sm mx-auto justify-center text-left'>
        <div className='flex w-full m-auto'>

          
            <div className='w-1/2 m-5'>
              <div className='border-2 rounded-md h-64 mb-2 bg-blue-200'></div>
              <div className='text-lg font-bold'>Card title 1 goes here</div>
              <div className='text-gray-600'>Card subtitle 1 goes here</div>
            </div>

            <div className='w-1/2 m-5'>
              <div className='border-2 rounded-md h-64 mb-2 bg-blue-300'></div>
              <div className='text-lg font-bold'>Card title 2 goes here</div>
              <div className='text-gray-600'>Card subtitle 2 goes here</div>
            </div>
          
          
        </div>


        <div className='flex w-full m-auto'>

          
            <div className='w-1/2 m-5'>
              <div className='border-2 rounded-md h-64 mb-2 bg-blue-400'></div>
              <div className='text-lg font-bold'>Card title 3 goes here</div>
              <div className='text-gray-600'>Card subtitle 3 goes here</div>
            </div>

            <div className='w-1/2 m-5'>
              <div className='border-2 rounded-md h-64 mb-2 bg-blue-500'></div>
              <div className='text-lg font-bold'>Card title 4 goes here</div>
              <div className='text-gray-600'>Card subtitle 4 goes here</div>
            </div>
          
          
        </div>


      </div>

      </div>

      <footer className='border-t p-10 m-5 text-gray-400'>
        Footer links and info goes here
      </footer>

      
    </div>
  );
}

export default App;
