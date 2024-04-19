import { NavLink } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
            <NavLink
                style={({ isActive }) =>
                    isActive ? {} : undefined
                }
            to="/"><span>JobFinder</span></NavLink>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink end
                        style={({ isActive }) =>
                            isActive ? {color: 'purple'} : undefined
                        }
                    to="/search/vacancy">Find job</NavLink></li>
                    <li><NavLink
                        style={({ isActive }) =>
                            isActive ? {} : undefined
                        }
                    to="/blog">Careers advice</NavLink></li>
                    <li className="upload-btn">

                        <NavLink
                            style={({ isActive }) =>
                                isActive ? {} : undefined
                            }
                        to="/">Upload resume</NavLink>

                    </li>
                </ul>
            </nav>
            <div className="app__log">
                <NavLink
                    style={({ isActive }) =>
                        isActive ? {} : undefined
                    }
                to="/login/">Sign in</NavLink>
                <NavLink
                    className='employers-btn'
                    style={({ isActive }) =>
                        isActive ? {} : undefined
                    }
                to="/">For Employers</NavLink>
            </div>
        </header>
    )
}

export default AppHeader;