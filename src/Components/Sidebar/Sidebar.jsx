import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import MrBeast from '../../assets/MrBeast.jpg';
import Cristiano from '../../assets/Cristiano.jpg'
import CarryMinati from '../../assets/CarryMinati.jpg'
import freecodecamp from '../../assets/freecodecamp.jpg'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'


const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}> 
    {/* for dynamic class name ie if the side bar is expanded it will have the className as sidebar and if not then small-sidebar */}
        <div className="shortcut-links">
            <div className={`side-link ${category===0?"active":""}`} onClick={() => {setCategory(0)}}>
                <img src={home} alt="" />
                <p>Home</p>
            </div>
            <div className={`side-link ${category===20?"active":""}`} onClick={() => {setCategory(20)}}>
                <img src={game_icon} alt="" />
                <p>Gaming</p>
            </div>
            <div className={`side-link ${category===2?"active":""}`} onClick={() => {setCategory(2)}}>
                <img src={automobiles} alt="" />
                <p>Automobiles</p>
            </div>
            <div className={`side-link ${category===17?"active":""}`} onClick={() => {setCategory(17)}}>
                <img src={sports} alt="" />
                <p>Sports</p>
            </div>
            <div className={`side-link ${category===24?"active":""}`} onClick={() => {setCategory(24)}}>
                <img src={entertainment} alt="" />
                <p>Entertainment</p>
            </div>
            <div className={`side-link ${category===28?"active":""}`} onClick={() => {setCategory(28)}}>
                <img src={tech} alt="" />
                <p>Technology</p>
            </div>
            <div className={`side-link ${category===10?"active":""}`} onClick={() => {setCategory(10)}}>
                <img src={music} alt="" />
                <p>Music</p>
            </div>
            <div className={`side-link ${category===22?"active":""}`} onClick={() => {setCategory(22)}}>
                <img src={blogs} alsit="" />
                <p>Blogs</p>
            </div>
            <div className={`side-link ${category===25?"active":""}`} onClick={() => {setCategory(25)}}>
                <img src={news} alt="" />
                <p>News</p>
            </div>
            <hr />
        </div>
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div class="side-link">
                <a href="https://www.youtube.com/@cristiano" target="_blank">
                    <img src={Cristiano} alt="Cristiano" />
                    <span class = "text" text-color = "black">UR. Cristiano</span>
                </a>
            </div>

            <div class="side-link">
                <a href="https://www.youtube.com/@MrBeast" target="_blank">
                    <img src={MrBeast} alt="MrBeast" />
                    <span class = "text" text-color = "black"> MrBeast</span>
                </a>
            </div>

            <div class="side-link">
                <a href="https://www.youtube.com/@CarryMinati" target="_blank">
                    <img src={CarryMinati} alt="CarryMinati" />
                    <span class = "text" text-color = "black"> Carry Minati</span>
                </a>
            </div>
           
            <div class="side-link">
                <a href=" https://www.youtube.com/@freecodecamp" target="_blank">
                    <img src={freecodecamp} alt="freecodecamp" />
                    <span class = "text" text-color = "black"> freecodecamp</span>
                </a>
            </div>
        
        </div>
    </div>
  )
}

export default Sidebar