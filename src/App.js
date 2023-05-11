

const App = () => {
    return (
        <div className="mainPage">
            <div className="cardContainer">
                <img className="gradientImage" src='/images/bg-main-desktop.png' />
            </div>
            <div className="formContainer">
                <form className="submitForm">
                    <div className="inputField one">
                        <label>CARDHOLDER NAME</label>
                        <input placeholder="e.g. Jane Appleseed"></input>
                    </div>
                    <div className="inputField two">
                        <label>CARD NUMBER</label>
                        <input placeholder="e.g. 1234 5678 9123 0000"></input>
                        <p>Wrong format, numbers only</p>
                    </div>
                    <div >
                        <div className="detailsContainer">
                            <div>
                                <label>EXP. DATE</label>
                                <input></input>
                                <p>Can't be blank</p>
                            </div>
                            <div>
                                <label>(MM/YY)</label>
                                <input></input>
                            </div>
                            <div>
                                <label>CVC</label>
                                <input></input>
                                <p>Can't be blank</p>
                            </div>
                        </div>
                    </div>
                    <button>Confirm</button>
                </form>
            </div>
        </div>
    )
}

export default App