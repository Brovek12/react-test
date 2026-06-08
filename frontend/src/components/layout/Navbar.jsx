function Navbar() {
    return (
        <div className="navbar bg-base-100 border-b">

            <div className="flex-none">

                <label
                    htmlFor="main-drawer"
                    className="btn btn-square btn-ghost"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </label>

            </div>

            <div className="flex-1">
                <span className="text-lg font-semibold">
                    ERP System
                </span>
            </div>

        </div>
    )
}

export default Navbar