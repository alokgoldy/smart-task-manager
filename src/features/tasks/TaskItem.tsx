import { memo } from 'react';
import type { Task } from '../tasks/task.types';

interface Props {
  task: Task;
  onToggle: (task: Task) => void;
}

function TaskItem({ task, onToggle }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px',
        borderBottom: '1px solid #ddd',
      }}
    >
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
        }}
      >
        {task.title}
      </span>
      <button onClick={() => onToggle(task)}>{task.completed ? 'Undo' : 'Done'}</button>
    </div>
  );
}

export default memo(TaskItem);
