import React from 'react'
import './CSS/Home.css'
import cake from './Images/cake.png'
import placeholder from './Images/placeholder.jfif'
import placeholder2 from './Images/placeholder2.jfif'

export default function Home() {
    return (
        <div>
            <div className="home-container">
                <p className="greeting">Hello Friend,</p>
                <img className="cake" src={cake}></img>
                <p className="wish">Happy Birthday <i class="em em-heart"></i></p>
                <div class="carousel">
                    <a class="carousel-item"><img src={placeholder} /></a>
                    <a class="carousel-item"><img src={placeholder2} /></a>
                    <a class="carousel-item"><img src={placeholder} /></a>
                    <a class="carousel-item"><img src={placeholder2} /></a>
                    <a class="carousel-item"><img src={placeholder} /></a>
                </div>
                <div className="look">Look at what we have to say...</div>
                <div >
                    <a class="waves-effect waves-light btn modal-trigger lookbtn" href="#modal1">Friend1</a>

                    <div id="modal1" class="modal">
                        <div class="modal-content">
                            <h4>Modal Header</h4>
                            <p>A bunch of text</p>
                        </div>
                        <div class="modal-footer">
                            <a class="modal-close waves-effect waves-green btn-flat">Close</a>
                        </div>
                    </div>
                    <a class="waves-effect waves-light btn modal-trigger lookbtn" href="#modal2">Friend2</a>

                    <div id="modal2" class="modal">
                        <div class="modal-content">
                            <h4>Modal Header</h4>
                            <p>A bunch of text</p>
                        </div>
                        <div class="modal-footer">
                            <a class="modal-close waves-effect waves-green btn-flat">Close</a>
                        </div>
                    </div>
                    <a class="waves-effect waves-light btn modal-trigger lookbtn" href="#modal3">Friend3</a>

                    <div id="modal3" class="modal">
                        <div class="modal-content">
                            <h4>Modal Header</h4>
                            <p>A bunch of text</p>
                        </div>
                        <div class="modal-footer">
                            <a class="modal-close waves-effect waves-green btn-flat">Close</a>
                        </div>
                    </div>
                    <div className="wpy">We Love You <i class="em em-purple_heart"></i></div>
                </div>
            </div>
        </div>
    )
}
