const configModeGenerator = {
  trigger: "+",
  custom: async (tokens, _) => {
    const previouslyAdded = tokens[tokens.length - 1].split("+");
    // this has to be an alias map of the possible suggestions
    const possibleSuggestionsMap = new Map([
      ["OTP", ["o"]],
      ["o", ["OTP"]],
      ["FIDO", ["f"]],
      ["f", ["FIDO"]],
      ["CCID", ["c"]],
      ["c", ["CCID"]],
    ]);
    const suggestions = new Set([...possibleSuggestionsMap.values()].flat());

    for (const token of previouslyAdded) {
      suggestions.delete(token);
      const aliases = possibleSuggestionsMap.get(token);
      if (aliases) {
        aliases.forEach((v) => {
          suggestions.delete(v);
        });
      }
    }
    return [...suggestions].map((v) => ({ name: v }));
  },
};

const completionSpec: Fig.Spec = {
  name: "ykman",
  description: "Configure your YubiKey via the command line",

  subcommands: [
    {
      name: "info",
      description:
        "Displays information about the attached YubiKey such as serial number, firmware version, capabilities, etc",
      options: [
        {
          name: ["-c", "--check-fips"],
          description:
            "Check if YubiKey is in FIPS Approved mode (available on YubiKey 4 FIPS only)",
        },
        {
          name: ["-h", "--help"],
          description: "Show info usage information",
        },
      ],
    },
    {
      name: "list",
      description: "List connected YubiKeys",
      options: [
        {
          name: ["-s", "--serials"],
          description:
            "Output only serial numbers, one per line (devices without serial will be omitted)",
        },
        {
          name: ["-r", "--readers"],
          description: "List available smart card readers",
        },
        {
          name: ["-h", "--help"],
          description: "Show list usage information",
        },
      ],
    },
    {
      name: "config",
      description: "Enable or disable applications",
      subcommands: [
        {
          name: "mode",
          description: "Manage connection modes (USB Interfaces)",
          args: {
            name: "MODE",
            description:
              "MODE can be a string, such as 'OTP+FIDO+CCID', or a shortened form: 'o+f+c'. It can also be a mode number",
            generators: configModeGenerator,
          },
          options: [
            {
              name: "--touch-eject",
              description:
                "When set, the button toggles the state of the smartcard between ejected and inserted (CCID mode only)",
            },
            {
              name: "--autoeject-timeout",
              description:
                "When set, the button toggles the state of the smartcard between ejected and inserted (CCID mode only)",
              args: {
                name: "SECONDS",
              },
            },
            {
              name: "--chalresp-timeout",
              description:
                "When set, the smartcard will automatically eject after the given time. Implies --touch-eject (CCID mode only)",
              args: {
                name: "SECONDS",
              },
            },
            {
              name: ["-f", "--force"],
              description: "Confirm the action without prompting",
              isDangerous: true,
            },
            {
              name: ["-h", "--help"],
              description: "Show config mode usage information",
            },
          ],
        },
        {
          name: "nfc",
          description: "Enable or disable applications over NFC",
          options: [
            {
              name: ["-f", "--force"],
              description: "Confirm the action without prompting",
              isDangerous: true,
            },
            {
              name: ["-e", "--enable"],
              description: "Enable applications",
              args: {
                name: "application",
                suggestions: [
                  "OTP",
                  "U2F",
                  "FIDO2",
                  "OATH",
                  "PIV",
                  "OPENPGP",
                  "HSMAUTH",
                ],
              },
            },
            {
              name: ["-d", "--disable"],
              description: "Disable applications",
              args: {
                name: "application",
                suggestions: [
                  "OTP",
                  "U2F",
                  "FIDO2",
                  "OATH",
                  "PIV",
                  "OPENPGP",
                  "HSMAUTH",
                ],
              },
            },
            {
              name: ["-a", "--enable-all"],
              description: "Enable all applications",
            },
            {
              name: ["-D", "--disable-all"],
              description: "Disable all applications",
            },
            {
              name: ["-l", "--list"],
              description: "List enabled applications",
            },
            {
              name: ["-L", "--lock-code"],
              description: "Current application configuration lock code",
              args: {
                name: "HEX",
              },
            },
            {
              name: ["-h", "--help"],
              description: "Show config nfc usage information",
            },
          ],
        },
        {
          name: "set-lock-code",
          description: "Set or change the configuration lock code",
          options: [
            {
              name: ["-f", "--force"],
              description: "Confirm the action without prompting",
              isDangerous: true,
            },
            {
              name: ["-L", "--lock-code"],
              description: "Current lock code",
              args: {
                name: "HEX",
              },
            },
            {
              name: ["-n", "--new-lock-code"],
              description: "New lock code. Conflicts with --generate",
              exclusiveOn: ["--generate"],
              args: {
                name: "HEX",
              },
            },
            {
              name: ["-c", "--clear"],
              description: "Clear the lock code",
            },
            {
              name: ["-g", "--generate"],
              description:
                "Generate a random lock code. Conflicts with --new-lock-code",
              exclusiveOn: ["--new-lock-code"],
            },
            {
              name: ["-h", "--help"],
              description: "Show config set-lock-code usage information",
            },
          ],
        },
        {
          name: "usb",
          description: "Enable or disable applications over USB",
          options: [
            {
              name: ["-f", "--force"],
              description: "Confirm the action without prompting",
              isDangerous: true,
            },
            {
              name: ["-e", "--enable"],
              description: "Enable applications",
              args: {
                name: "applications",
                suggestions: [
                  "OTP",
                  "U2F",
                  "FIDO2",
                  "OATH",
                  "PIV",
                  "OPENPGP",
                  "HSMAUTH",
                ],
              },
            },
            {
              name: ["-d", "--disable"],
              description: "Disable applications",
              args: {
                name: "application",
                suggestions: [
                  "OTP",
                  "U2F",
                  "FIDO2",
                  "OATH",
                  "PIV",
                  "OPENPGP",
                  "HSMAUTH",
                ],
              },
            },
            {
              name: ["-l", "--list"],
              description: "List enabled applications",
            },
            {
              name: ["-a", "--enable-all"],
              description: "Enable all applications",
            },
            {
              name: ["-D", "--disable-all"],
              description: "Disable all applications",
            },
            {
              name: ["-L", "--lock-code"],
              description: "Current application configuration lock code",
              args: {
                name: "HEX",
              },
            },
            {
              name: "--touch-eject",
              description:
                "When set, the button toggles the state of the smartcard between ejected and inserted (CCID mode only)",
            },
            {
              name: "--no-touch-eject",
              description: "Disable touch eject (CCID only)",
            },
            {
              name: "--autoeject-timeout",
              description:
                "When set, the smartcard will automatically eject after the given time. Implies --touch-eject",
              args: {
                name: "SECONDS",
              },
            },
            {
              name: "--chalresp-timeout",
              description:
                "Sets the timeout when waiting for touch for challenge-response in the OTP application",
              args: {
                name: "SECONDS",
              },
            },
            {
              name: ["-h", "--help"],
              description: "Show config usb usage information",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show config usage information",
        },
      ],
    },
    {
      name: "fido",
      description: "Manage the FIDO applications",
      subcommands: [
        {
          name: "info",
          description: "Display general status of the FIDO2 application",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show fido info usage information",
            },
          ],
        },
        {
          name: "reset",
          description:
            "Reset all FIDO applications. This action will wipe all FIDO credentials, including FIDO U2F credentials, on the YubiKey and remove the PIN code",
          options: [
            {
              name: ["-f", "--force"],
              description: "Confirm the action without prompting",
              isDangerous: true,
            },
            {
              name: ["-h", "--help"],
              description: "Show fido reset usage information",
            },
          ],
        },
        {
          name: "access",
          description: "Manage the PIN for FIDO",
          subcommands: [
            {
              name: "change-pin",
              description: "Set or change PIN code",
              options: [
                {
                  name: ["-P", "--pin"],
                  description: "Current PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-n", "--new-pin"],
                  description: "Current PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-u", "--u2f"],
                  description: "Set FIDO U2F pin instead of FIDO2 PIN",
                },
                {
                  name: ["-h", "--help"],
                  description: "Show fido access change-pin usage information",
                },
              ],
            },
            {
              name: "verify-pin",
              description: "Verify the PIN against a YubiKey",
              options: [
                {
                  name: ["-P", "--pin"],
                  description: "Current PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show fido access verify-pin usage information",
                },
              ],
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Show fido access usage information",
            },
          ],
        },
        {
          name: "credentials",
          description:
            "Manage discoverable (resident) credentials. This command lets you manage credentials stored on your YubiKey. Credential management is only available when a FIDO PIN is set on the YubiKey",
          subcommands: [
            {
              name: "delete",
              description: "Delete a credential",
              args: {
                name: "QUERY",
                description:
                  "A unique substring match of a credentials RP ID, user ID (hex) or name, or credential ID",
              },
              options: [
                {
                  name: ["-P", "--pin"],
                  description: "PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-f", "--force"],
                  description: "Confirm deletion without prompting",
                  isDangerous: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Show fido credentials delete usage information",
                },
              ],
            },
            {
              name: "list",
              description: "List credentials",
              options: [
                {
                  name: ["-P", "--pin"],
                  description: "PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show fido credentials list usage information",
                },
              ],
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Show fido credentials usage information",
            },
          ],
        },
        {
          name: "fingerprints",
          description: "Manage fingerprints",
          subcommands: [
            {
              name: "add",
              description: "Add a new fingerprint",
              args: {
                name: "NAME",
                description:
                  'A short readable name for the fingerprint (eg. "Left thumb")',
              },
              options: [
                {
                  name: ["-P", "--pin"],
                  description: "PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show fido fingerprints add usage information",
                },
              ],
            },
            {
              name: "delete",
              description:
                'Delete a fingerprint. Delete a fingerprint from the YubiKey by its ID, which can be seen by running the "list" subcommand',
              args: {
                name: "ID",
              },
              options: [
                {
                  name: ["-P", "--pin"],
                  description: "PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-f", "--force"],
                  description: "Confirm deletion without prompting",
                  isDangerous: true,
                },
                {
                  name: ["-h", "--help"],
                  description:
                    "Show fido fingerprints delete usage information",
                },
              ],
            },
            {
              name: "list",
              description:
                "List registered fingerprint. Lists fingerprints by ID and (if available) label",
              options: [
                {
                  name: ["-P", "--pin"],
                  description: "PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show fido fingerprints list usage information",
                },
              ],
            },
            {
              name: "rename",
              description: "Set the label for a fingerprint",
              args: [
                {
                  name: "ID",
                  description:
                    'The ID of the fingerprint to rename (as shown in "list")',
                },
                {
                  name: "NAME",
                  description:
                    'A short readable name for the fingerprint (eg. "Left thumb")',
                },
              ],
              options: [
                {
                  name: ["-P", "--pin"],
                  description: "PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show fido rename usage information",
                },
              ],
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Show fido fingerprints usage information",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show fido usage information",
        },
      ],
    },
    {
      name: "oath",
      description: "Manage the OATH applications",
      subcommands: [
        {
          name: "info",
          description: "Display general status of OATH application",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show oath info usage information",
            },
          ],
        },
        {
          name: "reset",
          description:
            "Reset all OATH data. This action will delete all accounts and restore factory settings for the OATH application on the YubiKey",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show oath reset usage information",
            },
            {
              name: ["-f", "--force"],
              description: "Confirm the action without prompting",
              isDangerous: true,
            },
          ],
        },
        {
          name: "access",
          description: "Manage password protection for OATH",
          subcommands: [
            {
              name: "change",
              description:
                "Change the password used to protect OATH accounts. Alows you to set or change a password that will be required to access the OATH accounts stored on the YubiKey",
              options: [
                {
                  name: ["-p", "--password"],
                  description: "Provide a password to unlock the YubiKey",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-c", "--clear"],
                  description: "Clear the current password",
                },
                {
                  name: ["-n", "--new-password"],
                  description: "Provide a new password as an argument",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show oath access change usage information",
                },
              ],
            },
            {
              name: "forget",
              description: "Remove a stored password from this computer",
              options: [
                {
                  name: ["-a", "--all"],
                  description: "Remove all stored passwords",
                },
                {
                  name: ["-h", "--help"],
                  description: "Show oath forget usage information",
                },
              ],
            },
            {
              name: "remember",
              description:
                "Store the YubiKeys password on this computer to avoid having to enter it on each use",
              options: [
                {
                  name: ["-P", "--password"],
                  description: "Provide a password to unlock the YubiKey",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show oath remember usage information",
                },
              ],
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Show oath access usage information",
            },
          ],
        },
        {
          name: "accounts",
          description: "Manage and use OATH accounts",
          subcommands: [
            {
              name: "add",
              description: "Add a new account",
              args: [
                {
                  name: "NAME",
                  description:
                    "Human readable name of the account, such as a username or e-mail address",
                },
                {
                  name: "SECRET",
                  description:
                    "Base32-encoded secret/key value provided by the server",
                  isOptional: true,
                },
              ],
              options: [
                {
                  name: ["-o", "--oath-type"],
                  description:
                    "Time-based (TOTP) or counter-based (HOTP) account",
                  args: {
                    name: "oath type",
                    default: "TOTP",
                    suggestions: ["HOTP", "TOTP"],
                  },
                },
                {
                  name: ["-d", "--digits"],
                  description: "Number of digits in generated code",
                  args: {
                    name: "number of digits",
                    default: "6",
                    suggestions: ["6", "7", "8"],
                  },
                },
                {
                  name: ["-a", "--algorithm"],
                  description: "Algorithm to use for code generation",
                  args: {
                    name: "algorithm",
                    default: "SHA1",
                    suggestions: ["SHA1", "SHA256", "SHA512"],
                  },
                },
                {
                  name: ["-c", "--counter"],
                  description: "Initial counter value for HOTP accounts",
                  args: {
                    name: "INTEGER",
                  },
                },
                {
                  name: ["-i", "--issuer"],
                  description: "Issuer of the account",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-P", "--period"],
                  description: "Number of seconds a TOTP code is valid",
                  args: {
                    name: "INTEGER",
                    default: "30",
                  },
                },
                {
                  name: ["-t", "--touch"],
                  description: "Require touch on YubiKey to generate code",
                },
                {
                  name: ["-f", "--force"],
                  isDangerous: true,
                  description: "Confirm the action without prompting",
                },
                {
                  name: ["-p", "--password"],
                  description: "Provide a password to unlock the YubiKey",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-r", "--remember"],
                  description: "Remember the password on this machine",
                },
                {
                  name: ["-h", "--help"],
                  description: "Show oath accounts add usage information",
                },
              ],
            },
            {
              name: "code",
              description: "Generate codes",
              args: {
                name: "QUERY",
                description:
                  "Provide a query string to match one or more specific accounts",
                isOptional: true,
              },
              options: [
                {
                  name: ["-H", "--show-hidden"],
                  description: "Include hidden accounts",
                },
                {
                  name: ["-s", "--single"],
                  description:
                    "Ensure only a single match, and output only the code",
                },
                {
                  name: ["-p", "--password"],
                  description: "Provide a password to unlock the YubiKey",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-r", "--remember"],
                  description: "Remember the password on this machine",
                },
                {
                  name: ["-h", "--help"],
                  description: "Show oath accounts code usage information",
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an account",
              isDangerous: true,
              args: {
                name: "QUERY",
                description:
                  'A query to match a single account (as shown in "list")',
              },
              options: [
                {
                  name: ["-f", "--force"],
                  description: "Confirm deletion without prompting",
                  isDangerous: true,
                },
                {
                  name: ["-p", "--password"],
                  description: "Provide a password to unlock the YubiKey",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-r", "--remember"],
                  description: "Remember the password on this machine",
                },
                {
                  name: ["-h", "--help"],
                  description: "Show oath accounts delete usage information",
                },
              ],
            },
            {
              name: "list",
              description: "List all accounts",
              options: [
                {
                  name: ["-H", "--show-hidden"],
                  description: "Include hidden accounts",
                },
                {
                  name: ["-o", "--oath-type"],
                  description: "Display the OATH type",
                },
                {
                  name: ["-P", "--period"],
                  description: "Display the period",
                },
                {
                  name: ["-p", "--password"],
                  description: "Provide a password to unlock the YubiKey",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-r", "--remember"],
                  description: "Remember the password on this machine",
                },
                {
                  name: ["-h", "--help"],
                  description: "Show oath accounts list usage information",
                },
              ],
            },
            {
              name: "rename",
              description: "Rename an account (Requires YubiKey 5.3 or later)",
              args: [
                {
                  name: "QUERY",
                  description:
                    'A query to match a single account (as shown in "list")',
                },
                {
                  name: "NAME",
                  description:
                    'The name of the account (use "<issuer>:<name>" to specify issuer)',
                },
              ],
              options: [
                {
                  name: ["-f", "--force"],
                  description: "Confirm rename without prompting",
                  isDangerous: true,
                },
                {
                  name: ["-p", "--password"],
                  description: "Provide a password to unlock the YubiKey",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-r", "--remember"],
                  description: "Remember the password on this machine",
                },
                {
                  name: ["-h", "--help"],
                  description: "Show oath accounts rename usage information",
                },
              ],
            },
            {
              name: "uri",
              description: "Add a new account from an otpauth:// URI",
              args: {
                name: "URI",
              },
              options: [
                {
                  name: ["-t", "--touch"],
                  description: "Require touch on YubiKey to generate code",
                },
                {
                  name: ["-f", "--force"],
                  description: "Confirm the action without prompting",
                  isDangerous: true,
                },
                {
                  name: ["-p", "--password"],
                  description: "Provide a password to unlock the YubiKey",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-r", "--remember"],
                  description: "Remember the password on this machine",
                },
                {
                  name: ["-h", "--help"],
                  description: "Show oath accounts uri usage information",
                },
              ],
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Show oath accounts usage information",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show oath usage information",
        },
      ],
    },
    {
      name: "openpgp",
      description: "Manage the OpenPGP applications",
      subcommands: [
        {
          name: "info",
          description: "Display general status of the OpenPGP application",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show openpgp info usage information",
            },
          ],
        },
        {
          name: "reset",
          description: "Reset all the OpenPGP data",
          isDangerous: true,
          options: [
            {
              name: ["-f", "--force"],
              description: "Confirm the action without prompting",
              isDangerous: true,
            },
            {
              name: ["-h", "--help"],
              description: "Show openpgp reset usage information",
            },
          ],
        },
        {
          name: "access",
          description: "Manage PIN, Reset Code, and Admin PIN",
          subcommands: [
            {
              name: "set-retries",
              description: "Set PIN, Reset Code and Admin PIN retries",
              args: [
                {
                  name: "PIN-RETRIES",
                },
                {
                  name: "RESET-CODE-RETRIES",
                },
                {
                  name: "ADMIN-PIN-RETRIES",
                },
              ],
              options: [
                {
                  name: ["-a", "--admin-pin"],
                  description: "Admin PIN for OpenPGP",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-f", "--force"],
                  description: "Confirm the action without prompting",
                  isDangerous: true,
                },
                {
                  name: ["-h", "--help"],
                  description:
                    "Show openpgp access set-retries usage information",
                },
              ],
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Show openpgp access usage information",
            },
          ],
        },
        {
          name: "certificates",
          description: "Manage certificates",
          subcommands: [
            {
              name: "delete",
              description: "Delete an OpenPGP certificate",
              args: {
                name: "KEY",
                description:
                  "Key slot to delete certificate from (sig, enc, aut, or att)",
              },
              options: [
                {
                  name: ["-a", "--admin-pin"],
                  description: "Admin PIN for OpenPGP",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description:
                    "Show openpgp certificates delete usage information",
                },
              ],
            },
            {
              name: "export",
              description: "Export an OpenPGP certificate",
              args: [
                {
                  name: "KEY",
                  description: "Key slot to read from (sig, enc, aut, or att)",
                },
                {
                  name: "CERTIFICATE",
                  description:
                    "File to write certificate to. Use '-' to use stdout",
                  template: "filepaths",
                  suggestions: [{ name: "-", hidden: true }],
                },
              ],
              options: [
                {
                  name: ["-F", "--format"],
                  description: "Encoding format",
                  args: {
                    name: "format",
                    default: "PEM",
                    suggestions: ["PEM", "DER"],
                  },
                },
                {
                  name: ["-h", "--help"],
                  description:
                    "Show openpgp certificates export usage information",
                },
              ],
            },
            {
              name: "import",
              description: "Import an OpenPGP certificate",
              args: [
                {
                  name: "KEY",
                  description:
                    "Key slot to import certificates to (sig, enc, aut, or att)",
                },
                {
                  name: "CERTIFICATE",
                  description:
                    "File containing the certificate. Use '-' to use stdout",
                  template: "filepaths",
                  suggestions: [{ name: "-", hidden: true }],
                },
              ],
              options: [
                {
                  name: ["-a", "--admin-pin"],
                  description: "Admin PIN for OpenPGP",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description:
                    "Show openpgp certificates export usage information",
                },
              ],
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Show openpgp certificates usage information",
            },
          ],
        },
        {
          name: "keys",
          description: "Manage private keys",
          subcommands: [
            {
              name: "attest",
              description:
                "Generate a attestation certificate for a key. Attestation is used to show that an asymmetric key was generated on the YubiKey and therefore doesn't exist outside the device",
              args: [
                {
                  name: "KEY",
                  description: "Key slot to attest (sig, enc, aut, or att)",
                },
                {
                  name: "CERTIFICATE",
                  description:
                    "File to write attestation certificate to. Use '-' to use stdout",
                  template: "filepaths",
                  suggestions: [{ name: "-", hidden: true }],
                },
              ],
              options: [
                {
                  name: ["-P", "--pin"],
                  description: "PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-F", "--format"],
                  description: "Encoding format",
                  args: {
                    name: "format",
                    default: "PEM",
                    suggestions: ["PEM", "DER"],
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show openpgp keys attest usage information",
                },
              ],
            },
            {
              name: "import",
              description:
                "Import a private key (ONLY SUPPORTS ATTESTATION KEY)",
              args: [
                {
                  name: "KEY",
                },
                {
                  name: "PRIVATE-KEY",
                  description:
                    "File containing the private key. Use '-' to use stdin",
                },
              ],
              options: [
                {
                  name: ["-a", "--admin-pin"],
                  description: "Admin PIN for OpenPGP",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show openpgp keys import usage information",
                },
              ],
            },
            {
              name: "set-touch",
              description: "Set touch policy for OpenPGP key",
              args: [
                {
                  name: "KEY",
                  description: "Key slot to set (sig, enc, aut or att)",
                },
                {
                  name: "POLICY",
                  description:
                    "Touch policy to set (on, off, fixed, cached or cached-fixed)",
                },
              ],
              options: [
                {
                  name: ["-a", "--admin-pin"],
                  description: "Admin PIN for OpenPGP",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-f", "--force"],
                  description: "Confirm the action without prompting",
                  isDangerous: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Show openpgp set-touch usage information",
                },
              ],
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Show openpgp keys usage information",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show openpgp usage information",
        },
      ],
    },
    {
      name: "otp",
      description: "Manage the YubiOTP applications",
      subcommands: [
        {
          name: "calculate",
          description:
            "Perform a challenge-response operation. Send a challenge (in hex) to a YubiKey slot with a challenge-response credential, and read the response. Supports output as a OATH-TOTP code",
          options: [
            {
              name: ["-T", "--totp"],
              description:
                "Generate a TOTP code, use the current time if challenge is omitted",
            },
            {
              name: ["-d", "--digits"],
              description: "Number of digits in generated TOTP code",
              args: {
                name: "number of digits",
                default: "6",
                suggestions: ["6", "8"],
              },
            },
            {
              name: ["-h", "--help"],
              description: "Show otp calculate usage information",
            },
          ],
        },
        {
          name: "chalresp",
          description: "Program a challenge-response operation",
          args: [
            {
              name: "slot",
              suggestions: ["1", "2"],
            },
            {
              name: "KEY",
              description:
                "A key given in hex (or base32, if --totp is specified)",
              isOptional: true,
            },
          ],
          options: [
            {
              name: ["-t", "--touch"],
              description:
                "Require touch on the YubiKey to generate a response",
            },
            {
              name: ["-T", "--totp"],
              description:
                "Use a base32 encoded key (optionally padded) for TOTP credentials",
            },
            {
              name: ["-g", "--generate"],
              description:
                "Generate a random secret key. Conflicts with KEY argument",
            },
            {
              name: ["-f", "--force"],
              description: "Confirm the action without prompting",
              isDangerous: true,
            },
            {
              name: ["-h", "--help"],
              description: "Show otp chalresp usage information",
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes the configuration stored in a slot",
          isDangerous: true,
          args: {
            name: "slot",
            suggestions: ["1", "2"],
          },
          options: [
            {
              name: ["-f", "--force"],
              description: "Confirm the action without prompting",
              isDangerous: true,
            },
            {
              name: ["-h", "--help"],
              description: "Show otp delete usage information",
            },
          ],
        },
        {
          name: "hotp",
          description: "Program an HMAC-SHA1 OATH-HOTP credential",
          args: [
            {
              name: "slot",
              suggestions: ["1", "2"],
            },
            {
              name: "KEY",
              isOptional: true,
            },
          ],
          options: [
            {
              name: ["-d", "--digits"],
              description: "Number of digits in generated code",
              args: {
                name: "number of digits",
                default: "6",
                suggestions: ["6", "8"],
              },
            },
            {
              name: ["-c", "--counter"],
              description: "Initial counter value",
              args: {
                name: "INTEGER",
              },
            },
            {
              name: ["-i", "--identifier"],
              description: "Token identifier",
              args: {
                name: "TEXT",
              },
            },
            {
              name: "--no-enter",
              description:
                "Don't send an Enter keystroke after outputting the code",
            },
            {
              name: ["-f", "--force"],
              description: "Confirm the action without prompting",
              isDangerous: true,
            },
            {
              name: ["-h", "--help"],
              description: "Show otp hotp usage information",
            },
          ],
        },
        {
          name: "info",
          description: "Display general status of the YubiKey OTP slots",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show otp info usage information",
            },
          ],
        },
        {
          name: "ndef",
          description: "Configure a slot to be used over NDEF (NFC)",
          args: {
            name: "slot",
            suggestions: ["1", "2"],
          },
          options: [
            {
              name: "--prefix",
              description: "Added before the NDEF payload. Typically a URI",
              args: {
                name: "TEXT",
                default: "an empty string",
              },
            },
            {
              name: ["-t", "--ndef-type"],
              description: "NDEF payload type",
              args: {
                name: "NDEF type",
                default: "URI",
                suggestions: ["TEXT", "URI"],
              },
            },
            {
              name: ["-h", "--help"],
              description: "Show otp ndef usage information",
            },
          ],
        },
        {
          name: "settings",
          description: "Update the settings for a slot",
          options: [
            {
              name: ["-f", "--force"],
              description: "Confirm the action without prompting",
              isDangerous: true,
            },
            {
              name: ["-A", "--new-access-code"],
              description:
                'Set a new 6 byte access code for the slot. Use "-" as a value to prompt for input',
              args: {
                name: "HEX",
              },
            },
            {
              name: "--delete-access-code",
              description: "Remove access code from the slot",
            },
            {
              name: ["--enter", "--no-enter"],
              description:
                "Should send 'Enter' keystroke after slot output. (default: enter)",
            },
            {
              name: ["-p", "--pacing"],
              description:
                "Throttle output speed by adding a delay (in ms) between characters emitted",
              args: {
                name: "milliseconds",
                default: "0",
                suggestions: ["0", "20", "40", "60"],
              },
            },
            {
              name: "--use-numeric-keypad",
              description:
                "Use scancodes for numeric keypad when sending digits. Helps with some keyboard layouts",
            },
            {
              name: ["-h", "--help"],
              description: "Show otp settings usage information",
            },
          ],
        },
        {
          name: "static",
          description: "Configure a static password",
          args: [
            {
              name: "slot",
              suggestions: ["1", "2"],
            },
            {
              name: "PASSWORD",
              isOptional: true,
            },
          ],
          options: [
            {
              name: ["-g", "--generate"],
              description: "Generate a random password",
            },
            {
              name: ["-l", "--length"],
              description: "Length of generated password",
              args: {
                name: "LENGTH",
                default: "38 (1<=x<=38)",
              },
            },
            {
              name: ["-k", "--keyboard-layout"],
              description: "Keyboard layout to use for the static password",
              args: {
                name: "layout",
                default: "MODHEX",
                suggestions: [
                  "MODHEX",
                  "US",
                  "UK",
                  "DE",
                  "FR",
                  "BEPO",
                  "NORMAN",
                ],
              },
            },
            {
              name: "--no-enter",
              description:
                "Don't send an Enter keystroke after outputting the password",
            },
            {
              name: ["-f", "--force"],
              description: "Confirm the action without prompting",
              isDangerous: true,
            },
            {
              name: ["-h", "--help"],
              description: "Show otp chalresp usage information",
            },
          ],
        },
        {
          name: "swap",
          description: "Swaps the two slot configurations",
          options: [
            {
              name: ["-f", "--force"],
              description: "Confirm the action without prompting",
              isDangerous: true,
            },
            {
              name: ["-h", "--help"],
              description: "Show otp swap usage information",
            },
          ],
        },
        {
          name: "yubiotp",
          description: "Program a Yubico OTP credential",
          args: {
            name: "slot",
            suggestions: ["1", "2"],
          },
          options: [
            {
              name: ["-P", "--public-id"],
              description: "Public identifier prefix",
              args: {
                name: "MODHEX",
              },
            },
            {
              name: ["-p", "--private-id"],
              description: "6 byte private identifier",
              args: {
                name: "HEX",
              },
            },
            {
              name: ["-k", "--key"],
              description: "16 byte secret key",
              args: {
                name: "HEX",
              },
            },
            {
              name: "--no-enter",
              description:
                "Don't send an Enter keystroke after emitting the OTP",
            },
            {
              name: ["-S", "--serial-public-id"],
              description:
                "Use YubiKey serial number as public ID. Conflicts with --public-id",
              exclusiveOn: ["--public-id"],
            },
            {
              name: ["-g", "--generate-private-id"],
              description:
                "Generate a random private ID. Conflicts with --private-id",
              exclusiveOn: ["--private-id"],
            },
            {
              name: ["-G", "--generate-key"],
              description: "Generate a random secret key. Conflicts with --key",
              exclusiveOn: ["--key"],
            },
            {
              name: ["-u", "--upload"],
              description:
                "Upload credential to YubiCloud (opens in browser). Conflicts with --force",
              exclusiveOn: ["--force"],
            },
            {
              name: ["-f", "--force"],
              description: "Confirm the action without prompting",
            },
            {
              name: ["-h", "--help"],
              description: "Show otp yubiotp usage information",
            },
          ],
        },
      ],
      options: [
        {
          name: "--access-code",
          description:
            'A 6 byte access code. Use "-" as a value to prompt for input',
          args: {
            name: "HEX",
          },
        },
        {
          name: ["-h", "--help"],
          description: "Show otp usage information",
        },
      ],
    },
    {
      name: "piv",
      description: "Manage the PIV applications",
      subcommands: [
        {
          name: "info",
          description: "Display general status of the PIV application",
          options: [
            {
              name: ["-h", "--help"],
              description: "Show piv info usage information",
            },
          ],
        },
        {
          name: "reset",
          description: "Reset all PIV data",
          isDangerous: true,
          options: [
            {
              name: ["-f", "--force"],
              description: "Confirm the action without prompting",
              isDangerous: true,
            },
            {
              name: ["-h", "--help"],
              description: "Show piv reset usage information",
            },
          ],
        },
        {
          name: "access",
          description: "Manage PIN, PUK, and Management Key",
          subcommands: [
            {
              name: "change-management-key",
              description: "Change the management key",
              options: [
                {
                  name: ["-P", "--pin"],
                  description: "PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-t", "--touch"],
                  description: "Require touch on YubiKey to generate code",
                },
                {
                  name: ["-n", "--new-management-key"],
                  description: "A new management key",
                  args: {
                    name: "TEX",
                  },
                },
                {
                  name: ["-m", "--management-key"],
                  description: "Current management key",
                  args: {
                    name: "TEX",
                  },
                },
                {
                  name: ["-a", "--algorithm"],
                  description: "Management key algorithm",
                  args: {
                    name: "algorithm",
                    default: "TDES",
                    suggestions: ["TDES", "AES128", "AES192", "AES256"],
                  },
                },
                {
                  name: ["-p", "--protect"],
                  description:
                    "Store new management key on the YubiKey, protected by PIN. A random key will be used if no key is provided",
                },
                {
                  name: ["-g", "--generate"],
                  description:
                    "Generate a random management key. Implied by --protect unless --new-management-key is also given. Conflicts with --new-management-key",
                  exclusiveOn: ["--new-management-key"],
                },
                {
                  name: ["-f", "--force"],
                  description: "Confirm the action without prompting",
                  isDangerous: true,
                },
                {
                  name: ["-h", "--help"],
                  description:
                    "Show piv access change-management-key usage information",
                },
              ],
            },
            {
              name: "change-pin",
              description: "Change the PIN code",
              options: [
                {
                  name: ["-P", "--pin"],
                  description: "Current PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-n", "--new-pin"],
                  description: "A new PIN",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show piv access change-pin usage information",
                },
              ],
            },
            {
              name: "change-puk",
              description: "Change the PUK code",
              options: [
                {
                  name: ["-P", "--puk"],
                  description: "Current PUK code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-n", "--new-puk"],
                  description: "A new PUK",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show piv access change-puk usage information",
                },
              ],
            },
            {
              name: "set-retries",
              description: "Set the number of PIN and PUK retry attempts",
              args: [
                {
                  name: "PIN-RETRIES",
                },
                {
                  name: "PUK-RETRIES",
                },
              ],
              options: [
                {
                  name: ["-m", "--management-key"],
                  description: "The management key",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-P", "--pin"],
                  description: "PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-f", "--force"],
                  description: "Confirm the action without prompting",
                  isDangerous: true,
                },
                {
                  name: ["-h", "--help"],
                  description: "Show piv access set-retries usage information",
                },
              ],
            },
            {
              name: "unblock-pin",
              description: "Unblock the PIN (using PUK)",
              options: [
                {
                  name: ["-p", "--puk"],
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-n", "--new-pin"],
                  args: {
                    name: "NEW-PIN",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show piv access unblock-pin usage information",
                },
              ],
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Show piv access usage information",
            },
          ],
        },
        {
          name: "certificates",
          description: "Manage certificates",
          subcommands: [
            {
              name: "delete",
              description: "Delete a certificate",
              isDangerous: true,
              args: {
                name: "SLOT",
                description: "PIV slot of the certificate",
              },
              options: [
                {
                  name: ["-m", "--management-key"],
                  description: "The management key",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-P", "--pin"],
                  description: "PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show piv certificates delete usage information",
                },
              ],
            },
            {
              name: "export",
              description: "Export an X.509 certificate",
              args: [
                {
                  name: "SLOT",
                  description: "PIV slot of the certificate",
                },
                {
                  name: "CERTIFICATE",
                  description:
                    "File to write certificate to. Use '-' to use stdout",
                  template: "filepaths",
                  suggestions: [{ name: "-", hidden: true }],
                },
              ],
              options: [
                {
                  name: ["-F", "--format"],
                  description: "Encoding format",
                  args: {
                    name: "format",
                    default: "PEM",
                    suggestions: ["PEM", "DER"],
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show piv certificates export usage information",
                },
              ],
            },
            {
              name: "generate",
              description: "Generate a self-signed X.509 certificate",
              args: [
                {
                  name: "SLOT",
                  description: "PIV slot of the certificate",
                },
                {
                  name: "PUBLIC-KEY",
                  description:
                    "File containing a public key. Use '-' to use stdin",
                },
              ],
              options: [
                {
                  name: ["-m", "--management-key"],
                  description: "The management key",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-P", "--pin"],
                  description: "PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-s", "--subject"],
                  description:
                    "Subject for the certificate, as an RFC 4514 string",
                  isRequired: true,
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-d", "--valid-days"],
                  description: "Number of days until the certificate expires",
                  args: {
                    name: "INTEGER",
                    default: "365",
                  },
                },
                {
                  name: ["-a", "--hash-algorithm"],
                  description: "Hash algorithm",
                  args: {
                    name: "hash algorithm",
                    default: "SHA256",
                    suggestions: ["SHA1", "SHA256", "SHA384"],
                  },
                },
                {
                  name: ["-h", "--help"],
                  description:
                    "Show piv certificates generate usage information",
                },
              ],
            },
            {
              name: "import",
              description: "Import an X.509 certificate",
              args: [
                {
                  name: "SLOT",
                  description: "PIV slot of the certificate",
                },
                {
                  name: "CERTIFICATE",
                  description:
                    "File containing the certificate. Use '-' to use stdin",
                },
              ],
              options: [
                {
                  name: ["-m", "--management-key"],
                  description: "The management key",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-P", "--pin"],
                  description: "PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-p", "--password"],
                  description: "A password may be needed to decrypt the data",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-v", "--verify"],
                  description:
                    "Verify that the certificate matches the private key in the slot",
                },
                {
                  name: ["-h", "--help"],
                  description: "Show piv certificates import usage information",
                },
              ],
            },
            {
              name: "request",
              description: "Generate a Certificate Signing Request (CSR)",
              args: [
                {
                  name: "SLOT",
                  description: "PIV slot of the certificate",
                },
                {
                  name: "PUBLIC-KEY",
                  description:
                    "File containing a public key. Use '-' to use stdin",
                  template: "filepaths",
                  suggestions: [{ name: "-", hidden: true }],
                },
                {
                  name: "CSR",
                  description: "File to write CSR to. Use '-' to use stdout",
                  template: "filepaths",
                  suggestions: [{ name: "-", hidden: true }],
                },
              ],
              options: [
                {
                  name: ["-P", "--pin"],
                  description: "PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-s", "--subject"],
                  description:
                    "Subject for the certificate, as an RFC 4514 string",
                  isRequired: true,
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-a", "--hash-algorithm"],
                  description: "Hash algorithm",
                  args: {
                    name: "hash algorithm",
                    default: "SHA256",
                    suggestions: ["SHA1", "SHA256", "SHA384", "SHA512"],
                  },
                },
                {
                  name: ["-h", "--help"],
                  description:
                    "Show piv certificates request usage information",
                },
              ],
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Show piv certificates usage information",
            },
          ],
        },
        {
          name: "keys",
          description: "Manage private keys",
          subcommands: [
            {
              name: "attest",
              description: "Generate an attestation certificate for a key pair",
              args: [
                {
                  name: "SLOT",
                  description: "PIV slot of the private key",
                },
                {
                  name: "CERTIFICATE",
                  description:
                    "File to write attestation certificate to. Use '-' to use stdout",
                  template: "filepaths",
                  suggestions: [{ name: "-", hidden: true }],
                },
              ],
              options: [
                {
                  name: ["-F", "--format"],
                  description: "Encoding format",
                  args: {
                    name: "format",
                    default: "PEM",
                    suggestions: ["PEM", "DER"],
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show piv keys attest usage information",
                },
              ],
            },
            {
              name: "export",
              description:
                "Export a public key corresponding to a stored private key",
              args: [
                {
                  name: "SLOT",
                  description: "PIV slot of the private key",
                },
                {
                  name: "PUBLIC-KEY",
                  description:
                    "File containing the generated public key. Use '-' to use stdout",
                  template: "filepaths",
                  suggestions: [{ name: "-", hidden: true }],
                },
              ],
              options: [
                {
                  name: ["-F", "--format"],
                  description: "Encoding format",
                  args: {
                    name: "format",
                    default: "PEM",
                    suggestions: ["PEM", "DER"],
                  },
                },
                {
                  name: ["-v", "--verify"],
                  description:
                    "Verify that the public key matches the private key in the slot",
                },
                {
                  name: ["-P", "--pin"],
                  description: "PIN code (used for --verify)",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show piv keys attest usage information",
                },
              ],
            },
            {
              name: "generate",
              description: "Generate an asymmetric key pair",
              args: [
                {
                  name: "SLOT",
                  description: "PIV slot of the private key",
                },
                {
                  name: "PUBLIC-KEY",
                  description:
                    "File containing the generated public key. Use '-' to use stdout",
                  template: "filepaths",
                  suggestions: [{ name: "-", hidden: true }],
                },
              ],
              options: [
                {
                  name: ["-m", "--management-key"],
                  description: "The management key",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-P", "--pin"],
                  description: "PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-a", "--algorithm"],
                  description: "Algorithm to use in key generation",
                  args: {
                    name: "algorithm",
                    default: "RSA2048",
                    suggestions: ["RSA1024", "RSA2048", "ECCP256", "ECCP384"],
                  },
                },
                {
                  name: ["-F", "--format"],
                  description: "Encoding format",
                  args: {
                    name: "format",
                    default: "PEM",
                    suggestions: ["PEM", "DER"],
                  },
                },
                {
                  name: "--pin-policy",
                  description: "PIN policy for slot",
                  args: {
                    name: "policy",
                    suggestions: ["DEFAULT", "NEVER", "ONCE", "ALWAYS"],
                  },
                },
                {
                  name: "--touch-policy",
                  description: "Touch policy for slot",
                  args: {
                    name: "policy",
                    suggestions: ["DEFAULT", "NEVER", "ALWAYS", "ONCE"],
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show piv keys generate usage information",
                },
              ],
            },
            {
              name: "import",
              description: "Import a private key from file",
              args: [
                {
                  name: "SLOT",
                  description: "PIV slot of the private key",
                },
                {
                  name: "PRIVATE-KEY",
                  description:
                    "File containing the private key. Use '-' to use stdout",
                  template: "filepaths",
                  suggestions: [{ name: "-", hidden: true }],
                },
              ],
              options: [
                {
                  name: ["-P", "--pin"],
                  description: "PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-m", "--management-key"],
                  description: "The management key",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: "--pin-policy",
                  description: "PIN policy for slot",
                  args: {
                    name: "policy",
                    suggestions: ["DEFAULT", "NEVER", "ONCE", "ALWAYS"],
                  },
                },
                {
                  name: "--touch-policy",
                  description: "Touch policy for slot",
                  args: {
                    name: "policy",
                    suggestions: ["DEFAULT", "NEVER", "ALWAYS", "ONCE"],
                  },
                },
                {
                  name: ["-p", "--password"],
                  description: "Password used to decrypt the private key",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show piv keys import usage information",
                },
              ],
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Show piv keys usage information",
            },
          ],
        },
        {
          name: "objects",
          description: "Manage PIV data objects",
          subcommands: [
            {
              name: "export",
              description: "Export an arbitrary PIV data object",
              args: [
                {
                  name: "OBJECT",
                  description: "Name of PIV data object, or ID in HEX",
                },
                {
                  name: "OUTPUT",
                  description: "File to write object to. Use '-' to use stdout",
                  template: "filepaths",
                  suggestions: [{ name: "-", hidden: true }],
                },
              ],
              options: [
                {
                  name: ["-P", "--pin"],
                  description: "PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show piv objects export usage information",
                },
              ],
            },
            {
              name: "generate",
              description:
                "Generate and write data for a supported data object",
              args: {
                name: "OBJECT",
                description: "Name of PIV data object, or ID in HEX",
              },
              options: [
                {
                  name: ["-P", "--pin"],
                  description: "PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-m", "--management-key"],
                  description: "The management key",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show piv objects generate usage information",
                },
              ],
            },
            {
              name: "import",
              description: "Write an arbitrary PIV object",
              args: [
                {
                  name: "OBJECT",
                  description: "Name of PIV data object, or ID in HEX",
                },
                {
                  name: "DATA",
                  description:
                    "File containing the data to be written. Use '-' to use stdin",
                },
              ],
              options: [
                {
                  name: ["-P", "--pin"],
                  description: "PIN code",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-m", "--management-key"],
                  description: "The management key",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: ["-h", "--help"],
                  description: "Show piv objects import usage information",
                },
              ],
            },
          ],
          options: [
            {
              name: ["-h", "--help"],
              description: "Show piv objects usage information",
            },
          ],
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Show piv usage information",
        },
      ],
    },
  ],
  options: [
    {
      name: ["-d", "--device"],
      description: "Specify which YubiKey to interact with by serial number",
      args: {
        name: "SERIAL",
        generators: {
          script: [
            "bash",
            "-c",
            "ykman list | sed -rn 's/.*Serial: (.*)/\\1/p'",
          ],
          postProcess: function (out) {
            return out.split("\n").map((serial) => {
              return { name: serial, description: "Yubikey serial" };
            });
          },
        },
      },
    },
    {
      name: ["-r", "--reader"],
      description:
        "Use an exteral smart card reader. Conflicts with --device and list",
      exclusiveOn: ["--device"],
      args: {
        name: "NAME",
        generators: {
          script: ["ykman", "list", "--readers"],
          postProcess: function (out) {
            return out.split("\n").map((readerName) => {
              return { name: readerName, description: "Yubikey name" };
            });
          },
        },
      },
    },
    {
      name: ["-l", "--log-level"],
      description: "Enable logging at given verbosity level",
      args: {
        name: "log level",
        suggestions: ["DEBUG", "INFO", "WARNING", "ERROR", "CRITICAL"],
      },
    },
    {
      name: "--log-file",
      description:
        "Write logs to the given FILE instead of standard error; ignore unless --log-level is also set",
      args: {
        name: "FILE",
        template: "filepaths",
      },
    },
    {
      name: "--diagnose",
      description: "Show diagnostics information useful for troubleshooting",
    },
    {
      name: ["-v", "--version"],
      description: "Show version information about the app",
    },
    {
      name: "--full-help",
      description: "Show --help, including hidden commands, and exit",
    },
    {
      name: ["-h", "--help"],
      description: "Show usage information",
    },
  ],
};
export default completionSpec;
