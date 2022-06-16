import {useState} from "react"
import memesData from "../memesData"

export default function Meme() {

    // const [memeImg, setMemeImg] = useState("")
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages,  setAllMemeImages] = useState(memesData)

    const getMemeImage = () => {
        const memesArray = allMemeImages.data.memes
        const randomNum = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url
        }))
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
            <img src={meme.randomImg} className="meme__img" />
        </main>
    )
}