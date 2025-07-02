import React from "react";

// const team = [
//   {
//     name: "Shanto",
//     role: "Founder & CEO",
//     img: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     name: "Ayesha",
//     role: "Lead Designer",
//     img: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
//   {
//     name: "Rahim",
//     role: "Full Stack Developer",
//     img: "https://randomuser.me/api/portraits/men/65.jpg",
//   },
// ];

// const features = [
//   {
//     title: "Trusted by 10,000+ users",
//     desc: "আমাদের সার্ভিস ব্যবহার করে হাজারো মানুষ সন্তুষ্ট।",
//     icon: (
//       <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <path d="M5 13l4 4L19 7" />
//       </svg>
//     ),
//   },
//   {
//     title: "24/7 Support",
//     desc: "যেকোনো সময় আমাদের টিম আপনাকে সাহায্য করতে প্রস্তুত।",
//     icon: (
//       <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <circle cx="12" cy="12" r="10" />
//         <path d="M12 6v6l4 2" />
//       </svg>
//     ),
//   },
//   {
//     title: "Modern Technology",
//     desc: "আমরা সবসময় আধুনিক টেকনোলজি ব্যবহার করি।",
//     icon: (
//       <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <rect x="2" y="7" width="20" height="14" rx="2" />
//         <path d="M16 3v4M8 3v4" />
//       </svg>
//     ),
//   },
// ];

// Dummy data for brands and awards
// const brands = [
//   "PayPal", "Amazon", "Google", "Microsoft", "Netflix", "Spotify"
// ];
// const awards = [
//   { name: "Global Media Award", year: "2023", desc: "Best Media Campaign" },
//   { name: "Best Creative Award", year: "2022", desc: "Creative Excellence" },
//   { name: "Innovative Minds Award", year: "2021", desc: "Innovation in Digital" },
//   { name: "Top Studio Award", year: "2020", desc: "Top Studio" },
//   { name: "Visionary Award", year: "2019", desc: "Visionary Ideas" },
// ];

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 via-black to-green-900 rounded-b-[60px] px-6 py-12 flex flex-col md:flex-row items-center justify-between shadow-lg">
        <div className="container">
          <h1 className="text-4xl font-bold text-white mb-2">About Us</h1>
          <p className="text-purple-200 text-xl md:text-2xl font-semibold">Your trusted destination for online shopping.</p>
        </div>
      </div>

      {/* Our Mission */}
      <section className="max-w-4xl mx-auto mt-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-purple-900 mb-4">Our Mission</h2>
        <p className="text-purple-700 text-lg mb-6">
          Our mission is to make online shopping easy, secure, and enjoyable for everyone. We are committed to providing a wide range of quality products, fast delivery, and excellent customer service to ensure your satisfaction every step of the way.
        </p>
      </section>

      {/* Why Shop With Us */}
      <section className="max-w-6xl mx-auto mt-10 px-4">
        <h3 className="text-2xl font-bold text-center mb-8 text-purple-900">Why Shop With Us?</h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="bg-purple-50 border border-purple-300 rounded-2xl p-8 flex-1 text-center shadow-lg">
            <div className="text-4xl mb-2 text-purple-700">🛡️</div>
            <h4 className="font-bold text-xl mb-2 text-purple-900">Safe & Secure</h4>
            <p className="text-purple-700">Your data and transactions are always protected.</p>
          </div>
          <div className="bg-purple-50 border border-purple-300 rounded-2xl p-8 flex-1 text-center shadow-lg">
            <div className="text-4xl mb-2 text-purple-700">🚚</div>
            <h4 className="font-bold text-xl mb-2 text-purple-900">Fast Delivery</h4>
            <p className="text-purple-700">Reliable and quick delivery across the country.</p>
          </div>
          <div className="bg-purple-50 border border-purple-300 rounded-2xl p-8 flex-1 text-center shadow-lg">
            <div className="text-4xl mb-2 text-purple-700">💬</div>
            <h4 className="font-bold text-xl mb-2 text-purple-900">24/7 Customer Support</h4>
            <p className="text-purple-700">Our team is always ready to help you with any issue.</p>
          </div>
        </div>
      </section>

      {/* Product Variety */}
      <section className="max-w-6xl mx-auto mt-16 px-4">
        <h3 className="text-xl font-bold text-center mb-6 text-purple-900">Wide Range of Products</h3>
        <p className="text-purple-700 text-center mb-8">From electronics, fashion, and home appliances to beauty and groceries—find everything you need in one place.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-purple-50 rounded-lg px-6 py-3 text-purple-900 font-semibold border border-purple-300 shadow-md">Electronics</div>
          <div className="bg-purple-50 rounded-lg px-6 py-3 text-purple-900 font-semibold border border-purple-300 shadow-md">Fashion</div>
          <div className="bg-purple-50 rounded-lg px-6 py-3 text-purple-900 font-semibold border border-purple-300 shadow-md">Home Appliances</div>
          <div className="bg-purple-50 rounded-lg px-6 py-3 text-purple-900 font-semibold border border-purple-300 shadow-md">Beauty</div>
          <div className="bg-purple-50 rounded-lg px-6 py-3 text-purple-900 font-semibold border border-purple-300 shadow-md">Groceries</div>
        </div>
      </section>

      {/* Customer Satisfaction */}
      <section className="max-w-6xl mx-auto my-16 px-4 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2 text-purple-900">Customer Satisfaction is Our Priority</h3>
          <p className="text-purple-700 mb-4">
            We believe that a happy customer is our greatest achievement. That's why we ensure every order, every question, and every concern is handled with care and efficiency.
          </p>
          <ul className="text-purple-600 space-y-1 font-semibold">
            <li>✔️ 100% Genuine Products</li>
            <li>✔️ Easy Return Policy</li>
            <li>✔️ Best Prices Guaranteed</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=300" alt="Customer" className="rounded-xl w-80 h-56 object-cover border-4 border-purple-300 shadow-lg" />
        </div>
      </section>
    </div>
  );
};

export default About;