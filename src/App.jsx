import { useState } from "react";
import JSConfetti from "js-confetti";
function App() {
  const jsConfetti = new JSConfetti();
  const [randomValor, setRandomValor] = useState({});

  const [imagenCargada, setImagenCargada] = useState(false);
  const [agrandar, setAgrandar] = useState(32);

  const [valueSi, setValueSi] = useState(false);

  let random = [
    {
      id: 1,
      frase:
        "Al igual que Hinata a Naruto, quiero ser tu apoyo constante, siempre animándote y creyendo en ti, incluso en los momentos más difíciles.",
      description: "Di si por favor uu",
      img: "https://24.media.tumblr.com/fb9b359136f213536400f82bef4b7b1d/tumblr_mr9ffbjVJ31s8mxzuo1_500.gif",
    },
    {
      id: 1,
      frase:
      "Sin ti seria como Luffy sin comida en medio de una pelea contra BigMoon",
  
      description: "Piénsalo de nuevo .",
      img: "https://i.pinimg.com/236x/8c/87/f1/8c87f104fb7b9b4abaa5e4641eecb5e3.jpg",
    },
    {
      id: 2,
      frase:
        "Así como Milk a Goku, quiero estar a tu lado en cada batalla de la vida, ofreciéndote mi amor y apoyo incondicional en cada momento.",
      description: "Jamas lloraras por una infidelidad",
      img: "https://www.fayerwayer.com/resizer/BJPH_vsihsYmK67xyRqMe31vJls=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/RLSHY26K7RDXZH5OWZLW65YVIM.jpg",
    },
    {
      id: 3,
      description: "No tengas miedo, será genial.",
      img: "https://i.pinimg.com/originals/e1/c3/88/e1c388133e0f998e25bb17c837b74a14.gif",
    },
    {
      id: 4,
      description: "Confía en mí, será divertido.",
      img: "https://media.tenor.com/Bn88VELdNI8AAAAi/peach-goma.gif",
    },
    {
      id: 5,
      description: "No tengas dudas, te hará sonreír.",
      img: "https://i.pinimg.com/originals/c6/b3/0d/c6b30d1a2dc178aeb92de63295d4ae64.gif",
    },
    {
      id: 6,
      description: "Te prometo que será inolvidable.",
      img: "https://media.tenor.com/N2oqtqaB_G0AAAAi/peach-goma.gif",
    },
    {
      id: 7,
      description: "No dejes que el miedo te detenga.",
      img: "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif",
    },
    {
      id: 8,
      description: "Confía en el destino, nos está dando una señal.",
      img: "https://media.tenor.com/cbEccaK9QxMAAAAi/peach-goma.gif",
    },
    {
      id: 9,
      description: "Confía en mí.",
      img: "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif",
    },
    {
      id: 10,
      description: "No te arrepentirás.",
      img: "https://media.tenor.com/I7KdFaMzUq4AAAAi/peach-goma.gif",
    },
  ];

  const randomResponse = () => {
    let index = Math.floor(Math.random() * 11);
    console.log(random[index]);
    if (agrandar <= 500) {
      setAgrandar(agrandar + 10);
    }
    setRandomValor(random[index]);
  };

  const handleImageLoad = () => {
    setImagenCargada(true);
  };

  return (
    <main
      id="canvas"
      className="fondo w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center "
    >
      {!valueSi ? (
        <div className="p-5">
          <h1 className="text-white font-bold text-5xl text-center titlePrimary">
            ¿Quieres ser mi San Valentin? 💕
          </h1>
          <img
            src={
              Object.keys(randomValor).length === 0
                ? "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif"
                : randomValor.img
            }
            alt="San Valentin"
            className="mx-auto"
            width={400}
            height={400}
          />
          <p className="text-white text-center mt-2 frase">
            {randomValor.frase}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
            <button
              onClick={() => {
                setValueSi(true);

                jsConfetti.addConfetti({
                  emojis: ["😍", "🥰", "❤️", "😘"],
                  emojiSize: 70,
                  confettiNumber: 80,
                });
              }}
              className={`bg-pink-500 text-white font-bold p-2 rounded-md text-xl hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50`}
              style={{ height: 50 }} 
            >
              ¡Sí, por supuesto!
            </button>

            <button
              className="bg-red-500 text-white font-bold p-2 rounded-md text-xl hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              onClick={randomResponse}
              disabled={imagenCargada} // Deshabilita el botón si la imagen no se ha cargado
            >
              {Object.keys(randomValor).length === 0
                ? "No"
                : randomValor.description}
              <span hidden>
                {
                  (document.title =
                    Object.keys(randomValor).length === 0
                      ? "¿Quieres ser mi San Valentín?"
                      : randomValor.description)
                }
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col space-y-10">
          <h1 className="text-4xl text-white font-bold titlePrimary">
            Sabia que dirías que si mi vida ❤️!
          </h1>
          <img
            src="https://i.pinimg.com/originals/9b/dc/c6/9bdcc6206c1d36a37149d31108c6bb41.gif"
            alt=""
            className="mx-auto"
          />
          <span hidden>{(document.title = "Sabia que dirias que si ❤️!")}</span>
        </div>
      )}
    </main>
  );
}

export default App;
