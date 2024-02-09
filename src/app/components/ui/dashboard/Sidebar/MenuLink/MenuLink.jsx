import Link from "next/link";

const MenuLink = ({item}) => {
    return (
        <Link href={item.path} className="flex text-white">
            {item.icon}
            {item.title}
        </Link>
    );
};

export default MenuLink;