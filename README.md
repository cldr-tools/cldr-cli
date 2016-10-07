# CLDR Tools CLI

command line tools for CLDR

## Getting Started

```
$ npm install -g cldr-cli

```

There are two functions for now.

```
$ cldr -h

Usage: cldr [options] [command]


  Commands:

    lang [options] [locales]  output language display names specified by [locales] or exports.locales in cldr.conf.js
    available <locales>       output available language tags specified by <locales>
    help [cmd]                display help for [cmd]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

```

```
$ cldr lang -h


  Usage: cldr-lang [options] [locales]

  output language display names specified by
  [locales] or exports.locales in cldr.conf.js

  Options:

    -h, --help           output usage information
    -o, --output <file>  output a json file


$ cldr lang zh,en

{
  zh: [
    {
      locale: "zh",
      displayName: "中文",
      original: "中文"
    },
    {
      locale: "en",
      displayName: "英文",
      original: "English"
    }
  ],
  en: [
    {
      locale: "zh",
      displayName: "Chinese",
      original: "中文"
    },
    {
      locale: "en",
      displayName: "English",
      original: "English"
    }
  ]
}
```

```
$ cldr available -h

  Usage: cldr-available [options] <locales>

  output available language tags specified by <locales> zh,en,ja,ko for example

  Options:

    -h, --help  output usage information

$ cldr available zh,en

     ✔ zh => zh-Hans
     ✔ en

     zh-Hans, en
```

