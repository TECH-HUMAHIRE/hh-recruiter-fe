import DraftIcon from '../Icon/Draft';
import WalletIcon from '../Icon/Wallet';
import CommunicationIcon from '../Icon/Communication';
import InfoIcon from '../Icon/Info';
import CompanyIcon from '../Icon/Company';
import HomeIcon from '../Icon/Home';
import { Link } from 'react-router-dom';
const pathname = window.location.pathname;
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type
    };
}
const navMenu = [
    getItem(
        <Link className="nav-link" to={'/'}>
            Home
        </Link>,
        '1',
        <HomeIcon active={pathname === '/'} />
    ),
    getItem(
        <Link className="nav-link" to="/post-job">
            Post Job
        </Link>,
        '2',
        <DraftIcon active={pathname === '/post-job'} />
    ),
    getItem(
        <Link className="nav-link" to="/my-company">
            My Company
        </Link>,
        '3',
        <CompanyIcon active={pathname === '/my-company'} />
    ),
    getItem(
        <Link className="nav-link" to="/inbox">
            Inbox
        </Link>,
        '4',
        <CommunicationIcon active={pathname === '/inbox'} />
    ),
    getItem(
        <Link className="nav-link" to="/wallet">
            Wallet
        </Link>,
        '5',
        <WalletIcon active={pathname === '/wallet'} />
    ),
    getItem(
        <Link className="nav-link" to="/info">
            Info
        </Link>,
        '6',
        <InfoIcon active={pathname === '/info'} />
    )
];
export default navMenu;
