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
                name: "OTP|U2F|FIDO2|OATH|PIV|OPENPGP|HSMAUTH",
              },
            },
            {
              name: ["-d", "--disable"],
              description: "Disable applications",
              args: {
                name: "OTP|U2F|FIDO2|OATH|PIV|OPENPGP|HSMAUTH",
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
                name: "OTP|U2F|FIDO2|OATH|PIV|OPENPGP|HSMAUTH",
              },
            },
            {
              name: ["-d", "--disable"],
              description: "Disable applications",
              args: {
                name: "OTP|U2F|FIDO2|OATH|PIV|OPENPGP|HSMAUTH",
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
    { name: "oath", description: "Manage the OATH applications" },
    { name: "openpgp", description: "Manage the OpenPGP applications" },
    { name: "otp", description: "Manage the YubiOTP applications" },
    { name: "piv", description: "Manage the PIV applications" },
  ],
  options: [
    {
      name: ["-d", "--device"],
      description: "Specify which YubiKey to interact with by serial number",
      args: {
        name: "SERIAL",
      },
    },
    {
      name: ["-r", "--reader"],
      description:
        "Use an exteral smart card reader. Conflicts with --device and list",
      args: {
        name: "NAME",
      },
    },
    {
      name: ["-l", "--log-level"],
      description: "Enable logging at given verbosity level",
      args: {
        name: "DEBUG|INFO|WARNING|ERROR|CRITICAL",
      },
    },
    {
      name: "--log-file",
      description:
        "Write logs to the given FILE instead of standard error; ignore unless --log-level is also set",
      args: {
        name: "FILE",
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
