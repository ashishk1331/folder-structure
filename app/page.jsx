import { ArrowBendDownRight } from "@phosphor-icons/react/dist/ssr";
import { twMerge } from "tailwind-merge";

function Arrow({ hidden }) {
  return (
    <ArrowBendDownRight
      weight="fill"
      className={twMerge(hidden && "opacity-0")}
    />
  );
}

function structure(folder, level = 0) {
  if (Boolean(folder)) {
    let children = [];
    for (let i = 0; i < level; i++) {
      children.push(<Arrow key={i} hidden={i < level - 1} />);
    }
    return Object.keys(folder).map(function (folder_name) {
      return [
        <div className="flex gap-2 items-center">
          {children}
          <p>{folder_name}</p>
        </div>,
        structure(folder[folder_name], level + 1),
      ];
    });
  }
  return null;
}

export default function Home() {
  let files = {
    inbox: {
      games: {
        rounds: {
          Folders: {},
          groups: {},
        },
      },
    },
    outbox: {},
  };

  return (
    <main className="flex bg-beige h-screen">
      <div className="m-auto text-xl font-medium flex flex-col">
        {structure(files)}
      </div>
    </main>
  );
}
