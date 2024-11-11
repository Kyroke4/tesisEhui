import React, { useState, useEffect } from 'react';

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
  // Función para mezclar un arreglo (para las respuestas aleatorias)
  const shuffleArray = (array: any[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Generar las opciones de respuesta, asegurando que el pronombre correcto esté siempre en las opciones
  const generateOptions = (correctPronoun: Pronoun) => {
    // Filtrar las opciones incorrectas
    const incorrectOptions = allPronouns.filter((pronoun) => pronoun.id !== correctPronoun.id);

    // Tomar 2 respuestas incorrectas aleatorias
    const randomIncorrectOptions = shuffleArray(incorrectOptions).slice(0, 2);
    
    // Combinar la respuesta correcta con las respuestas incorrectas
    const options = [correctPronoun, ...randomIncorrectOptions];

    // Mezclar las opciones, para que el correcto no siempre esté en la misma posición
    return shuffleArray(options);
  };

  // Estado para las opciones generadas
  const [options, setOptions] = useState<Pronoun[]>([]);

  // Estado para saber si se chequeó la respuesta
  const [checkedAnswer, setCheckedAnswer] = useState(false);

  // Efecto para actualizar las opciones cada vez que el pronombre correcto cambie
  useEffect(() => {
    setOptions(generateOptions(correctPronoun));
    setCheckedAnswer(false); // Resetear el estado de la respuesta verificada
  }, [correctPronoun]); // Se ejecutará cada vez que cambie el correctPronoun

  // Función para reproducir el audio
  const playAudio = (audioSrc: string) => {
    const audio = new Audio(audioSrc);
    audio.play();
  };

  // Manejo de la selección de la respuesta
  const handleAnswerClick = (pronoun: Pronoun) => {
    setSelectedAnswer(pronoun); // Actualizar la respuesta seleccionada
    setCheckedAnswer(false); // Reseteamos el estado de respuesta chequeada
    playAudio(pronoun.audioSrc); // Reproducir el audio del pronombre seleccionado
  };

  const isCorrectAnswer = selectedAnswer?.id === correctPronoun.id;

  // Función para manejar el siguiente pronombre cuando el usuario hace clic en "Next Lesson"
  const handleNextLesson = () => {
    // Restablecer la selección y el estado de verificación
    setSelectedAnswer(null);
    setCheckedAnswer(false);

    // Llamar a la función pasada por props para manejar el cambio de lección
    onNext();
  };

  return (
    <div className="question-bubble">
      <div className="options">
        {options.map((option) => (
          <button
            key={option.id}
            className={`option-button ${selectedAnswer?.id === option.id ? (isCorrectAnswer ? 'correct' : 'incorrect') : ''}`} 
            onClick={() => handleAnswerClick(option)}
          >
            <span className="block text-lg">{option.nameSpanish}</span> {/* Nombre en español */}
            <span className="block text-sm text-gray-500">{option.nameYaqui}</span> {/* Nombre en Yaqui */}
          </button>
        ))}
      </div>

      {selectedAnswer && checkedAnswer && (
        <div className={`result-message ${isCorrectAnswer ? 'correct' : 'incorrect'}`}>
          {isCorrectAnswer ? '¡Correcto!' : 'Incorrecto, prueba otra vez.'}
        </div>
      )}

      {/* Botón para comprobar la respuesta */}
      <button
        onClick={() => setCheckedAnswer(true)} // Activar la verificación
        className="check-answer-button"
        disabled={!selectedAnswer} // Deshabilitar si no se ha seleccionado una respuesta
      >
        Check Answer
      </button>

      {/* Botón de siguiente lección, habilitado solo si la respuesta es correcta */}
      <button
        onClick={handleNextLesson} // Llamar a handleNextLesson en lugar de onNext directamente
        className="next-lesson-button"
        disabled={!isCorrectAnswer || !checkedAnswer} // Deshabilitar hasta que sea correcta y chequeada
      >
        Next Lesson
      </button>
    </div>
  );
};

export default QuestionBubble;
