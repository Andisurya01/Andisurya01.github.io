import React from 'react';
import Navbar from '../AllComponentsHere/Components Home/navbar';
import Footerandi from '../AllComponentsHere/Components Home/Footerandi';
import Postingan from '../AllComponentsHere/Components Home/IgInfor';
import Hero from '../AllComponentsHere/Components Home/Hero';
import JudulIg from '../AllComponentsHere/Components Home/JuduIg';
import Garis from '../AllComponentsHere/Components Abstract/Garis';
import JudulProject from '../AllComponentsHere/Components Home/JudulProjectKuli';
import ProjectKuli1 from '../AllComponentsHere/Components Home/ProjectKuli1';
import HR from '../AllComponentsHere/Components Abstract/GarisHorizontal';
import ProjectKuli2 from '../AllComponentsHere/Components Home/ProjectKuli2';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Garis></Garis>
            <JudulIg></JudulIg>
            <Postingan/>
            <HR/>
            <JudulProject></JudulProject>
            <ProjectKuli1/>
            <ProjectKuli2/>
            <Footerandi></Footerandi>
        </div>
    )
}

export default Home;