import { useState } from 'react'

const ProfileAvatar = () => {
    const [dropDownOpen, setDropdownOpen] = useState(false)
    const dropDownToggle = () => setDropdownOpen(old => !old)

    return (
        <div className="relative">
            <button onClick={() => setDropdownOpen(old => !old)}
                className="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                <img className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
                    alt="Your avatar" />
            </button>

            {dropDownOpen &&
                <div className="relative inset-0 h-full w-full z-10">
                    <div
                        className='absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10'
                    >
                        <a href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Profile</a>

                        <a href="/login"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Logout</a>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProfileAvatar