import type { Technology } from "../types";

interface SidebarProps {
  stackItems: Technology[];
  onRemoveFromStack: (id: string) => void;
  onRemoveAll: () => void;
}

function Sidebar({ stackItems, onRemoveFromStack, onRemoveAll }: SidebarProps) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 sticky top-24">
      <h3 className="font-bold text-lg">Your Stack</h3>
      <p className="text-xs text-neutral-400 mb-4">
        {stackItems.length} Technology Selected
      </p>

      {/* Empty state: shown by default when nothing has been added yet */}
      {stackItems.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-sm text-neutral-400">No technologies selected yet.</p>
          <p className="text-xs text-neutral-300 mt-1">Your stack is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {stackItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 rounded-xl border border-neutral-100 p-3"
            >
              <img src={item.icon} alt={item.name} className="w-6 h-6" />
              <div className="flex-1">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-neutral-400">{item.category}</p>
              </div>
              <button
                onClick={() => onRemoveFromStack(item.id)}
                aria-label={`Remove ${item.name}`}
                className="text-neutral-400 hover:text-red-500 text-lg leading-none"
              >
                ×
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="mt-2 w-full py-2.5 rounded-lg text-sm font-semibold border border-red-200 text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}

export default Sidebar;