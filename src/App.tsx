import { useState } from 'react';

// Styles
import styles from './App.module.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

// Interface
import { ITask } from './interfaces/Task';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideorShowModal = (display: boolean) => {
    const modal = document.getElementById('modal');

    display
      ? modal!.classList.remove('hide')
      : modal!.classList.add('hide');
  };

  const editTask = (task: ITask): void => {
    hideorShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };
    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);
    hideorShowModal(false);
  };

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que vamos fazer hoje?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Lista de Tarefas</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
      <Modal
        children={
          <TaskForm
            btnText="Salvar"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
    </div>
  );
}

export default App;
