import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

type Pronoun = {
  id: number;
  nameSpanish: string;
  nameYaqui: string;
  imageSrc: string;
  audioSrc: string;
};

type QuestionBubbleProps = {
  correctPronoun: Pronoun;
  allPronouns: Pronoun[];
  onNext: () => void;
  selectedAnswer: Pronoun | null;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<Pronoun | null>>;
};

const QuestionBubble: React.FC<QuestionBubbleProps> = ({
  correctPronoun,
  allPronouns,
  onNext,
  selectedAnswer,
  setSelectedAnswer,
}) => {
  const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const generateOptions = (correctPronoun: Pronoun) => {
    const incorrectOptions = allPronouns.filter((pronoun) => pronoun.id !== correctPronoun.id);
    const randomIncorrectOptions = shuffleArray(incorrectOptions).slice(0, 2);
    const options = [correctPronoun, ...randomIncorrectOptions];
    return shuffleArray(options);
  };

  const [options, setOptions] = useState<Pronoun[]>([]);
  const [checkedAnswer, setCheckedAnswer] = useState(false);

  useEffect(() => {
    setOptions(generateOptions(correctPronoun));
    setCheckedAnswer(false);
  }, [correctPronoun]);

  const playAudio = (audioSrc: string) => {
    const audio = new Audio(audioSrc);
    audio.play();
  };

  const handleAnswerClick = (pronoun: Pronoun) => {
    setSelectedAnswer(pronoun);
    setCheckedAnswer(false);
    playAudio(pronoun.audioSrc);
  };

  const isCorrectAnswer = selectedAnswer?.id === correctPronoun.id;

  const handleNextLesson = () => {
    setSelectedAnswer(null);
    setCheckedAnswer(false);
    onNext();
  };

  return (
    <div className="question-bubble">
      <div className="options space-y-4"> {/* Espaciado vertical entre los botones */}
        {options.map((option) => (
          <Button
            key={option.id}
            className={`h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2
              ${selectedAnswer?.id === option.id
                ? (checkedAnswer
                    ? (isCorrectAnswer ? 'bg-green-500 border-green-600' : 'bg-red-500 border-red-600')
                    : 'bg-sky-500')
                : 'bg-white'}
              ${selectedAnswer?.id === option.id ? 'shadow-lg' : ''}
              transition-colors duration-300 ease-in-out
            `}
            onClick={() => handleAnswerClick(option)}
          >
            <div className="flex items-center justify-between w-full">
              <span className="block text-sm text-gray-500 pr-4">{option.nameYaqui}</span>
              <img
                src={option.imageSrc}
                alt={option.nameYaqui}
                className="option-image w-12 h-12 object-contain"
              />
            </div>
          </Button>
        ))}
      </div>

      {selectedAnswer && checkedAnswer && (
        <div className={`result-message ${isCorrectAnswer ? 'correct' : 'incorrect'}`}>
          {isCorrectAnswer ? '¡Correcto!' : 'Incorrecto, prueba otra vez.'}
        </div>
      )}

      <div className="mt-6 space-x-4"> {/* Espaciado horizontal entre los botones de acción */}
        <Button
          onClick={() => setCheckedAnswer(true)}
          className="check-answer-button p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          disabled={!selectedAnswer}
        >
          Verificar respuesta
        </Button>

        <Button
          onClick={handleNextLesson}
          className="next-lesson-button p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          disabled={!isCorrectAnswer || !checkedAnswer}
        >
          Siguiente lección
        </Button>
      </div>
    </div>
  );
};

export default QuestionBubble;
