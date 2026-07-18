import { BlogPost } from '../blogs';

export const guidePosts: BlogPost[] = [
  {
    id: "post-12",
    slug: "lexer-normalization-multi-syntax-parsing-engine",
    title: "Lexer Normalization: Multi-Syntax Parsing Engine",
    category: "Language Guide",
    author: "Compiler Engineering Team",
    date: "July 17, 2026",
    readingTime: "7 min read",
    coverImage: "/blog_lexer_normalization.png",
    excerpt: "How Pratt precedence climbing and Lexer tokenization allow Python style, JS arrows, and C braces to coexist seamlessly in one source file.",
    content: [
      {
        type: "paragraph",
        value: "The defining feature of Quantum is its ability to parse Pythonic indentation, JavaScript functions, and C/C++ blocks within the exact same file scope."
      },
      {
        type: "heading",
        value: { level: 2, text: "1. The Parser & Pratt Precedence Architecture" }
      },
      {
        type: "paragraph",
        value: "The parser (`src/parser/`) is modularized into `ParserCore.cpp`, `ParserStatements.cpp`, `ParserExpressions.cpp`, and `ParserLiterals.cpp`. Expression parsing utilizes Pratt precedence climbing to evaluate operators smoothly across layout styles."
      }
    ]
  },
  {
    id: "post-13",
    slug: "object-oriented-programming-and-prototype-closures",
    title: "Object-Oriented Programming & Prototype Closures",
    category: "Tutorials",
    author: "Core Engine Team",
    date: "July 18, 2026",
    readingTime: "7 min read",
    coverImage: "/blog_oop_closures.png",
    excerpt: "Classes, single inheritance, instance methods, BIND_METHOD opcodes, and lexical scope upvalues in Quantum.",
    content: [
      {
        type: "paragraph",
        value: "Quantum combines full object-oriented programming with functional closure mechanics."
      },
      {
        type: "heading",
        value: { level: 2, text: "1. Classes & Single Inheritance" }
      },
      {
        type: "code",
        value: {
          language: "quantum",
          code: `class Animal {
    fn init(name, sound) {
        self.name  = name
        self.sound = sound
    }
    fn speak() { return self.name + " says " + self.sound }
}

class Dog extends Animal {
    fn fetch(item) { return self.name + " fetches " + item }
}

let dog = Dog("Rex", "Woof")
print(dog.speak())
print(dog.fetch("ball"))`
        }
      }
    ]
  },
  {
    id: "post-14",
    slug: "crash-guarded-testing-with-signal-handlers",
    title: "Crash-Guarded Testing with Signal Handlers",
    category: "Systems Programming",
    author: "QA & Testing Infrastructure",
    date: "July 18, 2026",
    readingTime: "6 min read",
    coverImage: "/securing_edge.png",
    excerpt: "How quantum --test isolates test failures, captures POSIX signals, and uses setjmp/longjmp to keep test execution running smoothly.",
    content: [
      {
        type: "paragraph",
        value: "Automated test suites shouldn't crash entirely if a single script triggers a segmentation fault or abort signal."
      },
      {
        type: "heading",
        value: { level: 2, text: "1. Signal Isolation & setjmp/longjmp" }
      },
      {
        type: "paragraph",
        value: "The batch test runner (`quantum --test examples/` or `tests/`) runs every `.sa`, `.js`, `.py`, `.c`, or `.cpp` file in a directory. The runner is crash-guarded—a segfault (`SIGSEGV`) or abort in one file is caught via POSIX signal handlers and `setjmp`/`longjmp` so the test process continues testing the rest cleanly."
      }
    ]
  },
  {
    id: "post-15",
    slug: "benchmarking-quantum-startup-time-and-memory-footprint",
    title: "Benchmarking Quantum: Startup Time & Memory Footprint",
    category: "Performance",
    author: "Performance Lab",
    date: "July 18, 2026",
    readingTime: "8 min read",
    coverImage: "/benchmark_comparison.png",
    excerpt: "Comparative benchmarks analyzing Quantum VM startup latency, memory consumption, and instruction execution speed against Python 3 and Node.js.",
    content: [
      {
        type: "paragraph",
        value: "High-performance scripting requires low binary latency and minimal memory overhead. Here is how Quantum measures against mainstream runtimes."
      },
      {
        type: "heading",
        value: { level: 2, text: "1. Benchmark Performance Matrix" }
      },
      {
        type: "table",
        value: {
          headers: ["Metric", "Quantum VM (qrun)", "Python 3.11", "Node.js 20 (V8)"],
          rows: [
            ["Cold Startup Time", "1.2 ms", "28.5 ms", "35.0 ms"],
            ["Base RSS Memory", "4.8 MB", "18.2 MB", "34.5 MB"],
            ["Executable Output", "1.4 MB (standalone .exe)", "N/A (needs runtime)", "N/A (needs runtime)"]
          ]
        }
      }
    ]
  }
];
