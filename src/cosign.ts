const completionSpec: Fig.Spec = {
  name: "cosign",
  description: "",
  subcommands: [
    {
      name: "attach",
      description:
        "Provides utilities for attaching artifacts to other artifacts in a registry",
      subcommands: [
        {
          name: "attestation",
          description: "Attach attestation to the supplied container image",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: "--allow-insecure-registry",
              description:
                "Whether to allow insecure connections to registries. Don't use this for anything but testing",
              displayName: "allow-insecure-registry",
            },
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
              displayName: "attachment-tag-prefix",
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: "--attestation",
              description: "Path to the attestation envelope",
              displayName: "attestation",
              args: { name: "attestation" },
            },
            {
              name: "--k8s-keychain",
              description:
                "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
              displayName: "k8s-keychain",
            },
            {
              name: ["--help", "-h"],
              description: "Help for attestation",
              displayName: "help",
            },
          ],
        },
        {
          name: "sbom",
          description: "Attach sbom to the supplied container image",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: "--allow-insecure-registry",
              description:
                "Whether to allow insecure connections to registries. Don't use this for anything but testing",
              displayName: "allow-insecure-registry",
            },
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
              displayName: "attachment-tag-prefix",
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: "--k8s-keychain",
              description:
                "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
              displayName: "k8s-keychain",
            },
            {
              name: "--sbom",
              description: "Path to the sbom, or {-} for stdin",
              displayName: "sbom",
              args: { name: "sbom" },
            },
            {
              name: "--type",
              description: "Type of sbom (spdx|cyclonedx|syft)",
              displayName: "type",
              args: { name: "type", default: "spdx" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for sbom",
              displayName: "help",
            },
          ],
        },
        {
          name: "signature",
          description: "Attach signatures to the supplied container image",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: "--allow-insecure-registry",
              description:
                "Whether to allow insecure connections to registries. Don't use this for anything but testing",
              displayName: "allow-insecure-registry",
            },
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
              displayName: "attachment-tag-prefix",
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: "--k8s-keychain",
              description:
                "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
              displayName: "k8s-keychain",
            },
            {
              name: "--payload",
              description:
                "Path to the payload covered by the signature (if using another format)",
              displayName: "payload",
              args: { name: "payload" },
            },
            {
              name: "--signature",
              description:
                "The signature, path to the signature, or {-} for stdin",
              displayName: "signature",
              args: { name: "signature" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for signature",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: ["--help", "-h"],
          description: "Help for attach",
          displayName: "help",
        },
      ],
    },
    {
      name: "attest",
      description: "Attest the supplied container image",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: "--allow-insecure-registry",
          description:
            "Whether to allow insecure connections to registries. Don't use this for anything but testing",
          displayName: "allow-insecure-registry",
        },
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
          displayName: "attachment-tag-prefix",
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: "--cert",
          description:
            "Path to the x509 certificate to include in the Signature",
          displayName: "cert",
          args: { name: "cert" },
        },
        {
          name: ["--force", "-f"],
          description: "Skip warnings and confirmations",
          displayName: "force",
        },
        {
          name: "--fulcio-url",
          description: "[EXPERIMENTAL] address of sigstore PKI server",
          displayName: "fulcio-url",
          args: { name: "fulcio-url", default: "https://fulcio.sigstore.dev" },
        },
        {
          name: "--identity-token",
          description:
            "[EXPERIMENTAL] identity token to use for certificate from fulcio",
          displayName: "identity-token",
          args: { name: "identity-token" },
        },
        {
          name: "--insecure-skip-verify",
          description:
            "[EXPERIMENTAL] skip verifying fulcio published to the SCT (this should only be used for testing)",
          displayName: "insecure-skip-verify",
        },
        {
          name: "--k8s-keychain",
          description:
            "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
          displayName: "k8s-keychain",
        },
        {
          name: "--key",
          description:
            "Path to the private key file, KMS URI or Kubernetes Secret",
          displayName: "key",
          args: { name: "key" },
        },
        {
          name: "--no-upload",
          description: "Do not upload the generated attestation",
          displayName: "no-upload",
        },
        {
          name: "--oidc-client-id",
          description: "[EXPERIMENTAL] OIDC client ID for application",
          displayName: "oidc-client-id",
          args: { name: "oidc-client-id", default: "sigstore" },
        },
        {
          name: "--oidc-client-secret",
          description: "[EXPERIMENTAL] OIDC client secret for application",
          displayName: "oidc-client-secret",
          args: { name: "oidc-client-secret" },
        },
        {
          name: "--oidc-issuer",
          description:
            "[EXPERIMENTAL] OIDC provider to be used to issue ID token",
          displayName: "oidc-issuer",
          args: {
            name: "oidc-issuer",
            default: "https://oauth2.sigstore.dev/auth",
          },
        },
        {
          name: "--predicate",
          description: "Path to the predicate file",
          displayName: "predicate",
          args: { name: "predicate" },
        },
        {
          name: ["--recursive", "-r"],
          description:
            "If a multi-arch image is specified, additionally sign each discrete image",
          displayName: "recursive",
        },
        {
          name: "--rekor-url",
          description: "[EXPERIMENTAL] address of rekor STL server",
          displayName: "rekor-url",
          args: { name: "rekor-url", default: "https://rekor.sigstore.dev" },
        },
        { name: "--replace", description: "", displayName: "replace" },
        {
          name: "--sk",
          description: "Whether to use a hardware security key",
          displayName: "sk",
        },
        {
          name: "--slot",
          description:
            "Security key slot to use for generated key (default: signature) (authentication|signature|card-authentication|key-management)",
          displayName: "slot",
          args: { name: "slot" },
        },
        {
          name: "--type",
          description:
            "Specify a predicate type (slsaprovenance|link|spdx|vuln|custom) or an URI",
          displayName: "type",
          args: { name: "type", default: "custom" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for attest",
          displayName: "help",
        },
      ],
    },
    {
      name: "clean",
      description: "Remove all signatures from an image",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: "--allow-insecure-registry",
          description:
            "Whether to allow insecure connections to registries. Don't use this for anything but testing",
          displayName: "allow-insecure-registry",
        },
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
          displayName: "attachment-tag-prefix",
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: ["--force", "-f"],
          description: "Do not prompt for confirmation",
          displayName: "force",
        },
        {
          name: "--k8s-keychain",
          description:
            "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
          displayName: "k8s-keychain",
        },
        {
          name: "--type",
          description:
            "A type of clean: <signature|attestation|sbom|all> (default: all)",
          displayName: "type",
          args: { name: "type", default: "all" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for clean",
          displayName: "help",
        },
      ],
    },
    {
      name: "completion",
      description: "Generate completion script",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: ["--help", "-h"],
          description: "Help for completion",
          displayName: "help",
        },
      ],
    },
    {
      name: "copy",
      description: "Copy the supplied container image and signatures",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: "--allow-insecure-registry",
          description:
            "Whether to allow insecure connections to registries. Don't use this for anything but testing",
          displayName: "allow-insecure-registry",
        },
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
          displayName: "attachment-tag-prefix",
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: ["--force", "-f"],
          description: "Overwrite destination image(s), if necessary",
          displayName: "force",
        },
        {
          name: "--k8s-keychain",
          description:
            "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
          displayName: "k8s-keychain",
        },
        {
          name: "--sig-only",
          description: "Only copy the image signature",
          displayName: "sig-only",
        },
        {
          name: ["--help", "-h"],
          description: "Help for copy",
          displayName: "help",
        },
      ],
    },
    {
      name: "dockerfile",
      description:
        "Provides utilities for discovering images in and performing operations on Dockerfiles",
      subcommands: [
        {
          name: "verify",
          description:
            "Verify a signature on the base image specified in the Dockerfile",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: "--allow-insecure-registry",
              description:
                "Whether to allow insecure connections to registries. Don't use this for anything but testing",
              displayName: "allow-insecure-registry",
            },
            {
              name: ["--annotations", "-a"],
              description: "Extra key=value pairs to sign",
              displayName: "annotations",
              args: { name: "annotations" },
            },
            {
              name: "--attachment",
              description:
                "Related image attachment to sign (sbom), default none",
              displayName: "attachment",
              args: { name: "attachment" },
            },
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
              displayName: "attachment-tag-prefix",
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: "--base-image-only",
              description:
                "Only verify the base image (the last FROM image in the Dockerfile)",
              displayName: "base-image-only",
            },
            {
              name: "--cert",
              description: "Path to the public certificate",
              displayName: "cert",
              args: { name: "cert" },
            },
            {
              name: "--cert-email",
              description: "The email expected in a valid Fulcio certificate",
              displayName: "cert-email",
              args: { name: "cert-email" },
            },
            {
              name: "--cert-oidc-issuer",
              description:
                "The OIDC issuer expected in a valid Fulcio certificate, e.g. https://token.actions.githubusercontent.com or https://oauth2.sigstore.dev/auth",
              displayName: "cert-oidc-issuer",
              args: { name: "cert-oidc-issuer" },
            },
            {
              name: "--check-claims",
              description: "Whether to check the claims found",
              displayName: "check-claims",
            },
            {
              name: "--k8s-keychain",
              description:
                "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
              displayName: "k8s-keychain",
            },
            {
              name: "--key",
              description:
                "Path to the public key file, KMS URI or Kubernetes Secret",
              displayName: "key",
              args: { name: "key" },
            },
            {
              name: "--local-image",
              description:
                "Whether the specified image is a path to an image saved locally via 'cosign save'",
              displayName: "local-image",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format for the signing image information (json|text)",
              displayName: "output",
              args: { name: "output", default: "json" },
            },
            {
              name: "--rekor-url",
              description: "[EXPERIMENTAL] address of rekor STL server",
              displayName: "rekor-url",
              args: {
                name: "rekor-url",
                default: "https://rekor.sigstore.dev",
              },
            },
            {
              name: "--signature",
              description: "Signature content or path or remote URL",
              displayName: "signature",
              args: { name: "signature" },
            },
            {
              name: "--signature-digest-algorithm",
              description:
                "Digest algorithm to use when processing a signature (sha224|sha256|sha384|sha512)",
              displayName: "signature-digest-algorithm",
              args: { name: "signature-digest-algorithm", default: "sha256" },
            },
            {
              name: "--sk",
              description: "Whether to use a hardware security key",
              displayName: "sk",
            },
            {
              name: "--slot",
              description:
                "Security key slot to use for generated key (default: signature) (authentication|signature|card-authentication|key-management)",
              displayName: "slot",
              args: { name: "slot" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for verify",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: ["--help", "-h"],
          description: "Help for dockerfile",
          displayName: "help",
        },
      ],
    },
    {
      name: "download",
      description:
        "Provides utilities for downloading artifacts and attached artifacts in a registry",
      subcommands: [
        {
          name: "attestation",
          description:
            "Download in-toto attestations from the supplied container image",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: "--allow-insecure-registry",
              description:
                "Whether to allow insecure connections to registries. Don't use this for anything but testing",
              displayName: "allow-insecure-registry",
            },
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
              displayName: "attachment-tag-prefix",
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: "--k8s-keychain",
              description:
                "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
              displayName: "k8s-keychain",
            },
            {
              name: ["--help", "-h"],
              description: "Help for attestation",
              displayName: "help",
            },
          ],
        },
        {
          name: "sbom",
          description: "Download SBOMs from the supplied container image",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: "--allow-insecure-registry",
              description:
                "Whether to allow insecure connections to registries. Don't use this for anything but testing",
              displayName: "allow-insecure-registry",
            },
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
              displayName: "attachment-tag-prefix",
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: "--k8s-keychain",
              description:
                "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
              displayName: "k8s-keychain",
            },
            {
              name: ["--help", "-h"],
              description: "Help for sbom",
              displayName: "help",
            },
          ],
        },
        {
          name: "signature",
          description: "Download signatures from the supplied container image",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: "--allow-insecure-registry",
              description:
                "Whether to allow insecure connections to registries. Don't use this for anything but testing",
              displayName: "allow-insecure-registry",
            },
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
              displayName: "attachment-tag-prefix",
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: "--k8s-keychain",
              description:
                "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
              displayName: "k8s-keychain",
            },
            {
              name: ["--help", "-h"],
              description: "Help for signature",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: ["--help", "-h"],
          description: "Help for download",
          displayName: "help",
        },
      ],
    },
    {
      name: "generate",
      description:
        "Generates (unsigned) signature payloads from the supplied container image",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: "--allow-insecure-registry",
          description:
            "Whether to allow insecure connections to registries. Don't use this for anything but testing",
          displayName: "allow-insecure-registry",
        },
        {
          name: ["--annotations", "-a"],
          description: "Extra key=value pairs to sign",
          displayName: "annotations",
          args: { name: "annotations" },
        },
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
          displayName: "attachment-tag-prefix",
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: "--k8s-keychain",
          description:
            "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
          displayName: "k8s-keychain",
        },
        {
          name: ["--help", "-h"],
          description: "Help for generate",
          displayName: "help",
        },
      ],
    },
    {
      name: "generate-key-pair",
      description: "Generates a key-pair",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: "--kms",
          description: "Create key pair in KMS service to use for signing",
          displayName: "kms",
          args: { name: "kms" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for generate-key-pair",
          displayName: "help",
        },
      ],
    },
    {
      name: "import-key-pair",
      description: "Imports a PEM-encoded RSA or EC private key",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: "--key",
          description: "Import key pair to use for signing",
          displayName: "key",
          args: { name: "key" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for import-key-pair",
          displayName: "help",
        },
      ],
    },
    {
      name: "initialize",
      description:
        "Initializes SigStore root to retrieve trusted certificate and key targets for verification",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: "--mirror",
          description:
            "GCS bucket to a SigStore TUF repository or HTTP(S) base URL",
          displayName: "mirror",
          args: { name: "mirror", default: "sigstore-tuf-root" },
        },
        {
          name: "--root",
          description:
            "Path to trusted initial root. defaults to embedded root",
          displayName: "root",
          args: { name: "root" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for initialize",
          displayName: "help",
        },
      ],
    },
    {
      name: "load",
      description: "Load a signed image on disk to a remote registry",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: "--dir",
          description:
            "Path to directory where the signed image is stored on disk",
          displayName: "dir",
          args: { name: "dir" },
          isRequired: true,
        },
        {
          name: ["--help", "-h"],
          description: "Help for load",
          displayName: "help",
        },
      ],
    },
    {
      name: "login",
      description: "Log in to a registry",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: ["--password", "-p"],
          description: "Password",
          displayName: "password",
          args: { name: "password" },
        },
        {
          name: "--password-stdin",
          description: "Take the password from stdin",
          displayName: "password-stdin",
        },
        {
          name: ["--username", "-u"],
          description: "Username",
          displayName: "username",
          args: { name: "username" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for login",
          displayName: "help",
        },
      ],
    },
    {
      name: "manifest",
      description:
        "Provides utilities for discovering images in and performing operations on Kubernetes manifests",
      subcommands: [
        {
          name: "verify",
          description:
            "Verify all signatures of images specified in the manifest",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: "--allow-insecure-registry",
              description:
                "Whether to allow insecure connections to registries. Don't use this for anything but testing",
              displayName: "allow-insecure-registry",
            },
            {
              name: ["--annotations", "-a"],
              description: "Extra key=value pairs to sign",
              displayName: "annotations",
              args: { name: "annotations" },
            },
            {
              name: "--attachment",
              description:
                "Related image attachment to sign (sbom), default none",
              displayName: "attachment",
              args: { name: "attachment" },
            },
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
              displayName: "attachment-tag-prefix",
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: "--cert",
              description: "Path to the public certificate",
              displayName: "cert",
              args: { name: "cert" },
            },
            {
              name: "--cert-email",
              description: "The email expected in a valid Fulcio certificate",
              displayName: "cert-email",
              args: { name: "cert-email" },
            },
            {
              name: "--cert-oidc-issuer",
              description:
                "The OIDC issuer expected in a valid Fulcio certificate, e.g. https://token.actions.githubusercontent.com or https://oauth2.sigstore.dev/auth",
              displayName: "cert-oidc-issuer",
              args: { name: "cert-oidc-issuer" },
            },
            {
              name: "--check-claims",
              description: "Whether to check the claims found",
              displayName: "check-claims",
            },
            {
              name: "--k8s-keychain",
              description:
                "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
              displayName: "k8s-keychain",
            },
            {
              name: "--key",
              description:
                "Path to the public key file, KMS URI or Kubernetes Secret",
              displayName: "key",
              args: { name: "key" },
            },
            {
              name: "--local-image",
              description:
                "Whether the specified image is a path to an image saved locally via 'cosign save'",
              displayName: "local-image",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output format for the signing image information (json|text)",
              displayName: "output",
              args: { name: "output", default: "json" },
            },
            {
              name: "--rekor-url",
              description: "[EXPERIMENTAL] address of rekor STL server",
              displayName: "rekor-url",
              args: {
                name: "rekor-url",
                default: "https://rekor.sigstore.dev",
              },
            },
            {
              name: "--signature",
              description: "Signature content or path or remote URL",
              displayName: "signature",
              args: { name: "signature" },
            },
            {
              name: "--signature-digest-algorithm",
              description:
                "Digest algorithm to use when processing a signature (sha224|sha256|sha384|sha512)",
              displayName: "signature-digest-algorithm",
              args: { name: "signature-digest-algorithm", default: "sha256" },
            },
            {
              name: "--sk",
              description: "Whether to use a hardware security key",
              displayName: "sk",
            },
            {
              name: "--slot",
              description:
                "Security key slot to use for generated key (default: signature) (authentication|signature|card-authentication|key-management)",
              displayName: "slot",
              args: { name: "slot" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for verify",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: ["--help", "-h"],
          description: "Help for manifest",
          displayName: "help",
        },
      ],
    },
    {
      name: "piv-tool",
      description: "This cosign was not built with piv-tool support!",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: ["--help", "-h"],
          description: "Help for piv-tool",
          displayName: "help",
        },
      ],
    },
    {
      name: "pkcs11-tool",
      description: "This cosign was not built with pkcs11-tool support!",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: ["--help", "-h"],
          description: "Help for pkcs11-tool",
          displayName: "help",
        },
      ],
    },
    {
      name: "policy",
      description: "Subcommand to manage a keyless policy",
      subcommands: [
        {
          name: "init",
          description: "Generate a new keyless policy",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: "--allow-insecure-registry",
              description:
                "Whether to allow insecure connections to registries. Don't use this for anything but testing",
              displayName: "allow-insecure-registry",
            },
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
              displayName: "attachment-tag-prefix",
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: "--expires",
              description: "Total expire duration in days",
              displayName: "expires",
              args: { name: "expires", default: "0" },
            },
            {
              name: "--issuer",
              description:
                "Trusted issuer to use for identity tokens, e.g. https://accounts.google.com",
              displayName: "issuer",
              args: { name: "issuer" },
            },
            {
              name: "--k8s-keychain",
              description:
                "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
              displayName: "k8s-keychain",
            },
            {
              name: ["--maintainers", "-m"],
              description: "List of maintainers to add to the root policy",
              displayName: "maintainers",
              args: { name: "maintainers" },
            },
            {
              name: "--namespace",
              description: "Registry namespace that the root policy belongs to",
              displayName: "namespace",
              args: { name: "namespace", default: "ns" },
            },
            {
              name: "--out",
              description: "Output policy locally",
              displayName: "out",
              args: { name: "out", default: "o" },
            },
            {
              name: "--threshold",
              description: "Threshold for root policy signers",
              displayName: "threshold",
              args: { name: "threshold", default: "1" },
            },
            {
              name: ["--help", "-h"],
              description: "Help for init",
              displayName: "help",
            },
          ],
        },
        {
          name: "sign",
          description: "Sign a keyless policy",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: "--allow-insecure-registry",
              description:
                "Whether to allow insecure connections to registries. Don't use this for anything but testing",
              displayName: "allow-insecure-registry",
            },
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
              displayName: "attachment-tag-prefix",
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: "--fulcio-url",
              description: "[EXPERIMENTAL] address of sigstore PKI server",
              displayName: "fulcio-url",
              args: {
                name: "fulcio-url",
                default: "https://fulcio.sigstore.dev",
              },
            },
            {
              name: "--identity-token",
              description:
                "[EXPERIMENTAL] identity token to use for certificate from fulcio",
              displayName: "identity-token",
              args: { name: "identity-token" },
            },
            {
              name: "--insecure-skip-verify",
              description:
                "[EXPERIMENTAL] skip verifying fulcio published to the SCT (this should only be used for testing)",
              displayName: "insecure-skip-verify",
            },
            {
              name: "--k8s-keychain",
              description:
                "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
              displayName: "k8s-keychain",
            },
            {
              name: "--namespace",
              description: "Registry namespace that the root policy belongs to",
              displayName: "namespace",
              args: { name: "namespace", default: "ns" },
            },
            {
              name: "--oidc-client-id",
              description: "[EXPERIMENTAL] OIDC client ID for application",
              displayName: "oidc-client-id",
              args: { name: "oidc-client-id", default: "sigstore" },
            },
            {
              name: "--oidc-client-secret",
              description: "[EXPERIMENTAL] OIDC client secret for application",
              displayName: "oidc-client-secret",
              args: { name: "oidc-client-secret" },
            },
            {
              name: "--oidc-issuer",
              description:
                "[EXPERIMENTAL] OIDC provider to be used to issue ID token",
              displayName: "oidc-issuer",
              args: {
                name: "oidc-issuer",
                default: "https://oauth2.sigstore.dev/auth",
              },
            },
            {
              name: "--out",
              description: "Output policy locally",
              displayName: "out",
              args: { name: "out", default: "o" },
            },
            {
              name: "--rekor-url",
              description: "[EXPERIMENTAL] address of rekor STL server",
              displayName: "rekor-url",
              args: {
                name: "rekor-url",
                default: "https://rekor.sigstore.dev",
              },
            },
            {
              name: ["--help", "-h"],
              description: "Help for sign",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: ["--help", "-h"],
          description: "Help for policy",
          displayName: "help",
        },
      ],
    },
    {
      name: "public-key",
      description: "Gets a public key from the key-pair",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: "--key",
          description:
            "Path to the private key file, KMS URI or Kubernetes Secret",
          displayName: "key",
          args: { name: "key" },
        },
        {
          name: "--outfile",
          description:
            "Path to a payload file to use rather than generating one",
          displayName: "outfile",
          args: { name: "outfile" },
        },
        {
          name: "--sk",
          description: "Whether to use a hardware security key",
          displayName: "sk",
        },
        {
          name: "--slot",
          description:
            "Security key slot to use for generated key (default: signature) (authentication|signature|card-authentication|key-management)",
          displayName: "slot",
          args: { name: "slot" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for public-key",
          displayName: "help",
        },
      ],
    },
    {
      name: "save",
      description:
        "Save the container image and associated signatures to disk at the specified directory",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: "--dir",
          description:
            "Path to dir where the signed image should be stored on disk",
          displayName: "dir",
          args: { name: "dir" },
          isRequired: true,
        },
        {
          name: ["--help", "-h"],
          description: "Help for save",
          displayName: "help",
        },
      ],
    },
    {
      name: "sign",
      description: "Sign the supplied container image",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: "--allow-insecure-registry",
          description:
            "Whether to allow insecure connections to registries. Don't use this for anything but testing",
          displayName: "allow-insecure-registry",
        },
        {
          name: ["--annotations", "-a"],
          description: "Extra key=value pairs to sign",
          displayName: "annotations",
          args: { name: "annotations" },
        },
        {
          name: "--attachment",
          description: "Related image attachment to sign (sbom), default none",
          displayName: "attachment",
          args: { name: "attachment" },
        },
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
          displayName: "attachment-tag-prefix",
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: "--cert",
          description:
            "Path to the x509 certificate to include in the Signature",
          displayName: "cert",
          args: { name: "cert" },
        },
        {
          name: ["--force", "-f"],
          description: "Skip warnings and confirmations",
          displayName: "force",
        },
        {
          name: "--fulcio-url",
          description: "[EXPERIMENTAL] address of sigstore PKI server",
          displayName: "fulcio-url",
          args: { name: "fulcio-url", default: "https://fulcio.sigstore.dev" },
        },
        {
          name: "--identity-token",
          description:
            "[EXPERIMENTAL] identity token to use for certificate from fulcio",
          displayName: "identity-token",
          args: { name: "identity-token" },
        },
        {
          name: "--insecure-skip-verify",
          description:
            "[EXPERIMENTAL] skip verifying fulcio published to the SCT (this should only be used for testing)",
          displayName: "insecure-skip-verify",
        },
        {
          name: "--k8s-keychain",
          description:
            "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
          displayName: "k8s-keychain",
        },
        {
          name: "--key",
          description:
            "Path to the private key file, KMS URI or Kubernetes Secret",
          displayName: "key",
          args: { name: "key" },
        },
        {
          name: "--oidc-client-id",
          description: "[EXPERIMENTAL] OIDC client ID for application",
          displayName: "oidc-client-id",
          args: { name: "oidc-client-id", default: "sigstore" },
        },
        {
          name: "--oidc-client-secret",
          description: "[EXPERIMENTAL] OIDC client secret for application",
          displayName: "oidc-client-secret",
          args: { name: "oidc-client-secret" },
        },
        {
          name: "--oidc-issuer",
          description:
            "[EXPERIMENTAL] OIDC provider to be used to issue ID token",
          displayName: "oidc-issuer",
          args: {
            name: "oidc-issuer",
            default: "https://oauth2.sigstore.dev/auth",
          },
        },
        {
          name: "--output-certificate",
          description: "Write the certificate to FILE",
          displayName: "output-certificate",
          args: { name: "output-certificate" },
        },
        {
          name: "--output-signature",
          description: "Write the signature to FILE",
          displayName: "output-signature",
          args: { name: "output-signature" },
        },
        {
          name: "--payload",
          description:
            "Path to a payload file to use rather than generating one",
          displayName: "payload",
          args: { name: "payload" },
        },
        {
          name: ["--recursive", "-r"],
          description:
            "If a multi-arch image is specified, additionally sign each discrete image",
          displayName: "recursive",
        },
        {
          name: "--rekor-url",
          description: "[EXPERIMENTAL] address of rekor STL server",
          displayName: "rekor-url",
          args: { name: "rekor-url", default: "https://rekor.sigstore.dev" },
        },
        {
          name: "--sk",
          description: "Whether to use a hardware security key",
          displayName: "sk",
        },
        {
          name: "--slot",
          description:
            "Security key slot to use for generated key (default: signature) (authentication|signature|card-authentication|key-management)",
          displayName: "slot",
          args: { name: "slot" },
        },
        {
          name: "--upload",
          description: "Whether to upload the signature",
          displayName: "upload",
        },
        {
          name: ["--help", "-h"],
          description: "Help for sign",
          displayName: "help",
        },
      ],
    },
    {
      name: "sign-blob",
      description:
        "Sign the supplied blob, outputting the base64-encoded signature to stdout",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: "--allow-insecure-registry",
          description:
            "Whether to allow insecure connections to registries. Don't use this for anything but testing",
          displayName: "allow-insecure-registry",
        },
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
          displayName: "attachment-tag-prefix",
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: "--b64",
          description: "Whether to base64 encode the output",
          displayName: "b64",
        },
        {
          name: "--bundle",
          description: "Write everything required to verify the blob to a FILE",
          displayName: "bundle",
          args: { name: "bundle" },
        },
        {
          name: "--fulcio-url",
          description: "[EXPERIMENTAL] address of sigstore PKI server",
          displayName: "fulcio-url",
          args: { name: "fulcio-url", default: "https://fulcio.sigstore.dev" },
        },
        {
          name: "--identity-token",
          description:
            "[EXPERIMENTAL] identity token to use for certificate from fulcio",
          displayName: "identity-token",
          args: { name: "identity-token" },
        },
        {
          name: "--insecure-skip-verify",
          description:
            "[EXPERIMENTAL] skip verifying fulcio published to the SCT (this should only be used for testing)",
          displayName: "insecure-skip-verify",
        },
        {
          name: "--k8s-keychain",
          description:
            "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
          displayName: "k8s-keychain",
        },
        {
          name: "--key",
          description:
            "Path to the private key file, KMS URI or Kubernetes Secret",
          displayName: "key",
          args: { name: "key" },
        },
        {
          name: "--oidc-client-id",
          description: "[EXPERIMENTAL] OIDC client ID for application",
          displayName: "oidc-client-id",
          args: { name: "oidc-client-id", default: "sigstore" },
        },
        {
          name: "--oidc-client-secret",
          description: "[EXPERIMENTAL] OIDC client secret for application",
          displayName: "oidc-client-secret",
          args: { name: "oidc-client-secret" },
        },
        {
          name: "--oidc-issuer",
          description:
            "[EXPERIMENTAL] OIDC provider to be used to issue ID token",
          displayName: "oidc-issuer",
          args: {
            name: "oidc-issuer",
            default: "https://oauth2.sigstore.dev/auth",
          },
        },
        {
          name: "--output",
          description: "Write the signature to FILE",
          displayName: "output",
          args: { name: "output" },
        },
        {
          name: "--output-certificate",
          description: "Write the certificate to FILE",
          displayName: "output-certificate",
          args: { name: "output-certificate" },
        },
        {
          name: "--output-signature",
          description: "Write the signature to FILE",
          displayName: "output-signature",
          args: { name: "output-signature" },
        },
        {
          name: "--rekor-url",
          description: "[EXPERIMENTAL] address of rekor STL server",
          displayName: "rekor-url",
          args: { name: "rekor-url", default: "https://rekor.sigstore.dev" },
        },
        {
          name: "--sk",
          description: "Whether to use a hardware security key",
          displayName: "sk",
        },
        {
          name: "--slot",
          description:
            "Security key slot to use for generated key (default: signature) (authentication|signature|card-authentication|key-management)",
          displayName: "slot",
          args: { name: "slot" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for sign-blob",
          displayName: "help",
        },
      ],
    },
    {
      name: "tree",
      description:
        "Display supply chain security related artifacts for an image such as signatures, SBOMs and attestations",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: "--allow-insecure-registry",
          description:
            "Whether to allow insecure connections to registries. Don't use this for anything but testing",
          displayName: "allow-insecure-registry",
        },
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
          displayName: "attachment-tag-prefix",
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: "--k8s-keychain",
          description:
            "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
          displayName: "k8s-keychain",
        },
        {
          name: ["--help", "-h"],
          description: "Help for tree",
          displayName: "help",
        },
      ],
    },
    {
      name: "triangulate",
      description:
        "Outputs the located cosign image reference. This is the location cosign stores the specified artifact type",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: "--allow-insecure-registry",
          description:
            "Whether to allow insecure connections to registries. Don't use this for anything but testing",
          displayName: "allow-insecure-registry",
        },
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
          displayName: "attachment-tag-prefix",
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: "--k8s-keychain",
          description:
            "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
          displayName: "k8s-keychain",
        },
        {
          name: "--type",
          description:
            "Related attachment to triangulate (attestation|sbom|signature), default signature",
          displayName: "type",
          args: { name: "type", default: "signature" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for triangulate",
          displayName: "help",
        },
      ],
    },
    {
      name: "upload",
      description: "Provides utilities for uploading artifacts to a registry",
      subcommands: [
        {
          name: "blob",
          description:
            "Upload one or more blobs to the supplied container image address",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: "--allow-insecure-registry",
              description:
                "Whether to allow insecure connections to registries. Don't use this for anything but testing",
              displayName: "allow-insecure-registry",
            },
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
              displayName: "attachment-tag-prefix",
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: "--ct",
              description: "Content type to set",
              displayName: "ct",
              args: { name: "ct" },
            },
            {
              name: ["--files", "-f"],
              description: "<filepath>:[platform/arch]",
              displayName: "files",
              args: { name: "files" },
            },
            {
              name: "--k8s-keychain",
              description:
                "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
              displayName: "k8s-keychain",
            },
            {
              name: ["--help", "-h"],
              description: "Help for blob",
              displayName: "help",
            },
          ],
        },
        {
          name: "wasm",
          description:
            "Upload a wasm module to the supplied container image reference",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: "--allow-insecure-registry",
              description:
                "Whether to allow insecure connections to registries. Don't use this for anything but testing",
              displayName: "allow-insecure-registry",
            },
            {
              name: "--attachment-tag-prefix",
              description:
                "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
              displayName: "attachment-tag-prefix",
              args: { name: "attachment-tag-prefix" },
            },
            {
              name: ["--file", "-f"],
              description: "Path to the wasm file to upload",
              displayName: "file",
              args: { name: "file" },
              isRequired: true,
            },
            {
              name: "--k8s-keychain",
              description:
                "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
              displayName: "k8s-keychain",
            },
            {
              name: ["--help", "-h"],
              description: "Help for wasm",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: ["--help", "-h"],
          description: "Help for upload",
          displayName: "help",
        },
      ],
    },
    {
      name: "verify",
      description: "Verify a signature on the supplied container image",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: "--allow-insecure-registry",
          description:
            "Whether to allow insecure connections to registries. Don't use this for anything but testing",
          displayName: "allow-insecure-registry",
        },
        {
          name: ["--annotations", "-a"],
          description: "Extra key=value pairs to sign",
          displayName: "annotations",
          args: { name: "annotations" },
        },
        {
          name: "--attachment",
          description: "Related image attachment to sign (sbom), default none",
          displayName: "attachment",
          args: { name: "attachment" },
        },
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
          displayName: "attachment-tag-prefix",
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: "--cert",
          description: "Path to the public certificate",
          displayName: "cert",
          args: { name: "cert" },
        },
        {
          name: "--cert-email",
          description: "The email expected in a valid Fulcio certificate",
          displayName: "cert-email",
          args: { name: "cert-email" },
        },
        {
          name: "--cert-oidc-issuer",
          description:
            "The OIDC issuer expected in a valid Fulcio certificate, e.g. https://token.actions.githubusercontent.com or https://oauth2.sigstore.dev/auth",
          displayName: "cert-oidc-issuer",
          args: { name: "cert-oidc-issuer" },
        },
        {
          name: "--check-claims",
          description: "Whether to check the claims found",
          displayName: "check-claims",
        },
        {
          name: "--k8s-keychain",
          description:
            "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
          displayName: "k8s-keychain",
        },
        {
          name: "--key",
          description:
            "Path to the public key file, KMS URI or Kubernetes Secret",
          displayName: "key",
          args: { name: "key" },
        },
        {
          name: "--local-image",
          description:
            "Whether the specified image is a path to an image saved locally via 'cosign save'",
          displayName: "local-image",
        },
        {
          name: ["--output", "-o"],
          description:
            "Output format for the signing image information (json|text)",
          displayName: "output",
          args: { name: "output", default: "json" },
        },
        {
          name: "--rekor-url",
          description: "[EXPERIMENTAL] address of rekor STL server",
          displayName: "rekor-url",
          args: { name: "rekor-url", default: "https://rekor.sigstore.dev" },
        },
        {
          name: "--signature",
          description: "Signature content or path or remote URL",
          displayName: "signature",
          args: { name: "signature" },
        },
        {
          name: "--signature-digest-algorithm",
          description:
            "Digest algorithm to use when processing a signature (sha224|sha256|sha384|sha512)",
          displayName: "signature-digest-algorithm",
          args: { name: "signature-digest-algorithm", default: "sha256" },
        },
        {
          name: "--sk",
          description: "Whether to use a hardware security key",
          displayName: "sk",
        },
        {
          name: "--slot",
          description:
            "Security key slot to use for generated key (default: signature) (authentication|signature|card-authentication|key-management)",
          displayName: "slot",
          args: { name: "slot" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for verify",
          displayName: "help",
        },
      ],
    },
    {
      name: "verify-attestation",
      description: "Verify an attestation on the supplied container image",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: "--allow-insecure-registry",
          description:
            "Whether to allow insecure connections to registries. Don't use this for anything but testing",
          displayName: "allow-insecure-registry",
        },
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
          displayName: "attachment-tag-prefix",
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: "--cert",
          description: "Path to the public certificate",
          displayName: "cert",
          args: { name: "cert" },
        },
        {
          name: "--cert-email",
          description: "The email expected in a valid Fulcio certificate",
          displayName: "cert-email",
          args: { name: "cert-email" },
        },
        {
          name: "--cert-oidc-issuer",
          description:
            "The OIDC issuer expected in a valid Fulcio certificate, e.g. https://token.actions.githubusercontent.com or https://oauth2.sigstore.dev/auth",
          displayName: "cert-oidc-issuer",
          args: { name: "cert-oidc-issuer" },
        },
        {
          name: "--check-claims",
          description: "Whether to check the claims found",
          displayName: "check-claims",
        },
        {
          name: "--k8s-keychain",
          description:
            "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
          displayName: "k8s-keychain",
        },
        {
          name: "--key",
          description:
            "Path to the public key file, KMS URI or Kubernetes Secret",
          displayName: "key",
          args: { name: "key" },
        },
        {
          name: "--local-image",
          description:
            "Whether the specified image is a path to an image saved locally via 'cosign save'",
          displayName: "local-image",
        },
        {
          name: ["--output", "-o"],
          description:
            "Output format for the signing image information (json|text)",
          displayName: "output",
          args: { name: "output", default: "json" },
        },
        {
          name: "--policy",
          description: "Specify CUE or Rego files will be using for validation",
          displayName: "policy",
          args: { name: "policy" },
        },
        {
          name: "--rekor-url",
          description: "[EXPERIMENTAL] address of rekor STL server",
          displayName: "rekor-url",
          args: { name: "rekor-url", default: "https://rekor.sigstore.dev" },
        },
        {
          name: "--sk",
          description: "Whether to use a hardware security key",
          displayName: "sk",
        },
        {
          name: "--slot",
          description:
            "Security key slot to use for generated key (default: signature) (authentication|signature|card-authentication|key-management)",
          displayName: "slot",
          args: { name: "slot" },
        },
        {
          name: "--type",
          description:
            "Specify a predicate type (slsaprovenance|link|spdx|vuln|custom) or an URI",
          displayName: "type",
          args: { name: "type", default: "custom" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for verify-attestation",
          displayName: "help",
        },
      ],
    },
    {
      name: "verify-blob",
      description: "Verify a signature on the supplied blob",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: "--allow-insecure-registry",
          description:
            "Whether to allow insecure connections to registries. Don't use this for anything but testing",
          displayName: "allow-insecure-registry",
        },
        {
          name: "--attachment-tag-prefix",
          description:
            "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
          displayName: "attachment-tag-prefix",
          args: { name: "attachment-tag-prefix" },
        },
        {
          name: "--bundle",
          description: "Path to bundle FILE",
          displayName: "bundle",
          args: { name: "bundle" },
        },
        {
          name: "--cert",
          description: "Path to the public certificate",
          displayName: "cert",
          args: { name: "cert" },
        },
        {
          name: "--cert-email",
          description: "The email expected in a valid Fulcio certificate",
          displayName: "cert-email",
          args: { name: "cert-email" },
        },
        {
          name: "--cert-oidc-issuer",
          description:
            "The OIDC issuer expected in a valid Fulcio certificate, e.g. https://token.actions.githubusercontent.com or https://oauth2.sigstore.dev/auth",
          displayName: "cert-oidc-issuer",
          args: { name: "cert-oidc-issuer" },
        },
        {
          name: "--k8s-keychain",
          description:
            "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
          displayName: "k8s-keychain",
        },
        {
          name: "--key",
          description:
            "Path to the public key file, KMS URI or Kubernetes Secret",
          displayName: "key",
          args: { name: "key" },
        },
        {
          name: "--rekor-url",
          description: "[EXPERIMENTAL] address of rekor STL server",
          displayName: "rekor-url",
          args: { name: "rekor-url", default: "https://rekor.sigstore.dev" },
        },
        {
          name: "--signature",
          description: "Signature content or path or remote URL",
          displayName: "signature",
          args: { name: "signature" },
        },
        {
          name: "--sk",
          description: "Whether to use a hardware security key",
          displayName: "sk",
        },
        {
          name: "--slot",
          description:
            "Security key slot to use for generated key (default: signature) (authentication|signature|card-authentication|key-management)",
          displayName: "slot",
          args: { name: "slot" },
        },
        {
          name: ["--help", "-h"],
          description: "Help for verify-blob",
          displayName: "help",
        },
      ],
    },
    {
      name: "version",
      description: "Prints the version",
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: "--json",
          description: "Print JSON instead of text",
          displayName: "json",
        },
        {
          name: ["--help", "-h"],
          description: "Help for version",
          displayName: "help",
        },
      ],
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "attach",
          description:
            "Provides utilities for attaching artifacts to other artifacts in a registry",
          subcommands: [
            {
              name: "attestation",
              description: "Attach attestation to the supplied container image",
              options: [
                {
                  name: "--output-file",
                  description: "Log output to a file",
                  displayName: "output-file",
                  args: { name: "output-file" },
                },
                {
                  name: ["--timeout", "-t"],
                  description: "Timeout for commands",
                  displayName: "timeout",
                  args: { name: "timeout", default: "3m0s" },
                },
                {
                  name: ["--verbose", "-d"],
                  description: "Log debug output",
                  displayName: "verbose",
                },
                {
                  name: "--allow-insecure-registry",
                  description:
                    "Whether to allow insecure connections to registries. Don't use this for anything but testing",
                  displayName: "allow-insecure-registry",
                },
                {
                  name: "--attachment-tag-prefix",
                  description:
                    "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
                  displayName: "attachment-tag-prefix",
                  args: { name: "attachment-tag-prefix" },
                },
                {
                  name: "--attestation",
                  description: "Path to the attestation envelope",
                  displayName: "attestation",
                  args: { name: "attestation" },
                },
                {
                  name: "--k8s-keychain",
                  description:
                    "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
                  displayName: "k8s-keychain",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for attestation",
                  displayName: "help",
                },
              ],
            },
            {
              name: "sbom",
              description: "Attach sbom to the supplied container image",
              options: [
                {
                  name: "--output-file",
                  description: "Log output to a file",
                  displayName: "output-file",
                  args: { name: "output-file" },
                },
                {
                  name: ["--timeout", "-t"],
                  description: "Timeout for commands",
                  displayName: "timeout",
                  args: { name: "timeout", default: "3m0s" },
                },
                {
                  name: ["--verbose", "-d"],
                  description: "Log debug output",
                  displayName: "verbose",
                },
                {
                  name: "--allow-insecure-registry",
                  description:
                    "Whether to allow insecure connections to registries. Don't use this for anything but testing",
                  displayName: "allow-insecure-registry",
                },
                {
                  name: "--attachment-tag-prefix",
                  description:
                    "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
                  displayName: "attachment-tag-prefix",
                  args: { name: "attachment-tag-prefix" },
                },
                {
                  name: "--k8s-keychain",
                  description:
                    "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
                  displayName: "k8s-keychain",
                },
                {
                  name: "--sbom",
                  description: "Path to the sbom, or {-} for stdin",
                  displayName: "sbom",
                  args: { name: "sbom" },
                },
                {
                  name: "--type",
                  description: "Type of sbom (spdx|cyclonedx|syft)",
                  displayName: "type",
                  args: { name: "type", default: "spdx" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for sbom",
                  displayName: "help",
                },
              ],
            },
            {
              name: "signature",
              description: "Attach signatures to the supplied container image",
              options: [
                {
                  name: "--output-file",
                  description: "Log output to a file",
                  displayName: "output-file",
                  args: { name: "output-file" },
                },
                {
                  name: ["--timeout", "-t"],
                  description: "Timeout for commands",
                  displayName: "timeout",
                  args: { name: "timeout", default: "3m0s" },
                },
                {
                  name: ["--verbose", "-d"],
                  description: "Log debug output",
                  displayName: "verbose",
                },
                {
                  name: "--allow-insecure-registry",
                  description:
                    "Whether to allow insecure connections to registries. Don't use this for anything but testing",
                  displayName: "allow-insecure-registry",
                },
                {
                  name: "--attachment-tag-prefix",
                  description:
                    "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
                  displayName: "attachment-tag-prefix",
                  args: { name: "attachment-tag-prefix" },
                },
                {
                  name: "--k8s-keychain",
                  description:
                    "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
                  displayName: "k8s-keychain",
                },
                {
                  name: "--payload",
                  description:
                    "Path to the payload covered by the signature (if using another format)",
                  displayName: "payload",
                  args: { name: "payload" },
                },
                {
                  name: "--signature",
                  description:
                    "The signature, path to the signature, or {-} for stdin",
                  displayName: "signature",
                  args: { name: "signature" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for signature",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "attest",
          description: "Attest the supplied container image",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "clean",
          description: "Remove all signatures from an image",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "completion",
          description: "Generate completion script",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "copy",
          description: "Copy the supplied container image and signatures",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "dockerfile",
          description:
            "Provides utilities for discovering images in and performing operations on Dockerfiles",
          subcommands: [
            {
              name: "verify",
              description:
                "Verify a signature on the base image specified in the Dockerfile",
              options: [
                {
                  name: "--output-file",
                  description: "Log output to a file",
                  displayName: "output-file",
                  args: { name: "output-file" },
                },
                {
                  name: ["--timeout", "-t"],
                  description: "Timeout for commands",
                  displayName: "timeout",
                  args: { name: "timeout", default: "3m0s" },
                },
                {
                  name: ["--verbose", "-d"],
                  description: "Log debug output",
                  displayName: "verbose",
                },
                {
                  name: "--allow-insecure-registry",
                  description:
                    "Whether to allow insecure connections to registries. Don't use this for anything but testing",
                  displayName: "allow-insecure-registry",
                },
                {
                  name: ["--annotations", "-a"],
                  description: "Extra key=value pairs to sign",
                  displayName: "annotations",
                  args: { name: "annotations" },
                },
                {
                  name: "--attachment",
                  description:
                    "Related image attachment to sign (sbom), default none",
                  displayName: "attachment",
                  args: { name: "attachment" },
                },
                {
                  name: "--attachment-tag-prefix",
                  description:
                    "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
                  displayName: "attachment-tag-prefix",
                  args: { name: "attachment-tag-prefix" },
                },
                {
                  name: "--base-image-only",
                  description:
                    "Only verify the base image (the last FROM image in the Dockerfile)",
                  displayName: "base-image-only",
                },
                {
                  name: "--cert",
                  description: "Path to the public certificate",
                  displayName: "cert",
                  args: { name: "cert" },
                },
                {
                  name: "--cert-email",
                  description:
                    "The email expected in a valid Fulcio certificate",
                  displayName: "cert-email",
                  args: { name: "cert-email" },
                },
                {
                  name: "--cert-oidc-issuer",
                  description:
                    "The OIDC issuer expected in a valid Fulcio certificate, e.g. https://token.actions.githubusercontent.com or https://oauth2.sigstore.dev/auth",
                  displayName: "cert-oidc-issuer",
                  args: { name: "cert-oidc-issuer" },
                },
                {
                  name: "--check-claims",
                  description: "Whether to check the claims found",
                  displayName: "check-claims",
                },
                {
                  name: "--k8s-keychain",
                  description:
                    "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
                  displayName: "k8s-keychain",
                },
                {
                  name: "--key",
                  description:
                    "Path to the public key file, KMS URI or Kubernetes Secret",
                  displayName: "key",
                  args: { name: "key" },
                },
                {
                  name: "--local-image",
                  description:
                    "Whether the specified image is a path to an image saved locally via 'cosign save'",
                  displayName: "local-image",
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format for the signing image information (json|text)",
                  displayName: "output",
                  args: { name: "output", default: "json" },
                },
                {
                  name: "--rekor-url",
                  description: "[EXPERIMENTAL] address of rekor STL server",
                  displayName: "rekor-url",
                  args: {
                    name: "rekor-url",
                    default: "https://rekor.sigstore.dev",
                  },
                },
                {
                  name: "--signature",
                  description: "Signature content or path or remote URL",
                  displayName: "signature",
                  args: { name: "signature" },
                },
                {
                  name: "--signature-digest-algorithm",
                  description:
                    "Digest algorithm to use when processing a signature (sha224|sha256|sha384|sha512)",
                  displayName: "signature-digest-algorithm",
                  args: {
                    name: "signature-digest-algorithm",
                    default: "sha256",
                  },
                },
                {
                  name: "--sk",
                  description: "Whether to use a hardware security key",
                  displayName: "sk",
                },
                {
                  name: "--slot",
                  description:
                    "Security key slot to use for generated key (default: signature) (authentication|signature|card-authentication|key-management)",
                  displayName: "slot",
                  args: { name: "slot" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for verify",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "download",
          description:
            "Provides utilities for downloading artifacts and attached artifacts in a registry",
          subcommands: [
            {
              name: "attestation",
              description:
                "Download in-toto attestations from the supplied container image",
              options: [
                {
                  name: "--output-file",
                  description: "Log output to a file",
                  displayName: "output-file",
                  args: { name: "output-file" },
                },
                {
                  name: ["--timeout", "-t"],
                  description: "Timeout for commands",
                  displayName: "timeout",
                  args: { name: "timeout", default: "3m0s" },
                },
                {
                  name: ["--verbose", "-d"],
                  description: "Log debug output",
                  displayName: "verbose",
                },
                {
                  name: "--allow-insecure-registry",
                  description:
                    "Whether to allow insecure connections to registries. Don't use this for anything but testing",
                  displayName: "allow-insecure-registry",
                },
                {
                  name: "--attachment-tag-prefix",
                  description:
                    "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
                  displayName: "attachment-tag-prefix",
                  args: { name: "attachment-tag-prefix" },
                },
                {
                  name: "--k8s-keychain",
                  description:
                    "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
                  displayName: "k8s-keychain",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for attestation",
                  displayName: "help",
                },
              ],
            },
            {
              name: "sbom",
              description: "Download SBOMs from the supplied container image",
              options: [
                {
                  name: "--output-file",
                  description: "Log output to a file",
                  displayName: "output-file",
                  args: { name: "output-file" },
                },
                {
                  name: ["--timeout", "-t"],
                  description: "Timeout for commands",
                  displayName: "timeout",
                  args: { name: "timeout", default: "3m0s" },
                },
                {
                  name: ["--verbose", "-d"],
                  description: "Log debug output",
                  displayName: "verbose",
                },
                {
                  name: "--allow-insecure-registry",
                  description:
                    "Whether to allow insecure connections to registries. Don't use this for anything but testing",
                  displayName: "allow-insecure-registry",
                },
                {
                  name: "--attachment-tag-prefix",
                  description:
                    "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
                  displayName: "attachment-tag-prefix",
                  args: { name: "attachment-tag-prefix" },
                },
                {
                  name: "--k8s-keychain",
                  description:
                    "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
                  displayName: "k8s-keychain",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for sbom",
                  displayName: "help",
                },
              ],
            },
            {
              name: "signature",
              description:
                "Download signatures from the supplied container image",
              options: [
                {
                  name: "--output-file",
                  description: "Log output to a file",
                  displayName: "output-file",
                  args: { name: "output-file" },
                },
                {
                  name: ["--timeout", "-t"],
                  description: "Timeout for commands",
                  displayName: "timeout",
                  args: { name: "timeout", default: "3m0s" },
                },
                {
                  name: ["--verbose", "-d"],
                  description: "Log debug output",
                  displayName: "verbose",
                },
                {
                  name: "--allow-insecure-registry",
                  description:
                    "Whether to allow insecure connections to registries. Don't use this for anything but testing",
                  displayName: "allow-insecure-registry",
                },
                {
                  name: "--attachment-tag-prefix",
                  description:
                    "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
                  displayName: "attachment-tag-prefix",
                  args: { name: "attachment-tag-prefix" },
                },
                {
                  name: "--k8s-keychain",
                  description:
                    "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
                  displayName: "k8s-keychain",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for signature",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "generate",
          description:
            "Generates (unsigned) signature payloads from the supplied container image",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "generate-key-pair",
          description: "Generates a key-pair",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "import-key-pair",
          description: "Imports a PEM-encoded RSA or EC private key",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "initialize",
          description:
            "Initializes SigStore root to retrieve trusted certificate and key targets for verification",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "load",
          description: "Load a signed image on disk to a remote registry",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "login",
          description: "Log in to a registry",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "manifest",
          description:
            "Provides utilities for discovering images in and performing operations on Kubernetes manifests",
          subcommands: [
            {
              name: "verify",
              description:
                "Verify all signatures of images specified in the manifest",
              options: [
                {
                  name: "--output-file",
                  description: "Log output to a file",
                  displayName: "output-file",
                  args: { name: "output-file" },
                },
                {
                  name: ["--timeout", "-t"],
                  description: "Timeout for commands",
                  displayName: "timeout",
                  args: { name: "timeout", default: "3m0s" },
                },
                {
                  name: ["--verbose", "-d"],
                  description: "Log debug output",
                  displayName: "verbose",
                },
                {
                  name: "--allow-insecure-registry",
                  description:
                    "Whether to allow insecure connections to registries. Don't use this for anything but testing",
                  displayName: "allow-insecure-registry",
                },
                {
                  name: ["--annotations", "-a"],
                  description: "Extra key=value pairs to sign",
                  displayName: "annotations",
                  args: { name: "annotations" },
                },
                {
                  name: "--attachment",
                  description:
                    "Related image attachment to sign (sbom), default none",
                  displayName: "attachment",
                  args: { name: "attachment" },
                },
                {
                  name: "--attachment-tag-prefix",
                  description:
                    "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
                  displayName: "attachment-tag-prefix",
                  args: { name: "attachment-tag-prefix" },
                },
                {
                  name: "--cert",
                  description: "Path to the public certificate",
                  displayName: "cert",
                  args: { name: "cert" },
                },
                {
                  name: "--cert-email",
                  description:
                    "The email expected in a valid Fulcio certificate",
                  displayName: "cert-email",
                  args: { name: "cert-email" },
                },
                {
                  name: "--cert-oidc-issuer",
                  description:
                    "The OIDC issuer expected in a valid Fulcio certificate, e.g. https://token.actions.githubusercontent.com or https://oauth2.sigstore.dev/auth",
                  displayName: "cert-oidc-issuer",
                  args: { name: "cert-oidc-issuer" },
                },
                {
                  name: "--check-claims",
                  description: "Whether to check the claims found",
                  displayName: "check-claims",
                },
                {
                  name: "--k8s-keychain",
                  description:
                    "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
                  displayName: "k8s-keychain",
                },
                {
                  name: "--key",
                  description:
                    "Path to the public key file, KMS URI or Kubernetes Secret",
                  displayName: "key",
                  args: { name: "key" },
                },
                {
                  name: "--local-image",
                  description:
                    "Whether the specified image is a path to an image saved locally via 'cosign save'",
                  displayName: "local-image",
                },
                {
                  name: ["--output", "-o"],
                  description:
                    "Output format for the signing image information (json|text)",
                  displayName: "output",
                  args: { name: "output", default: "json" },
                },
                {
                  name: "--rekor-url",
                  description: "[EXPERIMENTAL] address of rekor STL server",
                  displayName: "rekor-url",
                  args: {
                    name: "rekor-url",
                    default: "https://rekor.sigstore.dev",
                  },
                },
                {
                  name: "--signature",
                  description: "Signature content or path or remote URL",
                  displayName: "signature",
                  args: { name: "signature" },
                },
                {
                  name: "--signature-digest-algorithm",
                  description:
                    "Digest algorithm to use when processing a signature (sha224|sha256|sha384|sha512)",
                  displayName: "signature-digest-algorithm",
                  args: {
                    name: "signature-digest-algorithm",
                    default: "sha256",
                  },
                },
                {
                  name: "--sk",
                  description: "Whether to use a hardware security key",
                  displayName: "sk",
                },
                {
                  name: "--slot",
                  description:
                    "Security key slot to use for generated key (default: signature) (authentication|signature|card-authentication|key-management)",
                  displayName: "slot",
                  args: { name: "slot" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for verify",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "piv-tool",
          description: "This cosign was not built with piv-tool support!",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "pkcs11-tool",
          description: "This cosign was not built with pkcs11-tool support!",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "policy",
          description: "Subcommand to manage a keyless policy",
          subcommands: [
            {
              name: "init",
              description: "Generate a new keyless policy",
              options: [
                {
                  name: "--output-file",
                  description: "Log output to a file",
                  displayName: "output-file",
                  args: { name: "output-file" },
                },
                {
                  name: ["--timeout", "-t"],
                  description: "Timeout for commands",
                  displayName: "timeout",
                  args: { name: "timeout", default: "3m0s" },
                },
                {
                  name: ["--verbose", "-d"],
                  description: "Log debug output",
                  displayName: "verbose",
                },
                {
                  name: "--allow-insecure-registry",
                  description:
                    "Whether to allow insecure connections to registries. Don't use this for anything but testing",
                  displayName: "allow-insecure-registry",
                },
                {
                  name: "--attachment-tag-prefix",
                  description:
                    "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
                  displayName: "attachment-tag-prefix",
                  args: { name: "attachment-tag-prefix" },
                },
                {
                  name: "--expires",
                  description: "Total expire duration in days",
                  displayName: "expires",
                  args: { name: "expires", default: "0" },
                },
                {
                  name: "--issuer",
                  description:
                    "Trusted issuer to use for identity tokens, e.g. https://accounts.google.com",
                  displayName: "issuer",
                  args: { name: "issuer" },
                },
                {
                  name: "--k8s-keychain",
                  description:
                    "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
                  displayName: "k8s-keychain",
                },
                {
                  name: ["--maintainers", "-m"],
                  description: "List of maintainers to add to the root policy",
                  displayName: "maintainers",
                  args: { name: "maintainers" },
                },
                {
                  name: "--namespace",
                  description:
                    "Registry namespace that the root policy belongs to",
                  displayName: "namespace",
                  args: { name: "namespace", default: "ns" },
                },
                {
                  name: "--out",
                  description: "Output policy locally",
                  displayName: "out",
                  args: { name: "out", default: "o" },
                },
                {
                  name: "--threshold",
                  description: "Threshold for root policy signers",
                  displayName: "threshold",
                  args: { name: "threshold", default: "1" },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for init",
                  displayName: "help",
                },
              ],
            },
            {
              name: "sign",
              description: "Sign a keyless policy",
              options: [
                {
                  name: "--output-file",
                  description: "Log output to a file",
                  displayName: "output-file",
                  args: { name: "output-file" },
                },
                {
                  name: ["--timeout", "-t"],
                  description: "Timeout for commands",
                  displayName: "timeout",
                  args: { name: "timeout", default: "3m0s" },
                },
                {
                  name: ["--verbose", "-d"],
                  description: "Log debug output",
                  displayName: "verbose",
                },
                {
                  name: "--allow-insecure-registry",
                  description:
                    "Whether to allow insecure connections to registries. Don't use this for anything but testing",
                  displayName: "allow-insecure-registry",
                },
                {
                  name: "--attachment-tag-prefix",
                  description:
                    "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
                  displayName: "attachment-tag-prefix",
                  args: { name: "attachment-tag-prefix" },
                },
                {
                  name: "--fulcio-url",
                  description: "[EXPERIMENTAL] address of sigstore PKI server",
                  displayName: "fulcio-url",
                  args: {
                    name: "fulcio-url",
                    default: "https://fulcio.sigstore.dev",
                  },
                },
                {
                  name: "--identity-token",
                  description:
                    "[EXPERIMENTAL] identity token to use for certificate from fulcio",
                  displayName: "identity-token",
                  args: { name: "identity-token" },
                },
                {
                  name: "--insecure-skip-verify",
                  description:
                    "[EXPERIMENTAL] skip verifying fulcio published to the SCT (this should only be used for testing)",
                  displayName: "insecure-skip-verify",
                },
                {
                  name: "--k8s-keychain",
                  description:
                    "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
                  displayName: "k8s-keychain",
                },
                {
                  name: "--namespace",
                  description:
                    "Registry namespace that the root policy belongs to",
                  displayName: "namespace",
                  args: { name: "namespace", default: "ns" },
                },
                {
                  name: "--oidc-client-id",
                  description: "[EXPERIMENTAL] OIDC client ID for application",
                  displayName: "oidc-client-id",
                  args: { name: "oidc-client-id", default: "sigstore" },
                },
                {
                  name: "--oidc-client-secret",
                  description:
                    "[EXPERIMENTAL] OIDC client secret for application",
                  displayName: "oidc-client-secret",
                  args: { name: "oidc-client-secret" },
                },
                {
                  name: "--oidc-issuer",
                  description:
                    "[EXPERIMENTAL] OIDC provider to be used to issue ID token",
                  displayName: "oidc-issuer",
                  args: {
                    name: "oidc-issuer",
                    default: "https://oauth2.sigstore.dev/auth",
                  },
                },
                {
                  name: "--out",
                  description: "Output policy locally",
                  displayName: "out",
                  args: { name: "out", default: "o" },
                },
                {
                  name: "--rekor-url",
                  description: "[EXPERIMENTAL] address of rekor STL server",
                  displayName: "rekor-url",
                  args: {
                    name: "rekor-url",
                    default: "https://rekor.sigstore.dev",
                  },
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for sign",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "public-key",
          description: "Gets a public key from the key-pair",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "save",
          description:
            "Save the container image and associated signatures to disk at the specified directory",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "sign",
          description: "Sign the supplied container image",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "sign-blob",
          description:
            "Sign the supplied blob, outputting the base64-encoded signature to stdout",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "tree",
          description:
            "Display supply chain security related artifacts for an image such as signatures, SBOMs and attestations",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "triangulate",
          description:
            "Outputs the located cosign image reference. This is the location cosign stores the specified artifact type",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "upload",
          description:
            "Provides utilities for uploading artifacts to a registry",
          subcommands: [
            {
              name: "blob",
              description:
                "Upload one or more blobs to the supplied container image address",
              options: [
                {
                  name: "--output-file",
                  description: "Log output to a file",
                  displayName: "output-file",
                  args: { name: "output-file" },
                },
                {
                  name: ["--timeout", "-t"],
                  description: "Timeout for commands",
                  displayName: "timeout",
                  args: { name: "timeout", default: "3m0s" },
                },
                {
                  name: ["--verbose", "-d"],
                  description: "Log debug output",
                  displayName: "verbose",
                },
                {
                  name: "--allow-insecure-registry",
                  description:
                    "Whether to allow insecure connections to registries. Don't use this for anything but testing",
                  displayName: "allow-insecure-registry",
                },
                {
                  name: "--attachment-tag-prefix",
                  description:
                    "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
                  displayName: "attachment-tag-prefix",
                  args: { name: "attachment-tag-prefix" },
                },
                {
                  name: "--ct",
                  description: "Content type to set",
                  displayName: "ct",
                  args: { name: "ct" },
                },
                {
                  name: ["--files", "-f"],
                  description: "<filepath>:[platform/arch]",
                  displayName: "files",
                  args: { name: "files" },
                },
                {
                  name: "--k8s-keychain",
                  description:
                    "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
                  displayName: "k8s-keychain",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for blob",
                  displayName: "help",
                },
              ],
            },
            {
              name: "wasm",
              description:
                "Upload a wasm module to the supplied container image reference",
              options: [
                {
                  name: "--output-file",
                  description: "Log output to a file",
                  displayName: "output-file",
                  args: { name: "output-file" },
                },
                {
                  name: ["--timeout", "-t"],
                  description: "Timeout for commands",
                  displayName: "timeout",
                  args: { name: "timeout", default: "3m0s" },
                },
                {
                  name: ["--verbose", "-d"],
                  description: "Log debug output",
                  displayName: "verbose",
                },
                {
                  name: "--allow-insecure-registry",
                  description:
                    "Whether to allow insecure connections to registries. Don't use this for anything but testing",
                  displayName: "allow-insecure-registry",
                },
                {
                  name: "--attachment-tag-prefix",
                  description:
                    "Optional custom prefix to use for attached image tags. Attachment images are tagged as: `[AttachmentTagPrefix]sha256-[TargetImageDigest].[AttachmentName]`",
                  displayName: "attachment-tag-prefix",
                  args: { name: "attachment-tag-prefix" },
                },
                {
                  name: ["--file", "-f"],
                  description: "Path to the wasm file to upload",
                  displayName: "file",
                  args: { name: "file" },
                  isRequired: true,
                },
                {
                  name: "--k8s-keychain",
                  description:
                    "Whether to use the kubernetes keychain instead of the default keychain (supports workload identity)",
                  displayName: "k8s-keychain",
                },
                {
                  name: ["--help", "-h"],
                  description: "Help for wasm",
                  displayName: "help",
                },
              ],
            },
          ],
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "verify",
          description: "Verify a signature on the supplied container image",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "verify-attestation",
          description: "Verify an attestation on the supplied container image",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "verify-blob",
          description: "Verify a signature on the supplied blob",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
        {
          name: "version",
          description: "Prints the version",
          options: [
            {
              name: "--output-file",
              description: "Log output to a file",
              displayName: "output-file",
              args: { name: "output-file" },
            },
            {
              name: ["--timeout", "-t"],
              description: "Timeout for commands",
              displayName: "timeout",
              args: { name: "timeout", default: "3m0s" },
            },
            {
              name: ["--verbose", "-d"],
              description: "Log debug output",
              displayName: "verbose",
            },
            {
              name: ["--help", "-h"],
              description: "Help for version",
              displayName: "help",
            },
          ],
        },
      ],
      options: [
        {
          name: "--output-file",
          description: "Log output to a file",
          displayName: "output-file",
          args: { name: "output-file" },
        },
        {
          name: ["--timeout", "-t"],
          description: "Timeout for commands",
          displayName: "timeout",
          args: { name: "timeout", default: "3m0s" },
        },
        {
          name: ["--verbose", "-d"],
          description: "Log debug output",
          displayName: "verbose",
        },
        {
          name: ["--help", "-h"],
          description: "Help for help",
          displayName: "help",
        },
      ],
    },
  ],
  options: [
    {
      name: "--output-file",
      description: "Log output to a file",
      displayName: "output-file",
      args: { name: "output-file" },
    },
    {
      name: ["--timeout", "-t"],
      description: "Timeout for commands",
      displayName: "timeout",
      args: { name: "timeout", default: "3m0s" },
    },
    {
      name: ["--verbose", "-d"],
      description: "Log debug output",
      displayName: "verbose",
    },
    {
      name: ["--help", "-h"],
      description: "Help for cosign",
      displayName: "help",
    },
  ],
};
export default completionSpec;
