import { useEffect, useState } from "react";
import { generateHexCode } from "../components/generateHexCode";
import { ErrorMessage, SucessMessage } from "../components/validationMessages";

export default function Home() {
  const [colorVisible, setColorVisible] = useState(false);
  const [hexColor, setHexColor] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState<boolean | undefined>(
    undefined
  );
  const [showHeading, setShowHeading] = useState<boolean>(true)

  async function loadColor() {
    setColorVisible(true);
  }

  function generateNewColors() {
    const correctColor = generateHexCode();
    setHexColor(correctColor);
    setAnswers(
      [correctColor, generateHexCode(), generateHexCode()].sort(
        () => 0.5 - Math.random()
      )
    );
  }

  function clickColorButton(answer: string) {
    if (showHeading) {
      setShowHeading(false)
    }

    if (hexColor === answer) {
      setCorrectAnswer(true);
      generateNewColors();
    } else {
      setCorrectAnswer(false);
    }
  }

  useEffect(() => {
    loadColor();
    generateNewColors();
  }, []);

  return (
    <>
      <main>
        <div className="flex flex-col justify-center items-center w-full h-screen">
          { showHeading && <h1 className="text-2xl mb-10">Guess the HEX code of this color:</h1>}
          {correctAnswer === true && <SucessMessage />}
          {correctAnswer === false && <ErrorMessage />}
          <div
            className="color-box w-40 h-40 rounded-xl"
            style={{ backgroundColor: colorVisible ? `${hexColor}` : "#000" }}
          ></div>
          <div className="flex mt-5">
            {answers.map((answer) => (
              <button
                key={answer}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 mx-3 text-base font-medium text-black hover:bg-indigo-50 shadow"
                onClick={() => {
                  clickColorButton(answer);
                }}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
