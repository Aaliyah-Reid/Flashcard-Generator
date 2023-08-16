import React from "react";
import { Link } from "react-router-dom";


function LibraryPage() {
    return (
        <div>
            <Link to={"/"}>dsmdsdn</Link>

            <div class="Library-body">
                <header class="Library-header">
                    <img class="gear" src="gear.png" alt="" />
                    <h1 style={{ marginLeft: '1%', display: 'inline' }}>Library</h1>
                </header>
                <br /> <br /> <br />
                <section class="Library-content">
                    <a href="youtube.com" class="Library-link">
                        <div class="Library-items">
                            <h2 class="Library-title">title</h2>
                        </div>
                    </a>

                    <a href="youtube.com">
                        <div class="Library-items">
                            <h2 class="Library-title">title</h2>
                        </div>
                    </a>
                </section>
            </div>
        </div>
    );
}

export default LibraryPage;
