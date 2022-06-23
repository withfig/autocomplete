const driverNameOption: Fig.Option = {
  name: ["--driver-name", "-d"],
  description: "Name of driver to use. (delegated)",
  args: {
    name: "TEXT",
    suggestions: [
      "delegated",
      "docker",
      "podman",
      "vagrant",
      "azure",
      "hetzner",
    ],
  },
};

const scenarioNameOption: Fig.Option = {
  name: ["--scenario-name", "-s"],
  description: "Name of the scenario to target. (default)",
  args: { name: "TEXT" },
};

const parallelOption: Fig.Option = {
  name: "--parallel",
  description: "Enable parallel mode",
  exclusiveOn: ["--no-parallel"],
};

const noParallelOption: Fig.Option = {
  name: "--no-parallel",
  description: "Disable parallel mode",
  exclusiveOn: ["--parallel"],
};

const dependencyNameOption: Fig.Option = {
  name: "--dependency-name",
  description: "Name of dependency to initialize. (galaxy)",
  args: {
    name: "TEXT",
    suggestions: ["galaxy"],
  },
};

const lintNameOption: Fig.Option = {
  name: "--lint-name",
  description: "Name of lint to initialize. (yamllint)",
  args: {
    name: "TEXT",
    suggestions: ["yamllint"],
  },
};

const provisionerNameOption: Fig.Option = {
  name: "--provisioner-name",
  description: "Name of provisioner to initialize. (ansible)",
  args: {
    name: "TEXT",
    suggestions: ["ansible"],
  },
};

const verifierNameOption: Fig.Option = {
  name: "--verifier-name",
  description: "Name of verifier to initialize. (ansible)",
  args: {
    name: "TEXT",
    suggestions: ["ansible", "testinfra"],
  },
};

const completionSpec: Fig.Spec = {
  name: "molecule",
  description: "Molecule aids in the development and testing of Ansible roles",
  subcommands: [
    {
      name: "check",
      description:
        "Use the provisioner to perform a Dry-Run (destroy, dependency, create, prepare, converge)",
      options: [scenarioNameOption, parallelOption, noParallelOption],
    },
    {
      name: "cleanup",
      description:
        "Use the provisioner to cleanup any changes made to external systems during the stages of testing",
      options: [scenarioNameOption],
    },
    {
      name: "converge",
      description:
        "Use the provisioner to configure instances (dependency, create, prepare converge)",
      options: [scenarioNameOption],
    },
    {
      name: "create",
      description: "Use the provisioner to start the instances",
      options: [scenarioNameOption, driverNameOption],
    },
    {
      name: "dependency",
      description: "Manage the role's dependencies",
      options: [scenarioNameOption],
    },
    {
      name: "destroy",
      description: "Use the provisioner to destroy the instances",
      options: [
        scenarioNameOption,
        driverNameOption,
        {
          name: "--all",
          description: "Destroy all scenarios. Default is False",
          exclusiveOn: ["--no-all"],
        },
        {
          name: "--no-all",
          description: "Do not destroy all scenarios",
          exclusiveOn: ["--all"],
        },
        parallelOption,
        noParallelOption,
      ],
    },
    {
      name: "drivers",
      description: "List drivers",
      options: [
        {
          name: ["--format", "-f"],
          description: "Change output format. (simple)",
          args: {
            name: "TEXT",
            suggestions: ["simple", "plain"],
          },
        },
      ],
    },
    {
      name: "idempotence",
      description:
        "Use the provisioner to configure the instances and parse the output to determine idempotence",
      options: [scenarioNameOption],
    },
    {
      name: "init",
      description: "Initialize a new role or scenario",
      subcommands: [
        {
          name: "role",
          description:
            "Initialize a new role for use with Molecule, namespace is required outside collections, like acme.myrole",
          options: [
            dependencyNameOption,
            driverNameOption,
            lintNameOption,
            provisionerNameOption,
            verifierNameOption,
          ],
          args: { name: "ROLE_NAME" },
          parserDirectives: {
            optionsMustPrecedeArguments: true,
          },
        },
        {
          name: "scenario",
          description: "Initialize a new scenario for use with Molecule",
          options: [
            dependencyNameOption,
            driverNameOption,
            lintNameOption,
            provisionerNameOption,
            {
              name: ["--role-name", "-r"],
              description: "Name of the role to create",
              args: { name: "TEXT" },
            },
            verifierNameOption,
          ],
          args: { name: "SCENARIO_NAME" },
          parserDirectives: {
            optionsMustPrecedeArguments: true,
          },
        },
      ],
    },
    {
      name: "lint",
      description: "Lint the role (dependency, lint)",
      options: [scenarioNameOption],
    },
    {
      name: "list",
      description: "List status of instances",
      options: [
        scenarioNameOption,
        {
          name: ["--format", "-f"],
          description: "Change output format. (simple)",
          args: {
            name: "TEXT",
            suggestions: ["simple", "plain", "yaml"],
          },
        },
      ],
    },
    {
      name: "login",
      description: "Log in to one instance",
      options: [
        {
          name: ["--host", "-h"],
          description: "Host to access",
          args: { name: "TEXT" },
        },
        scenarioNameOption,
      ],
    },
    {
      name: "matrix",
      description: "List matrix of steps used to test instances",
      options: [scenarioNameOption],
    },
    {
      name: "prepare",
      description:
        "Use the provisioner to prepare the instances into a particular starting state",
      options: [
        scenarioNameOption,
        driverNameOption,
        {
          name: "--force",
          description: "Enable force mode. Default is disabled",
          exclusiveOn: ["--no-force"],
        },
        {
          name: "--no-force",
          description: "Disable force mode",
          exclusiveOn: ["--force"],
        },
      ],
    },
    {
      name: "reset",
      description: "Reset molecule temporary folders",
      options: [scenarioNameOption],
    },
    {
      name: "side-effect",
      description:
        "Use the provisioner to perform side-effects to the instances",
      options: [scenarioNameOption],
    },
    {
      name: "syntax",
      description: "Use the provisioner to syntax check the role",
      options: [scenarioNameOption],
    },
    {
      name: "test",
      description:
        "Test (dependency, lint, cleanup, destroy, syntax, create, prepare, converge, idempotence, side_effect, verify, cleanup, destroy)",
      options: [
        scenarioNameOption,
        driverNameOption,
        {
          name: "--all",
          description: "Test all scenarios. Default is False",
          exclusiveOn: ["--no-all"],
        },
        {
          name: "--no-all",
          description: "Do not test all scenarios",
          exclusiveOn: ["--all"],
        },
        {
          name: "--destroy",
          description:
            "The destroy strategy used at the conclusion of a Molecule run (always)",
          args: {
            name: "TEXT",
            suggestions: ["always", "never"],
          },
        },
        parallelOption,
        noParallelOption,
      ],
    },
  ],
  options: [
    {
      name: "--help",
      description: "Show help",
      isPersistent: true,
    },
    {
      name: "--version",
      description: "Show molecule version",
    },
  ],
};

export default completionSpec;
