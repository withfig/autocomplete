import { useExecuteCommand } from "@fig/autocomplete-hooks";
import parseDiff, { File } from 'parse-diff';
import React from 'react';

type CommitType = {
    added: number;
    removed: number;
    unchanged: number;
}

type ColorType = 'added' | 'removed' | 'unchanged';

const getColor = (type: ColorType): string => {
    switch (type) {
        case 'added': return 'bg-green-500';
        case 'removed': return 'bg-red-500';
        default: return 'bg-gray-500';
    }
}

const CommitSquares: React.FC<{ commit: CommitType }> = ({ commit }) => {
    const added = commit.added;
    const removed = commit.removed;
    const unchanged = commit.unchanged;

    const total = added + removed + unchanged;

    const squares = Array(5).fill('bg-gray-500');
    let index = 0;

    const proportions = {
        added: added / total,
        removed: removed / total,
        unchanged: unchanged / total,
    };

    for (const [type, proportion] of Object.entries(proportions)) {
        const count = Math.round(proportion * (5 - index));
        for (let i = 0; i < count; i++) {
            if (index < 5) {
                squares[index++] = getColor(type as ColorType);
            }
        }
    }

    return (
        <div className="flex space-x-1 items-center">
            {squares.map((color, index) => (
                <div key={index} className={`w-2 h-2 ${color}`} />
            ))}
        </div>
    );
}




const DiffComponent = ({
    suggestion,
    shellContext,
    maxHeight,
}: {
    suggestion: Fig.Suggestion;
    shellContext: Fig.ShellContext;
    maxHeight: number;
}) => {
    const path = Array.isArray(suggestion.name) ? suggestion.name[0] : suggestion.name

    const res = useExecuteCommand({
        args: ["git", "diff", "-U1", "HEAD", path]
    })

    let files: File[] | undefined = undefined;

    if (res.status === "success") {
        files = parseDiff(res.stdout);
    }

    if (!files || files.length !== 1) {
        return <></>
    }

    const diff = files[0];

    // count the number of lines added and removed in diff
    let addedLines = 0;
    let removedLines = 0;
    let unchangedLines = 0;
    diff.chunks.forEach((hunk) => {
        hunk.changes.forEach((change) => {
            if (change.type === "add") {
                addedLines += 1;
            } else if (change.type === "del") {
                removedLines += 1;
            } else if (change.type === "normal") {
                unchangedLines += 1;
            }
        })
    })

    return (
        <div
            className="bg-main-bg text-main-text p-2 rounded overflow-y-scroll shadow-[0px_0px_3px_0px_rgb(85,_85,_85)]"
            style={{
                maxHeight,
            }}>

            <div className="flex space-x-1">
                {addedLines > 0 && <span className="text-green-500">+{addedLines}</span>}
                {removedLines > 0 && <span className="text-red-500">-{removedLines}</span>}
                <CommitSquares commit={{ added: addedLines, removed: removedLines, unchanged: unchangedLines }} />
            </div>
        </div >
    );
};

export default DiffComponent;
