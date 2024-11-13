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
 
  const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5);

 
  const generateOptions = (correctPronoun: Pronoun) => {
    const incorrectOptions = allPronouns.filter((pronoun) => pronoun.id !== correctPronoun.id);
    const randomIncorrectOptions = shuffleArray(incorrectOptions).slice(0, 2);
    return shuffleArray([correctPronoun, ...randomIncorrectOptions]);
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
    <>
      <div className="h-[300px] w-full flex flex-col items-center">
        <div className="w-full flex flex-col gap-4 px-4">
          
          {options.map((option) => (
            <Button
              key={option.id}
              className={`w-full h-16 border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2
                ${selectedAnswer?.id === option.id
                  ? (checkedAnswer
                      ? (isCorrectAnswer ? 'bg-green-500 border-green-600' : 'bg-red-500 border-red-600')
                      : 'bg-sky-500') 
                  : 'bg-white'}
                ${selectedAnswer?.id === option.id ? 'shadow-lg' : ''} // Add shadow to selected option
                transition-colors duration-300 ease-in-out
              `}
              onClick={() => handleAnswerClick(option)} 
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
        selectedAnswer={!!selectedAnswer}  
        onCheckAnswer={() => setCheckedAnswer(true)} 
        onNextLesson={handleNextLesson}  
      />
    </>
  );
};

export default QuestionBubble;
