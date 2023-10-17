import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";


function IndexPage() {
     
      

    const handleFileUpload = async (e) => {
      const files = Array.from(e.target.files);
      const fileTextArray = [];
    
      try {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const fileText = await readFileAsync(file);
          fileTextArray.push(fileText);
        }
    
        console.log("All files have been processed");
        console.log("File content:", fileTextArray);
      } catch (error) {
        console.error("Error. Not all files were processed:", error);
      }


    };
    
    const readFileAsync = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          resolve(e.target.result);
        };
        reader.onerror = (e) => {
          reject(e.target.error);
        };
        reader.readAsText(file);
      });

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