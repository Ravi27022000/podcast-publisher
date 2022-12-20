import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReactAudioPlayer from "react-audio-player"

const PlayMusic = () => {
  const { id } = useParams()

  const [musicData, setMusicData] = useState(null)
  const [loading, setLoading] = useState(false)

  const getDataFromBackend = async () => {
    setLoading(true)
    const response = await fetch("http://localhost:5000/music/getbyid/" + id)
    const data = await response.json()
    console.log(data)
    setMusicData(data)
    setLoading(false)
  }

  useEffect(() => {
    getDataFromBackend()
  }, [])

  const displayMusic = () => {
    if (!loading && musicData)
      return (
        <div className="container">
          <div className="card">
            <img className="card-img-top" src={"http://localhost:5000/" + musicData.image} alt="" />
            <div className="card-body">
              <h1>{musicData.title}</h1>
            </div>
            <div className="card-footer">
              <ReactAudioPlayer src={"http://localhost:5000/" + musicData.file} autoPlay controls />
            </div>
          </div>
        </div>
      )
    else {
      return (
        <img
          className="img-fluid"
          src="https://cdn.dribbble.com/users/4241225/screenshots/14521747/media/d9d6f50e1443ecbdef32497685c0b5eb.gif"
          alt=""
        />
      )
    }
  }

  return (
    <div>
      <header>
        <h1>Music Player</h1>
      </header>
      {displayMusic()}
    </div>
  )
}

export default PlayMusic
