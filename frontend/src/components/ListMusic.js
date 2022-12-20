import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Track = () => {
  const [musicList, setMusicList] = useState([])

  const getDataFromBackend = async () => {
    const response = await fetch("http://localhost:5000/music/getall")
    const data = await response.json()
    console.log(data)
    setMusicList(data)
  }

  useEffect(() => {
    getDataFromBackend()
  }, [])

  const displayData = () => {
    return musicList.map((music) => (
      <div className="col-md-3 mt-4">
        <div className="card">
            <img className="card-img-top" src={"http://localhost:5000/" + music.image} alt="" />
          <div className="card-body">
            <h4>{music.title}</h4>
            <p className="text-muted">{music.artist}</p>
            <p className="float-end text-muted">{music.publisher} | {music.year}</p>
            <Link className="btn btn-warning w-100" to={'/playmusic/'+music._id}>Play Now</Link>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div>
      <header className="bg-dark">
        <div className="container text-center py-5">
          <p className="display-1 fw-bold text-white">Music WebApp</p>
        </div>
      </header>

      <div className="container mt-5">
        <div className="row">{displayData()}</div>
      </div>
    </div>
  )
}

export default Track
