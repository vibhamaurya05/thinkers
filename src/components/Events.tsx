
import React from 'react'
import { Button } from './ui/button'
import { SparklesCore } from './ui/sparkles'
const Events = () => {
  return (
    <>
        {/* <div className='flex flex-col gap-6 px-[10rem] py-[5rem] bg-[#b9fc9e]'>
            <SparklesCore
                      id="tsparticlesfullpage"
                      background="transparent"
                      minSize={0.6}
                      maxSize={1.4}
                      particleDensity={100}
                      // className="w-full h-full"
                      particleColor="#FFFFFF"
                    />
            <h1 className='text-center text-[50px] font-semibold text-orange-400'>Events</h1>
            <p className=' text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iusto in beatae praesentium deserunt, facere rerum, esse ducimus nostrum quia optio, aperiam consequatur libero hic. Vel aspernatur amet quae animi.
                Praesentium, ea mollitia! Repudiandae delectus corporis dolorum itaque. Inventore neque accusamus, ad quia incidunt consequuntur aperiam quasi est! Optio ea nesciunt laboriosam ullam illum unde fugit eos facere fuga maxime.
                Commodi libero aspernatur quas labore earum sapiente obcaecati repellat deserunt delectus veritatis sit ex quam laboriosam, eveniet eum aperiam quibusdam. Nostrum sequi ullam voluptas totam non maxime esse maiores voluptatibus.
                Quae minima, ullam deleniti quia fuga molestias itaque inventore repellendus, debitis provident ut animi doloribus, impedit labore perferendis laboriosam accusantium expedita repudiandae quam. Unde corporis, architecto nobis et praesentium est?
                Laborum repellat officia illum earum ea voluptate nobis, quasi harum dolorem officiis omnis dicta possimus, aliquid iusto, cum et ad. Iure fuga incidunt, nemo odit eum veritatis ipsum earum ut.
            </p>
            <Button variant="destructive" className='w-[10vw] text-sm font-medium'>Read More...</Button>
            
        </div> */}
        <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className='flex flex-col justify-between gap-8 z-20'>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Events
      </h1>
      <p className='text-white z-20 px-[12rem]'>We will continuously organize events to engage users in adding data to the platform, which can be further used to calibrate our search engine's accuracy.
      These events can be anything from hackathons to data collection drives to educational workshops. We want to create a community of users who are passionate about improving our search engine and making it the best it can be. Data collection drives: We could organize data collection drives where users help us to collect new data for our search engine. This could involve anything from scraping the web to transcribing historical documents. Educational workshops: We could host educational workshops to teach users about the importance of data quality and how to collect data responsibly. We could also teach users how to use our search engine and how to provide feedback to help us improve it. We believe that by engaging users in the data collection and curation process, we can create a search engine that is more accurate and relevant to the needs of our users.</p>
      <Button variant="destructive" className='w-[10vw] text-sm font-medium mx-[12rem] '>Read More...</Button>
      </div>
    </div>
    </>
  )
}

export default Events