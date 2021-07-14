# Only allow the use of const enums (`only-enum`)

This rule only allows the use of const enums.

## Rule Details

Examples of **incorrect** code for this rule:

```ts
enum Foo {
  Bar,
  Baz,
}

enum Foo {
  Bar = "BAR",
  Baz = "BAZ",
}
```

Examples of **correct** code for this rule:

```ts
const enum Foo {
  Bar,
  Baz,
}

const enum Foo {
  Bar = "Bar",
  Baz = "Baz",
}

const Foo = {
  Bar: 0,
  Baz: 1,
} as const;

type Foo = "Bar" | "Baz";

const Foo = {
  Bar: "BAR",
  Baz: "BAZ",
} as const;
```
