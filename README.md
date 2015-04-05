# Four

## Develop

## Rails

### run bundle
```
bundle
```

### create your database
```
rake db:create db:migrate
```

### run tests
```
rake test
```

### run your back end rails server
```
rails s
```

## Ember

[![js-standard-style](https://raw.githubusercontent.com/feross/standard/master/badge.png)](https://github.com/feross/standard)

Uses [ember-cli][ember-cli] and is located in the `client` folder. Be sure to
build with `--output-path ../public` to build the Ember app into the rails
`public` folder.

### build
```
ember build --output-path ../public
```

### watch
```
ember build --watch --output-path ../public
```
