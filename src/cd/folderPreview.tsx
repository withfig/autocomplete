import { useExecuteCommand } from "@fig/autocomplete-hooks";
import "../../index.css";

const Preview = ({
  suggestion,
  shellContext,
  maxHeight,
}: {
  suggestion: Fig.Suggestion;
  shellContext: Fig.ShellContext;
  maxHeight: number;
}) => {
  const res = useExecuteCommand({
    args: [
      "ls",
      "-1ApL",
      Array.isArray(suggestion.name) ? suggestion.name[0] : suggestion.name,
    ],
  });

  const items =
    res.status === "success"
      ? res.stdout
          .split("\n")
          .map((item) => item.trim())
          .filter((item) => item !== "" && item !== ".DS_Store")
          .map((item) => (
            <li key={item} className="text-sm flex flex-row items-center">
              <img
                src={`fig://path/${shellContext.currentWorkingDirectory}/${item}`}
                className="w-4 h-4 mr-2"
              />
              <span className="font-mono">{item}</span>
            </li>
          ))
      : [];

  return (
    <div
      className="bg-main-bg text-main-text p-2 rounded overflow-y-scroll shadow-[0px_0px_3px_0px_rgb(85,_85,_85)]"
      style={{
        maxHeight,
      }}
    >
      <h1 className="font-semibold">Preview</h1>
      {items.length === 0 ? (
        <span className="opacity-70">No items</span>
      ) : (
        <ul>{items}</ul>
      )}
    </div>
  );
};

export default Preview;
