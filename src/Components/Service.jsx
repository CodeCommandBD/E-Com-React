import React from 'react'

const Service = () => {

    const services = [
        {
            icon: (
                <svg width="40" height="40" fill="none" stroke="#7c3aed" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3h-8v4h8V3z" /></svg>
            ),
            title: 'Fast Delivery',
            desc: 'Get your products within 2 days',
        },
        {
            icon: (
                <svg width="40" height="40" fill="none" stroke="#7c3aed" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
            ),
            title: 'On Time',
            desc: 'Always on-time delivery guarantee',
        },
        {
            icon: (
                <svg width="40" height="40" fill="none" stroke="#7c3aed" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 1v22M5 5h14v14H5z" /></svg>
            ),
            title: 'Best Quality',
            desc: 'Premium quality products only',
        },
        {
            icon: (
                <svg width="40" height="40" fill="none" stroke="#7c3aed" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" /></svg>
            ),
            title: 'Trusted Service',
            desc: 'Thousands of happy customers',
        },
    ];


    return (
        <div>
            <section className="bg-white py-10 mt-8">
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
                    {services.map((service, idx) => (
                        <div key={idx} className="flex flex-col items-center bg-purple-50 rounded-xl shadow-md p-6 hover:scale-105 transition-transform duration-300">
                            <div className="mb-3">{service.icon}</div>
                            <h3 className="text-lg font-bold text-purple-900 mb-1">{service.title}</h3>
                            <p className="text-purple-400 text-center text-sm">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Service