import { useState } from "react";
var playerData = require("./player_data.json");

const App = () => {
  const [player1team1, setPlayer1Team1] = useState({ name: "", obj: {} });
  const [player1team2, setPlayer1Team2] = useState({ name: "", obj: {} });
  const [player2team1, setPlayer2Team1] = useState({ name: "", obj: {} });
  const [player2team2, setPlayer2Team2] = useState({ name: "", obj: {} });
  const [player3team1, setPlayer3Team1] = useState({ name: "", obj: {} });
  const [player3team2, setPlayer3Team2] = useState({ name: "", obj: {} });
  const [searched, setSearched] = useState(false);

  const loadPlayerInfo = (player, setting) => {
    if (player.name === "") {
      return null;
    }
    if (!(player.name in playerData)) {
      alert(player.name + " is not a valid player name");
      return null;
    }
    return setting((prevState) => {
      return { ...prevState, obj: playerData[player.name] };
    });
  };
  const generateTree = () => {
    if (player1team1.name !== "") {
      loadPlayerInfo(player1team1, setPlayer1Team1);
    } else {
      return;
    }
    loadPlayerInfo(player2team1, setPlayer2Team1);
    loadPlayerInfo(player3team1, setPlayer3Team1);

    if (player1team2.name !== "") {
      loadPlayerInfo(player1team2, setPlayer1Team2);
    } else {
      return;
    }
    loadPlayerInfo(player2team2, setPlayer2Team2);
    loadPlayerInfo(player3team2, setPlayer3Team2);

    if (player1team1.obj != null && player1team2.obj != null) {
      setSearched(true);
    }
    return;
  };

  const viewTree = () => {
    if (searched) {
      const team1utility =
        player1team1.obj.Utility +
        (player2team1?.obj.Utility || 0) +
        (player3team1?.obj.Utility || 0);
      const team2utility =
        player1team2.obj.Utility +
        (player2team2?.obj.Utility || 0) +
        (player3team2?.obj.Utility || 0);
      var left = true;
      if (team1utility < team2utility) {
        left = false;
      }
      return (
        <div>
          <br></br>
          <h1 className="ui header" style={{ fontSize: "4rem" }}>
            D
          </h1>
          <div className="ui grid">
            <div className="eight column row">
              <div className="column"></div>
              <div className="column"></div>
              <div className="column"></div>
              {left ? (
                <div className="column">
                  {" "}
                  <h1 className="ui blue header" style={{ fontSize: "6rem" }}>
                    /
                  </h1>
                </div>
              ) : (
                <div className="column">
                  {" "}
                  <h1 className="ui header" style={{ fontSize: "6rem" }}>
                    /
                  </h1>
                </div>
              )}
              {left ? (
                <div className="column">
                  {" "}
                  <h1 className="ui header" style={{ fontSize: "6rem" }}>
                    \
                  </h1>
                </div>
              ) : (
                <div className="column">
                  {" "}
                  <h1 className="ui blue header" style={{ fontSize: "6rem" }}>
                    \
                  </h1>
                </div>
              )}
              <div className="column"></div>
              <div className="column"></div>
              <div className="column"></div>
            </div>
            <div className="six column row">
              <div className="column"></div>
              <div className="column"></div>
              <div className="column">
                <h3>
                  {player1team1.name} {player1team1.obj.Utility}
                </h3>
                <p>PER: {player1team1.obj.PER}</p>
                <p>VORP: {player1team1.obj.VORP}</p>
                <p>WS: {player1team1.obj.WS}</p>
                <h3>
                  {player2team1?.name} {player2team1?.obj.Utility}
                </h3>
                <p>{player2team1.name !== '' ? 'PER: ' + player2team1?.obj.PER : ''}</p>
                <p>{player2team1.name !== '' ? 'VORP: ' + player2team1?.obj.VORP : ''}</p>
                <p>{player2team1.name !== '' ? 'WS: ' + player2team1?.obj.WS : ''}</p>
                <h3>
                  {player3team1?.name} {player3team1?.obj.Utility}
                </h3>
                <p>{player3team1.name !== '' ? 'PER: ' + player3team1?.obj.PER : ''}</p>
                <p>{player3team1.name !== '' ? 'VORP: ' + player3team1?.obj.VORP : ''}</p>
                <p>{player3team1.name !== '' ? 'WS: ' + player3team1?.obj.WS : ''}</p>
              </div>
              <div className="column">
                <h3>
                  {player1team2.name} {player1team2.obj.Utility}
                </h3>
                <p>PER: {player1team2.obj.PER}</p>
                <p>VORP: {player1team2.obj.VORP}</p>
                <p>WS: {player1team2.obj.WS}</p>
                <h3>
                  {player2team2?.name} {player2team2?.obj.Utility}
                </h3>
                <p>{player2team2.name !== '' ? 'PER: ' + player2team2?.obj.PER : ''}</p>
                <p>{player2team2.name !== '' ? 'VORP: ' + player2team2?.obj.VORP : ''}</p>
                <p>{player2team2.name !== '' ? 'WS: ' + player2team2?.obj.WS : ''}</p>
                <h3>
                  {player3team2?.name} {player3team2?.obj.Utility}
                </h3>
                <p>{player3team2.name !== '' ? 'PER: ' + player3team2?.obj.PER : ''}</p>
                <p>{player3team2.name !== '' ? 'VORP: ' + player3team2?.obj.VORP : ''}</p>
                <p>{player3team2.name !== '' ? 'WS: ' + player3team2?.obj.WS : ''}</p>
              </div>
              <div className="column"></div>
              <div className="column"></div>
            </div>
            <div className="six column row">
            <div className="column"></div>
              <div className="column"></div>
              <div className="column"><h2>Total Utility: {team1utility}</h2></div>
              <div className="column"><h2>Total Utility: {team2utility}</h2></div>
              <div className="column"></div>
              <div className="column"></div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <br></br>
      <br></br>
      <h1
        className="ui blue center aligned header"
        style={{ fontSize: "4rem" }}
      >
        NBA Trade Evaluator
      </h1>
      <div className="ui segment center aligned">
        <form className="ui form">
          <div className="two fields">
            <div className="field">
              <h1>Team Offers</h1>
            </div>
            <div className="field">
              <h1>Team Receives</h1>
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>Player 1</label>
              <input
                type="text"
                value={player1team1.name}
                onChange={(e) =>
                  setPlayer1Team1((prevState) => {
                    return { ...prevState, name: e.target.value };
                  })
                }
                placeholder="Player 1"
              />
            </div>
            <div className="field">
              <label>Player 1</label>
              <input
                type="text"
                value={player1team2.name}
                onChange={(e) =>
                  setPlayer1Team2((prevState) => {
                    return { ...prevState, name: e.target.value };
                  })
                }
                placeholder="Player 1"
              />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>Player 2</label>
              <input
                type="text"
                value={player2team1.name}
                onChange={(e) =>
                  setPlayer2Team1((prevState) => {
                    return { ...prevState, name: e.target.value };
                  })
                }
                placeholder="Player 2"
              />
            </div>
            <div className="field">
              <label>Player 2</label>
              <input
                type="text"
                value={player2team2.name}
                onChange={(e) =>
                  setPlayer2Team2((prevState) => {
                    return { ...prevState, name: e.target.value };
                  })
                }
                placeholder="Player 2"
              />
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>Player 3</label>
              <input
                type="text"
                value={player3team1.name}
                onChange={(e) =>
                  setPlayer3Team1((prevState) => {
                    return { ...prevState, name: e.target.value };
                  })
                }
                placeholder="Player 3"
              />
            </div>
            <div className="field">
              <label>Player 3</label>
              <input
                type="text"
                value={player3team2.name}
                onChange={(e) =>
                  setPlayer3Team2((prevState) => {
                    return { ...prevState, name: e.target.value };
                  })
                }
                placeholder="Player 3"
              />
            </div>
          </div>
          <button
            className="ui blue button"
            onClick={() => generateTree()}
            type="button"
          >
            Generate Tree
          </button>
        </form>
        {viewTree()}
      </div>
    </div>
  );
};

export default App;
