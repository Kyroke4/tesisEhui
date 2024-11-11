import React, { useEffect, useState } from 'react';
import QuestionBubble from './question-bubble';

// ESTRUCTURA DEL JSON
type Pronoun = {
  id: number;
  nameSpanish: string;
  nameYaqui: string;
  imageSrc: string;
  audioSrc: string;
};

const LessonsList = () => {
  const [lessons, setLessons] = useState<any>(null);
  const [currentLessonId, setCurrentLessonId] = useState<number>(1); // Default to show pronoun with id:1
  const [selectedAnswer, setSelectedAnswer] = useState<Pronoun | null>(null);
  useEffect(() => {
    // ESTE ES EL JSON A CARGAR
    fetch("../data/lessons.json")
      .then((response) => response.json())
      .then((data) => setLessons(data))
      .catch((error) => console.error("Error fetching lessons:", error));
  }, []);

  // Ensure lessons is loaded and pronouns is an array
  if (!lessons || !Array.isArray(lessons.pronouns)) {
    return <p>Cargando...</p>;
  }
  const currentLesson = lessons.pronouns.find((pronoun: any) => pronoun.id === currentLessonId);
  const lessonLength = lessons.pronouns.length;

  const handleNextLesson = () => {
    const nextId = currentLessonId < lessonLength ? currentLessonId + 1 : 1;
    setCurrentLessonId(nextId);
    setSelectedAnswer(null);
  };

      return (
    <div className="flex-1 ">
      <div className="h-full flex items-center justify-center">
        <div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
          <h1 className="text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700 flex items-center justify-center">
            ¿Cuál de los siguientes es "{currentLesson?.nameSpanish}"?
          </h1>
          <div>
          <QuestionBubble 
            correctPronoun={currentLesson} 
            allPronouns={lessons.pronouns}
            onNext={handleNextLesson}
            selectedAnswer={selectedAnswer} // Pasar la respuesta seleccionada
            setSelectedAnswer={setSelectedAnswer} // Función para actualizar la respuesta
          />
            <h1>Pronouns Length: {lessonLength}</h1>
            <h1>Pronoun: {currentLesson?.nameSpanish} - {currentLesson?.nameYaqui}</h1>
            <h1>{currentLesson?.id}/{lessonLength} leciones</h1>
            <img src={currentLesson?.imageSrc} alt={currentLesson?.nameSpanish} />
            <audio controls>
              <source src={currentLesson?.audioSrc} type="audio/mp3" />
            </audio>
            
            <button onClick={handleNextLesson}>Ir a la siguiente lección</button>

          </div>
        </div>

      </div>
      
    
    </div>
  );
};


export default LessonsList;