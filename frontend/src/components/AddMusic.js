import { Formik } from "formik"
import React, { useState } from "react"
import Swal from "sweetalert2"

const AddMusic = () => {
  const [selFile, setSelFile] = useState("");
  const [selImage, setSelImage] = useState("");

  // this function will be called on form submit
  const userSubmit = async (formdata) => {
    formdata.file = selFile;
    formdata.image = selImage;
    console.log(formdata)

    // to send request on backend we need a few details
    // 1. url
    // 2. request method
    // 3. Data to Send
    // 4. Data format

    // fetch,,,,asynchronous function - returns promise
    const response = await fetch("http://localhost:5000/music/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })

    // task B

    if (response.status === 200) {
      console.log("request sent successfully")
      Swal.fire({
        icon: "success",
        title: "Well Done",
        text: "Registered Successfully",
      })

    } else {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Some error occurred",
      })
      console.log("some error occured")
    }
  }

  const uploadFile = (e) => {
    const file = e.target.files[0]
    const fd = new FormData()
    setSelFile(file.name)
    fd.append("myfile", file)
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded")
      }
    })
  }
  
  const uploadImage = (e) => {
    const file = e.target.files[0]
    const fd = new FormData()
    setSelImage(file.name);
    fd.append("myfile", file)
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded")
      }
    })
  }

  return (
    <div id="bg-image">
    <div id="head"className="container">
      <h3 id="tx" className="my-3 text-center">Add Music</h3>

      <Formik initialValues={{ title: "", genre: "", artist: "", lyrics: "", publisher: "", createdAt: new Date() }} onSubmit={userSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label id="tx">Title</label>
            <input value={values.title} id="title" onChange={handleChange} className="form-control mb-3" />

            <label id="tx">Genre</label>
            <input value={values.genre} id="genre" onChange={handleChange} className="form-control mb-3 " />

            <label id="tx">Artist</label>
            <input value={values.artist} id="artist" onChange={handleChange} className="form-control mb-3" />

            <label id="tx">Publisher</label>
            <input value={values.publisher} id="publisher" onChange={handleChange} className="form-control mb-3" />

            <label id="tx">Lyrics</label>
            <textarea rows={5} value={values.lyrics} id="lyrics" onChange={handleChange} className="form-control mb-3"></textarea>

            <label htmlFor="uploadfile" className="mt-4 btn btn-dark">Choose File</label>
            <input hidden id="uploadfile" type="file" onChange={uploadFile} />
            <label htmlFor="uploadimage" className="mt-4 btn btn-dark">Choose Image</label>
            <input hidden id="uploadimage" type="file" onChange={uploadImage} />

            <button type="submit" className="btn btn-primary mt-5">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
    <p>
      
    </p>
    </div>
  )
}

export default AddMusic
