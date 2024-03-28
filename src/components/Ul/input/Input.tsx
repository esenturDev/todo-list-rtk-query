import { FC } from 'react';
import scss from './Input.module.scss';


interface InputProps {
  type: string;
  value: string;
  setData: (value: string) => void;
  placeholder: string;
}
const Input: FC<InputProps> = ({value, setData, placeholder, type}) => {
  return <input className={scss.inputs} type={type} value={value} onChange={(e) => setData(e.target.value)} placeholder={placeholder}/>
}

export default Input