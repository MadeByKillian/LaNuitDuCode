import { useState } from 'react'
import IAGROQ from './Chatbruti'
import { BotMessageSquare } from 'lucide-react';
import '../css/Chatbruti.css'

export default function Chatbrutichat() {
    const [reponsechat, setReponsechat] = useState("...");
    const [askgroq, setaskgroq] = useState("");

    return (
        <>
            <div className="card">
                <div className="mac-header">
                    <span className="red"></span>
                    <span className="yellow"></span>
                    <span className="green"></span>
                </div>
                <span className="card-title">Chat'bruti  <BotMessageSquare /></span>
                <p className="card-description">
                    Je me présente : je suis un chatbot tellement à côté de la plaque que même mes propres pensées doivent me chercher sur Google Maps.
                </p>
                <span className="card-tag">MadeByKiki</span> <span className="card-tag">Chat'bruti</span> <span className="card-tag">Groq</span>
                <div className="code-editor">
                    <pre>{reponsechat}</pre>
                </div>
                <div className='inputchat'>
                    <input
                        type="text"
                        id="chat-input"
                        placeholder="Écrivez votre message..."
                        className="chat-input"
                        value={askgroq}
                        onChange={(e) => setaskgroq(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault(); 
                                IAGROQ({ rawUserInput: askgroq, setReponsechat });
                                setaskgroq("");
                            }
                        }}
                    />
                    <button
                        id="send-button"
                        className="send-button"
                        onClick={() => {
                            IAGROQ({ rawUserInput: askgroq, setReponsechat });
                            setaskgroq("");
                        }}
                    >
                        Envoyer
                    </button>
                </div>
            </div>
        </>
    )
}