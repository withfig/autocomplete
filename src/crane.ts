const imageArg = (description: string): Fig.Arg => ({
  name: "image",
  description,
});

const inheritedOptions: Fig.Option[] = [
  {
    name: "--allow-nondistributable-artifacts",
    description: "Allow pushing non-distributable (foreign) layers",
  },
  {
    name: "--insecure",
    description: "Allow image references to be fetched without TLS",
  },
  {
    name: "--platform",
    description:
      "Specifies the platform in the form os/arch[/variant][:osversion] (e.g. linux/amd64)",
    args: {
      name: "platform",
      description: "Platform in the form os/arch[/variant][:osversion]",
      default: "all",
      suggestions: [
        "linux/amd64",
        "linux/arm64",
        "darwin/amd64",
        "windows/amd64",
      ],
    },
  },
  {
    name: ["-v", "--verbose"],
    description: "Enable debug logs",
  },
];

const completionSpec: Fig.Spec = {
  name: "crane",
  description: "Tool for managing container images",
  subcommands: [
    {
      name: "append",
      description: "Append contents of a tarball to a remote image",
      options: [
        {
          name: ["-b", "--base"],
          description: "Name of base image to append to",
          args: {
            name: "base",
            description: "Name of base image to append to",
          },
        },
        {
          name: ["-f", "--new_layer"],
          description: "Path to tarball to append to image",
          isRepeatable: true,
          args: {
            name: "tarball",
            description: "Path to tarball to append to image",
            template: "filepaths",
          },
        },
        {
          name: ["-t", "--new_tag"],
          description: "Tag to apply to resulting image",
          args: { name: "tag", description: "Tag to apply to resulting image" },
        },
        {
          name: "--oci-empty-base",
          description:
            "If true, empty base image will have OCI media types instead of Docker",
        },
        {
          name: ["-o", "--output"],
          description: "Path to new tarball of resulting image",
          args: {
            name: "path",
            description: "Path to new tarball of resulting image",
            template: "filepaths",
          },
        },
        {
          name: "--set-base-image-annotations",
          description:
            "If true, annotate the resulting image as being based on the base image",
        },
        ...inheritedOptions,
      ],
    },
    {
      name: "auth",
      description: "Log in or access credentials",
      subcommands: [
        {
          name: "get",
          description: "Implements a credential helper",
          args: {
            name: "registry_addr",
            description: "Address of the registry",
            isOptional: true,
          },
        },
        {
          name: "login",
          description: "Log in to a registry",
          args: {
            name: "server",
            description: "Server to log in to",
            isOptional: true,
          },
          options: [
            {
              name: ["-p", "--password"],
              description: "Password",
              args: { name: "password", description: "Password" },
            },
            {
              name: "--password-stdin",
              description: "Take the password from stdin",
            },
            {
              name: ["-u", "--username"],
              description: "Username",
              args: { name: "username", description: "Username" },
            },
          ],
        },
        {
          name: "logout",
          description: "Log out of a registry",
          args: {
            name: "server",
            description: "Server to log out of",
            isOptional: true,
          },
        },
        {
          name: "token",
          description: "Retrieves a token for a remote repo",
          args: { name: "repo", description: "Repository to get a token for" },
          options: [
            {
              name: ["-H", "--header"],
              description: "Output in header format",
            },
            {
              name: ["-m", "--mount"],
              description: "Scopes to mount from",
              isRepeatable: true,
              args: { name: "scope", description: "Scope to mount from" },
            },
            {
              name: "--push",
              description: "Request push scopes",
            },
          ],
        },
      ],
    },
    {
      name: "blob",
      description: "Read a blob from the registry",
      args: {
        name: "blob",
        description: "Blob to read (e.g. ubuntu@sha256:...)",
      },
    },
    {
      name: "catalog",
      description: "List the repos in a registry",
      args: { name: "registry", description: "Registry to list repos from" },
      options: [
        {
          name: "--full-ref",
          description: "(Optional) if true, print the full image reference",
        },
      ],
    },
    {
      name: "config",
      description: "Get the config of an image",
      args: imageArg("Image to get the config of"),
    },
    {
      name: "copy",
      description:
        "Efficiently copy a remote image from src to dst while retaining the digest value",
      args: [
        { name: "src", description: "Source image reference" },
        { name: "dst", description: "Destination image reference" },
      ],
      options: [
        {
          name: ["-a", "--all-tags"],
          description: "(Optional) if true, copy all tags from SRC to DST",
        },
        {
          name: ["-j", "--jobs"],
          description:
            "(Optional) The maximum number of concurrent copies, defaults to GOMAXPROCS",
          args: {
            name: "jobs",
            description: "Maximum number of concurrent copies",
          },
        },
        {
          name: ["-n", "--no-clobber"],
          description:
            "(Optional) if true, avoid overwriting existing tags in DST",
        },
      ],
    },
    {
      name: "delete",
      description: "Delete an image reference from its registry",
      args: imageArg("Image reference to delete"),
    },
    {
      name: "digest",
      description: "Get the digest of an image",
      args: imageArg("Image to get the digest of"),
      options: [
        {
          name: "--full-ref",
          description:
            "(Optional) if true, print the full image reference by digest",
        },
        {
          name: "--tarball",
          description: "(Optional) path to tarball containing the image",
          args: {
            name: "path",
            description: "Path to tarball containing the image",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "export",
      description: "Export filesystem of a container image as a tarball",
      args: [
        imageArg("Image to export (use - to read from stdin)"),
        {
          name: "tarball",
          description: "Path to new tarball (use - for stdout)",
          template: "filepaths",
        },
      ],
    },
    {
      name: "flatten",
      description: "Flatten an image's layers into a single layer",
      options: [
        {
          name: ["-t", "--tag"],
          description:
            "New tag to apply to flattened image. If not provided, push by digest to the original image repository",
          args: { name: "tag", description: "New tag to apply" },
        },
      ],
    },
    {
      name: "index",
      description: "Modify an image index",
      subcommands: [
        {
          name: "append",
          description:
            "Append contents of a remote index or manifest to a remote index",
          options: [
            {
              name: "--docker-empty-base",
              description:
                "If true, empty base index will have Docker media types instead of OCI",
            },
            {
              name: "--flatten",
              description:
                "If true, appending an index will append each of its children rather than the index itself",
            },
            {
              name: ["-m", "--manifest"],
              description:
                "References to manifests to append to the base index",
              isRepeatable: true,
              args: { name: "manifest", description: "Reference to append" },
            },
            {
              name: ["-t", "--tag"],
              description: "Tag to apply to resulting image",
              args: { name: "tag", description: "Tag to apply" },
            },
          ],
        },
        {
          name: "filter",
          description: "Filter an index by platform",
          options: [
            {
              name: "--platform",
              description:
                "Specifies the platform(s) to keep from base in the form os/arch[/variant][:osversion][,<platform>]",
              args: {
                name: "platforms",
                description: "Platform(s) to keep (e.g. linux/amd64)",
              },
            },
            {
              name: ["-t", "--tag"],
              description: "Tag to apply to resulting image",
              args: { name: "tag", description: "Tag to apply" },
            },
          ],
        },
        {
          name: "list",
          description: "List the manifests of an image index",
        },
      ],
    },
    {
      name: "ls",
      description: "List the tags in a repo",
      args: { name: "repo", description: "Repository to list tags from" },
      options: [
        {
          name: "--full-ref",
          description: "(Optional) if true, print the full image reference",
        },
        {
          name: ["-O", "--omit-digest-tags"],
          description:
            "(Optional), if true, omit digest tags (e.g., ':sha256-...')",
        },
      ],
    },
    {
      name: "manifest",
      description: "Get the manifest of an image",
      args: imageArg("Image to get the manifest of"),
    },
    {
      name: "mutate",
      description:
        "Modify image labels and annotations. The container must be pushed to a registry, and the manifest is updated there",
      options: [
        {
          name: ["-a", "--annotation"],
          description: "New annotations to add",
          isRepeatable: true,
          args: { name: "key=value", description: "Annotation to add" },
        },
        {
          name: "--append",
          description: "Path to tarball to append to image",
          isRepeatable: true,
          args: {
            name: "tarball",
            description: "Path to tarball to append",
            template: "filepaths",
          },
        },
        {
          name: "--cmd",
          description: "New cmd to set",
          isRepeatable: true,
          args: { name: "cmd", description: "New cmd to set" },
        },
        {
          name: "--entrypoint",
          description: "New entrypoint to set",
          isRepeatable: true,
          args: { name: "entrypoint", description: "New entrypoint to set" },
        },
        {
          name: ["-e", "--env"],
          description: "New envvar to add",
          isRepeatable: true,
          args: {
            name: "key=value",
            description: "Environment variable to add",
          },
        },
        {
          name: "--exposed-ports",
          description: "New ports to expose",
          isRepeatable: true,
          args: { name: "port", description: "Port to expose" },
        },
        {
          name: ["-l", "--label"],
          description: "New labels to add",
          isRepeatable: true,
          args: { name: "key=value", description: "Label to add" },
        },
        {
          name: ["-o", "--output"],
          description: "Path to new tarball of resulting image",
          args: {
            name: "path",
            description: "Path to new tarball",
            template: "filepaths",
          },
        },
        {
          name: "--repo",
          description:
            "Repository to push the mutated image to. If provided, push by digest to this repository",
          args: { name: "repo", description: "Repository to push to" },
        },
        {
          name: "--set-platform",
          description:
            "New platform to set in the form os/arch[/variant][:osversion] (e.g. linux/amd64)",
          args: { name: "platform", description: "New platform to set" },
        },
        {
          name: ["-t", "--tag"],
          description:
            "New tag reference to apply to mutated image. If not provided, push by digest to the original image repository",
          args: { name: "tag", description: "New tag to apply" },
        },
        {
          name: ["-u", "--user"],
          description: "New user to set",
          args: { name: "user", description: "New user to set" },
        },
        {
          name: ["-w", "--workdir"],
          description: "New working dir to set",
          args: { name: "workdir", description: "New working dir to set" },
        },
      ],
    },
    {
      name: "pull",
      description:
        "Pull remote images by reference and store their contents locally",
      args: [
        imageArg("Image to pull"),
        {
          name: "tarball",
          description: "Path to new tarball",
          template: "filepaths",
        },
      ],
      options: [
        {
          name: "--annotate-ref",
          description:
            "Preserves image reference used to pull as an annotation when used with --format=oci",
        },
        {
          name: ["-c", "--cache_path"],
          description: "Path to cache image layers",
          args: {
            name: "path",
            description: "Path to cache image layers",
            template: "folders",
          },
        },
        {
          name: "--format",
          description:
            'Format in which to save images ("tarball", "legacy", or "oci")',
          args: {
            name: "format",
            default: "tarball",
            suggestions: ["tarball", "legacy", "oci"],
          },
        },
      ],
    },
    {
      name: "push",
      description:
        "Push local image contents to a remote registry. If PATH is a directory, it will be read as an OCI image layout; otherwise PATH is assumed to be a docker-style tarball",
      args: [
        {
          name: "path",
          description:
            "Path to an OCI layout directory or docker-style tarball",
          template: "filepaths",
        },
        imageArg("Image reference to push to"),
      ],
      options: [
        {
          name: "--image-refs",
          description:
            "Path to file where a list of the published image references will be written",
          args: {
            name: "path",
            description: "Path to output file",
            template: "filepaths",
          },
        },
        {
          name: "--index",
          description:
            "Push a collection of images as a single index, currently required if PATH contains multiple images",
        },
      ],
    },
    {
      name: "rebase",
      description: "Rebase an image onto a new base image",
      options: [
        {
          name: "--new_base",
          description: "New base image to insert",
          args: { name: "base", description: "New base image to insert" },
        },
        {
          name: "--old_base",
          description: "Old base image to remove",
          args: { name: "base", description: "Old base image to remove" },
        },
        {
          name: "--original",
          description:
            "Original image to rebase (deprecated: use positional arg)",
          args: { name: "image", description: "Original image to rebase" },
          deprecated: true,
        },
        {
          name: "--rebased",
          description: "Tag to apply to rebased image (deprecated: use --tag)",
          args: { name: "tag", description: "Tag to apply" },
          deprecated: true,
        },
        {
          name: ["-t", "--tag"],
          description: "Tag to apply to rebased image",
          args: { name: "tag", description: "Tag to apply" },
        },
      ],
    },
    {
      name: "registry",
      description: "Serve an in-memory registry implementation",
      subcommands: [
        {
          name: "serve",
          description: "Serve a registry implementation",
          options: [
            {
              name: "--address",
              description: "Address to listen on",
              args: { name: "address", description: "Address to listen on" },
            },
            {
              name: "--disk",
              description: "Path to a directory where blobs will be stored",
              args: {
                name: "path",
                description: "Directory where blobs will be stored",
                template: "folders",
              },
            },
          ],
        },
      ],
    },
    {
      name: "tag",
      description:
        "Efficiently tag a remote image without downloading it (faster than copy because layer existence checks are skipped)",
      args: [
        imageArg("Image to tag"),
        { name: "tag", description: "New tag to apply (e.g. v1)" },
      ],
    },
    {
      name: "validate",
      description: "Validate that an image is well-formed",
      options: [
        {
          name: "--fast",
          description: "Skip downloading/digesting layers",
        },
        {
          name: "--remote",
          description: "Name of remote image to validate",
          args: {
            name: "image",
            description: "Name of remote image to validate",
          },
        },
        {
          name: "--tarball",
          description: "Path to tarball to validate",
          args: {
            name: "path",
            description: "Path to tarball to validate",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "version",
      description: "Print the version",
    },
  ],
  options: [
    ...inheritedOptions,
    {
      name: ["-h", "--help"],
      description: "Show help for crane",
    },
  ],
};

export default completionSpec;
