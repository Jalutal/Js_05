import Header from '../component/Header';
import Footer from '../component/Footer';

function Contact() {    
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Votre formulaire a été soumis!');
  } 
    return (
        <main className="mainHome">
          <Header />       
            <main className="mainContact">
            <form onSubmit={handleSubmit}>
  <ul>
    <li className='li02'>
      <label for="name">Nom&nbsp;:</label>
      <input type="text" id="name" name="user_name" />
    </li>
    <li className='li02'>
      <label for="mail">E-mail&nbsp;:</label>
      <input type="email" id="mail" name="user_mail" />
    </li>
    <li className='li02'>
      <label for="msg">Message&nbsp;:</label>
      <textarea id="msg" name="user_message"></textarea>
    </li>
    <div class="button" className='li02'>
  <button type="submit">Envoyer le message</button>
</div>
  </ul>
</form>
            </main>
        <Footer />
        </main>
      )}

export default Contact;