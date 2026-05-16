const completionSpec: Fig.Spec = {
  name: "basenc",
  description: "Encode/decode data and print to standard output",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  options: [
    {
      name: ["--help", "-h"],
      description: "Display this help and exit",
    },
    {
      name: "--base64",
      description: "Same as 'base64' program (RFC4648 section 4)",
    },
    {
      name: "--base64url",
      description: "File- and url-safe base64 (RFC4648 section 5)",
    },
    {
      name: "--base32",
      description: "Same as 'base32' program (RFC4648 section 6)",
    },
    {
      name: "--base32hex",
      description: "Extended hex alphabet base32 (RFC4648 section 7)",
    },
    {
      name: "--base16",
      description: "Hex encoding (RFC4648 section 8)",
    },
    {
      name: "--base2msbf",
      description: "Bit string with most significant bit (msb) first",
    },
    {
      name: "--base2lsbf",
      description: "Bit string with least significant bit (lsb) first",
    },
    {
      name: ["--decode", "-d"],
      description: "Decode data",
    },
    {
      name: ["--ignore-garbage", "-i"],
      description: "When decoding, ignore non-alphabet characters",
    },
    {
      name: ["--wrap", "-w"],
      description:
        "Wrap encoded lines after COLS character (default 76).  Use 0 to disable line wrapping",
      args: {
        name: "COLS",
        suggestions: ["76", "78", "80", "100", "120", "160", "0"],
        default: "76",
      },
    },
    {
      name: "--z85",
      description:
        "Ascii85-like encoding (ZeroMQ spec:32/Z85); when encoding, input length must be a multiple of 4; when decoding, input length must be a multiple of 5",
    },
    {
      name: "--version",
      description: "Output version information and exit",
    },
  ],
  args: {
    name: "FILE",
    description: "File(s) to encode/decode",
    template: "filepaths",
  },
};
export default completionSpec;
