import type { GlobalTaskListItemJsonApiData } from "../dal/api"
import clsx from "clsx"

import s from './TaskItem.module.css'

type Props = {
    task : GlobalTaskListItemJsonApiData
    isSelected: boolean
    handleClick: (id: string , boardId: string) => void 
}



function TaskItem({task, isSelected, handleClick}: Props){

    const taskClassName = clsx({
        [s.task]: true,
        [s.selected]: isSelected,
        [s.lowPriority]: task.attributes.priority === 1,
        [s.mediumPriority]: task.attributes.priority === 2,
        [s.highPriority]: task.attributes.priority === 3,
        [s.highestPriority]: task.attributes.priority === 4,
    })
    const titleClassName = clsx({
        [s.doneTask]: task.attributes.status,
    })

    return <li key={task.id} className={taskClassName} 
        onClick={() => handleClick(task.id, task.attributes.boardId)}>
        <div 
            className={titleClassName}>
            {task.attributes.title}
        </div>
        <input type="checkbox" checked={!!task.attributes.status} />
        <div><b>Дата создания задачи:</b> {new Date(task.attributes.addedAt).toLocaleDateString()}</div>
    </li>
}

export default TaskItem