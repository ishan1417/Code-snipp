import { useState } from "react";

const App = () => {
  const [opened, setOpened] = useState(false);
  const [answer, setAnswer] = useState("");

  return (
    <div className="container">
      {/* Floating Hearts */}
      <div className="hearts">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i}>❤️</span>
        ))}
      </div>

      {/* Envelope Stage */}
      {!opened && (
        <div className="envelope-stage">
          <div className="dialogue">
            <p><strong>Shrangika:</strong> What’s this? 🤔</p>
            <p><strong>Ishaan:</strong> Trust me… open karo 💌</p>
          </div>

          <div className="envelope" onClick={() => setOpened(true)}>
            <div className="flap"></div>
            <div className="body"></div>
            <p className="open-text">Tap on the envelope 💖</p>
          </div>
        </div>
      )}

      {/* Proposal Card */}
      {opened && (
        <div className="card">
          {/* Question */}
          {answer === "" && (
            <>
              <h1>Meri Shrangika ❤️</h1>
              <p>
                From the moment you came into my life, my world became more
                beautiful ✨
              </p>
              <p className="question">Will you marry me? 💍</p>

              <div className="buttons">
                <button className="yes" onClick={() => setAnswer("yes")}>
                  YES 💖
                </button>
                <button className="no" onClick={() => setAnswer("no")}>
                  NO 🙈
                </button>
              </div>
            </>
          )}

          {/* YES */}
          {answer === "yes" && (
            <>
              <h1>😍 She Said YES! 💍</h1>
              <p>
                I promise to love you in every season of life — in laughter and
                silence, in sunshine and storms. To hold your hand on good days
                and be your strength on the hard ones. You are my today, my
                tomorrow, and my forever. ♾️❤️
              </p>

              {/* Ring drop */}
              <div className="ring-drop">💍</div>
            </>
          )}

          {/* NO */}
          {answer === "no" && (
            <>
              <h1>😄 Galat Button!</h1>
              <p>
                Ye NO sirf test tha 😌  
                Kyunki main haar maanta hi nahi ❤️
              </p>

              <button className="back" onClick={() => setAnswer("")}>
                ⬅ Back
              </button>
            </>
          )}
        </div>
      )}

      {/* Styles */}
      <style>{`
        .container {
          height: 100vh;
          background: linear-gradient(135deg, #ff758c, #ff7eb3);
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          font-family: 'Segoe UI', sans-serif;
          position: relative;
        }

        /* Envelope */
        .envelope-stage {
          text-align: center;
          z-index: 2;
        }

        .dialogue {
          color: white;
          font-size: 20px;
          margin-bottom: 20px;
        }

        .envelope {
          width: 220px;
          height: 140px;
          position: relative;
          cursor: pointer;
        }

        .envelope .body {
          width: 100%;
          height: 100%;
          background: #fff;
          border-radius: 10px;
        }

        .envelope .flap {
          position: absolute;
          top: -2px;
          left: 0;
          width: 100%;
          height: 70px;
          background: #f43f5e;
          clip-path: polygon(0 0, 100% 0, 50% 100%);
        }

        .open-text {
          margin-top: 10px;
          color: white;
          font-weight: bold;
        }

        /* Card */
        .card {
          background: rgba(255,255,255,0.95);
          padding: 30px;
          border-radius: 20px;
          text-align: center;
          max-width: 420px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
          z-index: 2;
          animation: pop 0.6s ease;
          position: relative;
        }

        @keyframes pop {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        h1 { color: #e11d48; }
        .question { font-size: 20px; font-weight: bold; }

        .buttons {
          margin-top: 20px;
          display: flex;
          justify-content: space-around;
        }

        button {
          padding: 12px 28px;
          border-radius: 30px;
          font-size: 16px;
          cursor: pointer;
          border: none;
        }

        .yes { background: #e11d48; color: white; }
        .no { background: #fbcfe8; }
        .back {
          margin-top: 20px;
          background: #e11d48;
          color: white;
          padding: 12px 30px;
          border-radius: 30px;
          font-size: 16px;
        }

        /* Floating Hearts */
        .hearts span {
          position: absolute;
          bottom: -40px;
          font-size: 24px;
          animation: float 6s linear infinite;
        }

        .hearts span:nth-child(odd) { font-size: 30px; }

        @keyframes float {
          from { transform: translateY(0); opacity: 1; }
          to { transform: translateY(-120vh); opacity: 0; }
        }

        /* Ring Drop */
        .ring-drop {
          font-size: 40px;
          position: absolute;
          top: -50px;
          left: 50%;
          transform: translateX(-50%);
          animation: ringFall 2s ease forwards;
        }

        @keyframes ringFall {
          0% { top: -50px; transform: translateX(-50%) scale(0.5); opacity: 0; }
          50% { top: 80px; transform: translateX(-50%) scale(1.2); opacity: 1; }
          70% { top: 70px; transform: translateX(-50%) scale(0.9); }
          100% { top: 80px; transform: translateX(-50%) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default App;
