import { BlogPost } from '../blogs';

export const existingPosts: BlogPost[] = [
  {
    id: "post-1",
    slug: "under-the-hood-quantum-compiler-pipeline",
    title: "Syntax without Borders: The Quantum Language Blueprint",
    category: "Language Guide",
    author: "Core Compiler Team",
    date: "July 14, 2026",
    readingTime: "6 min read",
    coverImage: "/languages.png",
    excerpt: "From Pythonic indentation to C-style pointers and streams—discover how Quantum combines the best parts of your favorite languages into a single unified runtime environment.",
    content: [
      {
        type: "paragraph",
        value: "The fundamental philosophy behind Quantum source files (`.sa`) is simple: **you shouldn't have to change how you think just to write a script.** Instead of forcing a rigid syntax framework, the Quantum compiler blends layouts dynamically, letting you mix Pythonic elegance, JavaScript flexibility, and low-level C control within the exact same file scope."
      },
      {
        type: "heading",
        value: { level: 2, text: "1. The Multi-Syntax Engine" }
      },
      {
        type: "paragraph",
        value: "At the parser level, Quantum bridges different structural layouts seamlessly. Every file (`.sa`, `.py`, `.js`, `.c`, `.cpp`) runs natively on the Quantum VM through the exact same multi-syntax front-end—no external Node.js, Python, or GCC installation is required."
      },
      {
        type: "code",
        value: {
          language: "quantum",
          code: `# Style 1: Pythonic style layout
if x > 0:
    print("positive")

# Style 2: Standard block structure
if x > 0 { print("positive") }

# Style 3: Traditional C-Style system layout
if(x > 0) { printf("%d\\n", x) }`
        }
      },
      {
        type: "heading",
        value: { level: 2, text: "2. Variables and Dynamic Type Hints" }
      },
      {
        type: "paragraph",
        value: "Assignments are designed to feel natural whether you prefer loose scripting or explicit declarations. While Quantum remains entirely dynamically typed under the hood, the parser accepts native C-style type tags strictly as helpful inline hints for readability:"
      },
      {
        type: "code",
        value: {
          language: "quantum",
          code: `name   = "Alice"               # Bare scripting assignment
let x  = 42                    # Quantum native keyword
const MAX = 100                # Constant tracking protection

int   count = 0                # C-style type hint (does not block runtime)
float pi    = 3.14
bool  flag  = false`
        }
      },
      {
        type: "heading",
        value: { level: 2, text: "3. The Five Function Flavors" }
      },
      {
        type: "paragraph",
        value: "Functions are incredibly expressive. The front-end compiler maps five distinct block variations down into the exact same AST node structure:"
      },
      {
        type: "code",
        value: {
          language: "quantum",
          code: `fn add(a, b) { return a + b }           # 1. Quantum Native
def greet(name): return "Hi, " + name  # 2. Pythonic Block
function mul(a, b) { return a * b }    # 3. JavaScript Classic
double = (x) => x * 2                  # 4. Modern Arrow Form
square = fn(n) { return n * n }        # 5. Anonymous Expression`
        }
      },
      {
        type: "heading",
        value: { level: 2, text: "4. Advanced Primitives: Pointers & I/O Parity" }
      },
      {
        type: "paragraph",
        value: "Unlike typical high-level scripting environments, Quantum features first-class C-style pointer mechanics natively backed by underlying \`std::shared_ptr\` definitions. This allows you to perform direct references and dereferences safely:"
      },
      {
        type: "code",
        value: {
          language: "quantum",
          code: `let x = 42
let p = &x        # Address-of: p holds a live reference to x
*p = 99           # Dereference + mutation assignment
print(x)          # Outputs: 99`
        }
      },
      {
        type: "paragraph",
        value: "To complete the hybrid ecosystem, the standard I/O library implements total streaming parity. You can stream parameters with standard print utilities or push bitwise left-shifts depending on your personal design preference:"
      },
      {
        type: "code",
        value: {
          language: "quantum",
          code: `# Scripting output stream
print("hello", name)
printf("Score: %d / %d\\n", score, total)

# C++ style stream overloading handles piping flawlessly
cout << "Value: " << x << endl
cin >> name`
        }
      },
      {
        type: "blockquote",
        value: {
          text: "Whether you are catching language exceptions with try/catch blocks, managing functional closure scopes via stack-bound upvalues, or processing low-level bitwise operations, the .sa file environment adapts seamlessly to your workflow.",
          cite: "Quantum Core Spec"
        }
      }
    ]
  },
  {
    id: "post-2",
    slug: "understanding-quantum-vs-qrun",
    title: "Inside the Toolchain: quantum vs. qrun",
    category: "Architecture",
    author: "Toolchain Engineer",
    date: "July 14, 2026",
    readingTime: "7 min read",
    coverImage: "/quantumBinary.png",
    excerpt: "Ever wondered why Quantum has two binaries? Let's break down the difference between the compiler (quantum) and the runtime (qrun), and how they manage bytecode.",
    content: [
      {
        type: "paragraph",
        value: "When you install Quantum, you aren't just getting a language—you're getting an ecosystem. At the heart of this ecosystem are three distinct binaries produced by CMake: **quantum.exe**, **qrun.exe**, and **quantum_stub.exe**. While they share the same front-end and VM engine, they fulfill completely distinct roles in your workflow."
      },
      {
        type: "heading",
        value: { level: 2, text: "Binary Parity Breakdown" }
      },
      {
        type: "table",
        value: {
          headers: ["Binary", "Compile Define", "Role & Output Behavior"],
          rows: [
            ["quantum.exe", "QUANTUM_MODE_COMPILER=1", "Compiles source -> Bytecode -> Bundles into self-contained .exe, then runs it."],
            ["qrun.exe", "QRUN_MODE=1", "Interprets source directly in memory or launches REPL — no .exe is written to disk."],
            ["quantum_stub.exe", "(none)", "Bare VM runtime template that gets bundled into produced executables."]
          ]
        }
      },
      {
        type: "heading",
        value: { level: 2, text: "1. The Compilation & Bundling Pipeline (quantum)" }
      },
      {
        type: "paragraph",
        value: "When you run \`quantum hello.sa\`, the toolchain pushes your source file through a 5-stage transformation sequence:"
      },
      {
        type: "list",
        value: {
          ordered: true,
          items: [
            "**Lexer:** Converts raw text into a normalized Token stream.",
            "**Parser:** Constructs an Abstract Syntax Tree (AST) using Pratt precedence climbing.",
            "**TypeChecker:** Performs static type checks and warnings (does not block runtime execution).",
            "**Compiler:** Walks AST in a single pass, maintaining CompilerState for locals/upvalues, emitting a flat Chunk bytecode.",
            "**Serializer & Bundler:** Converts Chunk to binary payload vector, copies `quantum_stub.exe` to `hello.exe`, and appends `[payload bytes][payload size: uint32 LE][\"QNTM_VM!\" magic trailer]`."
          ]
        }
      },
      {
        type: "code",
        value: {
          language: "text",
          code: `.sa source
   │
   ▼
Lexer  →  Token stream  →  Parser  →  AST  →  TypeChecker  →  Compiler  →  Bytecode Chunk
                                                                            │
                                                                            ▼
                                                                        Serializer
                                                                            │
                                                                            ▼
                                                        Copy quantum_stub.exe → hello.exe
                                                        Append [payload bytes][size: uint32 LE]["QNTM_VM!"]`
        }
      },
      {
        type: "heading",
        value: { level: 2, text: "2. Direct Interpretation (qrun)" }
      },
      {
        type: "paragraph",
        value: "The `qrun` binary bypasses disk writes entirely. It compiles in-memory and immediately passes the instruction Chunk to `VM::run()`. Running `qrun` with no arguments launches the interactive REPL, where variable and function states persist across prompt lines:"
      },
      {
        type: "code",
        value: {
          language: "quantum",
          code: `quantum[1]> let x = 10
quantum[2]> fn double(n) { return n * 2 }
quantum[3]> print(double(x))
20
quantum[4]> exit`
        }
      },
      {
        type: "blockquote",
        value: {
          text: "When quantum --dis hello.sa is executed, the disassembler dumps instruction offsets, opcode names, operands, line numbers, and constant values inline before exiting.",
          cite: "Toolchain Manual"
        }
      }
    ]
  },
  {
    id: "post-3",
    slug: "quantum-standard-library",
    title: "Inside the Quantum Standard Library",
    category: "Standard Library",
    author: "Core Engine Team",
    date: "July 14, 2026",
    readingTime: "8 min read",
    coverImage: "/standard_library.png",
    excerpt: "From cryptographic hashes and timing-safe checks to CIDR subnet parsers and raw hex encoding, explore Quantum's massive built-in standard library.",
    content: [
      {
        type: "paragraph",
        value: "A great language isn't just defined by its syntax—it is defined by what you can build on day one without installing third-party dependencies. Quantum ships with a massive, high-performance **Standard Library** embedded directly within `VmNatives.cpp`, written in native C++ to ensure fast execution cycles across systems tasks."
      },
      {
        type: "heading",
        value: { level: 2, text: "The Core Namespace Architecture" }
      },
      {
        type: "table",
        value: {
          headers: ["Domain", "Native Functions Registered in VM", "Functional Parity"],
          rows: [
            ["Core & Math", "len(), type(), typeof(), range(), print(), input(), assert(), exit(), abs(), sqrt(), floor(), ceil(), round(), pow(), log(), sin(), cos(), tan(), is_prime(), gcd(), lcm(), mod_pow()", "Functional collection mapping & high-precision math"],
            ["Type Casting", "num(), int(), float(), str(), bool(), chr(), ord(), parseInt(), parseFloat(), isNaN(), hex(), bin()", "Dynamic conversion & base representation"],
            ["String Methods", ".trim(), .upper(), .lower(), .split(), .replace(), .contains(), .starts_with(), .ends_with(), .index_of(), .slice(), .repeat()", "Native string prototype methods"],
            ["Collections", ".push(), .pop(), .slice(), .map(), .filter(), .reduce(), .includes(), .sort(), .reverse(), .join(), .get(), .set(), .has(), .keys(), .values()", "Vector modification & hash dict operations"],
            ["Crypto & Encoding", "sha256(), sha1(), md5(), hmac_sha256(), aes128_ecb_encrypt(), aes128_ecb_decrypt(), base64_encode(), base64_decode(), xor_bytes(), rot13(), constant_time_eq()", "Low-level system defense & encoding pipelines"],
            ["Networking & Distance", "ip_to_int(), ip_in_cidr(), cidr_hosts(), parse_http_request(), hamming_distance(), edit_distance(), luhn_check()", "Subnet parsing & string distance metrics"]
          ]
        }
      },
      {
        type: "heading",
        value: { level: 2, text: "1. Security & Cryptography Pipelines" }
      },
      {
        type: "code",
        value: {
          language: "quantum",
          code: `# Generate secure tokens and calculate Shannon entropy
let token = secure_random_hex(32)
let bits  = secure_random_int(1000, 9999)
let score = entropy("highly-complex-string-value-here")

# Industry standard hash digests
let hashSig = sha256("payload_data")
let macroAuth = hmac_sha256("secret_key", "message_body")

# Native block level encryption and padding algorithms
let blockCipher = aes128_ecb_encrypt("16bytekeysecret!", pkcs7_pad("rawText", 16))

# Secure credential comparisons to neutralize timing vector leaks
if constant_time_eq(providedKey, correctKey):
    print("Handshake established safely")`
        }
      },
      {
        type: "heading",
        value: { level: 2, text: "2. Network Infrastructure & Distance Metrics" }
      },
      {
        type: "code",
        value: {
          language: "quantum",
          code: `# CIDR calculations and subnet mapping
if ip_in_cidr("192.168.1.45", "192.168.1.0/24"):
    let routeList = cidr_hosts("192.168.1.0/24")

# Binary string distance metrics (Levenshtein & Hamming algorithms)
let editCount = edit_distance("quantum", "quanta")
let isCardValid = luhn_check(4532718293812302)`
        }
      },
      {
        type: "blockquote",
        value: {
          text: "By packing advanced cryptographic pipelines, subnet parsers, and explicit streaming formatting rules directly inside the runtime layer, Quantum eliminates development overhead and delivers optimal execution speeds without code bloat.",
          cite: "Standard Library Manifest"
        }
      }
    ]
  }
];
