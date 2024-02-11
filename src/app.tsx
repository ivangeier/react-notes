import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

const note = {
  date: new Date(),
  content: "teste de texto",
};

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <h1 className="text-4xl font-bold text-slate-800">Super Notes</h1>

      <form className="w-full">
        <input
          type="text"
          placeholder="Find in your notes..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard />
        <NoteCard note={note} />
      </div>
    </div>
  );
}
