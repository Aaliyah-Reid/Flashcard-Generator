import React from "react";
import { Link } from "react-router-dom";


function LibraryPage() {
    return (
        <div>
            <Link to={"/"}>dsmdsdn</Link>

            <div class="fcpage-body">

                <header class="fcpage-header">
                    <div class="nav-bar">



                        <h1>Aaliyah's FlashCards</h1>
                        <h2 class="nav-headings">Your Sets</h2>

                        <h3 class="subjects">Biology</h3>
                        <div class="sub-topics">
                            <ul>
                                <li>Heart</li>
                                <li>Heads</li>
                                <li>Lungs</li>
                            </ul>
                        </div>

                        <h3 class="subjects">Computing</h3>

                        <div class="sub-topics">
                            <ul>
                                <li>Python</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                    </div>



                </header>







                <div class="flash-card-stack" >

                    <center>

                        <div class="flash-card card-1" ></div>

                        <div class="flash-card card-2" ></div>

                        <div class="flash-card card-3" ></div>
                    </center>





                </div>



            </div>
        </div>
    );
}

export default LibraryPage;
