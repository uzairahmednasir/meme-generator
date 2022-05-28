export default function Meme() {
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
                    type="submit"
                    className="form__btn">
                    Get a new meme image
                </button>
            </div>
        </main>
    )
}