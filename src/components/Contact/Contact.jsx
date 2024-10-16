import { FaUser, FaPhone } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ name, number, id }) => {
  const dispatsh = useDispatch();
  return (
    <li className={s.item}>
      <p className={s.text}>
        <FaUser />
        {name}
      </p>
      <p className={s.text}>
        <FaPhone />
        {number}
      </p>
      <button type="button" onClick={() => dispatsh(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
