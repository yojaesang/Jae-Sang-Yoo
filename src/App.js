
import './App.css';
import HomeTitle from './components/hometitle';
import IntroEng from './components/introeng';
import IntroKor from './components/introkor';
import TextKor from './components/experience/textkor';
import TextEng from './components/experience/texteng';
import TextKor2 from './components/experience/2textkor';
import TextEng2 from './components/experience/2texteng';
import TextKor3 from './components/experience/3textkor';
import TextEng3 from './components/experience/3texteng';
import MainTab from './components/maintab/maintab';
import ImageGrid from './components/imagegrid';
import Work1 from './components/work/work1';
import Work2 from './components/work/work2';
import Work3 from './components/work/work3';
import Work4 from './components/work/work4';
import Work5 from './components/work/work5';
import Work6 from './components/work/work6';
import Work7 from './components/work/work7';
import Work8 from './components/work/work8';
import Work9 from './components/work/work9';
import Work10 from './components/work/work10';


function App() {

  return (
    <div className="App">
      <header className="flex flex-row App-header">
        <div className='basis-4/5 max-md:basis-full' id='up'>

         <div className='flex flex-col'>
            <HomeTitle />

            {/* 인트로 설명 */}
            <div className='flex max-md:flex-wrap w-4/5 max-md:w-full'>

              <div className='w-1/2 max-md:w-full'>
                < IntroEng />
              </div>

              <div className='w-1/2 max-md:w-full'>
                < IntroKor />
              </div>
              
            </div>
          

            {/* 대문 사진 */}
            <ImageGrid /> 

            {/* work 설명 */}
            <div id='work1'>
              <Work1 />
            </div>

            <div id='work2'>
              <Work2 />
            </div>

            <div id='work3'>
              <Work3 />
            </div>

            <div id='work4'>
              <Work4 />
            </div>

            <div id='work5'>
              <Work5 />
            </div>

            <div id='work6'>
              <Work6 />
            </div>

            <div id='work7'>
              <Work7 />
            </div>

            <div id='work8'>
              <Work8 />
            </div>

            <div id='work9'>
              <Work9 />
            </div>

            <div id='work10'>
              <Work10 />
            </div>

            {/* Experience 설명 */}
            <h1 id='experience' className='text-xl font-grotesk mt-40 ml-10 text-gray-400'>Experience, Education and Awards</h1>

            <section className='flex max-sm:flex-wrap w-4/5 max-md:w-full'>
              <div className='w-1/2 max-md:w-full'>
                < TextEng />
              </div>

              <div className='w-1/2 max-md:hidden'>
                < TextKor />
              </div>
            </section>

            <section className='flex max-sm:flex-wrap w-4/5 max-md:w-full'>
              <div className='w-1/2 max-md:w-full'>
                < TextEng2 />
              </div>

              <div className='w-1/2 max-md:hidden'>
                < TextKor2 />
              </div>
            </section>

            <section className='flex max-sm:flex-wrap w-4/5 max-md:w-full'>
              <div className='w-1/2 max-md:w-full'>
                < TextEng3 />
              </div>

              <div className='w-1/2 max-md:hidden'>
                < TextKor3 />
              </div>
            </section>

            <div className='h-80'></div>

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
