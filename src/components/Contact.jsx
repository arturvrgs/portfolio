import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';

function Contact() {
  const [text] = useTypewriter({
    words: ['ESCREVA SUA MENSAGEM AQUI'],
    typeSpeed: 40,
    loop: 1000
  });

  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_39oj0bc', 'template_jle367g', form.current, {
        publicKey: '2rioGrVCNaRP9ebid',
      })
      .then(() => {
        setShowPopup(true);
        form.current.reset(); 
        setTimeout(() => setShowPopup(false), 3000); 
      })
      .catch((error) => {
        console.error('Erro ao enviar:', error.text);
      });
  };

  return (
    <div className="flex flex-col items-center relative">
      {showPopup && (
        <motion.div 
          initial={{ opacity: 0, x: 300 }} 
          animate={{ opacity: 1, x: 0 }}   
          exit={{ opacity: 0, x: 300 }}    
          transition={{ duration: 0.5 }}
          className="fixed top-20 right-5 bg-zinc-600 text-white px-8 py-4 rounded-sm shadow-lg"
        >
          ✅ Email enviado!
        </motion.div>
      )}

      <h1 className="tracking-[12px] text-2xl text-zinc-200 text-center mt-20">
        CONTATO
      </h1>

      <motion.div
        initial={{ opacity: 0, x: -70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0 }}
        className="w-full flex flex-col items-center mt-10"
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="text-zinc-200 tracking-wider w-96 flex flex-col items-start bg-zinc-800 p-6 rounded-lg shadow-lg"
        >
          <h1 className="text-xl mb-6 text-zinc-200">Faça contato comigo!</h1>

          <input
            className="bg-zinc-300 text-zinc-900 mb-4 h-10 rounded-lg placeholder-zinc-500 px-3 focus:outline-none focus:border-[#D08700] focus:ring-2 focus:ring-[#D08700]"
            placeholder="SEU NOME"
            type="text"
            name="user_name"
            required
          />
          <input
            className="bg-zinc-300 text-zinc-900 mb-4 h-10 rounded-lg placeholder-zinc-500 px-3 focus:outline-none focus:border-[#D08700] focus:ring-2 focus:ring-[#D08700]"
            placeholder="SEU EMAIL"
            type="email"
            name="user_email"
            required
          />
          <textarea
            className="bg-zinc-300 text-zinc-900 mb-4 h-40 rounded-lg resize-none placeholder-zinc-500 px-3 py-2 w-full focus:outline-none focus:border-[#D08700] focus:ring-2 focus:ring-[#D08700]"
            placeholder={text}
            name="message"
            required
          />
          <input
            className="bg-[#D08700] w-full py-3 rounded-xl hover:cursor-pointer transition-all hover:bg-[#b57500] focus:outline-none hover:border-zinc-200 hover:ring-2 hover:ring-zinc-200"
            type="submit"
            value="Enviar"
          />
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
