import { useCallback,useState } from 'react'
import { INITIAL_LOGS } from "./constants";
import type { StudyLog } from "./types";
import StudyLogList from './components/StudyLogList';
import TotalAnalytics from './components/TotalAnalytics';
import CategoryData from './components/CategoryData';
import StudyForm from './components/StudyLogForm';


function App() {
  // 学習ログの状態管理
  const [logs, setLogs] = useState<StudyLog[]>(INITIAL_LOGS);

  const addLog = useCallback((log: Omit<StudyLog, "id">) => {
    setLogs((prev) => [
      ...prev,
      {
        ...log,
        id: crypto.randomUUID(),
      },
    ]);
  }, []);

  const deleteLog = (id: string) => {
    setLogs((prev) => prev.filter((log) => log.id !== id));
  };

  return (
    <>
      <div className="min-h-screen pt-16 pb-8 space-y-12 px-5 lg:px-16 bg-gradient-to-br from-blue-100 to-green-100">
        {/* header */}
        <header className="space-y-8 flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold">Weekly Study Log</h1>
          <p className="text-gray-700 sm:text-center">
            １週間の学習結果をグラフで可視化します！
            <br />
            日々の学習内容・作業時間を、記録してください。
          </p>
        </header>
        <main className="max-w-7xl mx-auto flex flex-col md:flex-row gap-5 lg:gap-16">
          <div className="md:w-3/4 h-full space-y-6">
            <CategoryData logs={logs} />
            <TotalAnalytics logs={logs} />
            <StudyLogList logs={logs} onDelete={deleteLog} />
          </div>
          <div className="min-w-fit md:w-1/4 h-full">
            <StudyForm onSubmit={addLog} />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
