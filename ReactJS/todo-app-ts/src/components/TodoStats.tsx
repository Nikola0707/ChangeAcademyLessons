interface TodoStatsProps {
  completedCount: number;
  unCompletedCount: number;
}

const TodoStats = ({ completedCount, unCompletedCount }: TodoStatsProps) => (
  <div className="mt-6 p-4 rounded-lg shadow-md bg-slate-100 flex justify-between">
    <div>
      <p className="text-green-800 font-black">
        Completed: <span className="text-green-950">{completedCount}</span>
      </p>
    </div>
    <div>
      <p className="text-red-800 font-black">
        Uncompleted <span className="text-red-950">{unCompletedCount}</span>
      </p>
    </div>
  </div>
);
export default TodoStats;
