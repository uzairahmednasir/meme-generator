import {useState} from "react"
import memesData from "../memesData"

export default function Meme() {

    const [memeImg, setMemeImg] = useState("")

    const getMemeImage = () => {
        const memesArray = memesData.data.memes
        const randomNum = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNum].url
        setMemeImg(url)
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className="form__input" 
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="form__input" 
                />
                <button 
                    onClick={getMemeImage}
                    type="submit"
                    className="form__btn">
                    Get a new meme image
                </button>
            </div>
            <img src={memeImg} className="meme__img" />
        </main>
    )
}