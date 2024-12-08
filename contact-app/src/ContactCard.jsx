
const ContactCard = ({ contact }) => {
  return ( 
    <div className="card-restriction">
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">
        <strong>Email:</strong> {contact.email}
        <br />
        <strong>Phone:</strong> {contact.phone}
        <br />
        <strong>Website:</strong> <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer">{contact.website}</a>
        </p>
      </div>
    </div>
  );
};

export default ContactCard;