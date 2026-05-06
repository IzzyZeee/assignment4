import { Button } from '@/components';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";

export const ErrorView = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">ERROR 404</h1>
      <p className="text-white-900">Page not found</p>
      <Button onClick={() => navigate(-1)}>
        <div className="flex items-center">
          <FaArrowLeft className="mr-2"/>Back
        </div>  
      </Button>
    </main>
  );
};