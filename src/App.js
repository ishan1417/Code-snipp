import  { useState } from "react";

const App = () => {
  const [answer, setAnswer] = useState("");

  const handleYes = () => {
    setAnswer("yes");
  };

  const handleNo = () => {
    setAnswer("no");
  };

  return (
    <div className="container" style={{ backgroundColor: "orange" }}>
      <div className="hearts">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i}>❤️</span>
        ))}
      </div>

      {/* Proposal Card */}
      <div className="card">
        {answer === "" && (
          <>
            <h1>Meri Shrangika ❤️</h1>
            <p>From the moment you came into my life, everything changed.</p>
            <p>Will you marry me? 💍</p>

            <div className="buttons">
              <button className="yes" onClick={handleYes}>
                YES 💖
              </button>
              <button className="no" onClick={handleNo}>
                NO 🙈
              </button>
            </div>
          </>
        )}
        
        {answer === "yes" && (
          <>
            <h1>😍 She Said YES! 💍</h1>
            <p>
              I promise to love you, respect you, and stand by you forever ❤️
            </p>
          </>
        )}

        {answer === "no" && (
          <>
            <h1>😄 Karni to padegi…</h1>
            <p>Kyunki main haar maanta hi nahi 😉❤️</p>
          </>
        )}
      </div>
<div className="hearts">
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i}>❤️</span>
          ))}
        </div>
      <style>{`
        .container {
          height: 100vh;
          background-image: url("/myImage.jpeg"); /* 👈 Replace image */
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          font-family: 'Segoe UI', sans-serif;
        }

        .card {
          background: rgba(255, 255, 255, 0.85);
          padding: 30px;
          border-radius: 20px;
          text-align: center;
          max-width: 400px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          z-index: 2;
        }

        h1 {
          color: #e11d48;
        }

        p {
          font-size: 18px;
          margin: 10px 0;
        }

        .buttons {
          margin-top: 20px;
          display: flex;
          justify-content: space-around;
        }

        button {
          padding: 12px 25px;
          border-radius: 30px;
          font-size: 16px;
          cursor: pointer;
          border: none;
        }

        .yes {
          background: #e11d48;
          color: white;
        }

        .no {
          background: #d1d5db;
        }

        /* Hearts Animation */
        .hearts span {
          position: absolute;
          bottom: -50px;
          font-size: 24px;
          animation: float 4s linear infinite;
        }

        .hearts span:nth-child(n) {
          left: calc(100% * var(--i));
        }

        .hearts span {
          left: calc(100% * random());
        }

        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh);
            opacity: 0;
          }
        }

        .hearts span {
          animation-delay: calc(-1s * var(--i));
        }

        .hearts span:nth-child(odd) {
          font-size: 30px;
        }
      `}</style>
    </div>
  );
};

export default App;
