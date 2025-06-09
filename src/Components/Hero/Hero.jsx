import Modal from '../Modal/Modal';
import Styles from './hero.module.css'
import { useState } from 'react';


export const Hero = () => {
   const [email, setEmail] = useState(''); 
    const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Show's the modal when the form is submitted
    setIsModalOpen(true);

    // Clear's the email input after showing the modal
    setEmail('');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>
        <div className={Styles.hero}>
          <div className='text-center'>
            <h2 id={Styles.hh1}>Find Your Dream Job in Any Field</h2>
            <div className='mt-4 text-[18px]' id={Styles.d1}>We help you find exciting opportunities around the world.</div>
            <div className='text-[18px]' id={Styles.d1}>Have the latest openings at your fingertips in your inbox</div>
          </div>
          <div className='mt-8'>
            <form onSubmit={handleFormSubmit} className={Styles.formholder} id='form'>
              <input placeholder="Your email"  
                  type="email" required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={Styles.forminput} 
                />
              <button type="submit" className={Styles.formbtn}>Subscribe</button>
            </form>
          </div>
        </div>

        {isModalOpen && (
          <Modal closeModal={closeModal} />
        )}
    </>
    
  )
}
