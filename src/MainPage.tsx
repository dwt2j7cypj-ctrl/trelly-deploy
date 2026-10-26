
import TaskList from './ui/TasksList.tsx'
import TaskDetails from './ui/TaskDetails.tsx'
import { useTaskSelection } from './bll/useTaskSelection.ts'

import s from './MainPage.module.css'

function MainPage(){

    const { selectedTaskId, setSelectedTaskId, boardId, setBoardId } = useTaskSelection()

    const onTaskSelect = (id: string | null, boardId: string | null) => {
        setSelectedTaskId(id)
        setBoardId(boardId)
    }

    return (
            <div className={s.mainPage}>
                <TaskList onTaskSelect={onTaskSelect} selectedTaskId={selectedTaskId} />
                <TaskDetails selectedTaskId={selectedTaskId} boardId={boardId} />
            </div>
    )
}
export default MainPage