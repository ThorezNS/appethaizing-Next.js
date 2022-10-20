import Title from '../../atoms/Title/Title';
import InstructionDetails from '../../molecules/InstructionDetails/InstructionDetails';
import styles from './RecipeInstructions.module.css';

const RecipeInstructions = ({ recipeInstructions }) => {
  return (
    <div className={styles.container}>
      {recipeInstructions.map((instruction, index) => {
        return (
          <div className={styles.instruction} key={index}>
            <Title title={instruction.name} details />
            {instruction.steps.map((step, subindex) => {
              return <InstructionDetails details={step} key={subindex} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default RecipeInstructions;
