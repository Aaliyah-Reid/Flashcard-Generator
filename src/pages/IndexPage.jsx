import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function IndexPage() {


  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files);

    try {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }

      const response = await axios.post("http://127.0.0.1:5173/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Files uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };
  
    
    return (
        <div>



          <Link to={"login"}> <button>Login/Signin</button> </Link>

            <div class="front-body">
                


                <div class="front-name">

                    <h1>Cardion</h1>

                </div>


                <div class="front-upload">
                    <center>

                     

                        <div>
                        <input type="file" multiple onChange={handleFileUpload} />
                         <button type="button"  >Upload</button>



                        </div>
                      
                          

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