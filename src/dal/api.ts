type Status = 0 | 1 | 2 | 3 

type Priority = 0 | 1 | 2 | 3 | 4

type TaskDetailsDto = {
  id: string
  title: string | null
  description : string | {}
  boardId: string
  boardTitle: string
  order: number
  status: Status
  priority: Priority
  startDate: string | {}
  deadline: string | {}
  addedAt: string
  updatedAt: string
  attachments: Array<string>
}

export type TaskDetailsData = {
  id: string 
  type: string
  attributes: TaskDetailsDto
}

type GlobalTaskListItemDto = {
    id: string
    title: string | null
    boardId: string
    status: Status
    priority: Priority
    addedAt: string
    attachmentsCount: number
}

export type GlobalTaskListItemJsonApiData = {
    id: string
    type: string
    attributes: GlobalTaskListItemDto
}

const apiKey = import.meta.env.VITE_API_KEY;
const headers: HeadersInit = {}

if(apiKey) {
    headers['api-key'] = apiKey
}

export const getTask = (selectedTaskId: string | null, boardId: string | null) => {
  const promise: Promise<{data: TaskDetailsData}> = fetch(
                  'https://trelly.it-incubator.app/api/1.0/boards/' + boardId + '/tasks/' + selectedTaskId,
                  {headers: headers
                  },
                )
                .then((response) => response.json())
      return promise
}

export const getTasks = () => {
  const promise: Promise<{data: Array<GlobalTaskListItemJsonApiData>}> = fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks',{
          headers: headers
      })
        .then((response) => response.json())
  return promise
}