import { useQuery } from '@tanstack/react-query';
import { fetchTasks } from '../api/task.api';

export default function Dashboard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <div>
      <h1>Tasks</h1>
      {data.map((task: any) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
}
