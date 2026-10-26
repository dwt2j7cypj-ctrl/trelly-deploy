import { useEffect, useState } from "react"
// import { getFakeTasks, type GlobalTaskListItemJsonApiData } from "../dal/api-fake"
import { getTasks, type GlobalTaskListItemJsonApiData } from "../dal/api"


export function useTasks() {
  const [tasks, setTasks] = useState< Array< GlobalTaskListItemJsonApiData > | null >(null)

      useEffect(() => {
      // getFakeTasks()
      getTasks()
        .then((json) => setTasks(json.data))
    
      }, [])

      return {
        tasks,
    }
      
}