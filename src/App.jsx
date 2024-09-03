import { useState, useRef } from "react"


const tabDataGlobal = {
  'About Me': [
    `Hello! I’m Dave, your sales rep here from Salesforce. 
    I've been working at this awesome company for 3 years now.`,

    `I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. 
    Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`,
  ],
  'Experiences': [
    `The old oak tree stood tall, its branches reaching towards the sky. A gentle breeze rustled through its leaves, creating a soothing melody.`,
    `A squirrel scampered up the trunk, its bushy tail twitching with excitement. Below, a small stream babbled merrily, its crystal-clear waters reflecting the vibrant colors of the autumn leaves.
    ts mournful cry echoing through the stillness of the night.
  `,
  ],
  'Recommended': [
   `In the distance, a campfire flickered, its warm glow offering comfort against the growing chill. As the stars twinkled above, a sense of peace washed over the land, a reminder of the beauty and tranquility that could be found in even the darkest of times.`,
   `The gentle lapping of waves against the shore lulled me into a peaceful slumber.uddenly, I found myself standing on the edge of a cliff, overlooking a vast, endless ocean.`
  ]
}

export default function App() {

  return (
    <>
      <div className='p-10 min-h-dvh bg-[#1e1e1e] bg-gradient-to-b from-[#252a2e] to-[#191B1F] to-50% text-textcolor1 text-lg'>

        <div className="flex justify-between">

          <div className="">
          </div>

          <div className="">
            <Widget1 />
            <br />

            {/* divider */}
            <div className="m-auto customShadow bg-gradient-to-b from-[#282828] from-100% p-0.5 w-10/12"></div>

            <br />
            <Widget2 />
            <br />

            {/* divider */}
            <div className="m-auto customShadow bg-gradient-to-b from-[#282828] from-100% p-0.5 w-10/12"></div>
          </div>

        </div>
      </div>
    </>
  )
}


function Widget1() {
  const [tabData, setTabData] = useState(tabDataGlobal)
  const [activeTab, setActiveTab] = useState('About Me')

  return (
    <article className="max-w-3xl relative py-4 flex justify-around customShadow bg-bgcolor1 rounded-lg">

      <img className="absolute top-5 left-3"
        src="./questionmark.svg" alt="questionmark" />

      <img src="./sixSquares.svg" alt="six squares" />

      {/* navbar group */}
      <div className="w-10/12">
        <Navbar tabData={tabData} activeTab={activeTab} setActiveTab={setActiveTab} />
        <br />

        <span className="m-auto text-base">
          {tabData[activeTab].map((element, index) => {
            return (
              <p>
                {element}
                {index < tabData[activeTab].length - 1 ?
                  <><br /><br /></>
                  :
                  ''}
              </p>
            )
          })
          }
        </span>
      </div>

      <img src="./recRight.svg" alt="questionmark" />

    </article>
  )
}


function Navbar({ activeTab, setActiveTab }) {

  return (
    <ul className="flex p-2 m-auto gap-2 justify-center hover:cursor-pointer rounded-3xl bg-bgcolor2 text-textcolor2 font-semibold">

      <li className={`${activeTab == 'About Me' ? 'text-white bg-bgcolor3 navButtonShadow' : ''} py-3 w-full text-center rounded-2xl`}
        onClick={() => { setActiveTab('About Me') }}>About Me</li>

      <li className={`${activeTab == 'Experiences' ? 'text-white bg-bgcolor3 navButtonShadow' : ''} py-3 w-full text-center rounded-2xl`}
        onClick={() => { setActiveTab('Experiences') }}>Experiences</li>

      <li className={`${activeTab == 'Recommended' ? 'text-white bg-bgcolor3 navButtonShadow' : ''} py-3 w-full text-center rounded-2xl`}
        onClick={() => { setActiveTab('Recommended') }}>Recommended</li>

    </ul>
  )
}

const imageListGlobal = [
  './sample1.png',
  './sample1.png',
  './sample1.png',
]

function Widget2() {

  let [imageList, setImageList] = useState(imageListGlobal)

  function handleImagePicker(event) {
    const file = event.target.files[0];
    const fileURL = URL.createObjectURL(file)
    let temp = [...imageList]
    temp.unshift(fileURL)
    setImageList(temp)
  }

  // slider logic
  const [currentIndex, setCurrentIndex] = useState(0);
  let photoWidth = 80
  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex >= 0 ? newIndex : imageList.length - 1);
    sliderRef.current.scrollLeft = newIndex * photoWidth;
  };

  const handleNextClick = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex < imageList.length ? newIndex : 0);
    sliderRef.current.scrollLeft = newIndex * photoWidth;
  };


  return (
    <article className="max-w-3xl relative py-4 flex justify-around customShadow bg-bgcolor1 rounded-lg">

      <img className="absolute top-5 left-3"
        src="./questionmark.svg" alt="questionmark" />

      <img src="./sixSquares.svg" alt="six squares" />

      {/* gallery, add image and image display section */}
      <section className="w-10/12 flex flex-col items-center">
        <section className="w-full self-center mb-4 flex justify-between">

          <span className="px-9 py-5 rounded-2xl bg-bgcolor2 text-white font-semibold">
            Gallery
          </span>

          <div className=" flex flex-row self-center">
            <button className="buttonShadow h-full mx-5 bg-[#ffffff08] text-white"
              onClick={() => document.getElementById('imagePicker').click()}
            >
              <input id='imagePicker' type="file" accept="image/*" className="hidden" onChange={handleImagePicker} />
              <div className="h-full flex gap-2 p-3 justify-center items-center">
                <img src="./plus.svg" alt="" />
                <p>ADD IMAGE</p>
              </div>
            </button>

            <button onClick={handlePrevClick} className="circleButtonShadow mx-5 p-4 bg-bgcolor2 rounded-full bg-gradient-to-br from-[#303439] to-[#161718]">
              <img src="./leftarrow.svg" className="self-center" />
            </button>

            <button onClick={handleNextClick} className="circleButtonShadow p-4 bg-bgcolor2 rounded-full bg-gradient-to-br from-[#303439] to-[#161718]">
              <img src="./rightarrow.svg" />
            </button>
          </div>

        </section>

        {/* images display */}
        <br />
        <div className="w-full flex gap-4 pb-2 justify-between overflow-x-auto"
          ref={sliderRef}>
          {imageList.map((element) => {
            return (
              <img className="max-w-44"
                src={`${element}`} alt={element} />
            )
          })}
        </div>

      </section>

      {/* <img className="" src="./recRight.svg" alt="six squares" /> */}
      <div className="invisible">..</div>

    </article>
  )
}