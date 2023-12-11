import styles from './TaskForm.module.css';

interface Props {
  btnText: string
}

const TaskForm = ({ btnText }: Props) => {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Tarefa:</label>
        <input type="text" name="title" id="title" />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input type="text" name="difficulty" id="difficulty" />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default TaskForm
