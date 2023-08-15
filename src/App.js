
import './App.css';
import HomeTitle from './components/hometitle';
import TextEng from './components/texteng';
import IntroEng from './components/introeng';
import IntroKor from './components/introkor';
import TextKor from './components/textkor';
import MainTab from './components/maintab';
import ImageGrid from './components/imagegrid';

function App() {
  return (
    <div className="App">
      <header className="flex flex-row App-header">
        <div className='basis-4/5 max-sm:basis-full'>
          <HomeTitle />

        <section className='flex flex-wrap w-full'>
          <div className='grow'>
          < IntroEng />
          </div>

          <div className='grow'>
          < IntroKor />
          </div>
        </section>

        <ImageGrid />

        <section className='flex flex-wrap w-full'>
          <div className='grow'>
          < TextEng />
          </div>

          <div className='grow'>
          < TextKor />
          </div>
        </section>

        </div>

        <div className='basis-1/5 max-sm:hidden'>
          <MainTab />
        </div>

        
        
      </header>
    </div>
  );
}

export default App;
