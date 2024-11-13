

import { ExitModal } from "@/components/modals/exit-modal";
import Header from "./Header";
import LessonList from "./lessons-list";
import { useExitModal } from "../../store/use-exit-modal";
import Layout from "./Layout";


const LessonPage = ()=>{
    const { open } = useExitModal(); // Llamamos al hook en el nivel superior
    return(
        <Layout>
            <div>
                <LessonList>
                </LessonList>
                <ExitModal ></ExitModal>
            </div>
            
        </Layout>
        
    );
};

export default LessonPage;