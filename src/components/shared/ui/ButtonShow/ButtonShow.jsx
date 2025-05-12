import * as SC from './ButtomShow.styled';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

export default function ButtonShow({ name, handelShowPass }) {
  return (
    <SC.Button onClick={handelShowPass} name={name.type} type="button">
      {name.status ? <VscEyeClosed size="20px" /> : <VscEye size="20px" />}
    </SC.Button>
  );
}
