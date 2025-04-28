import React, { useState } from 'react';

import CTASection from './components/software';
import Testimonial from './sections/testimonials'


const ComponentName = () => {        
    return (
        <div className="bg-gradient-to-b from-blue-50 to-blue-100">
    <header className="">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          
        </div>
    </header>

    <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    Embrace Innovation with   </h1>
                        <div className="relative inline-flex">
                         
                            <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">Techfruits </h1>
                           
                        </div>
                        <div className="relative inline-flex">
  <span className="absolute inset-0 bg-blue-600 rounded-md"></span>
  <h1 className="relative px-4 py-2 text-4xl sm:text-6xl lg:text-7xl font-bold text-white">
    IT Solutions
  </h1>
</div>
                  

                    <p className="mt-8 text-base text-black sm:text-xl">Cutting-edge IT solutions, services and softwares. Connect now, and explore success with us!</p>

                    <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                        <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#5751d0] hover:bg-[#5751d0] " role="button"> Start exploring </a>

                        <a href="#" title="" className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                            <svg className="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path fill="#F97316" stroke="#F97316" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Connect With us
                        </a>
                    </div>
                </div>

                <div>
                    <img className="w-full rounded-3xl" src="https://techfruitspl.com/next-img/banner.png" alt="" />
                </div>
            </div>
        </div>
    </section>

{/* it services section */}

<section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">IT Solutions</h2>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">Tailored IT solutions to fuel your business growth ,delivering innovation, efficiency, and a competitive edge in the digital landscape.</p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-">
            <div className="md:p-8 lg:p-14">
             
                <img className='arvr-img block mx-auto' src='https://techfruitspl.com/next-img/ai-machine.png'></img>
                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">AI and Machine Learning </h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Transforming possibilities into realities through intelligent automation and data-driven insights.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <img className='arvr-img block mx-auto' src='https://techfruitspl.com/next-img/arvr.png'></img>
                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">AR, VR and MR</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Elevate experiences and redefine reality with our immersive Augmented Reality, Virtual Reality, and Mixed Reality solutions.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <img className='arvr-img block mx-auto' src='https://techfruitspl.com/next-img/datacenter.png'></img>
                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Data Center</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Empowering businesses with cutting-edge data center solutions for seamless, secure, and scalable operations.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
            <img className='arvr-img block mx-auto' src='https://techfruitspl.com/next-img/deeplearning.png'></img>
                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Deep Learning</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Unleashing the power of intelligent machines through advanced Deep Learning technologies.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <img className='arvr-img block mx-auto' src='https://techfruitspl.com/next-img/networking.png'></img>
                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Networking</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Connecting possibilities, our networking solutions pave the way for seamless communication and robust connectivity.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <img className='arvr-img block mx-auto' src='https://techfruitspl.com/next-img/robotic.png'></img>
                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Robotic Process Automation</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Revolutionize efficiency and streamline operations with our cutting-edge Robotic Process Automation solutions.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
            <img className='arvr-img block mx-auto' src='https://techfruitspl.com/next-img/security.png'></img>
                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Security</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Ensuring peace of mind through comprehensive security solutions that safeguard your digital assets and business integrity.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <img className='arvr-img block mx-auto' src='https://techfruitspl.com/next-img/storage.png'></img>
                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Server and Storage</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Empower your business with reliable Server and Storage solutions, optimizing performance and scalability for seamless operations.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <img className='arvr-img block mx-auto' src='https://techfruitspl.com/next-img/surveillance.png
'></img>
                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Surveillance Solutions</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Take control of your security today – explore our surveillance solutions and safeguard what matters most.</p>
            </div>
            
        </div>
    </div>
</section>

{/* software sections */}
<CTASection/>

{/* testimonial section */}

<Testimonial/>

{/* our story section */}
<section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Numbers tell our story</h2>
                    <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 6+ </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900">Years in business</p>
                        <p className="text-base mt-0.5 text-gray-500">Creating the successful path</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 4821 </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900">Projects delivered</p>
                        <p className="text-base mt-0.5 text-gray-500">In last 6 years</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-7xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 37+ </span>
                        </h3>
                        <p className="mt-4 text-xl font-medium text-gray-900">Team members</p>
                        <p className="text-base mt-0.5 text-gray-500">Working for your success</p>
                    </div>
                </div>
            </div>
        </section>

        {/* software section */}
        <section className="relative py-8 sm:py-2 ">
        <div className="absolute bottom-0 right-0 overflow-hidden">
            <img className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png" alt="" />
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
                <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
                    <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Softwares.</h1>
                    <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">Discover transformative software solutions tailored to elevate your business efficiency and drive innovation  in the digital landscape. </p>

                    <a href="#" title="" className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded sm:mt-10 font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                        View More
                    </a>

                    <div className="mt-8 sm:mt-16">
                        <div className="flex items-center justify-center lg:justify-start">
                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                            <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                />
                            </svg>
                        </div>

                        <blockquote className="mt-6">
                            <p className="text-lg font-bold text-gray-900 font-pj">Best code editor in market!</p>
                            <p className="mt-3 text-base leading-7 text-gray-600 font-inter">Consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu, aliquam nulla tincidunt gravida. Cursus convallis dolor semper pretium ornare.</p>
                        </blockquote>

                        <div className="flex items-center justify-center mt-3 lg:justify-start">
                            <img className="flex-shrink-0 object-cover w-6 h-6 overflow-hidden rounded-full" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/avatar-female.png" alt="" />
                            <p className="ml-2 text-base font-bold text-gray-900 font-pj">Denny Jones</p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1">
                    <img className="w-full mx-auto" src="https://techfruitspl.com/next-img/softwares1.gif" alt="" />
                </div>
            </div>
        </div>
    </section>


    {/* it solution section */}
    <section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">IT Services</h2>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">Elevate your business with comprehensive IT services, providing expertise, reliability, and tailored solutions for your digital success.</p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-">
            <div className="md:p-8 lg:p-14">
             
                <img className='arvr-img block mx-auto' src='https://techfruitspl.com/next-img/color.png'></img>
                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Color Calibration</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Precision meets perfection with our Color Calibration services, ensuring vibrant and accurate visuals for an immersive viewing experience.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <img className='arvr-img block mx-auto' src='https://techfruitspl.com/next-img/infrastructure.png'></img>
                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Infrastructure Management</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Efficient and reliable Infrastructure Management to ensure seamless operations, enhance performance, and drive business excellence.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <img className='arvr-img block mx-auto' src='https://techfruitspl.com/next-img/datacenter-services.png'></img>
                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Data Center</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Optimize your business infrastructure with our comprehensive Data Center services, delivering reliability, security, and scalability for seamless operations.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
            <img className='arvr-img block mx-auto' src='https://techfruitspl.com/next-img/it-sonsulting.png'></img>
                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">IT Consulting</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Strategic IT consulting to navigate complexities, drive innovation, and empower your business with tailored solutions for sustained success.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <img className='arvr-img block mx-auto' src='https://techfruitspl.com/next-img/security-auditing.png'></img>
                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Annual Maintenance Contract</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Ensure uninterrupted operations with our Annual Maintenance Contract, delivering proactive and reliable support for your business infrastructure.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <img className='arvr-img block mx-auto' src='https://techfruitspl.com/next-img/arvr-services.png'></img>
                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">VR, AR, MR Content Development</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Immerse your audience in cutting-edge experiences with our expert VR, AR, and MR Content Development, bringing innovation to virtual realms.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
            <img className='arvr-img block mx-auto' src='https://techfruitspl.com/next-img/network-consulting.png'></img>
                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Networking Consulting</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Elevate your connectivity with expert Networking Consulting services, optimizing infrastructure for seamless communication and business efficiency.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <img className='arvr-img block mx-auto' src='https://techfruitspl.com/next-img/cyber-security.png'></img>
                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Cyber Security</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Protecting your digital fortress: Our Cybersecurity solutions ensure robust defenses, safeguarding your data and business from evolving threats.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <img className='arvr-img block mx-auto' src='https://techfruitspl.com/next-img/security-consultuing.png'></img>
                <h3 className="mt-8 text-xl font-bold text-gray-900 font-pj">Security Auditing</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Strengthen your defenses with thorough Security Auditing services, identifying vulnerabilities and ensuring a resilient security posture for your business.</p>
            </div>
            
        </div>
    </div>
</section>

</div>

    )
}
export default ComponentName;