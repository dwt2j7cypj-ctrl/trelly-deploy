import TaskItem from "./TaskItem"
import { useTasks } from "../bll/useTasks"

import s from './TaskList.module.css'

type Props = {
  onTaskSelect: (taskId: string | null, boardId: string | null)=>void
  selectedTaskId: string | null
}

function TaskList({onTaskSelect, selectedTaskId}: Props) {

    const { tasks } = useTasks()

      if(tasks === null){
        return(
            <div style={{color: 'white'}}>Loading...</div>
        )
      }

    const handleReset = () => {
      onTaskSelect(null,null)
    }

    const handleClick = (taskId: string, boardId: string) => {
      onTaskSelect(taskId, boardId)
    }

    return (
        <div>
          <button onClick={handleReset}>Reset</button>
            <ul className={s.taskList}>
              {
                tasks.map((task) => {
                     return (
                      <TaskItem key={task.id}
                                task={task}
                                isSelected = {task.id === selectedTaskId}
                                handleClick={()=>handleClick(task.id, task.relationships.board.data.id )}/>
                     )
                  }
                )
              }
        </ul>
        </div>
    )
}

export default TaskList

