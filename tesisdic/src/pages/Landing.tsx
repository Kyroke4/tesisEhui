// src/pages/Home.tsx
import React from 'react';
import Layout from '../Layout';
import welcome from '../../images/welcome.svg';
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';



const Landing: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/learn'); 
    };
  return (
    <Layout>
        <div className ="max-w-w[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
            <div className = "relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
                <img src={welcome} fill alt="Mascota"/>
            </div>
            <div className="flex flex-col items-center gap-y-8">  
                <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">¡Una manera nueva y divertida de aprender Cahita!</h1>
                <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
                    <Button size="lg" variant="secondary" className="w-full" onClick={handleClick}>
                        <a href="/learn">
                        Vamos allá
                        </a>
                    </Button>
                </div>
            </div>
            
        </div>
    </Layout>
  );
};

export default Landing;
