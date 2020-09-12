import { IAnchorLink } from '@Interfaces/Layout/IAnchorLink';

const NavItem = ({ link }: { link: IAnchorLink }) => {
    return (
        <a href={link.link} className="block mt-4 md:inline-block md:mt-0 text-white-200 hover:text-gray mr-4 text-md">
            {link.title}
        </a>
    );
};

export const Navbar = ({ links = [] }: { links: IAnchorLink[] }) => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-transparent p-6 fixed w-full">
            <div className="w-25">
                <img style={logoStyle} alt="Brand Logo" src="logo.svg" />
            </div>
            <div className="hidden md:block w-75 justify-end flex-grow md:flex md:items-right md:w-auto">
                {links.map((link, index) => (
                    <NavItem key={index} link={link} />
                ))}
            </div>
        </nav>
    );
};

const logoStyle = {
    height: "50px"
}