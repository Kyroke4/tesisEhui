import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Footer from './Footer';

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
  // Shuffle function to randomize options
  const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5);

  // Generate the options for the multiple-choice question
  const generateOptions = (correctPronoun: Pronoun) => {
    const incorrectOptions = allPronouns.filter((pronoun) => pronoun.id !== correctPronoun.id);
    const randomIncorrectOptions = shuffleArray(incorrectOptions).slice(0, 2);
    return shuffleArray([correctPronoun, ...randomIncorrectOptions]);
  };

  // State to hold the shuffled options
  const [options, setOptions] = useState<Pronoun[]>([]);
  const [checkedAnswer, setCheckedAnswer] = useState(false);

  // Update options whenever the correctPronoun changes
  useEffect(() => {
    setOptions(generateOptions(correctPronoun));
    setCheckedAnswer(false); // Reset the answer check when options are reset
  }, [correctPronoun]);

  // Play the pronunciation audio for a given pronoun
  const playAudio = (audioSrc: string) => {
    const audio = new Audio(audioSrc);
    audio.play();
  };

  // Handle when a user selects an answer
  const handleAnswerClick = (pronoun: Pronoun) => {
    setSelectedAnswer(pronoun);  // Set the selected answer
    setCheckedAnswer(false); // Reset answer check
    playAudio(pronoun.audioSrc);  // Play audio for the selected pronoun
  };

  // Check if the selected answer is correct
  const isCorrectAnswer = selectedAnswer?.id === correctPronoun.id;

  // Handle proceeding to the next lesson
  const handleNextLesson = () => {
    setSelectedAnswer(null);  // Reset selected answer
    setCheckedAnswer(false);  // Reset checked answer state
    onNext();  // Call the next lesson function
  };

  return (
    <>
      <div className="h-[300px] w-full flex flex-col items-center">
        <div className="w-full flex flex-col gap-4 px-4">
          {/* Render options as a vertical list */}
          {options.map((option) => (
            <Button
              key={option.id}
              className={`w-full h-16 border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2
                ${selectedAnswer?.id === option.id
                  ? (checkedAnswer
                      ? (isCorrectAnswer ? 'bg-green-500 border-green-600' : 'bg-red-500 border-red-600')
                      : 'bg-sky-500') // Highlight selected option based on answer status
                  : 'bg-white'}
                ${selectedAnswer?.id === option.id ? 'shadow-lg' : ''} // Add shadow to selected option
                transition-colors duration-300 ease-in-out
              `}
              onClick={() => handleAnswerClick(option)}  // Handle answer selection
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-sm text-gray-500">{option.nameYaqui}</span>
                <img src={option.imageSrc} alt={option.nameYaqui} className="w-12 h-12" />
              </div>
            </Button>
          ))}
        </div>
      </div>
      <Footer
        isCorrectAnswer={isCorrectAnswer}
        checkedAnswer={checkedAnswer}
        selectedAnswer={!!selectedAnswer}  // Ensure boolean value is passed for selectedAnswer
        onCheckAnswer={() => setCheckedAnswer(true)}  // Mark the answer as checked
        onNextLesson={handleNextLesson}  // Handle next lesson button click
      />
    </>
  );
};

export default QuestionBubble;
