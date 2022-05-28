import memesData from "../memesData"

export default function Meme() {

    const getMemeImage = () => {
        console.log("lol")
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
        </main>
    )
}