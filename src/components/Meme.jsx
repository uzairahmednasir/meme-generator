import {useState, useEffect} from "react"


export default function Meme() {
    
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes,  setallMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setallMemes(data.data.memes))
    }, [])

    const getMemeImage = () => {
        const randomNum = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url
        }))
    }

    function handleChange(e) {
        const {name, value} = e.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className="form__input" 
                    onChange={handleChange}
                    value={meme.topText}
                    name="topText"
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="form__input" 
                    onChange={handleChange}
                    value={meme.bottomText}
                    name="bottomText"
                />
                <button 
                    onClick={getMemeImage}
                    type="submit"
                    className="form__btn">
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImg} className="meme__img" />
                <h2 className="meme__text top">{meme.topText}</h2>
                <h2 className="meme__text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}