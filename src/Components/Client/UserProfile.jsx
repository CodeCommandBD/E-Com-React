import React, {  useState } from 'react'
import { useData } from '../../Context/AuthContext';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const UserProfile = () => {
    const [profilePic, setProfilePic] = useState(
        () => localStorage.getItem('profilePic')
    );
    const { signIn, signOut, user } = useData()
    const navigate = useNavigate()

    const [formData, setFormData] = useState(() => {
        return JSON.parse(localStorage.getItem('user')) || {};
    });
    const [prevData, setPrevData] = useState(() => {
        return JSON.parse(localStorage.getItem('user')) || {};
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // 1MB = 1048576 bytes
            if (file.size > 1048576) {
                toast.error('Image size must be less than 1MB!');
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
                localStorage.setItem('profilePic', reader.result);
                toast.success('Profile image updated!');
                window.dispatchEvent(new Event('profilePicChanged'));
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const prev = JSON.stringify(prevData);
        const curr = JSON.stringify(formData);
        if (prev === curr && profilePic === localStorage.getItem('profilePic')) {
            toast.info('No changes detected!');
            return;
        }
        localStorage.setItem('user', JSON.stringify(formData));
        if (signIn) signIn(formData);

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = users.map(u =>
            u.email === formData.email ? { ...u, ...formData } : u
        );
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setPrevData(formData);
        toast.success('Profile updated successfully!');
    };
    return (
        <div className=" min-h-screen bg-purple-50 text-purple-900 font-sans">
            <div className='container'>
                <div className="flex  py-10">
                    {/* Sidebar */}
                    <aside className="w-1/4 pr-6 border-r border-purple-200">
                        <h2 className="text-2xl font-bold mb-6">User profile management</h2>
                        <nav className="space-y-4 text-lg">
                            <div className="font-semibold text-purple-800">Personal Info</div>
                            <div className="text-purple-500">Notifications</div>
                            <button onClick={() => { signOut(), navigate('/signin') }} className="mt-20 w-full text-left text-green-600 hover:underline font-semibold">Logout</button>
                        </nav>
                    </aside>

                    {/* Main Form */}
                    {
                        user ?
                            <div className="flex-1 px-10">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-3xl font-bold">Personal information</h2>
                                    <span className="text-sm text-green-500">Saving changes</span>
                                </div>

                                {/* Avatar */}
                                <div className="mt-6 mb-8 text-center">
                                    <label htmlFor="avatar-upload" className="cursor-pointer inline-block">
                                        <img
                                            src={profilePic}
                                            alt="Avatar"
                                            className="rounded-full w-28 h-28 mx-auto border-4 border-purple-300"
                                        />
                                        <input
                                            type="file"
                                            id="avatar-upload"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                        />
                                        <p className="text-sm text-purple-500 mt-2">Click to change photo</p>
                                    </label>
                                </div>

                                {/* Form Fields */}
                                <form onSubmit={handleSubmit} className="space-y-6 text-lg">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block mb-1 font-medium">First Name</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.name || ''}
                                                onChange={handleChange}
                                                className="w-full border-2 border-purple-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 font-medium">Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName || ''}
                                                onChange={handleChange}
                                                className="w-full border-2 border-purple-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 font-medium">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email || ''}
                                                onChange={handleChange}
                                                className="w-full border-2 border-purple-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 font-medium">Phone Number</label>
                                            <div className="flex gap-2">
                                                <select className="border-2 border-purple-300 rounded-full px-4 py-3 bg-white">
                                                    <option value="+880">+880</option>
                                                </select>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    value={formData.phone || ''}
                                                    onChange={handleChange}
                                                    className="flex-1 border-2 border-purple-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block mb-1 font-medium">Country</label>
                                            <select
                                                name="country"
                                                value={formData.country || ''}
                                                onChange={handleChange}
                                                className="w-full border-2 border-purple-300 rounded-full px-4 py-3 bg-white"
                                            >
                                                <option>Bangladesh</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block mb-1 font-medium">City</label>
                                            <select
                                                name="city"
                                                value={formData.city || ''}
                                                onChange={handleChange}
                                                className="w-full border-2 border-purple-300 rounded-full px-4 py-3 bg-white"
                                            >
                                                <option>Sylhet</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block mb-1 font-medium">Zip Code</label>
                                            <input
                                                type="text"
                                                name="zip"
                                                value={formData.zip || ''}
                                                onChange={handleChange}
                                                className="w-full border-2 border-purple-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 font-medium">Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className="w-full border-2 border-purple-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 font-medium">Confirm Password</label>
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                className="w-full border-2 border-purple-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                            />
                                        </div>
                                    </div>

                                    {/* Save Button */}
                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700"
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </form>
                            </div>
                            :
                            <>
                                <p className='w-full flex justify-center items-center'>No Profile exists</p>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default UserProfile