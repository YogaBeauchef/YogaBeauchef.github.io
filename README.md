# YogaBeauchef.github.io
Web site https://YogaBeauchef.github.io

## First Time Local Installation

There are steps to reproduce in orter to run the website locally.

```
# install bundler
# notice that $HOME/.gem/ruby/*/bin must be in your PATH
which bundler && echo "bundler is installed" || sudo gem install --user-install bundler:2.0.1

git clone git@github.com:YogaBeauchef/YogaBeauchef.github.io.git
cd YogaBeauchef.github.io

# install bundles
bundle config path 'vendor/bundle' --local
bundle install
```

## Running Local Server
```
bundle exec jekyll serve
```

## Updating Gemfile.lock 
```
bundle config path 'vendor/bundle' --local
bundle lock --update
bundle install
```
