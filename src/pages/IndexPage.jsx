import React from "react";
import { Link } from "react-router-dom";


function IndexPage() {
    return (
        <div>

            <div class="front-body">


                <div class="front-name">

                    <h1>Cardion</h1>

                </div>


                <div class="front-upload">
                    <center>


                        <form action="/upload" method="POST" enctype="multipart/form-data">
                            <input type="file" name="file" id="files" multiple />
                            <button type="submit">Upload</button>

                        </form>

                        <h3>or</h3>

                        <h3>drop file</h3>
                        <label for="textArea">Paste Text Here</label>
                        <textarea name="textArea" id="textArea"></textarea>


                    </center>

                </div>



                <div>

                    <Link to={"/Library"}><button class="front-library">Library</button></Link>

                </div>



                <section class="front-section">

                    <h1 class="front-recentH1">Recent</h1>

                </section>


                <hr />

                <section class="front-section">

                    <center>

                        <h2 class="front-recent">Empty</h2>

                    </center>

                </section>








            </div>

        </div>
    );
}

export default IndexPage;