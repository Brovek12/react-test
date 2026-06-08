import { NavLink } from 'react-router-dom'

function MainLayout({ children }) {
    return (
        <div className="drawer lg:drawer-open">
            <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
            />

            <div className="drawer-content">

                <nav className="navbar bg-base-300">

                    <label
                        htmlFor="my-drawer-4"
                        className="btn btn-square btn-ghost"
                    >
                        ☰
                    </label>

                    <div className="px-4 font-bold">
                        ERP System
                    </div>

                </nav>

                <div className="p-6">
                    {children}
                </div>

            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">

                <label
                    htmlFor="my-drawer-4"
                    className="drawer-overlay"
                />

                <div className="
                    flex
                    min-h-full
                    flex-col
                    items-start
                    bg-base-200
                    is-drawer-close:w-14
                    is-drawer-open:w-64
                ">

                    <ul className="menu w-full grow">

                        <li>
                            <NavLink to="/">
                                <span>🏠</span>

                                <span className="is-drawer-close:hidden">
                                    Dashboard
                                </span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/customers">
                                <span>👤</span>

                                <span className="is-drawer-close:hidden">
                                    Customer
                                </span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/products">
                                <span>📦</span>

                                <span className="is-drawer-close:hidden">
                                    Product
                                </span>
                            </NavLink>
                        </li>

                    </ul>

                </div>

            </div>

        </div>
    )
}

export default MainLayout