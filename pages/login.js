export default function LoginPage() {
    return (
        <div className="h-full bg-gray-100 flex justify-center items-center">
            <div className="mt-44 bg-white shadow-2xl rounded-xl text-black p-4 w-1/2 ">
                <div className="mb-4">
                    Email
                </div>
                <div>
                    <input className="bg-gray-300 border-gray-500 w-full p-4 rounded-lg mt-2" />
                </div>
                <div>
                    Password
                </div>
                <div>
                    <input className="bg-gray-300 border-gray-500 w-full p-4 rounded-lg mt-2" />
                </div>
                <div className="mt-8">
                    <button className="bg-gray-800 text-white font-bold w-full py-4 rounded-lg shadow-lg">
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}