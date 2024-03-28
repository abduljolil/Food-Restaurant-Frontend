 
import useMenu from "../../Hooks/useMenu";
import MenuItem from "../Shared/MenuItem/MenuItem";
import SectionTitle from "../Shared/SectionTitle";
 
 
 

 

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    
    return (
        <section className="mb-12">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="mx-auto text-center md:w-4/12  ">
            <button className="btn btn-outline border-0 border-b-4 mt-4 ">Viwe All Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;