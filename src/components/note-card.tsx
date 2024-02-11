export function NoteCard() {
  return (
    <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden outline-none relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">2 days ago</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        recusandae facere placeat adipisci consequuntur necessitatibus eligendi
        error, modi molestias, aspernatur ducimus voluptas asperiores iusto
        provident eius ipsam, a beatae fugit. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Laborum omnis numquam quia inventore!
        Aspernatur quaerat sapiente laudantium labore hic reprehenderit quis
        natus, dicta nesciunt dolorem assumenda enim, cumque qui aperiam.
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
    </button>
  );
}
