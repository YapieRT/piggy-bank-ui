import './contacts-list-item.css';
const ContactsListItem = (props) => {
  const { icon, title, link } = props;
  return (
    <>
      <li key={title} className='contacts-list-item'>
        <a href={link}>
          <img src={icon} alt='icon' className='icon' />
        </a>
        <span className='title'>{title}</span>
      </li>
    </>
  );
};

export default ContactsListItem;
