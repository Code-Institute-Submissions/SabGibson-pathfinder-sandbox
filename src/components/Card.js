import { motion } from "framer-motion";
const Card = ({ classType, title, type, inputs }) => {
  return (
    <div className={classType}>
      <h2>{title}</h2>
      <ul className={type}>
        {inputs.map((item, index) => {
          return <motion.li key={index}>{item}</motion.li>;
        })}
      </ul>
    </div>
  );
};

export default Card;
