import Banner from "../Banner";
import Category from "../Category";
import PopularMenu from "../PopularMenu";
import Testimonials from "../Testimonials";
import Featured from "./Featured/Featured";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;