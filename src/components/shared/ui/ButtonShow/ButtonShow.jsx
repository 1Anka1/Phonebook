import { FaRegEyeSlash } from 'react-icons/fa';
import * as SC from './ButtomShow.styled';
import { IoEyeOutline } from 'react-icons/io5';

export default function ButtonShow({ name, handelShowPass }) {
  return (
    <SC.Button onClick={handelShowPass} name={name.type} type="button">
      {name.status ? <FaRegEyeSlash /> : <IoEyeOutline />}
    </SC.Button>
  );
}
