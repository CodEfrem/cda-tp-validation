import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import Chatbox from './Chatbox';


function Chat() {
    const location = useLocation();
    const navigate = useNavigate();
    const formData = location.state?.formData;

    useEffect(() => {
        if (!formData || !formData.name) {
            
            console.error("Erreur: Les données du formulaire ne sont pas valides.");
            navigate('/');
        } else {
            
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });
        }
    }, [formData, navigate]);

    if (!formData) {
        
        return <div>Chargement...</div>;
    }

    return (
        <main className="text-center">
            <h1 className="form-signin col-md-6 col-sm-10 m-auto mb-3">
                Bienvenue, {formData.name}
            </h1>
            <h3>Pose-moi tes questions sur {formData.subject}</h3>
            <form>
                <div className="form-floating mb-3">
                    <textarea
                        className="form-control"
                        placeholder="Pose ta question ici"
                    ></textarea>
                </div>
                <button className='btn btn-warning rounded-pill' type="submit">Envoyer</button>
            </form>

            <Chatbox />
        </main>
    );
}

export default Chat;
