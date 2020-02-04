import React, { useState } from 'react';

//import './App.css';
import Header from './Header';
import FAQ from './FAQ';

function App() {
  const [faqs, setfaqs] = useState([
  {
    question: 'How many programmers does it take to screw in a lightbulb?',
    answer: 'None. We don\'t address hardware issues',
    open : true
  },

  {
    question: 'What is Lorem Ipsum?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
    open : true
  },
  {
    question: 'Where does it come from? ',
    answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    open : true
  }

  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }

  return (
    <div className="App">
         <Header />
         <div className="faqs">
           {faqs.map((faq, i) => ( 
            
            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
            
           ))}

         </div>

    </div>
  );
}

export default App;
