import { useContext, useState } from 'react';
import ApiAuthHandler from '~/api/auth/api.auth.handler';
import { FaUser, FaSignOutAlt, FaEnvelope } from 'react-icons/fa';
import './style.css';
import { AuthContext } from '~/context/auth.context';
import Setting from '~/pages/setting';

function UserMenu() {
    const { user } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileUpdateOpen, setIsProfileUpdateOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleProfileUpdateOpen = () => {
        setIsProfileUpdateOpen(true);
        setIsOpen(!isOpen);
    };

    const handleProfileUpdateClose = () => {
        setIsProfileUpdateOpen(false);
    };

    const menuClass = isOpen
        ? 'UserMenu UserMenu-open'
        : 'UserMenu UserMenu-close';

    return (
        <>
            <img
                src={user.photo}
                className="ImgProfile"
                alt="user photo"
                onClick={handleToggle}
            />
            <div className={menuClass}>
                <div className="UserMenu-top">
                    <p>
                        <FaUser /> {user.username}
                    </p>
                    <p>
                        <FaEnvelope />
                        {user.email}
                    </p>
                </div>
                <div
                    className="UserMenu-bottom"
                    onClick={ApiAuthHandler.logout}
                >
                    <p>
                        <FaSignOutAlt />
                        Quitter
                    </p>
                </div>
                <div
                    className="UserMenu-bottom"
                    onClick={handleProfileUpdateOpen}
                >
                    <p>
                        <FaUser />
                        Setting
                    </p>
                </div>
            </div>
            <Setting
                isOpen={isProfileUpdateOpen}
                onClose={handleProfileUpdateClose}
            />
        </>
    );
}

export default UserMenu;
