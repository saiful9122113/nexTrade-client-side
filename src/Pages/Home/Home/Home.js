import React from 'react';
import About from '../About/About';
import Categories from '../../CategoryData/Categories/Categories';
import SearchBox from '../Header/SearchBox';

const Home = () => {
    return (
        <div>
            <SearchBox></SearchBox>
            <Categories></Categories>
            <About></About>
        </div>
    );
};

export default Home;