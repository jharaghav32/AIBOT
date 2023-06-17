import React from 'react'
import Middle from './Middle'
import Footer from './Footer'
import Contact from './Contact'
import Accordion from './Accordian'
import AccordianItem from './AccordianItem'
import Image from 'next/image'

const HomePage = () => {
    return (
        <div>
            <section className="text-gray-600 dark:bg-[#191919] dark:text-white body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">

                    <div className="flex flex-col justify-center items-start gap-3 lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    
                    <h1 className="text-gray-900 text-3xl md:text-6xl title-font font-medium mb-1 dark:text-white">The Catcher in the Rye</h1>
                    
                    <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                    <button className="flex  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Try AI for Free</button>
                        
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                        
                    <div className="flex mb-4">
                        <span className="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <span className="text-gray-600 ml-3">4 stars from 252 Users</span>
                        </span>
                       
                    </div>
                    </div>
                   
                </div>
                         <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://assets.super.so/b9a6147f-080d-4048-8b84-3159a3bd3683/images/c26ce96a-a31c-4703-9416-016c4a881253/hero-illustration.svg" /> 
                        
                    </div>
                </div>
            </section>

            {/* //section content  */}
            <section className="text-gray-600 dark:bg-[#191919] dark:text-white body-font">
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex justify-center items-center flex-wrap -m-4">

                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <Image alt="team" width='250' height='250' className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="/people.jpeg" />
                                <div className="w-full text-white bg-blue-800 p-4 border rounded-lg">
                                    <h2 className="title-font ml-2 mb-2 font-medium text-2xl text-start ">Holden Caulfield</h2>
                                   <li className='mb-4 text-start'>

                                    DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magni eligendi esse molestiae! Quas reprehenderit eligendi, consequuntur voluptate recusandae aperiam repellat magni quae. Laboriosam.
                                   </li>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <Image alt="team" height="250" width='250' className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="/laptop.png" />
                                <div className="w-full text-white bg-blue-800 p-4 border rounded-lg">
                                    <h2 className="title-font ml-2 mb-2 font-medium text-2xl text-start ">Holden Caulfield</h2>
                                   <li className='mb-4 text-start'>

                                    DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magni eligendi esse molestiae! Quas reprehenderit eligendi, consequuntur voluptate recusandae aperiam repellat magni quae. Laboriosam.
                                   </li>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-full flex flex-col items-center text-center">
                                <Image alt="team" height="250" width="250" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="/people.jpeg" />
                                <div className="w-full text-white bg-blue-800 p-4 border rounded-lg">
                                    <h2 className="title-font ml-2 mb-2 font-medium text-2xl text-start ">Holden Caulfield</h2>
                                   <li className='mb-4 text-start'>

                                    DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magni eligendi esse molestiae! Quas reprehenderit eligendi, consequuntur voluptate recusandae aperiam repellat magni quae. Laboriosam.
                                   </li>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accordian Section */}
            <div className='flex flex-col dark:bg-[#191919] dark:text-white justify-center items-center '>
                <h1 className='text-3xl md:text-4xl text-green-600 font-bold'>Some Cool Features We have </h1>
                <AccordianItem/>
            </div>


            {/* are you a layer section  */}

            <section className="text-gray-600 dark:bg-[#191919] dark:text-white body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">

                        <div className="flex flex-col justify-center items-start gap-3 lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    
                            <h1 className=" md:text-4xl text-green-600 font-bold text-3xl title-font  underline mb-1">The Catcher in the Rye</h1>
                            
                            <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                           <div>
                            <li>Instant Legal Search</li>
                            <li>Instant Legal Search</li>
                            <li>Instant Legal Search</li>
                           </div>
                           <p>And another Great feature for you: AI-powered Support for your Law Firm's website</p>

                           
                        </div>
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://assets.super.so/b9a6147f-080d-4048-8b84-3159a3bd3683/images/01e74879-28e1-4ef0-8804-f4fe754c8871/features-illustration.svg" />
                    </div>
                </div>
            </section>


            {/* Why we are awesome  */}
            <div>
                <section className="text-gray-200 dark:bg-[#191919] dark:text-white">
                <h1 className=" md:text-4xl ml-7 text-green-600 font-bold text-3xl title-font   mb-4">The Catcher in the Rye</h1>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
                        <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                            <div className="pattern-dots-md gray-light">
                                <div className="rounded bg-gray-800 p-4  -translate-y-6  "  >
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>                </div>
                                    <div className="flex-grow ">
                                        <h2 className=" text-xl title-font font-medium mb-3">Webdesign</h2>
                                        <p className="leading-relaxed text-sm text-justify">Donner du goût ? de la couleur aux applications, je le fais afin de rendre vos sites attrayants ?. Avant de devenir webdesigner, depuis tout petit j'étais déjà familier à la couleur et du dessin.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col dark:bg-[#191919] dark:text-white ">
                            <div className="pattern-dots-md gray-light">
                                <div className="rounded bg-gray-800  p-4 transform  -translate-y-6 ">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className=" text-xl title-font font-medium mb-3">Intégration web</h2>
                                        <p className="leading-relaxed text-sm text-justify">
                                            Donner du goût ? de la couleur aux applications, je le fais afin de rendre vos sites attrayants ?. Avant de devenir webdesigner, depuis tout petit j'étais déjà familier à la couleur et du dessin.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col ">
                            <div className="pattern-dots-md gray-light">
                                <div className="rounded bg-gray-800 p-4 transform  -translate-y-6 ">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className=" text-xl title-font font-medium mb-3">Developpement Back-end</h2>
                                        <p className="leading-relaxed text-sm text-justify">
                                            Grâce à Php et ces frameworks (Larave, Symfoni, Slim), je peux vous réaliser un site dynamique c'est-à-dire qui interagie avec votre base de données ?. Nous pouvons essayer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                        </section>
            </div>


            {/* what our users's think  */}
            <h1 className=" md:text-4xl ml-7 dark:bg-[#191919] dark:text-white text-green-600 font-bold text-3xl title-font   ">What Our User's Think</h1>
            <section className="flex flex-wrap dark:bg-[#191919] dark:text-white justify-center gap-5 items-center text-gray-600 body-font">
  <div className="flex flex-col  md:flex-row gap-2 container px-5 py-24 mx-auto">
    <div className="xl:w-[40%] lg:w-[40%] w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p className="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
      <p className="text-gray-500">Senior Product Designer</p>
    </div>
    <div className="xl:w-[40%] lg:w-[40%] w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p className="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
      <p className="text-gray-500">Senior Product Designer</p>
    </div>
  </div>
</section>

{/* More about ai from our blog */}
<h1 className=" md:text-4xl ml-7 dark:bg-[#191919] text-green-600 font-bold text-3xl title-font   ">More About AI from our Blog</h1>
<section className="text-gray-600 dark:bg-[#191919] dark:text-white body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex justify-center flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image height="250" width="250" className="lg:h-48 md:h-36 w-full object-cover object-center" src="/ai.png" alt="blog"/>
          <div className="p-6">
    
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image height="250" width="250" className="lg:h-48 md:h-36 w-full object-cover object-center" src="/keyboard.png" alt="blog"/>
          <div className="p-6">
    
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <Image height="250" width="250" className="lg:h-48 md:h-36 w-full object-cover object-center" src="/search.png" alt="blog"/>
          <div className="p-6">
    
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

{/* Again Accordian Section */}
<div className='flex flex-col justify-center items-center dark:bg-[#191919] dark:text-white'>
                <h1 className='text-3xl md:text-4xl text-green-600 font-bold'>More Questions</h1>
                <AccordianItem/>
            </div>

{/* Try Ai section */}
<Middle/>

{/* Contact Section */}
<Contact/>
{/* Fotter Section */}
<Footer/>

            </div>
            )
}

            export default HomePage