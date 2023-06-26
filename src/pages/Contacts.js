const Contacts = () => {
  return (   <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Cologne, Germany</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+491793945877">+49 (179) 394-58-77</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:Ekklesiast8100@gmail.com">Ekklesiast8100@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main> );
}
 
export default Contacts;