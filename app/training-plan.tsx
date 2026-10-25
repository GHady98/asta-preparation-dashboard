'use client';
import { useState } from 'react';
import { initialCompletion, summarize, tasks, toggleTask } from './training';
const symbols = ['⚔', '◇', '✦'];
export default function TrainingPlan() {
  const [completion, setCompletion] = useState(initialCompletion);
  const { completed, total, percent } = summarize(completion);
  return <div className="dashboard-grid">
    <section className="training" aria-labelledby="training-title">
      <div className="section-heading"><div><p className="eyebrow">YOUR NEXT MOVE</p><h2 id="training-title">The training plan</h2></div><span className="task-total">03 tasks</span></div>
      <p className="section-intro">Small steps. Relentless preparation.</p>
      <div className="task-list">{tasks.map((task, index) => <article key={task.id} className={`task-card ${completion[task.id] ? 'is-complete' : ''}`}>
        <div className="task-icon" aria-hidden="true">{symbols[index]}</div>
        <div className="task-content"><div className="task-meta"><span>TRAINING / 0{index + 1}</span><span className={`priority ${task.priority.toLowerCase()}`}>{task.priority} priority</span></div>
          <h3>{task.title}</h3><p>{task.description}</p>
          <label className="completion-control"><input type="checkbox" checked={completion[task.id]} onChange={() => setCompletion(current => toggleTask(current, task.id))} aria-label={`${task.title}: complete`} /><span>{completion[task.id] ? 'Complete — undo' : 'Mark complete'}</span></label>
        </div><span className="task-status">{completion[task.id] ? 'Complete' : 'Incomplete'}</span>
      </article>)}</div>
    </section>
    <aside className="progress-panel" aria-labelledby="progress-title">
      <p className="eyebrow">EVERY STEP COUNTS</p><h2 id="progress-title">Your preparation</h2>
      <div className="progress-ring" style={{background: `conic-gradient(var(--accent) ${percent}%, var(--track) 0)`}} aria-hidden="true"><div><strong>{percent}<span>%</span></strong><small>PLAN COMPLETE</small></div></div>
      <p className="progress-summary" aria-live="polite" aria-atomic="true"><strong>{completed} / {total}</strong> tasks complete · {percent}%</p>
      <progress className="progress-bar" aria-label="Training-plan completion" value={completed} max={total} />
      <p className="progress-explanation">This measures your training-plan completion, not your chance of defeating Lucifero.</p>
      <div className="encouragement"><span aria-hidden="true">✦</span><p>{completed === total ? 'Plan complete. Every task, earned.' : completed === 0 ? 'A great plan starts with one step.' : 'Keep going. Your effort is adding up.'}</p></div>
      <p className="session-note">Session only · Progress resets after refresh.</p>
    </aside>
  </div>;
}
