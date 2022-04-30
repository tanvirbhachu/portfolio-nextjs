export default function Overlay(props) {
    return (
        <div className='max-w-7xl mx-auto h-screen flex flex-col'>
        <div className='mt-20 mb-5 lg:flex justify-between w-full px-8'>
          <h2 className="text-3xl font-bold mb-5 text-white">The Freelance Process</h2>
          <button onClick={props.toggle} className="text-white border-2 h-fit border-white rounded-lg px-8 py-2 hover:bg-emerald-700 hover:border-emerald-700 transition ease-in">Portfolio</button>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 text-neutral-400 mb-5 gap-5 lg:h-[450px]">
            <div data-aos="fade-up" data-aos-delay="0">
                <div className='cursor-default h-full rounded-xl bg-dark/80 p-5 hover:bg-[#212121] w-full text-white hover:text-emerald-700 hover:border-emerald-700 transition ease-in'>
                    <h2 className="text-2xl font-bold mb-2">Design</h2>
                    <div className='rounded-xl bg-neutral-600 w-full h-1'></div>
                    <p className='mt-5 text-neutral-300 text-sm'>Create a working design for the website. This process is where most of the collaboration happens. We figure out what content we have to show, what data we can access, what design themes and colours to use.</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="50">
                <div className='cursor-default h-full rounded-xl bg-dark/80 p-5 hover:bg-[#212121] w-full text-white hover:text-emerald-700 hover:border-emerald-700 transition ease-in'>
                    <h2 className="text-2xl font-bold mb-2">Development</h2>
                    <div className='rounded-xl bg-neutral-600 w-full h-1'></div>
                    <p className='mt-5 text-neutral-300 text-sm'>There are 2 choices: Pure JavaScript or NextJS. I would highly recommend NextJS for large sites with a lot of components, data fetching and SEO. JavaScript is recommened for smaller sites such as simple one-page landing pages. Development takes time especially for high-quality websites.</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <div className='cursor-default h-full rounded-xl bg-dark/80 p-5 hover:bg-[#212121] w-full text-white hover:text-emerald-700 hover:border-emerald-700 transition ease-in'>
                <h2 className="text-2xl font-bold mb-2">Deployment</h2>
                <div className='rounded-xl bg-neutral-600 w-full h-1'></div>
                <p className='mt-5 text-neutral-300 text-sm'>The domain is always going to be in the clients name. However, I can manage everything from this point on. 

                    I can set up the certificates, servers, deployment and fix any bugs that may come up. 

                    <br /><br />Need to constantly update the website with new features, components or designs? I charge depending on value so there is no hourly pay or monthly subscription. You pay for value.</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
                <div className='cursor-default h-full rounded-xl bg-dark/80 p-5 hover:bg-[#212121] w-full text-white hover:text-emerald-700 hover:border-emerald-700 transition ease-in'>
                <h2 className="text-2xl font-bold mb-2">And More</h2>
                <div className='rounded-xl bg-neutral-600 w-full h-1'></div>
                <p className='mt-5 text-neutral-300 tex-sm'>Using Sanity CMS, I can setup a backend allowing you to update articles or site information etc. You get to control the data.
                
                <br /><br /></p>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}