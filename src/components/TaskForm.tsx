import styles from './TaskForm.module.css';

// HOOKS
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

// INTERFACES
import { ITask } from '../interfaces/Task';

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    const newTask: ITask = {
      id,
      title,
      difficulty,
    };

    /* ! : Informa que um argumento que é opcional virá de certeza */
    setTaskList!([...taskList, newTask]);

    setTitle('');
    setDifficulty(0);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form onSubmit={(e) => addTaskHandle(e)} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          onChange={(e) => handleChange(e)}
          value={title}
          type="text"
          name="title"
          placeholder="Título da sua tarefa"
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          onChange={(e) => handleChange(e)}
          value={difficulty}
          type="text"
          name="difficulty"
          placeholder="Dificuldade da sua tarefa"
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
