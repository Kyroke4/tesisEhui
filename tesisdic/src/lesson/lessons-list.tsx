import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuestionBubble from './question-bubble';

type Lesson = {
  id: number;
  nameSpanish: string;
  nameYaqui: string;
  imageSrc: string;
  audioSrc: string;
};

type LessonsData = {
  [key: string]: Lesson[];
};

const LessonsList = () => {
  const { category } = useParams<{ category: string }>();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [currentLessonId, setCurrentLessonId] = useState<number>(1);
  const [selectedAnswer, setSelectedAnswer] = useState<Lesson | null>(null);

  useEffect(() => {
    fetch("../data/lessons.json")
      .then((response) => response.json())
      .then((data: LessonsData) => {
        if (category && data[category]) {
          setLessons(data[category]);

          
          setCurrentLessonId(data[category][0].id); 
        } else {
          console.error(`Categoría no encontrada: ${category}`);
        }
      })
      .catch((error) => console.error("Error al cargar las lecciones:", error));
  }, [category]);

  useEffect(() => {
    
    console.log('currentLessonId actualizado:', currentLessonId);
  }, [currentLessonId]);

  useEffect(() => {
    
    console.log('Lecciones cargadas:', lessons);
  }, [lessons]);

  if (!lessons.length) {
    return <p>Cargando...</p>;
  }

  const currentLesson = lessons.find((lesson) => lesson.id === currentLessonId);
  const lessonLength = lessons.length;

  console.log('currentLesson:', currentLesson); // debugeando porque no carga el json

  const handleNextLesson = () => {
    const nextLessonId = currentLessonId < lessons[lessons.length - 1].id 
      ? currentLessonId + 1 
      : lessons[0].id; // Si llegamos al final, vuelve a la primera lección --- MODIFICAR DESPUÉS PARA QUE AVANCE AL PRÓXIMO CURSO MEJOR
    
    setCurrentLessonId(nextLessonId);
    setSelectedAnswer(null);
  };

  return (
    <div className="flex-1">
      <div className="h-full flex items-center justify-center">
        <div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
          <h1 className="text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700 flex items-center justify-center">
            ¿Cuál de los siguientes es "{currentLesson?.nameSpanish}"?
          </h1>
          <div>
            <QuestionBubble
              correctPronoun={currentLesson || lessons[0]}
              allPronouns={lessons}
              onNext={handleNextLesson}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
            />
            <h1 className="pt-10">{currentLesson?.id}/{lessonLength} lecciones</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonsList;
