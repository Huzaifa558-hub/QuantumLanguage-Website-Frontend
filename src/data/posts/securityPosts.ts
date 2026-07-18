import { BlogPost } from '../blogs';

export const securityPosts: BlogPost[] = [
  {
    id: "post-8",
    slug: "c-style-pointers-in-dynamically-typed-scripting",
    title: "C-Style Pointers in a Dynamically Typed Scripting Language",
    category: "Language Guide",
    author: "Core Compiler Team",
    date: "July 16, 2026",
    readingTime: "7 min read",
    coverImage: "/blog_c_pointers.png",
    excerpt: "How Quantum implements first-class address-of (&), dereference (*), and arrow (->) pointer operators without unsafe raw memory access.",
    content: [
      {
        type: "paragraph",
        value: "Scripting languages usually hide references behind object handles. Quantum brings explicit C-style pointer mechanics (`&var`, `*ptr`, `ptr->member`) directly into dynamic scripting code."
      },
      {
        type: "heading",
        value: { level: 2, text: "1. Safe Shared-Pointer Mechanics" }
      },
      {
        type: "paragraph",
        value: "Instead of raw memory addresses that risk dangling pointers or segfaults, Quantum pointers wrap underlying `std::shared_ptr<QuantumValue>` cells. This enables memory mutations across function boundaries safely:"
      },
      {
        type: "code",
        value: {
          language: "quantum",
          code: `let x = 42
let p = &x        # Address-of: p holds a live reference cell to x
*p = 99           # Dereference + mutation assignment
print(x)          # Outputs: 99

fn increment(ptr) {
    *ptr = *ptr + 1
}
increment(&x)
print(x)          # Outputs: 100`
        }
      },
      {
        type: "heading",
        value: { level: 2, text: "2. Pointer Member Access (->)" }
      },
      {
        type: "paragraph",
        value: "When pointing to instance objects or dictionary structures, the arrow operator (`ptr->member`) dereferences the pointer cell and retrieves the member in a single instruction (`ARROW` opcode)."
      }
    ]
  },
  {
    id: "post-9",
    slug: "advanced-io-streams-and-format-specifiers",
    title: "Advanced I/O Streams and Format Specifiers",
    category: "Tutorials",
    author: "DevRel Team",
    date: "July 16, 2026",
    readingTime: "6 min read",
    coverImage: "/blog_io_streams.png",
    excerpt: "Master Quantum's flexible I/O system—supporting Pythonic print(), C-style printf() formatting, and C++ cout << streaming in the same program.",
    content: [
      {
        type: "paragraph",
        value: "Whether you prefer rapid debugging prints or formatted systems logging, Quantum supports three distinct I/O models natively in the standard library."
      },
      {
        type: "heading",
        value: { level: 2, text: "1. Printf Format Specifiers Parity" }
      },
      {
        type: "table",
        value: {
          headers: ["Specifier", "Meaning & Type", "Code Usage Example"],
          rows: [
            ["%d / %i", "Integer", "printf(\"%d\\n\", count)"],
            ["%f / %e", "Float / Scientific", "printf(\"%.2f\\n\", pi)"],
            ["%s / %c", "String / Character", "printf(\"User: %s\\n\", name)"],
            ["%x / %X", "Hex lower / upper", "printf(\"0x%X\\n\", 255)"],
            ["%b / %o", "Binary / Octal", "printf(\"%b\\n\", 5)"]
          ]
        }
      },
      {
        type: "heading",
        value: { level: 2, text: "2. C++ Stream Overloading (cout << / cin >>)" }
      },
      {
        type: "code",
        value: {
          language: "quantum",
          code: `# C++ style streaming overload handles piping natively
cout << "Score: " << score << " / " << total << endl
cin >> userInput`
        }
      }
    ]
  },
  {
    id: "post-10",
    slug: "exception-unwinding-and-scope-dynamics",
    title: "Exception Unwinding & Scope Dynamics",
    category: "Architecture",
    author: "Runtime Internals Team",
    date: "July 17, 2026",
    readingTime: "7 min read",
    coverImage: "/blog_exception_handling.png",
    excerpt: "Behind the scenes of try/catch blocks: PUSH_HANDLER, stack frame unwinding, upvalue closing, and error recovery in the Quantum VM.",
    content: [
      {
        type: "paragraph",
        value: "Handling errors cleanly without leaking memory or corrupting local stack frames requires precision inside the runtime environment (`src/vm/`)."
      },
      {
        type: "heading",
        value: { level: 2, text: "1. The Exception Handler Stack" }
      },
      {
        type: "paragraph",
        value: "When a `try` block is entered, the compiler emits `PUSH_HANDLER` with the catch IP offset and current stack depths. When a `throw` or `RAISE` opcode triggers, the VM unwinds CallFrames, closes active upvalues, restores the value stack, and jumps to the handler:"
      },
      {
        type: "code",
        value: {
          language: "quantum",
          code: `try {
    if x == 0 { throw "division by zero" }
    print(100 / x)
} catch (e) {
    print("Caught Exception:", e)
}`
        }
      }
    ]
  },
  {
    id: "post-11",
    slug: "systems-utilities-subnet-parsers-and-algorithmic-distance",
    title: "Systems Utilities: Subnet Parsers & Algorithmic Distance",
    category: "Systems Programming",
    author: "Infrastructure Team",
    date: "July 17, 2026",
    readingTime: "6 min read",
    coverImage: "/networking_update.png",
    excerpt: "Explore low-level network utilities: cidr_hosts(), ip_in_cidr(), Levenshtein edit distance, and Luhn algorithm validation.",
    content: [
      {
        type: "paragraph",
        value: "DevOps and network infrastructure scripts need rapid calculations for CIDR ranges and string distance algorithms without heavy dependencies."
      },
      {
        type: "heading",
        value: { level: 2, text: "1. Subnet & Network Parsers" }
      },
      {
        type: "code",
        value: {
          language: "quantum",
          code: `# CIDR subnet checking and host generation
if ip_in_cidr("192.168.1.45", "192.168.1.0/24"):
    let hosts = cidr_hosts("192.168.1.0/24")
    print("Available IPs in CIDR range:", len(hosts))

# String distance & credit validation
let dist = edit_distance("quantum", "quanta") # Levenshtein
let isValidCard = luhn_check(4532718293812302)`
        }
      }
    ]
  }
];
