"use client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct import for React Router
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useExitModal } from "../../../store/use-exit-modal";

export const ExitModal = () => {
  const navigate = useNavigate(); // Use this hook from react-router-dom
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useExitModal();

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="maw-w-md">
        <DialogHeader>
            <div className="flex items-center w-full justfity-center mb-5">

            </div>
            <DialogTitle className="text-center font-bold">
                ¡Espera!
            </DialogTitle>
            <DialogDescription className="text-center text-base">
                Estás apunto de cerrar la lección, ¿Estás seguro?
            </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
            <div className="flex flex-col gap-y-4 w-full">
                <Button variant="primary" className="w-full" size="lg" onClick={close}>
                    Continuar lección
                </Button>
                <Button variant="dangerOutline" className="w-full" size="lg" onClick={() => {
                    close();
                    navigate("/learn");
                }}>
                    Terminar lección
                </Button>
            </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
