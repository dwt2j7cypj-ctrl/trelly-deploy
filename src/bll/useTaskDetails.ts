import { useEffect, useState } from "react"
// import { getFakeTask, type TaskDetailsData } from "../dal/api-fake"
import { getTask, type TaskDetailsData } from "../dal/api"



export function useTaskDetails (selectedTaskId: string | null, boardId: string | null) {
    const [taskDetails, setTaskDetails] = useState<TaskDetailsData | null>(null)

    useEffect(() => {
    if(!selectedTaskId){
      setTaskDetails(null)
      return
    }
              // getFakeTask(selectedTaskId, boardId)
              console.log(boardId)
              getTask(selectedTaskId, boardId)
                .then((json) => setTaskDetails(json.data))
  },[selectedTaskId])

  return {
    taskDetails,
  }
}