import { useTaskDetails } from "../bll/useTaskDetails"
import s from './TaskDetails.module.css'

type Props = {
  selectedTaskId: string | null
  boardId: string | null
}

function TaskDetails({selectedTaskId, boardId}: Props) {

   const {taskDetails} = useTaskDetails(selectedTaskId, boardId)

    return (
        <div className={s.taskDetails}>
          <h2>Детали задачи</h2>
          {!selectedTaskId && !taskDetails && 'Задача не выбрана'}
          {((selectedTaskId && !taskDetails) || (taskDetails && selectedTaskId !== taskDetails.id)) && 'Загрузка...'}
          {taskDetails && (
            <div>
              <h3>{taskDetails.attributes.title}</h3>
              <h4>{taskDetails.attributes.boardTitle}</h4>
              <p>{typeof taskDetails.attributes.description === 'string' ? taskDetails.attributes.description : ''}</p>
            </div>  
          )}
        </div>
    )
}

export default TaskDetails