import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';

type FooterProps = {
  isCorrectAnswer: boolean;
  checkedAnswer: boolean;
  selectedAnswer: boolean;
  onCheckAnswer: () => void;
  onNextLesson: () => void;
};

const Footer: React.FC<FooterProps> = ({
  isCorrectAnswer,
  checkedAnswer,
  selectedAnswer,
  onCheckAnswer,
  onNextLesson,
}) => {
  return (
    <footer
      className={`w-full pb-5 pt-3 p-2 rounded ${
        checkedAnswer
          ? isCorrectAnswer
            ? 'border-transparent bg-green-100'
            : 'border-transparent bg-red-100'
          : 'border-gray-200 bg-white'
      }`}
    >
      {selectedAnswer && checkedAnswer && (
        <div className={`result-message ${isCorrectAnswer ? 'correct' : 'incorrect'}`}>
          {isCorrectAnswer ? (
            <div className="text-green-500 font-bold text-base lg:text-2xl flex items-center">
              <CheckCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4" />
              ¡Correcto! Bien Hecho
            </div>
          ) : (
            <div className="text-red-500 font-bold text-base lg:text-2xl flex items-center">
              <XCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4" />
              Incorrecto, prueba otra vez.
            </div>
          )}
        </div>
      )}

      <div className="w-full h-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8 lg:px-10">
        {/* Verificar respuesta button */}
        <Button
          onClick={onCheckAnswer}
          className="w-full lg:w-auto p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          disabled={!selectedAnswer}
        >
          Verificar respuesta
        </Button>

        {/* Siguiente lección button */}
        <Button
          onClick={onNextLesson}
          className="w-full lg:w-auto p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          disabled={!isCorrectAnswer || !checkedAnswer}
        >
          Siguiente lección
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
