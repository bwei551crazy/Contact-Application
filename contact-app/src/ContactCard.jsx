
const ContactCard = ({ contact }) => {
  return ( 
    <div className="card-restriction">
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
      </div>
      <div className="card-text">
        <strong className="email"> Email:</strong> {contact.email}
        <br />
        <strong className="phone"> Phone:</strong> {contact.phone}
        <br />
        <strong className="website"> Website:</strong> <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer">{contact.website}</a>
      </div>
    </div>
  );
};

export default ContactCard;