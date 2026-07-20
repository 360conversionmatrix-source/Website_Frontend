import React, { useState, useEffect, useRef } from 'react';

export default function AIChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const chatEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // Initialize Web Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        handleSendMessage(transcript);
      };

      recognition.onend = () => setIsListening(false);
      recognitionRef.current = recognition;
    }
  }, [messages]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Text-to-Speech Engine
  const speak = (text) => {
    if (isMuted || !window.speechSynthesis) return;
    window.speechSynthesis.cancel(); // Stop any ongoing speech
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  // Toggle Voice Listening
  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      if (!recognitionRef.current) {
        alert("Speech recognition isn't supported in this browser. Try Chrome or Safari.");
        return;
      }
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  // Core Send Message Function
  const handleSendMessage = async (textToSend) => {
    const targetText = textToSend || input;
    if (!targetText.trim()) return;

    const userMessage = { role: 'user', content: targetText };
    const updatedMessages = [...messages, userMessage];
    
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });
      
      const data = await response.json();
      
      if (data.reply) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
        speak(data.reply);
      }
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-sans text-slate-100">
      
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          <h3 className="font-semibold tracking-wide">AI Assistant</h3>
        </div>
        <button 
          onClick={() => setIsMuted(!isMuted)} 
          className="text-slate-200 hover:text-white transition-colors"
          title={isMuted ? "Unmute Voice Output" : "Mute Voice Output"}
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
      </div>

      {/* Chat Windows / Stream */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-slate-800">
        {messages.length === 0 && (
          <div className="text-center text-slate-500 mt-12 text-sm">
            Say "Hello" or type a message below to start!
          </div>
        )}
        
        {messages.map((msg, i) => (
          <div 
            key={i} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] rounded-xl px-4 py-2 text-sm shadow-sm ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-br-none' 
                : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 border border-slate-700 text-slate-400 px-4 py-2 rounded-xl rounded-bl-none text-sm animate-pulse">
              Thinking...
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input / Controls Footer */}
      <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
        <button
          onClick={toggleListening}
          className={`p-3 rounded-xl transition-all shadow-sm ${
            isListening 
              ? 'bg-red-600 hover:bg-red-700 animate-bounce' 
              : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
          }`}
          title={isListening ? "Listening... click to stop" : "Speak via Microphone"}
        >
          🎤
        </button>
        
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type your message..."
          className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
        />

        <button
          onClick={() => handleSendMessage()}
          disabled={!input.trim()}
          className="p-2.5 bg-blue-600 text-white rounded-xl font-medium text-sm hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600 transition-all shadow-md"
        >
          Send
        </button>
      </div>

    </div>
  );
}