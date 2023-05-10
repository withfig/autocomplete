import { Process } from "@withfig/api-bindings";
import { useEffect, useState } from "react";

type ExecuteCommandOutput =
  | {
      status: "loading";
    }
  | {
      status: "success";
      exitCode: number;
      stdout: string;
      stderr: string;
    }
  | {
      status: "error";
      error: Error;
    };

export const useExecuteCommand = (
  input: { command: string } | { args: string[] }
): ExecuteCommandOutput => {
  let executable: string;
  let args: string[];
  if ("command" in input && input.command) {
    executable = "bash";
    args = ["-c", input.command];
  } else if ("args" in input && input.args.length > 0) {
    executable = input.args[0];
    args = input.args.slice(1);
  }

  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [exitCode, setExitCode] = useState<number | undefined>();
  const [stdout, setStdout] = useState<string | undefined>();
  const [stderr, setStderr] = useState<string | undefined>();
  const [error, setError] = useState<Error | undefined>();

  useEffect(() => {
    Process.run({
      executable,
      args,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      terminalSessionId: window?.globalTerminalSessionId,
    })
      .then(({ exitCode, stderr, stdout }) => {
        setExitCode(exitCode);
        setStdout(stdout);
        setStderr(stderr);
        setStatus("success");
      })
      .catch((err) => {
        setError(err);
        setStatus("error");
      });
  }, [executable, args]);

  return {
    status,
    exitCode,
    stdout,
    stderr,
    error,
  };
};
