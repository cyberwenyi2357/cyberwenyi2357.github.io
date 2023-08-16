import React from 'react';
import './Home.css'; // 导入你的样式文件


function Home() {
    return (
        <div className="whole">
        <div className="container">
            <div className="photo">
                <img src={require('./photo.jpg')} alt="Your Photo" />
                <p>Be Patient and take it easy.</p>
                <div className="icon-links">
                    <a href="https://github.com/cyberwenyi2357"><i className="fa fa-github fa-2x"></i></a>
                    <a href="https://twitter.com/Freya_Wyy?t=wDaVWEIGtTyaQrxPK8ZG3Q&s=05"><i className="fa fa-twitter fa-2x"></i></a>
                    < a href="mailto:yiwen079@gmail.com"><i className="fa fa-envelope fa-2x"></i>< /a>

                </div>
            </div>
            <div className="intro">
                <h1>Yi Wen</h1>
                <p>Hi there! I’m Yi Wen, Freya, a senior undergraduate student from City University of Hong Kong, majoring in bachelor of Science of Creative Media, where I study computer science and design. I’m interested in Human Computer Interaction, trying to explore novel ways of interaction in VR/AR/MR to facilitate communication and learning.</p>
                <p className="blue-text">I'm seeking opportunities for Research-based Master/PhD/RA starting from 24Fall!</p>
                <div className="second_row">
                <div className="Education">
                    <h2>Education</h2>
                    <li>Bsc, City University of Hong Kong</li>
                    <p>advised by <a href="https://sweb.cityu.edu.hk/canliu/index.html">Dr.Can Liu</a> and <a href="https://www.cs.utoronto.ca/~luzhc/">Dr.Zhicong Lu</a> </p>
                    <p>2020 - present</p>
                </div>
                <div className="ResearchExperience">
                    <h2>Research Experience</h2>
                    <li>iLab, University of Calgary, visiting student researcher</li>
                    <p>advised by <a href="https://ryosuzuki.org/">Dr.Ryo Suzuki</a> </p>
                    <p>2023.06 - present</p>
                    <li>DEER Lab, CityU HK, Research Assistant</li>
                    <p>advised by <a href="https://www.cs.utoronto.ca/~luzhc/">Dr.Zhicong Lu</a> </p>
                    <p>2022.07 - present</p>
                </div>
                </div>
                <div className="News">
                    <h2>News</h2>
<p>23-06 Came to Calgary, Canada for my summer research internship!</p>
                </div>
            </div>


        </div>


    </div>
    );
}

export default Home;