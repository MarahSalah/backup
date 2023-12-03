import React from 'react';

const ContactList = ({ data }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {data.map(contact => (
          <li key={contact.id}>
            <p>First Name: {contact.f_contact_name}</p>
            <p>Last Name: {contact.l_contact_name}</p>
            <p>Email: {contact.contact_email}</p>
            <p>Phone Number: {contact.phone_number}</p>
            <p>Message: {contact.contact_message}</p>
            {/* يمكنك إضافة المزيد من المعلومات حسب الحاجة */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;