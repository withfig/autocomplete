import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "sidekiq",
  description: "Background job framework for Ruby",
  options: [
    {
      name: ["--concurrency", "-c"],
      description: "Processor threads to use",
      args: { name: "INT" },
    },
    {
      name: ["--environment", "-e"],
      description: "Application environment",
      args: { name: "ENV" },
    },
    {
      name: ["--tag", "-g"],
      description: "Process tag for procline",
      args: { name: "TAG" },
    },
    {
      name: ["--queue", "-q"],
      description: "Queues to process with optional weights",
      args: [{ name: "QUEUE" }, { name: "WEIGHT", isOptional: true }],
    },
    {
      name: ["--require", "-r"],
      description: "Location of Rails application with jobs or file to require",
      args: { name: "PATH|DIR", template: ["folders", "filepaths"] },
    },
    {
      name: ["--timeout", "-t"],
      description: "Shutdown timeout",
      args: { name: "NUM" },
    },
    {
      name: ["--verbose", "-v"],
      description: "Print more verbose output",
    },
    {
      name: ["--config", "-C"],
      description: "Path to YAML config file",
      args: { name: "PATH", generators: filepaths({ extensions: ["yaml"] }) },
    },
    {
      name: ["--help", "-h"],
      description: "Show help for sidekiq run",
    },
    {
      name: ["--version", "-V"],
      description: "Print version and exit",
    },
  ],
};
export default completionSpec;
