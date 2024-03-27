import Banner from "../Banner";
import Category from "../Category";
import PopularMenu from "../PopularMenu";
import Featured from "./Featured/Featured";

 

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;