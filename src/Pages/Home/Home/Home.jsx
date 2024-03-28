import Banner from "../Banner";
import Category from "../Category";
import PopularMenu from "../PopularMenu";
import Testimonials from "../Testimonials";
import Featured from "./Featured/Featured";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Food | Home!</title>
       </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;