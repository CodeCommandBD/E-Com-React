import React from 'react'

const ContactPage = () => {
  return (
    <div className="bg-[#f7f8fd] min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 via-black to-green-900 rounded-b-[60px] px-6 py-12 flex flex-col md:flex-row items-center justify-between shadow-lg">
        <div className="container">
          <h1 className="text-4xl font-bold text-white mb-2">Contact us</h1>
          <p className="text-purple-200 text-xl md:text-2xl font-semibold">Let's connect and start a conversation.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className='container'>
      <div className=" mt-12 flex flex-col md:flex-row gap-10 px-4">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex-1">
          <h2 className="text-3xl font-semibold text-[#2d2170] mb-2">Send us a message</h2>
          <p className="text-gray-500 mb-6 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <form className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-base text-gray-500 mb-1 font-medium">Name</label>
                <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-3 text-base" placeholder="Name" />
              </div>
              <div className="flex-1">
                <label className="block text-base text-gray-500 mb-1 font-medium">Company</label>
                <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-3 text-base" placeholder="Company" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-base text-gray-500 mb-1 font-medium">Phone</label>
                <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-3 text-base" placeholder="Phone" />
              </div>
              <div className="flex-1">
                <label className="block text-base text-gray-500 mb-1 font-medium">Email</label>
                <input type="email" className="w-full border border-gray-200 rounded-md px-3 py-3 text-base" placeholder="Email" />
              </div>
            </div>
            <div>
              <label className="block text-base text-gray-500 mb-1 font-medium">Subject</label>
              <input type="text" className="w-full border border-gray-200 rounded-md px-3 py-3 text-base" placeholder="Subject" />
            </div>
            <div>
              <label className="block text-base text-gray-500 mb-1 font-medium">Message</label>
              <textarea className="w-full border border-gray-200 rounded-md px-3 py-3 text-base min-h-[100px]" placeholder="Message"></textarea>
            </div>
            <button
              type="submit"
              className="w-full mt-2 bg-purple-800 hover:bg-purple-900 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition text-lg shadow-md"
            >
              <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
              Send Message
            </button>
          </form>
        </div>
        {/* Contact Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-[#2d2170] mb-2">Get in touch</h2>
          <p className="text-gray-500 mb-6 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span className="bg-[#edeaff] text-[#7c5cff] p-3 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 12.414a4 4 0 1 0-5.657 5.657l4.243 4.243a8 8 0 1 1 5.657-5.657z" />
                </svg>
              </span>
              <div>
                <div className="font-semibold text-xl text-[#2d2170]">Location</div>
                <div className="text-gray-500 text-base">Jalan Cempaka Wangi No 22<br />Jakarta - Indonesia</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#edeaff] text-[#7c5cff] p-3 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M16 12v1a4 4 0 0 1-8 0v-1" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              <div>
                <div className="font-semibold text-xl text-[#2d2170]">Email us</div>
                <div className="text-gray-500 text-base">support@yoursdomain.tld<br />hello@yoursdomain.tld</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-[#edeaff] text-[#7c5cff] p-3 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2.08" />
                  <path d="M16 2v4" />
                  <path d="M8 2v4" />
                  <path d="M2 10h20" />
                </svg>
              </span>
              <div>
                <div className="font-semibold text-xl text-[#2d2170]">Call us</div>
                <div className="text-gray-500 text-base">
                  +6221.2002.2012<br />+6221.2002.2013 (Fax)
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="font-semibold text-xl text-[#2d2170] mb-2">Follow our social media</div>
            <div className="flex gap-4">
              <a href="#" className="bg-[#edeaff] text-[#7c5cff] p-3 rounded-lg text-xl"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="bg-[#edeaff] text-[#7c5cff] p-3 rounded-lg text-xl"><i className="fab fa-instagram"></i></a>
              <a href="#" className="bg-[#edeaff] text-[#7c5cff] p-3 rounded-lg text-xl"><i className="fab fa-tiktok"></i></a>
              <a href="#" className="bg-[#edeaff] text-[#7c5cff] p-3 rounded-lg text-xl"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Map */}
      <div className='container'>

      <div className="w-full mt-12">
        <iframe
          title="Google Map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1357%2C51.4975%2C-0.1070%2C51.5155&amp;layer=mapnik"
          className="w-full h-[500px] border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      </div>
    </div>
  )
}

export default ContactPage