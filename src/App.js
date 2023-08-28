
import './App.css';
import HomeTitle from './components/hometitle';
import TextEng from './components/texteng';
import IntroEng from './components/introeng';
import IntroKor from './components/introkor';
import TextKor from './components/textkor';
import MainTab from './components/maintab/maintab';
import ImageGrid from './components/imagegrid';
import Work23 from './components/work/work23';
import Work22 from './components/work/work22';


function App() {

  return (
    <div className="App">
      <header className="flex flex-row App-header">
        <div className='basis-4/5 max-sm:basis-full' id='up'>

         <div className='flex flex-col'>
            <HomeTitle />

            {/* 인트로 설명 */}
            <div className='flex max-sm:flex-wrap w-4/5 max-sm:w-full'>

              <div className='w-1/2 max-sm:w-full'>
                < IntroEng />
              </div>

              <div className='w-1/2 max-sm:w-full'>
                < IntroKor />
              </div>
              
            </div>
          

            {/* 대문 사진 */}
            <ImageGrid /> 

            {/* work 설명 */}
            <div id='work23'>
              <Work23 />
            </div>

            <div id='work22'>
              <Work22 />
            </div>

            {/* Experience 설명 */}
            <h1 className='text-xl font-grotesk mt-40 m-10'>Experience</h1>

            <section className='flex max-sm:flex-wrap'>
            <div className='grow'>
              < TextEng />
            </div>

                <div className='grow'>
                < TextKor />
                </div>
              </section>

          </div>

        </div>

        {/* 우측 네비게이션 탭 */}
        <div className='basis-1/5 max-sm:hidden'>
          <MainTab />
        </div>

      
      </header>
    </div>
  );
}

export default App;
