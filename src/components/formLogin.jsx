export default function FormLogin() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[var(--font-geist-sans)]">
            <h1 className="text-4xl font-bold text-center">Login</h1>
            <form className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 w-full max-w-md">
                <label className="block">
                    <span className="text-gray-700">Email</span>
                    <input
                        type="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Enter your email"
                        required
                    />
                </label>
                
                <label className="block">
                    <span className="text-gray-700">Password</span>
                    <input
                        type="password"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Enter your password"
                        required
                    />
                </label>

                <button
                    type="submit"
                    className="col-span-1 sm:col-span-2 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
