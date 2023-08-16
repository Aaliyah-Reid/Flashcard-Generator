import React from "react";
import { Link } from "react-router-dom";


function LibraryPage() {
    return (
        <div>
            <Link to={"/"}>dsmdsdn</Link>

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

                <script>

                    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
                        e.preventDefault();


                    const files = document.getElementById("files");
                    const textArea = document.getElementById("textArea");

                    const formData = new FormData();

                    // loops through all files uploaded and adds them to an array if it's an pp, pdf or plain text
                    for (let i=0; i < files.files.length; i++){
        // to store the MIME types of files...these are like identifiers
        const allowedFiles =[
                    'application/pdf',
                    'application/vnd.ms-powerpoint',
                    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                    'text/plain'
                    ];

                    const currFile = files.files[i]

                    if (allowedFiles.includes(currFile.type)){
                        // files in stirng will be use to access the data on the server side...like a key
                        formData.append("files", files.files[i]);
        }
                    // maybe can ask if you wish to continue or reload a file in this instance 
                    else{
                        console.log("Please only upload PowerPoints, PDF's or plain text. File not allowed: ", currFile.name);
            }
    }
                    // pasted text in stirng will be use to access the data on the server side
                    formDate.append("pastedText",textArea.value);


                    // just to show the files uploaded for testing
                    console.log(...formData);

                    //  this sends a POST request to the server...replace with the actual url of 
                    // the API endpoint that handles file uploads
                    fetch('http://127.0.0.1:5000/uploads', {
                        // sends dats to server for processing
                        method: 'POST',
                    // this is the data we are sending to the server
                    body: formData, 
    })

    // for after getting a response from the server
    // 
    .then(res => res.json())
    .then(data => console.log(data));
})
                </script>






                <div>

                    <button class="front-library">Library</button>

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

export default LibraryPage;