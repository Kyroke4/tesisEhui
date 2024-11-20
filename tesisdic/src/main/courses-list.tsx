import { Button } from '@/components/ui/button';
import { NotebookText } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Course {
  id: number;
  title: string;
  description: string;
  route: string; // Ruta que corresponde a la clave de lessons.json
}

const CoursesList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch('../data/courses.json')
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error('Error al cargar los cursos:', error));
  }, []);

  return (
    <div>
      {courses.map((course) => (
        <div
          key={course.id}
          className="w-full rounded-xl bg-amber-500 p-5 text-white flex items-center justify-between mb-4"
        >
          <div className="space-y-2.5">
            <h3 className="text-2xl font-bold">{course.title}</h3>
            <p className="text-lg">{course.description}</p>
          </div>
          <Link to={`/lesson/${course.route}`}>
          <Button size="lg" variant="secondary" className="sm:text-xs sm:px-3 sm:py-1 md:text-sm md:px-4 md:py-2 lg:text-md lg:px-6 lg:py-3 xl:text-lg xl:px-8 xl:py-4 border-2 border-b-4 active:border-b-2">
            <NotebookText className="mr-2"></NotebookText>
                Iniciar
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CoursesList;
