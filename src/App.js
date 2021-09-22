import { useState } from "react";

function App() {
    const [energy, setEnergy] = useState(3);
    const [cards, setCards] = useState(6);

    return (
        <div className="container p-5">
            <div className="row p-3 justify-content-center">
                <div className="col-12">
                    <div class="card-group text-light">
                        <div className="card bg-secondary">
                            <div className="card-header">
                                <h1>Options</h1>
                            </div>
                            <div className="card-body d-flex flex-column">
                                <button
                                    className="btn btn-warning btn-lg"
                                    onClick={() => {
                                        energy + 3 > 10
                                            ? setEnergy(10)
                                            : setEnergy(energy + 2);

                                        cards + 3 > 12
                                            ? setCards(12)
                                            : setCards(cards + 3);
                                    }}
                                >
                                    NEXT ROUND
                                </button>
                                <button
                                    className="btn btn-info btn-lg mt-lg-auto mt-3"
                                    onClick={() => {
                                        setEnergy(3);
                                        setCards(6);
                                    }}
                                >
                                    NEW GAME
                                </button>
                            </div>
                        </div>

                        <div className="card bg-secondary">
                            <div className="card-header">
                                <h1>Energy Tracker</h1>
                            </div>
                            <div className="card-body d-flex flex-column">
                                <button
                                    className="btn btn-primary btn-lg"
                                    onClick={() => {
                                        if (energy >= 10) return;
                                        setEnergy(energy + 1);
                                    }}
                                >
                                    +
                                </button>

                                <h3 className="my-5 text-center">
                                    {energy}/10
                                </h3>

                                <button
                                    className="btn btn-danger btn-lg"
                                    onClick={() => {
                                        if (energy <= 0) return;
                                        setEnergy(energy - 1);
                                    }}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                        <div className="card bg-secondary">
                            <div className="card-header">
                                <h1>Cards Tracker</h1>
                            </div>
                            <div className="card-body d-flex flex-column">
                                <button
                                    className="btn btn-primary btn-lg"
                                    onClick={() => {
                                        if (cards >= 12) return;
                                        setCards(cards + 1);
                                    }}
                                >
                                    +
                                </button>
                                <h3 className="my-5 text-center">{cards}/12</h3>

                                <button
                                    className="btn btn-danger btn-lg"
                                    onClick={() => {
                                        if (cards <= 0) return;
                                        setCards(cards - 1);
                                    }}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
